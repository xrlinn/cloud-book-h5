<template>
    <div class="content-item">
      <div class="content-item-left">
        <img src="" alt="">
      </div>
      <div class="content-item-right">
        <h3>ECMA入门</h3>
        <div class="unit">
          书籍8/27章节
        </div>
        <div class="progress-bar">
          <div class="left">
            <div class="row-line"></div>
            <div class="row-line1"></div>
          </div>
          <div class="right">
            已看67%
          </div>
        </div>
        <div class="last-view">
          <p>上次查看:红黑树</p>
          <p class="date">
            7天前
          </p>
        </div>
        <div class="btns">
          <button>继续阅读</button>
          <button>查看文档</button>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'contentItem',
  props: {
    options: Object
  },
  created () {
    console.log(this.options)
  }
}
</script>

<style scoped lang="scss">
@import "../../../globalCss/px2-rem.scss";

.content-item{
  display: flex;
  .content-item-left{
    img{
      width: px-to-rem(200);
      height: px-to-rem(266);
      background: skyblue;
    }
  }
  .content-item-right {
    display: flex;
    margin-left: 18px;
    flex-direction: column;
    justify-content: space-around;
    flex:1;
    color: #555;
    .progress-bar{
      display: flex;
      justify-content: space-between;
      .left{
        position: relative;
        display: flex;
        align-items: center;
        .row-line{
        height: 2px;
        width: 100px;
        background: green;
        z-index: 1;
        }
        .row-line1{
        position: absolute;
        height: 2px;
        width: 150px;
        background:#e0e0e0;
        }
      }
      .right{
        font-size: 10px;
      }
    }

    .last-view{
      display:flex;
      justify-content: space-between;
      flex: 0.5;
      align-items: center;
      font-size: 10px;
    }

    .btns{
      display: flex;
      justify-content: space-around;
    }
  }
}




</style>
