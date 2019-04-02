<template>
    <div class="container">
        <div class="header">
            <div class="header-row1">
                <div class="header-left">
                    <img src="" alt="">
                </div>
                <div class="header-right">
                <h2 class="userName">
                    yao
                </h2>
                <div class="msg">
                    这个用户很懒，什么也没写
                </div>
                </div>
            </div>
            <div class="header-row2">
                    <div class="collection-item">
                        <div class="title">
                            3
                            <span class="little-title">本</span>
                        </div>
                        <div class="msg">
                            已读书籍
                        </div>
                    </div>
                    <div class="collection-item">
                        <div class="title">
                            0
                            <span class="little-title">本</span>
                        </div>
                        <div class="msg">
                            已收藏书籍
                        </div>
                    </div>
                    <div class="collection-item">
                        <div class="title">
                            1
                            <span class="little-title">本</span>
                        </div>
                        <div class="msg">
                            喜欢
                        </div>
                    </div>
                    <i class="col-line"></i>
                    <i class="col-line"></i>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li class="item1">
                    <div class="left">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiugaigerenxinxi"></use>
                        </svg>
                        <h3>修改个人信息</h3>                         
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youbian"></use>
                        </svg>                       
                    </div>
                </li>
                <li class="item2">
                    <div class="left">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiazhi"></use>
                        </svg>
                        <h3>收藏书单</h3>                         
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youbian"></use>
                        </svg>                       
                    </div>
                </li>
                <li class="item3">
                    <div class="left">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-aihao-"></use>
                        </svg>
                        <h3>喜欢的书</h3>                         
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youbian"></use>
                        </svg>                       
                    </div>
                </li>
            </ul>
            <div class="btn">
                <Button type="primary" size="large" @click="logout">退出登录</Button>                
            </div> 
        </div>
    </div>
</template>

<script>
import {Button} from 'mint-ui'

export default {
  name: 'person',
  components: {
      Button
  },
  methods: {
      logout () {
          this.$router.push({
              name: 'login'
          })
      }
  }
}
</script>

<style scoped lang="scss">
@import "../../globalCss/px2-rem";
    .header{

        background:#1658bc;
        // height: px-to-rem(350);
        padding: px-to-rem(18);
        box-shadow: 0 0 2px 2px #1658bc;
        .header-row1 {
            position: relative;
            display: flex;

            .header-left{
                display: flex;
                justify-content:space-between;
                align-items: center;
                img {
                    height: px-to-rem(140);
                    width: px-to-rem(140);
                    background: #fff;
                    border-radius: 50%
                }
            }
            .header-right{
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 10px;
                color: #fff;
                .msg{
                    color: #e0e0e0;
                }
            }                

            

        }
        .header-row2 {
            position: relative;
            display: flex;
            color: #fff;
            justify-content: space-between;
            margin-top: 30px;
            text-align: center;
            .collection-item {
                &:nth-child(1){
                    width: 30%;
                }
                &:nth-child(2){
                    width: 40%;
                }
                &:nth-child(3){
                    width: 30%;
                }
                .title{
                   font-size: 16px;
                   .little-title{
                       font-size: 12px;
                   } 
                }
                .msg {
                    margin-top: 4px;
                }
            }
            .col-line {
                position: absolute;
                height: 20px;
                width: 1px;
                background: #eaeaea;
                top: 50%;
                transform: translateY(-50%);

                &:nth-child(4){
                    left: 30%;
                }
                &:nth-child(5){
                    right: 30%;
                }
            }
        }
    }

    
    .footer{
        position: relative;
        top:px-to-rem(52);

        ul{
            position: relative;

            .item1 .left .icon {
                color: #0099ff;
            }
            .item2 .left .icon {
                color: #fa5a75;
            }
            .item3 .left .icon {
                color: #f7d871;
            }

            li {
            display: flex;
            justify-content: space-between;
            height: px-to-rem(135);
            border-bottom: 1px solid #eeeeee;
            line-height: px-to-rem(135);

                .left{
                    display: flex;
                    align-items: center;
                    .icon{
                        font-size: 32px;
                        text-align: center;
                    }
                    h3{
                        margin-left: 4px;
                        font-size: 12px;
                        color: #343333;
                    }               
                }
                .right {
                    .icon {
                        color: #e0e0e0;
                    }
                }
            }
        }

        .btn{
            margin-top: px-to-rem(180);
            .mint-button{
                background:#ef4f4f;
            }
        }
    }

</style>

