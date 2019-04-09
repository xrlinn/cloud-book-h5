<template>
    <div class="content-item">
      <div class="content-item-left">
        <img :src="options.book.img" alt="">
      </div>
      <div class="content-item-right">
        <h3>{{options.book.title}}</h3>
        <div class="unit">
          书籍{{options.title.index + 1}}/{{options.title.total}}章节
        </div>
        <div class="progress-bar">
          <div class="left">
            <dy-progress :value="options.title.index + 1" :total="options.title.total"/>
          </div>
          <div class="read">
            已看{{readPercent}}%
          </div>
        </div>
        <div class="last-view-wrap">
          <div class="last-view">上次查看:{{options.title.title}}</div>
          <div class="date">
            <beforeTime :value="options.updatedTime"/>
          </div>
        </div>
        <div class="btns">
          <Button @click="jump" size="small">继续阅读</Button>
          <Button @click="jump1" size="small">查看文档</Button>
        </div>
      </div>

    </div>
</template>

<script>
import {Button} from 'mint-ui'
import dyProgress from '@/components/dy-progress'
import beforeTime from '@/components/before-time'
export default {
  name: 'contentItem',
  components: {
    Button,
    dyProgress,
    beforeTime
  },
  data () {
    return {
    }
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
  computed: {
    readPercent () {
      return Number((this.options.title.index + 1) / this.options.title.total * 100).toFixed()
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
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left{
        flex: 0.9;
      }
    }

    .last-view-wrap{
      display:flex;
      justify-content: space-between;
      flex: 0.5;
      align-items: center;
      font-size: 10px;
      .last-view {
        width: 200px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:1
      }
    }

    .btns{
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
