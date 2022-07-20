import { gigService } from "../../services/gig-service";

export default {
  state: {
    gigs: null,
  },
  getters: {
    gigsToShow({ gigs }) {
      return gigs;
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
  },
  actions: {
    loadGigs({ commit, state }) {
      gigService.query('gigs').then((gigs) => {
        commit({ type: "setGigs", gigs });
      });
    },
  },
};
