<template>
  <div>
    <section class="tables">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumb :breadcrumbs="breadcrumbs" />
        </div>
        <div class="col-lg-12 stretch-card">
          <vue-bootstrap4-table
            :rows="rows"
            :columns="columns"
            :config="config"
            @refresh-data="onRefreshData"
            @on-change-query="onChangeQuery"
            :total-rows="total_rows"
            :classes="classes"
            :show-loader="showLoader"
          >
            <template slot="global-search-clear-icon">
              <i class="mdi mdi-account-search"></i>
            </template>

            <template slot="customer_name" slot-scope="props">
              <p>{{ props.row.customer_name }}</p>
              <small>{{ props.row.customer_phone }}</small>
            </template>
            <template slot="payment_status" slot-scope="props">
              <span v-if="props.column.name == 'payment_status'">
                <b-badge
                  variant="success"
                  v-if="props.row.payment_status == 'Completed'"
                  >Completed</b-badge
                >
                <b-badge
                  variant="warning"
                  v-else-if="props.row.payment_status == 'Processing'"
                  >Processing</b-badge
                >
                <b-badge
                  variant="info"
                  v-else-if="props.row.payment_status == 'Pending'"
                  >Pending</b-badge
                >
                <b-badge
                  variant="danger"
                  v-else-if="props.row.payment_status == 'Failed'"
                  >Failed</b-badge
                >
              </span>
            </template>

            <template slot="action" slot-scope="props">
              <span v-if="props.column.name == 'action'">
                <b-dropdown
                  id="dropdown-left"
                  text="Actions"
                  variant="outline-info"
                  class="m-2"
                >
                  <b-dropdown-item
                    :href="'#/' + user.role + '/payment/' + props.row.ids"
                    ><span class="text-primary">
                      <i class="mdi mdi-pencil"></i> Edit
                    </span></b-dropdown-item
                  >
                  <!-- <b-dropdown-item
                    v-if="user.role == 'admin'"
                    @click.stop="deleteRow(props.row.ids, props.row.firstname)"
                    ><span class="text-danger">
                      <i class="mdi mdi-delete"></i> Delete
                    </span></b-dropdown-item
                  > -->
                </b-dropdown>
              </span>
            </template>

            <template slot="paginataion-previous-button"> Previous </template>
            <template slot="paginataion-next-button"> Next </template>
            <template slot="card-header">
              <download-excel
                class="btn btn-success"
                :data="excelDownload"
                :name="excelName"
              >
                Excel <i class="mdi mdi-file-excel-box"></i>
              </download-excel>
            </template>
          </vue-bootstrap4-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { paymentService } from "../../../services";
import Breadcrumb from "../../../components/breadcrumb";
import VueBootstrap4Table from "vue-bootstrap4-table";
import downloadExcel from "vue-json-excel";
import moment from "moment-timezone";

export default {
  name: "payments",
  data() {
    return {
      title: "",
      breadcrumbs: {
        title: "Payment Lists",
        b1: "Manage Payments",
        b2: "Payments",
        b3: "Index",
        link: false,
        name: "Payment lists",
      },
      columns: [
        {
          label: "id",
          name: "id",
          // filter: {
          //   type: "simple",
          //   placeholder: "Enter id",
          // },
          sort: true,
          uniqueId: true, // like this
        },
        {
          label: "Customer",
          name: "customer_name",
          sort: true,
        },
        {
          label: "PNR",
          name: "booking_pnr",
          sort: true,
        },
        {
          label: "Amount",
          name: "amount",
          sort: true,
        },
        {
          label: "Refund",
          name: "refund_amount",
          sort: true,
        },
        {
          label: "OrderId",
          name: "orderId",
          sort: true,
        },
        {
          label: "CreatedAt",
          name: "createdAt",
          sort: true,
        },
        { label: "Action", name: "action", sort: false },
      ],
      rows: [],
      config: {
        server_mode: true, // by default false
        loaderText: "Updating...", // by default 'Loading...'
        pagination: true,
        global_search: {
          placeholder: "Enter search offers",
          visibility: true,
          case_sensitive: false,
          showClearButton: false,
          searchOnPressEnter: false,
          searchDebounceRate: 1000,
        },
        per_page_options: [10, 20, 30, 50, 100],
        //highlight_row_hover_color: "grey",
        // card_title: "Vue Bootsrap 4 advanced table",
        // card_mode: false,
      },
      dropdowns: [],
      classes: {
        table: "table-bordered table-striped",
      },
      queryParams: {
        sort: [],
        filters: "", //"SEARCHING",
        global_search: "",
        per_page: 10,
        page: 1,
      },
      total_rows: 0,
      form: {
        id: "",
        name: "",
        slug: "",
        createdAt: "",
      },
      showLoader: false,
    };
  },
  components: {
    VueBootstrap4Table,
    Breadcrumb,
    downloadExcel,
  },
  computed: {
    excelDownload() {
      return paymentService.tranform(this.rows);
    },
    excelName() {
      return this.breadcrumbs.title + "_" + moment().local().unix();
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  watch: {
    "$route.params.travel_status"(val) {
      // call the method which loads your initial state
      console.log("val ", val);
      this.loadItems();
    },
  },
  mounted() {
    console.log("asdasd ", this.$route.params.travel_status);
    this.loadItems();
  },
  methods: {
    onRefreshData() {
      this.showLoader = true;
      this.loadItems();
    },
    onChangeQuery(queryParams) {
      this.queryParams = queryParams;
      this.showLoader = true;
      this.loadItems();
    },
    loadItems() {
      this.queryParams.filters = this.capitalizeFirstLetter(this.$route.params.travel_status); // travel_status completed/searching,assigned/started
      paymentService.getAll(this.queryParams).then((response) => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.payments;
        this.showLoader = false;
      });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    enableDropdowns() {
      this.$el
        .querySelectorAll('[data-toggle="dropdown"]')
        .forEach(($dropdownToggle) => {
          const $dropdown = $dropdownToggle.nextElementSibling;
          let isShown = false;

          function setIsShown(state) {
            isShown = state;
            $dropdown.classList.toggle("show", isShown);
          }

          if (!this.dropdowns.includes($dropdown)) {
            this.dropdowns.push($dropdown);

            $dropdownToggle.addEventListener("click", (event) => {
              event.preventDefault();
              setIsShown(!isShown);
            });

            $dropdown.addEventListener("click", (event) => {
              event.preventDefault();
              setIsShown(false);
            });

            $dropdown.clickOutsideEvent = (event) => {
              const isDropdownOrChildren =
                $dropdown === event.target || $dropdown.contains(event.target);
              const isDropdownToggleOrChildren =
                $dropdownToggle === event.target ||
                $dropdownToggle.contains(event.target);

              if (!isDropdownOrChildren && !isDropdownToggleOrChildren) {
                setIsShown(false);
              }
            };
            document.addEventListener("click", $dropdown.clickOutsideEvent);
          }
        });
    },
  },
  updated() {
    this.enableDropdowns();
  },
  destroyed() {
    this.dropdowns.forEach(($dropdown) => {
      document.removeEventListener("click", $dropdown.clickOutsideEvent);
    });
  },
};
</script>

<style lang="scss" scoped></style>
