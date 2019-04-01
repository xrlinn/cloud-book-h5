<template>
    <div class="container">
        <div class="header">
            <div class="header-row1">
                <router-link class="jump" to="login">
                    <div class="header-left">
                    <h2 class="userName">
                        立即登录
                    </h2>
                    <div class="msg">
                        时光回头，当下最重要
                    </div>
                    </div>
                </router-link>

                <div class="header-right">
                    <img src="" alt="">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-youbian"></use>
                    </svg>
                </div>
            </div>
            <div class="header-row2">
                    <div class="readed">
                            <font size="4px">24</font>本<br>已读书籍
                    </div>
                    <div class="collected">
                            <font size="4px">22</font>本<br>已收藏书籍
                    </div>
                    <div class="like">
                            <font size="4px">10</font>本<br >喜欢
                    </div>
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
        </div>
    </div>
</template>

<script>
export default {
  name: 'person'
}
</script>

<style scoped lang="scss">
@import "../../globalCss/px2-rem";
    .header{

        background:#186fc8;
        height: px-to-rem(350);
        .header-row1 {
            position: relative;
            padding: 10px 10px;
            display: flex;
            justify-content: space-between;

            .header-right{
                position: relative;
                top:px-to-rem(18);
                right:px-to-rem(60);
                display: flex;
                img {
                    height: px-to-rem(140);
                    width: px-to-rem(140);
                    background: #fff;
                    border-radius: 50%
                }
                .icon {
                    position: absolute;
                    top: px-to-rem(48);
                    left: px-to-rem(160);
                    font-weight: 600;
                    font-size: 24px;
                    color: #fff;
                }
            }
            .jump {
               display: flex;
            .header-left{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin-left: 10px;
                margin-top: px-to-rem(40);
                color: #fff;
                .msg{
                    color: #e0e0e0;
                }
            }                

            }

        }
        .header-row2 {
           
            display: flex;
            color: #fff;
            justify-content: space-around;
            margin-top: 28px;
            text-align: center;
            div {
                flex: 1;
                position: relative;
            }
            .readed:after{
                content: '';
                position: absolute;
                left: auto;
                top: auto;
                bottom: 10px;
                right: 0;
                width: 1px;
                height: 48%;
                background-color: #fff;
                box-sizing: border-box
            }
            .collected:after{
                content: '';
                position: absolute;
                left: auto;
                top: auto;
                bottom: 10px;
                right: 0;
                width: 1px;
                height: 48%;
                background-color: #fff;
                box-sizing: border-box
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
    }

</style>
