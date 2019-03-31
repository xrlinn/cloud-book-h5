<template>
    <div class="container">
        <div class="header">
            <div class="header-row1">
                <div class="header-left">
                    <img src="" alt="">
                </div>
                <div class="header-right">
                    <h2 class="userName">
                        谢润琳
                    </h2>
                    <div class="msg">
                        这家伙很懒，什么也没留下
                    </div>
                </div>
            </div>
            <div class="header-row2">
                    <div class="collection">
                            0<br>收藏
                    </div>
                    <div class="focus">
                            4<br>关注
                    </div>
            </div>
        </div> 
        <div class="footer">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'person'
}
</script>

<style scoped lang="scss">

    .header{

        background:#436EEE;
        height: 150px;
        .header-row1 {
            position: relative;
            padding: 10px 10px;
            display: flex;
            justify-content: space-around;

            .header-left img {
            height: 50px;
            width: 50px;
            background: #fff;
            border-radius: 50%
            }

            .header-right{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex:1;
            margin-left: 10px;
            color: #fff;
            }
        }
        .header-row2 {
            display: flex;
            color: #fff;
            justify-content: space-around;
            margin-top: 28px;


        }


    }

</style>
