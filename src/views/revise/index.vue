<template>
    <div class="container">
        <ul class="item-wrap">
            <li class="item1">
                <div class="left">
                    <h3>头像</h3>
                </div>
                <div class="right">
                    <img src="" alt="">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
            <li class="item2">
                <div class="left">
                    <h3>昵称</h3>
                </div>
                <div class="right">
                    <h3>{{phone}}</h3>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
            <li class="item3">
                <div class="left">
                    <h3>个性签名</h3>
                </div>
                <div class="right">
                    <h3>这个家伙很懒，什么也没写</h3>
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </li>
            <li class="item4">
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
export default {
  name: 'revise',
  data () {
    return {
      phone: ''
    }
  },
  created () {
    this.$axios.get(this.$api.getUserData, this.$axios.token).then(res => {
      console.log(res)
      this.phone = res.data.user.phone
    })
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
