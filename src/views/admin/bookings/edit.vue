<template>
  <div>
    <section class="tables">
      <div class="row">
        <Breadcrumb :breadcrumbs="breadcrumbs" />
        <div class="col-lg-10 offset-lg-2 stretch-card">
          <b-card no-body>
            <b-tabs
              pills
              card
              horizontal
              nav-wrapper-class="w-40"
              active-nav-item-class="font-weight-bold"
            >
              <b-tab title="BOOKING DETAILS" active
                ><b-card-text>
                  <BookingDetail :propBookingObj="bookingObj" /> </b-card-text
              ></b-tab>
              <b-tab title="CUSTOMER DETAILS"
                ><b-card-text
                  ><CustomerDetail
                    :propCustomerObj="customerObj" /></b-card-text
              ></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../../components/breadcrumb";
import BookingDetail from "../../../components/bookings/edit/booking-detail";
import CustomerDetail from "../../../components/bookings/edit/customer-detail";
import { bookingService } from "../../../services";

export default {
  name: "bookingedit",
  data() {
    return {
      breadcrumbs: {
        title: "Edit Booking",
        b1: "Manage Bookings",
        b2: "Bookings",
        b3: "Index",
        link: true,
        name: "Bookings",
      },
      form: {
        pnr_no: "",
      },
      bookingObj: this.customerObject,
      customerObj: this.bookingObject,
    };
  },
  components: {
    Breadcrumb,
    BookingDetail,
    CustomerDetail,
  },
  props: {
    customerObject: Object,
    bookingObject: Object,
  },
  mounted() {
    this.getBooking();
  },
  methods: {
    async getBooking() {
      try {
        const response = await bookingService.find(this.$route.params.id);
        console.log("response", response);
        if (response.status) {
          this.bookingObj = response.data;
          this.customerObj = response.data;
        }
      } catch (e) {
        console.log("params", e);
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
