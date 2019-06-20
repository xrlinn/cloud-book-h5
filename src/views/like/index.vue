<template>
  <div class="container">
    <Loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false">
      <div class="content">
        <contentItem v-for="(item, index) in contentData" :key="index" :options="item"/>
      </div>
    </Loadmore>
  </div>
</template>

<script>
import contentItem from './components/contentItem'
import moment from 'moment'
import { Loadmore } from 'mint-ui'

export default {
  name: 'index',
  components: {
    contentItem,
    Loadmore
  },
  data () {
    return {
      contentData: [],
      queryData: {
        pn: 1,
        size: 4
      },
      allLoaded: false
    }
  },
  methods: {
    getLike () {
      return new Promise(resolve => {
        this.$axios.get(this.$api.getLike, {
          params: this.queryData
        })
          .then(res => {
            console.log(res)
            let resData = res.data
            if (resData.length < this.queryData.size) {
              this.allLoaded = true // 若数据已全部获取完毕
            }
            resData = resData.map(item => {
              item.book.updateTime = moment(item.book.updateTime).format('YYYY年MM月DD日')
              return item
            })
            this.contentData = [...this.contentData, ...resData]
            resolve()
          })
      })
    },
    loadBottom () {
      this.queryData = {
        pn: this.queryData.pn + 1,
        size: 4
      }
      this.getLike().then(() => {
        // this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  },
  created () {
    this.getLike()
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
