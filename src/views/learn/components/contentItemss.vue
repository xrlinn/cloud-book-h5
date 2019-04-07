<template>
    <div class="content-item">
      <div class="content-item-left">
        <img :src="options.book.img" alt="">
      </div>
      <div class="content-item-right">
        <h3>{{options.book.title}}</h3>
        <div class="unit">
          书籍{{options.title.index}}/{{options.title.total}}章节
        </div>
        <div class="progress-bar">
          <div class="left">
            <Progress :value="Number(options.title.index/options.title.total * 100).toFixed()">
              <div slot="end" class="read">
                已看{{Number(options.title.index/options.title.total * 100).toFixed()}}%
              </div>
            </Progress>
          </div>
        </div>
        <div class="last-view">
          <p>上次查看:{{options.title.title}}</p>
          <p class="date">
            7天前
          </p>
        </div>
        <div class="btns">
          <button @click="jump">继续阅读</button>
          <button @click="jump1">查看文档</button>
        </div>
      </div>

    </div>
</template>

<script>
import {Progress} from 'mint-ui'
export default {
  name: 'contentItem',
  components: {
    Progress
  },
  props: {
    options: Object
  },
  methods: {
    jump () {
      this.$router.push({
        name: 'article',
        params: {
          id: this.options.title._id
        }
      })
    },
    jump1 () {
      this.$router.push({
        name: 'details',
        params: {
          id: this.options.book._id
        }
      })
    }
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
  margin-top: 20px;
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
      .read{
        margin-left: 40px;
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
