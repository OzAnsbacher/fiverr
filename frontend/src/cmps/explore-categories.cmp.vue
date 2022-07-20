<template>
  <div>
    <ul>
      <li v-for="tag in tags" :key="tag">{{tag}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tags"],
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
