<template>
  <div id="index">
    <Layout>
      <topMenuList :topList="topList" :UserUrlImg="UserUrlImg"></topMenuList>
      <Layout>
        <leftMenuList></leftMenuList>
        <rightMenuList></rightMenuList>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import topMenuList from './topMenuList'
import leftMenuList from './leftMenuList'
import rightMenuList from './rightMenuList'
import { getTopMenuList } from '@/axios/api'

export default {
  name: 'index',
  components: {
    topMenuList,
    leftMenuList,
    rightMenuList
  },
  data() {
    return {
      topList: [],
      leftList: [],
      UserUrlImg: this.$store.getters.submitData
    }
  },
  computed: {},
  watch: {},
  methods: {
    getLeftMenu() {
      getTopMenuList().then((todo) => {
        this.topList = todo.results
      })
    },
    getLeftMenuList() {
      getTopMenuList().then((todo) => {
        this.leftList = todo.results
      })
    }
  },
  created() {},
  mounted() {
    this.getLeftMenu()
    this.getLeftMenuList()
  },
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
#index {
  height: 100%;
  .ivu-layout {
    height: 100%;
    .ivu-layout {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
