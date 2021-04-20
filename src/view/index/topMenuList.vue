<template>
  <div id="topMenuList">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1" class="menu">
        <div class="layout-logo">
          <img :src="UserUrlImg.img.url" alt="" />
        </div>
        <div class="layout-nav">
          <MenuItem name="1" v-for="(i, index) in topList" :key="index">
            <Icon type="ios-navigate"></Icon>
            {{ i.name }}
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {
  name: 'topMenuList',
  components: {},
  props: {
    topList: {
      type: Array,
      return: []
    },
    UserUrlImg: {
      type: Object,
      return: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .layout-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
