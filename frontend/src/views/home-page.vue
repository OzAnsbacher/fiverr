<template>
  <main>

    <h1>Home page</h1>
  
  </main>
</template>

<script>
import { gigService } from "../services/gig-service";
export default {

data() {
return {};
},
  components: {
      // sixerrHeader,
    },
created() {
     this.get();
},
methods: {
    async get() {
      const res = await gigService.query();
      console.log("res", res);
    },
},
computed: {},
unmounted() {},
};
</script>

