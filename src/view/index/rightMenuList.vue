<template>
  <div id="rightMenuList">
    <Layout :style="{ padding: '0 24px 24px' }">
      <Breadcrumb :style="{ margin: '24px 0' }">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
      <Content
        :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
      >
        Content
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'rightMenuList',
  components: {},
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
#rightMenuList {
  width: calc(100% - 200px);
}
</style>
