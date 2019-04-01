<template>
    <div class="container">
        <div class="header">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuexi"></use>
            </svg>           
        </div>
        <div class="login">
            <div class="icon">
                <i class="iconfont icon-gerenzhongxin1"></i>
            </div>
            <xrl-field  v-model="username" class="user">
            </xrl-field>
        </div> 
    </div>
</template>

<script>
import { Field } from 'mint-ui';

export default {
  name: 'login',
  components: {
      'xrl-field':Field
  }
}
</script>

<style scoped lang="scss">
@import '../../globalCss/px2-rem.scss';

    .header{
        height: px-to-rem(260);
        .icon{
            width: 100%;
            font-size: 100px;
            text-align: center;
            margin-top: px-to-rem(58);
        }
    }

    .login {
        display: flex;
        margin-top: px-to-rem(36);
        border-bottom: 1px solid #0099ff;
        .user{
            flex:1;
        }
        .icon{
            display: flex;
            align-self: center;
            font-size: 26px;
        }


    }

</style>
