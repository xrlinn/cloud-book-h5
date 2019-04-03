<template>
    <div class="container">
        <div class="content markdown" :style="{fontSize: fontSize + 'px'}" v-html="html"></div>
        <div class="btns">
            <i class="iconfont icon-prev" @click="handleJump('prev')"></i>
            <i class="iconfont icon-mulu" @click="showTitles"></i>
            <i class="iconfont icon-zitifangda" @click="handleAdd"></i>
            <i class="iconfont icon-zitisuoxiao" @click="handleReduce"></i>
            <i class="iconfont icon-next1" @click="handleJump('next')"></i>
        </div>

        <div class="titles-wrap" v-show="isShowTitles" @click="hideTitles" >
            <transition name="slide">
                <ul class="titles" v-show="isActive" @click.stop >
                    <li v-for="(item, index) in titles" :key="index" class="titles-item" @click="jump(index)" >
                          {{item.title}}
                    </li>
                </ul>
            </transition>

        </div>
    </div>
</template>

<script>
import Showdown from 'showdown' // 引入初始化一个实例
import { Toast } from 'mint-ui'

export default {
  name: 'xrl-article',
  data () {
      return {
          article:{},
          html: '',
          fontSize: 48,
          titles: [],
          index: -1,
          isShowTitles: false,
          isActive: false,
      }
  },
  methods: {
      getArticle (itemid) {
          return new Promise((reslove) => {
             const id = itemid?itemid:this.$route.params.id
             this.$axios.get(this.$api.getArticle + id).then(res => {
               const converter = new Showdown.Converter()
               this.html = converter.makeHtml(res.data.article.content)
               this.article = res.data 
               this.index = this.article.article.index
               reslove()
             })
          })  
      },
      getTitles () {
        const id  = this.article.article.bookId
        this.$axios.get(this.$api.getTitles + id).then(res => {
          this.titles = res.data
       })
      },
      handleJump (isprev) {
          const _this = this
          function getArticleById() {
              const item = _this.titles.find(item => item.index == _this.index)
              const id = item._id
              _this.getArticle(id)
              _this.$router.push({
                  name: 'article',
                  params: {
                      id
                  }
              })
          }
          if(isprev == 'prev') {
              if(this.index == 0) {
                  Toast({
                      message: '已经是第一章了亲',
                      position: 'center',
                      duration: '1500'
                  }) 
              }else {
                  this.index--
                  getArticleById()
              }
          }else {
              if(this.index == this.titles.length ) {
                  Toast({
                      message: '已经是最后一章了亲',
                      position: 'center',
                      duration: '1500'
                  })
              }else {
                  this.index++
                  getArticleById()
              }
          }
      },
      handleAdd () {
          if(this.fontSize >= 50){
              Toast({
                  message: '恕在下无能,不能再大了',
                  position: 'center',
                  duration: 2000
              })
          }else {
            this.fontSize += 2;
          }
      },
      handleReduce () {
          if(this.fontSize <= 42){
              Toast({
                  message: '字体太小损害眼睛哦亲',
                  position: 'center',
                  duration: 2000
              })
          }else {
            this.fontSize -= 2;
          }
      },
      jump (index) {
          const item = this.titles.find(item => item.index == index)
          const id = item._id
          this.getArticle(id)
          this.$router.push({
              name: 'article',
              params: {
                  id
              }
          })
          this.isShowTitles = false
      },
      showTitles () {
          this.isShowTitles = true
          this.isActive = true
      },
      hideTitles () {
          this.isActive = false
          setTimeout(() => {
              this.isShowTitles = false
          }, 500)
      }
  },
  created () {
      this.getArticle().then(() => {
          this.getTitles()
      })
  },
}
</script>

<style scoped lang="scss">
@import '../../globalCss/px2-rem.scss';
    .container{
        margin-top: 40px;
    }
    .btns{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 1px solid #eee;

        .iconfont {
            flex: 1;
            color: #333;
            font-size: 24px;
            text-align: center;
            height: 42px;
            line-height: 42px;
        }
    }

    .titles-wrap {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);

        .titles {
            position: absolute;
            top:0;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 80%;
            background: #fff;
            overflow: auto;

            .titles-item {
                line-height: 20px;
                height: 20px;
                padding: 10px;
                color: #333;
                border-bottom: 1px solid #eee;
            }
        }

        .slide-enter, .slide-leave-to{
            transform: translate3d(-100%,0,0);
        }
        .slide-enter-active, .slide-leave-active{
            transition: transform  0.5s ease;
        }
    }
</style>

<style lang="scss">
   @import './markdown.scss';
</style>

