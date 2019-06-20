<template>
    <div class="content-item">
        <!-- <div class="content-item-row1">
            <h2 class="title">
                {{it.title}}
            </h2>
            <router-link :to="{name: 'more', params: {typeId: it._id}}">更多</router-link>
        </div> -->
        <div class="content-item-row2">
            <router-link :to="{name: 'details', params: {id: options.book._id}}" class="content-row2">
            <div class="img-wrap">
                <img :src="options.book.img" :alt="options.book.img">
            </div>
            <div class="article">
                <div class="article-title">
                    {{options.book.title}}
                </div>
                <div class="article-preview">
                    {{options.book.desc}}
                </div>
                <div class="article-msg">
                    <div class="author">
                        {{options.book.author}}
                    </div>
                    <div class="date">
                        {{options.book.updateTime}}
                    </div>
                    <div class="looknums">
                        {{options.book.looknums}}人在看
                    </div>
                </div>
            </div>
            </router-link>
            <Button class="btn" type="danger" size="small" @click="handleDelete(options._id)">删除收藏</Button>
        </div>
    </div>
</template>

<script>
import {Button } from 'mint-ui'
export default {
  name: 'contentitem',
  components: {
    Button
  },
  props: {
    options: Object
  },
  methods: {
    handleDelete (id) {
      this.$axios.delete(this.$api.deleteCollection + id).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    console.log(this.options)
  }
}
</script>

<style scoped lang="scss">
@import '../../../globalCss/px2-rem';

.content-item {
    margin-top: 40px;
    .content-row2 {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;

        .img-wrap {
            width: px-to-rem(200);
            height: px-to-rem(266);

            img{
                height: 100%;
            }
        }

        .article {
            position: relative;
            flex:1;
            margin-left: 18px;

            .article-title {
                color:#333;
                font-size: 18px;
                font-weight: 500;
            }
            .article-preview{
                margin-top: 10px;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                font-size: 12px;
                color: #555;
            }
            .article-msg {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #555;
            }
        }
    }
    .btn{
            margin-top: 6px;
        }
}
</style>
