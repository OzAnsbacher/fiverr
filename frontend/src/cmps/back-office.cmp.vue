<template>
  <header-back-office v-if="user" :user="user" @order="loadUserOrders" />
  <data-entry />
  <div class="orders-back-office">
    <ul v-if="orders" class="ul-back-office clean-list main-layout">
      <order-back-office class="render-ul-back-office" v-for="order in getOrders" :order="order" />
    </ul>
  </div>
  <!-- <data-entry :isBuyer="isBuyer" /> -->
  <!-- <div v-if="orders" class="user-board-content main-layout">
    <main class="user-main">
      <div class="profile-details-container">
        <div class="user-details flex space-between">
          <div class="user-stats-wrapper">
            <span class="online-status online">Online</span>
            <div class="container-user-img">
              <div class="user-img flex">
                <span class="spanclass">{{
                  user.fullname.slice(0).toLocaleUpperCase()
                }}</span>
                <div class="undefined"></div>
              </div>
            </div>
            <div class="fullname">{{ user.fullname }}</div>
            <div class="stars">
              <div class="stars-svg">
                <span class="stars-details">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                </span>
                <pre class="rate-num">  (1k+)</pre>
              </div>
     
          </div>
    
          <div class="user-info-wrapper">
            <div class="user-stats">
              <div class="origin-wrapper flex column">
                <div class="place flex space-between">
                  <div>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="LocationOnIcon"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      ></path>
                    </svg>
                    From
                  </div>
                </div>
              </div>
         
          </div>
          </div>
        </div>
        <div class="orders-section flex">
          <main class="orders-content">
            <ul v-if="orders" class="clean-list order-list">
              <order-back-office v-for="order in getOrders" :order="order" />
            </ul>
          </main>
        </div>
      </div>
      </div>
    </main>
  </div>
  <img v-else class="explore-loading" src="../assets/gif/spinner.gif" alt="" />-->
  <!-- <pre>{{ orders }}</pre> -->
</template>

<script>
import dataEntry from "./data-entry.cmp.vue";
import aboutBuyer from "../cmps/about-buyer.cmp.vue";
import orderBackOffice from "../cmps/order-back-office.cmp.vue";
import headerBackOffice from "./header-back-office.cmp.vue";
export default {
  data() {
    return {
      orders:null,
      gigs: null,
      user: null,
      isBuyer: true,
    };
  },
  async created() {
    this.user = this.$store.getters.getUser;
    if (!this.user) this.$router.push("/explore");
    else await this.loadUserOrders();
  },
  computed: {
    getOrders() {
      console.log("this.orders", this.orders);

      return this.orders;
    },
  },
  methods: {
    async loadUserOrders(isBuyer = true) {
      var userId = this.user._id;
      const filterBy = {
        userId,
        isBuyer,
      };
      this.orders = await this.$store.dispatch({
        type: "getOrdersById",
        filterBy,
      });
      this.orders = this.$store.getters.getorders;
    },
  },

  components: {
    aboutBuyer,
    orderBackOffice,
    headerBackOffice,
    dataEntry,
  },
};
</script>
