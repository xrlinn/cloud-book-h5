<template>
    <div class="container">
    <Loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false">
      <div class="content">
        <h2 class="category">{{resData.title}}</h2>
        <contentItem v-for="(item, index) in contentData" :key="index" :options="item"/>
      </div>
    </Loadmore>
    </div>
</template>

<script>
import contentItem from './components/contentItems'
import { Loadmore } from 'mint-ui'
import moment from 'moment'

export default {
  name: 'more',
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
      allLoaded: false,
      resData: {}
    }
  },
  methods: {
    getAllBooks () {
      return new Promise(resolve => {
        const typeId = this.$route.params.typeId
        this.$axios.get(this.$api.getAllBooks + typeId + '/books', {
          params: this.queryData
        })
          .then(res => {
            console.log(res)
            this.resData = res.data
            if (this.resData.books.length < this.queryData.size) {
              this.allLoaded = true // 若数据已全部获取完毕
            }
            this.resData.books = this.resData.books.map(item => {
              item.updateTime = moment(item.updateTime).format('YYYY年MM月DD日')
              return item
            })
            this.contentData = [...this.contentData, ...this.resData.books]
            resolve()
          })
      })
    },
    loadBottom () {
      this.queryData = {
        pn: this.queryData.pn + 1,
        size: 4
      }
      this.getAllBooks().then(() => {
        this.$refs.loadmore.onBottomLoaded()
      })
    }
  },
  created () {
    this.getAllBooks()
  }
}
</script>

<style scoped>

</style>
