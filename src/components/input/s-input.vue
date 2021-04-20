<template>
  <div id="s-input">
    <Input
      :value="inputValue"
      :type="inputType"
      :placeholder="inputPlaceholder"
      @on-change="inputChange"
    />
  </div>
</template>

<script>
export default {
  name: 's-input',
  components: {},
  props: {
    inputValue: {
      //数据
      type: String,
      default() {
        return ''
      }
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: {
      //数据
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    inputChange(event) {
      this.$emit('inputChange', event.target.value)
    }
  },
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
</style>
