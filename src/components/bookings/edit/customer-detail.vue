<template>
  <div>
    <b-form @submit.prevent="updateBooking">
      <b-form-group
        label="Customer Name"
        label-for="pnr-no-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="customer-name-input"
          v-model.trim="propCustomerObj.customer_name"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Customer email"
        label-for="customer-email-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="customer-email-input"
          type="email"
          v-model.trim="propCustomerObj.customer_email"
          placeholder="Enter pnr number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Customer phone"
        label-for="customer-phone-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="customer-phone-input"
          type="email"
          v-model.trim="propCustomerObj.customer_phone"
          placeholder="Enter pnr number"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "customer-detail",
  props: {
    propCustomerObj: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
