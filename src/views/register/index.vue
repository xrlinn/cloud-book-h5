<template>
    <div class="container">
        <div class="header">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuexi"></use>
            </svg>
        </div>
        <div class="inputs">
            <div class="login">
                <div class="icon-wrap">
                    <i class="iconfont icon-shouji"></i>
                </div>
                <xrl-field  type="tel" v-model="formData.phone" class="input" placeholder="请输入手机号">
                </xrl-field>
            </div>
            <div class="login">
                <div class="icon-wrap" @click="toggleIcon" >
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yincang"></use>
                    </svg>
                </div>
                <xrl-field  :type="isHide?'password':'text'" v-model="formData.password" class="input" placeholder="请输入密码">
                </xrl-field>
            </div>
            <div class="login">
                <div class="icon-wrap">
                    <i class="iconfont icon-duanxinyanzheng"></i>
                </div>
                <xrl-field  type="number" v-model="formData.code" class="input" placeholder="请输入6位验证码"  :attr="{ oninput: 'if(value.length>6)value=value.slice(0,6)' }">
                    <button class="btn1" @click="handleSendCode" :disabled="disabled&&!isCanSendCode">{{btnText}}</button>
                </xrl-field>
            </div>
            <div class="btn">
                <Button type="primary" size="large" @click="handleRegister">立即注册</Button>
            </div>
        </div>
    </div>
</template>

<script>
import {Button, Toast, Field} from 'mint-ui'
import validator from 'validator'
export default {
  name: 'login',
  components: {
    'xrl-field': Field,
    Button
  },
  data () {
    return {
      formData: {
        phone: '',
        password: '',
        code: ''
      },
      isHide: true,
      btnText: '获取验证码',
      disabled: false,
      isCanSendCode: true,
      isSendCode: false,
      num: 60
    }
  },
  methods: {
    handleRegister () {
      this.$axios.post(this.$api.register, this.formData).then(res => {
        if (res.code === 200) {
          this.$router.push({
            name: 'login'
          })
          Toast({
            message: res.msg,
            duration: 1000
          })
        }
      })
    },
    handleSendCode () {
      this.isSendCode = true
      if (!this.disabled) {
        this.disabled = true
        this.$axios.post(this.$api.sendCode, {
          phone: this.formData.phone
        }).then(res => {
          if (res.code === 200) {
            console.log(res)
            Toast({
              message: res.msg
            })
          } else {
            Toast({
              message: res.msg
            })
          }
        })
        let timer = setInterval(() => {
          this.num--
          this.btnText = `再次获取(${this.num})s`
          if (this.num === 0) {
            clearInterval(timer)
            this.num = 60
            this.btnText = '获取验证码'
            this.disabled = false
          }
        }, 1000)
      }
    },
    toggleIcon () {
      this.isHide = !this.isHide
      const a = document.querySelector('.icon-wrap .icon use').href
      a.baseVal = a.baseVal === '#icon-yincang' ? '#icon-mimakejian' : '#icon-yincang'
    }
  },
  watch: {
    formData: {
      deep: true,
      handler (newVal, oldVal) {
        if (validator.isMobilePhone(newVal.phone, 'zh-CN')) {
          this.disabled = false
          this.isCanSendCode = true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../globalCss/px2-rem.scss';

    .header{
        height: px-to-rem(260);
        .icon{
            width: 100%;
            font-size: 80px;
            text-align: center;
            margin-top: px-to-rem(98);
        }
    }

    .inputs {
        margin-top: px-to-rem(36);

        .login {
        display: flex;
        border-bottom: 1px solid #0099ff;
            .input{
                flex:1;
            }
            .icon-wrap{
                position: relative;
                top: 10px;
                display: flex;
                width: 26px;
                height: 28px;

                .iconfont, .icon{
                    font-size: 24px;
                    color: #333333;
                }
            }
        }
        .btn{
            margin-top: px-to-rem(82);
        }
    }

    .input .btn1{
        padding: 10px;
        border:  none;
        background: #f9fafb;
        color: #a2a5ae;
    }
</style>
