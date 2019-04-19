<template>
    <div class="container">
        <ul class="item-wrap">
            <li class="item1">
                <lin-upload class="item1-wrap" @success="changeAvatar">
                <div class="left">
                    <h3>头像</h3>
                </div>
                <div class="right">
                    <img :src="userData.avatar" alt="" class="img">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
                </lin-upload>
            </li>
            <li class="item2" @click="jump1">
                <div class="left">
                    <h3>昵称</h3>
                </div>
                <div class="right">
                    <h3>{{ userData.usernickname}}</h3>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
            <li class="item3" @click="jump2">
                <div class="left">
                    <h3>个性签名</h3>
                </div>
                <div class="right">
                    <h3>{{userData.desc}}</h3>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
            <li class="item4" @click="jump3">
                <div class="left">
                    <h3>修改密码</h3>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import linUpload from '@/components/lin-upload'
import {Toast} from 'mint-ui'
export default {
  name: 'revise',
  components: {
    linUpload
  },
  data () {
    return {
    }
  },
  methods: {
    changeAvatar (url) {
      this.$axios.put(this.$api.changeUser, {avatar: url}).then(res => {
        if (res.code === 200) {
          Toast({
            message: '头像修改成功',
            duration: 800
          })
          this.$store.dispatch('getUserData')
        }
      })
    },
    jump1 () {
      this.$router.push({
        name: 'changeNickname'
      })
    },
    jump2 () {
      this.$router.push({
        name: 'changeDesc'
      })
    },
    jump3 () {
      this.$router.push({
        name: 'changePassword'
      })
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../globalCss/px2-rem.scss';
    .container {
        position: relative;
        margin-top: px-to-rem(80);

        .item-wrap{
            position: relative;
            color: #555555;
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: px-to-rem(106);
                border-bottom: 2px solid #eeeeee;

                .right{
                    display: flex;
                    align-items: center;
                }
            }
            .item1{
                height: px-to-rem(160);
                    .item1-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: px-to-rem(160);
                        flex:1
                    }
                    img{
                        width: px-to-rem(120);
                        height: px-to-rem(120);
                        border-radius: 50%;
                        background: red;
                    }
            }
        }
    }

</style>
