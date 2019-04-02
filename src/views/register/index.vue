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
                    <i class="iconfont icon-shouji"></i>
                </div>
                <xrl-field  type="tel" v-model="phone" class="input">
                </xrl-field>
            </div> 
            <div class="login">
                <div class="icon">
                    <i class="iconfont icon-mimakejian"></i>
                </div>
                <xrl-field  type="password" v-model="password" class="input">
                </xrl-field>
            </div>
            <div class="login">
                <div class="icon">
                    <i class="iconfont icon-duanxinyanzheng"></i>
                </div>
                <xrl-field  type="number" v-model="number" class="input">
                    <button class="btn1" @click="handleSendCode">获取验证码</button>
                </xrl-field>
            </div>
            <div class="btn">
                <Button type="primary" size="large" @click="handleRegister">立即注册</Button>                
            </div> 
        </div>
    </div>
</template>

<script>
import { Field } from 'mint-ui'
import {Button} from 'mint-ui'
import validator from 'validator'
export default {
  name: 'login',
  components: {
      'xrl-field':Field,
      Button
  },
  data () {
      return {
          formData: {
              phone: '',
              password: '',
              number: ''
          }
      }
  },
  methods: {
      handleRegister () {
            this.$axios.post(this.$api.register,this.formData).then(res => {

            })
      },
      handleSendCode () {
          
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

