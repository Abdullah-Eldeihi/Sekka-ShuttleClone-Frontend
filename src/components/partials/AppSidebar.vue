<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
            <div class="profile-image">
              <img
                class="img-xs rounded-circle"
                :src="user.picture"
                alt="profile image"
              />
              <div class="dot-indicator bg-success"></div>
            </div>
            <div class="text-wrapper">
              <div class="profile-name">{{ user.firstname }}</div>
              <div class="designation">{{ user.lastname }}</div>
            </div>
          </a>
        </li>
        <li class="nav-item nav-category">Main Menu</li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/' + this.$store.state.auth.role + '/dashboard' }"
          >
            <i class="menu-icon typcn typcn-home-outline typcn-3x"></i>
            <span class="menu-title">Dashboard</span></router-link
          >
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/locations">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">Manage Locations</span></router-link
          >
        </li> -->
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'ui-basic'">
            <i class="menu-icon typcn typcn-coffee"></i>
            <span class="menu-title">Manage Vehicles</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/buses',
                  }"
                  >All Buses</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/staff/buses',
                  }"
                  >All Buses</router-link
                >
              </li> -->

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/bus/create',
                  }"
                  >Create Bus</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/buslayouts',
                  }"
                  >All Bus Layout</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/buslayout/create',
                  }"
                  >Add Bus Layout
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/bustypes',
                  }"
                  >All Bus Type</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/bustype/create',
                  }"
                  >Add Bus Type
                </router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'manage-driver-dropdown'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title"> Manage Drivers </span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse id="manage-driver-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/' + this.$store.state.auth.role + '/drivers' }"
                  >All Drivers</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/driver/create',
                  }"
                  >Create Driver</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-routes'">
            <i class="menu-icon typcn typcn-location-arrow-outline"></i>
            <span class="menu-title">Fixed routes</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-routes">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/locations',
                  }"
                  >All stops</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/location/create',
                  }"
                  >Create stops</router-link
                >
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/' + this.$store.state.auth.role + '/routes' }"
                  >All Routes</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/route/create',
                  }"
                  >Create Route</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/timetables',
                  }"
                  >All Timetables</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/timetable/create',
                  }"
                  >Create Timetable</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li v-if="user.role == 'admin'" class="nav-item nav-category">
          Administrations Settings
        </li>
        <li v-if="user.role == 'admin'" class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-customers'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Customers</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-customers">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ path: '/admin/customers' }"
                  >All Customers</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ path: '/admin/referrals' }"
                  >Referrals</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/admin/customers/wallet-recharge' }"
                  >Wallet Recharge</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ path: '/admin/suggests' }"
                  >Suggestions</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-agents'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Agents</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-agents">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/' + this.$store.state.auth.role + '/agents' }"
                  >All Agents</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/agent/create',
                  }"
                  >Create Agent</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-offers'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Offers</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-offers">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/' + this.$store.state.auth.role + '/offers' }"
                  >All Offers</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/offer/create',
                  }"
                  >Create Offer</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-passes'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Passes</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-passes">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/' + this.$store.state.auth.role + '/passes' }"
                  >All Passes</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/pass/create',
                  }"
                  >Create pass</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/agents">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">All Agents</span>
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{
              path: '/' + this.$store.state.auth.role + '/help-and-support',
            }"
          >
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title"> Help & Support</span>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{
              path: '/' + this.$store.state.auth.role + '/bookings',
            }"
          >
            <i class="menu-icon typcn typcn-clipboard"></i>
            <span class="menu-title">Manage Bookings</span>
          </router-link>
        </li> -->

        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'trips'">
            <i class="menu-icon typcn typcn-user-outline"></i>
            <span class="menu-title">Manage Trips</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="trips">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' +
                      this.$store.state.auth.role +
                      '/trips/assign/create',
                    // name: 'tripassigncreate',
                  }"
                  >Create</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/trips/assign/list',
                    //   name: 'tripassignlist',
                  }"
                  >List</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'bookings'">
            <i class="menu-icon typcn typcn-user-outline"></i>
            <span class="menu-title">Manage Bookings</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="bookings">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/bookings/scheduled',
                    // name: 'booking',
                    // params: { travel_status: 'scheduled' },
                  }"
                  >Scheduled</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/bookings/onboarded',
                    // name: 'booking',
                    // params: { travel_status: 'onboarded' },
                  }"
                  >Onboarded</router-link
                >
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/bookings/completed',
                    // name: 'booking',
                    // params: { travel_status: 'completed' },
                  }"
                  >Completed</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/bookings/cancelled',
                    // name: 'booking',
                    // params: { travel_status: 'cancelled' },
                  }"
                  >Cancelled</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/bookings/expired',
                    // name: 'booking',
                    // params: { travel_status: 'expired' },
                  }"
                  >Expired</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'payments'">
            <i class="menu-icon typcn typcn-user-outline"></i>
            <span class="menu-title">Manage Payments</span>
            <i class="menu-arrow"></i>
          </a>

          <b-collapse id="payments">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path:
                      '/' + this.$store.state.auth.role + '/payments/refunded',
                    // name: 'payment',
                    // params: { travel_status: 'refunded' },
                  }"
                  >Refunded</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <!-- <li class="nav-item">
          <a class="nav-link" v-b-toggle="'icons'">
            <i class="menu-icon typcn typcn-user-outline"></i>
            <span class="menu-title">Icons</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="icons">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/mdiIcons/">MDI</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'auth'">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/pages/login/"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pages/register/"
                  >Register</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li> -->

        <li v-if="user.role === 'admin'" class="nav-item nav-category">
          Admin Menu
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-notifications'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Notifications</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-notifications">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'notification-list' }"
                  >Lists</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/admin/notifications/create',
                  }"
                  >Create</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
        <li v-if="user.role === 'admin'" class="nav-item">
          <a class="nav-link" v-b-toggle="'manage-users'">
            <i class="menu-icon typcn typcn-group-outline"></i>
            <span class="menu-title">Manage Users</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="manage-users">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ path: '/admin/users' }"
                  >Manage Users</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/admin/user/create',
                  }"
                  >Create User</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>

        <li v-if="user.role === 'admin'" class="nav-item">
          <a class="nav-link" v-b-toggle="'auth'">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">Role and Permission</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/' + this.$store.state.auth.role + '/roles',
                  }"
                  >Manage Role</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="#">Assign Role</router-link>
              </li> -->
            </ul>
          </b-collapse>
        </li>

        <li v-if="user.role == 'admin'" class="nav-item">
          <router-link
            class="nav-link"
            :to="{
              path: '/' + this.$store.state.auth.role + '/application-settings',
            }"
          >
            <i class="menu-icon typcn typcn-cog-outline"></i>
            <span class="menu-title">Application Settings</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">

import JQuery from 'jquery'
// eslint-disable-next-line
let $ = JQuery
export default {
  name: 'the-ferri-sidebar',
  computed:{
        user () {
            return this.$store.state.auth.user;
        },
  },
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
}
</style>
