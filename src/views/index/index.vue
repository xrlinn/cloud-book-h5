<template>
  <div class="container">
    <Loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false">
      <swiper/>
      <div class="content">
        <contentItem v-for="(item, index) in contentData" :key="index" :options="item"/>
      </div>
    </Loadmore>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import contentItem from './components/contentItem'
import moment from 'moment'
import { Loadmore } from 'mint-ui'

export default {
  name: 'index',
  components: {
    swiper,
    contentItem,
    Loadmore
  },
  data () {
    return {
      contentData: [],
      // categoryData: [],
      queryData: {
        pn: 1,
        booksSize: 2,
        size: 2
      },
      allLoaded: false
    }
  },
  methods: {
    getContent () {
      return new Promise(resolve => {
        this.$axios.get(this.$api.getContent, {
          params: this.queryData
        })
          .then(res => {
            console.log(res)
            let resData = res.data
            if (resData.length < this.queryData.size) {
              this.allLoaded = true // 若数据已全部获取完毕
            }
            resData = resData.map(item => {
              item.books = item.books.map(it => {
                it.updateTime = moment(it.updateTime).format('YYYY年MM月DD日')
                return it
              })
              return item
            })
            this.contentData = [...this.contentData, ...resData]
            resolve()
          })
      })
    },
    loadTop () {
      this.queryData = {
        pn: this.queryData.pn + 1,
        booksSize: 2,
        size: 2
      }
      this.allLoaded = false
      this.getContent().then(() => {
        this.allLoaded = true
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadBottom () {
      this.queryData = {
        pn: this.queryData.pn + 1,
        booksSize: 2,
        size: 2
      }
      this.getContent().then(() => {
        // this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped lang="scss">
@import "../../globalCss/px2-rem";

.container {
  padding: px-to-rem(18);
  padding-bottom: 60px;
}
</style>
