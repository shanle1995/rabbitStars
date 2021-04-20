<template>
  <div id="Login">
    <div class="bgColor">
      <Card>
        <p slot="title" class="cTitle">管理员登录</p>
        <sForm
          class="sForm"
          :formData="formData"
          @aInput="aInput"
          @clickButton="clickButton"
        ></sForm>
      </Card>
    </div>
  </div>
</template>

<script>
import sForm from '@/components/form/s-form'
export default {
  name: 'Login',
  components: {
    sForm
  },
  data() {
    return {
      formData: {
        ref: 'loginRef',
        model: {
          user: 'shanle',
          password: '123456'
        },
        itemList: [
          {
            label: '账号',
            prop: 'user',
            placeholder: '请输入账号',
            inputValue: 'shanle'
          },
          {
            label: '密码',
            prop: 'password',
            placeholder: '请输入密码',
            inputValue: '123456'
          }
        ],
        rules: {
          user: [
            {
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        },
        labelWidth: 80,
        buttonList: [
          {
            name: '忘记密码',
            type: 'warning',
            clickType: 1
          },
          {
            name: '登录',
            type: 'primary',
            clickType: 0
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    aInput(val, key) {
      let obj = this.formData.model
      for (let ob in obj) {
        if (ob === key) {
          obj[key] = val
        }
      }
    },
    clickButton(index) {
      switch (index) {
        case 0:
          this.login()
          break
        case 1:
          this.forgetPassword()
          break
        default:
          break
      }
    },
    login() {
      this.AV.User.logIn(
        this.formData.model.user,
        this.formData.model.password
      ).then(
        (res) => {
          this.$store.commit('submitData', res)
          this.$Message.success('登录成功,欢迎您!')
          this.$router.push({
            name: 'index'
          })
        },
        (error) => {
          this.$Message.error('登录失败,请检查账号密码是否正确!')
          console.log(error)
        }
      )
    },
    forgetPassword() {
      this.$Message.warning('我还没做!')
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
#Login {
  width: 100%;
  height: 100%;
  .bgColor {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(../../assets/images/bg.jpg) no-repeat;
    background-size: cover;
    > div {
      width: 400px;
      background: $loginColor;
      box-shadow: 0px 0px 4px $loginBgColor;
      /deep/ .sForm {
        > .ivu-form {
          > div {
            label {
              color: $loginFontColor;
            }
          }
        }
      }
    }
    .cTitle {
      color: $loginFontColor;
    }
  }
}
</style>
