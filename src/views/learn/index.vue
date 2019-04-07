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
import { Loadmore } from 'mint-ui'

export default {
  name: 'learn',
  components: {
    contentItem,
    Loadmore
  },
  data () {
    return {
      contentData: []
    }
  },
  methods: {
    getReadList () {
      this.$axios.get(this.$api.getReadList,this.$axios.token).then(res => {
        const resData = res.data
        console.log(resData)
        this.contentData = [...this.contentData, ...resData]
      })
    }
  },
  created () {
    this.getReadList()
  }
}
</script>

<style scoped>

</style>
