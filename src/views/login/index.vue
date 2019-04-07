<template>
    <div class="container">
        <div class="header">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuexi"></use>
            </svg>
        </div>
        <div class="inputs">
            <div class="login">
                <div class="icon">
                    <i class="iconfont icon-gerenzhongxin1"></i>
                </div>
                <xrl-field  v-model="formData.phone" class="input">
                </xrl-field>
            </div>
            <div class="login">
                <div class="icon">
                    <i class="iconfont icon-yanjing"></i>
                </div>
                <xrl-field  type="password" v-model="formData.password" class="input">
                </xrl-field>
            </div>
            <div class="register">
                <router-link to="register" class="jump">
                    没有账号？立即注册
                </router-link>
            </div>
            <div class="btn">
                <Button type="primary" size="large" @click="login">立即登录</Button>
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
        password: ''
      }
    }
  },
  methods: {
    login () {
      let phoneStatus = validator.isMobilePhone(this.formData.phone, 'zh-CN')
      let passwordStatus = validator.isLength(this.formData.password,{
        min: 6
      })
      if (phoneStatus && passwordStatus) {
        this.$axios.post(this.$api.login, this.formData).then(res => {
        console.log(res)
        if (res.code === 200) {
          localStorage.setItem('token', res.token)
          Toast({
            message: '登陆成功',
          })
          setTimeout(() => {
            this.$router.push({
              name: 'person'
            })
          }, 800)
        }
      })
      } else {
        Toast({
          message: '不是合法的手机号码或密码长度不够6位'
        })
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

            .icon{
                position: relative;
                top: 10px;
                display: flex;
                width: 8%;
                height: 100%;

                .iconfont{
                    font-size: 24px;
                }
            }
        }

        .register {
            margin-top: px-to-rem(40);

            .jump{
                margin-left: px-to-rem(400);
                text-align: right;
                padding: 4px 0;
                color: #0099ff;
                font-size: 16px;
            }
        }

        .btn{
            margin-top: px-to-rem(82);
        }
    }
</style>
