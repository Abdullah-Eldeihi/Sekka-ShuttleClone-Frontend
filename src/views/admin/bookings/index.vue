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

            <template slot="date_time" slot-scope="props">
              <span v-if="props.column.name == 'date_time'">
                <div v-html="props.row.date_time"></div>
              </span>
            </template>

            <template slot="customer" slot-scope="props">
              <span v-if="props.column.name == 'customer'">
                <div v-html="props.row.customer"></div>
              </span>
            </template>

            <template slot="stopping_points" slot-scope="props">
              <span v-if="props.column.name == 'stopping_points'">
                <div v-html="props.row.stopping_points"></div>
              </span>
            </template>

            <template slot="payment_method" slot-scope="props">
              <span v-if="props.column.name == 'payment_method'">
                <b-badge
                  variant="success"
                  v-if="props.row.payment_method == 'wallet'"
                  ><span v-html="props.row.payment_method"></span
                ></b-badge>
                <b-badge
                  variant="info"
                  v-if="props.row.payment_method == 'free'"
                  ><span v-html="props.row.payment_method"></span
                ></b-badge>
                <b-badge
                  variant="warning"
                  v-if="props.row.payment_method == 'upi'"
                  >razorpay : <span v-html="props.row.payment_method"></span
                ></b-badge>
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
                    :href="'#/' + user.role + '/booking/' + props.row.ids"
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
              <h5 class="text-center">
                Booking - {{ bookingStatus.toUpperCase() }}
              </h5>
            </template>
          </vue-bootstrap4-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { bookingService } from "../../../services";
import Breadcrumb from "../../../components/breadcrumb";
import VueBootstrap4Table from "vue-bootstrap4-table";
import downloadExcel from "vue-json-excel";
import moment from "moment-timezone";

export default {
  name: "bookings",
  data() {
    return {
      title: "",
      breadcrumbs: {
        title: "Booking Lists",
        b1: "Manage Bookings",
        b2: "Bookings",
        b3: "Index",
        link: false,
        name: "Booking lists",
      },
      bookingStatus: "",
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
          label: "PNR",
          name: "pnr_no",
          sort: true,
        },
        {
          label: "customer",
          name: "customer",
          sort: true,
          html: true,
        },

        {
          label: "Date / Time",
          name: "date_time",
          sort: true,
        },
        {
          label: "Stop / Route",
          name: "stopping_points",
          sort: true,
        },
        {
          label: "Method",
          name: "payment_method",
          sort: true,
        },
        {
          label: "PaymentCreated",
          name: "payment_created",
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
        card_title: "Vue Bootsrap 4 advanced table",
        card_mode: true,
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
      return bookingService.tranform(this.rows);
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
      this.bookingStatus = val;
      this.loadItems();
    },
  },
  mounted() {
    this.bookingStatus = this.$route.params.travel_status;
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
      this.queryParams.filters = this.$route.params.travel_status.toUpperCase(); // travel_status completed/searching,assigned/started
      bookingService.getAll(this.queryParams).then((response) => {
        this.total_rows = response.data.totalRecords;
        this.rows = response.data.bookings;
        this.showLoader = false;
      });
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
