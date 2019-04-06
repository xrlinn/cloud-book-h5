<template>
        <div class="content-item">
            <div class="content-item-row2">
                <router-link :to="{name: 'details', params: {id: options._id}}" class="content-row2">
                <div class="img-wrap">
                    <img :src="options.img" :alt="options.img">
                </div>
                <div class="article">
                    <div class="article-title">
                        {{options.title}}
                    </div>
                    <div class="article-preview">
                        {{options.desc}}
                    </div>
                    <div class="article-msg">
                        <div class="author">
                            {{options.author}}
                        </div>
                        <div class="date">
                            {{options.updateTime}}
                        </div>
                        <div class="looknums">
                            {{options.looknums}}人在看
                        </div>
                    </div>
                </div>
                </router-link>
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
@import '../../../globalCss/px2-rem';

.content-item {
    margin-top: 40px;

    .content-row2 {
        display: flex;
        justify-content: space-between;

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
                -webkit-line-clamp: 3;
                line-clamp: 3;
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
}
</style>
