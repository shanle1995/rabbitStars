<template>
  <div id="s-form">
    <Form
      :ref="formData.ref"
      :model="formData.model"
      :rules="formData.rules"
      :label-width="formData.labelWidth"
    >
      <FormItem
        v-for="(im, index) in formData.itemList"
        :label="im.label"
        :prop="im.prop"
        :key="index"
      >
        <sInput
          v-for="(value, key, index) in formData.model"
          v-if="im.prop === key"
          :key="index"
          :inputValue="im.inputValue"
          :placeholder="im.placeholder"
          @inputChange="inputChange($event, im.prop)"
        ></sInput>
      </FormItem>
      <FormItem>
        <Button
          v-for="(i, index) in formData.buttonList"
          :key="index"
          :type="i.type"
          @click="clickButton(formData.ref, i.clickType)"
        >
          {{ i.name }}
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import sInput from '../input/s-input'
export default {
  name: 's-form',
  components: {
    sInput
  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    inputChange(value, index) {
      this.$emit('aInput', value, index)
    },
    clickButton(name, type) {
      if (type !== 0) {
        this.$emit('clickButton', type)
        return
      }
      this.$refs[name].validate((valid) => {
        if (!valid) return false
        this.$emit('clickButton', type)
      })
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
/deep/ .ivu-form {
  > div:nth-last-child(1) {
    .ivu-form-item-content {
      margin-left: 0 !important;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
