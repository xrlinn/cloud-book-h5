<template>
    <div class="container">
      <!-- <Loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false"> -->
        <div class="content">
          <contentItem v-for="(item,index) in contentData" :key="index" :options="item"/>
        </div>
      <!-- </Loadmore> -->
    </div>
</template>

<script>
import contentItem from './components/contentItemss'
// import { Loadmore } from 'mint-ui'

export default {
  name: 'learn',
  components: {
    contentItem
    // Loadmore
  },
  data () {
    return {
      contentData: []
      // queryData: {
      //   pn: 1,
      //   size: 2
      // },
      // allLoaded: false
    }
  },
  methods: {
    getReadList () {
      // return new Promise(resolve => {

      // })
      this.$axios.get(this.$api.getReadList).then(res => {
        const resData = res.data
        console.log(resData)
        // if (resData.length < this.queryData.size) {
        //       this.allLoaded = true // 若数据已全部获取完毕
        //     }
        this.contentData = [...this.contentData, ...resData]
      })
    }
    // loadBottom () {
    //   this.queryData = {
    //     pn: this.queryData.pn + 1,
    //     size: 2
    //   }
    //   this.getReadList().then(() => {
    //     // this.allLoaded = true
    //     this.$refs.loadmore.onBottomLoaded()
    //   })
    // }
  },
  created () {
    this.getReadList()
  }
}
</script>

<style scoped>

</style>
