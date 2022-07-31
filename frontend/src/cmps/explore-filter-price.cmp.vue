    
   <template>
  <section class="budget-filter-container">
    <el-select class="ex-price ex-btn" @select="filterPrice" placeholder="Budget"
      :class="{ 'full-filter': min > 0 || max > 0 }">
      <el-option hidden></el-option>
      <section class="budget-filter-container">
        <div class="inps-min-max">
          <div class="input-min">
            <h5>MIN.</h5>
            <el-input v-model="min" @change="filterPrice" class="flex w-50 m-2" placeholder="Any"
              :prefix-icon="Search" />
          </div>
          <div class="input-max">
            <h5>MAX.</h5>
            <el-input class="flex w-50 m-2" placeholder="Any" v-model="max" @change="filterPrice" :prefix-icon="Search"
              width="40px" />
          </div>
        </div>
        <el-button type="success">Apply</el-button>
      </section>
    </el-select>
  </section>
</template>
 
   <script>
export default {
  data() {
    return {
      min: null,
      max: null,
    };
  },
  created() { },
  methods: {
    filterPrice() {
      const filter = {
        min: this.min,
        max: this.max,
      };
      this.$emit("price", filter);
    },
  },
  computed: {},
  unmounted() { },
};
</script> 
    
  <style  >
.budget-filter-container {
  display: flex;
  flex-direction: column;
}
.inps-min-max {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default {
  height: 160px
}
.el-select-dropdown__wrap.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default {
  overflow-y: hidden;
}
</style>  
    
  