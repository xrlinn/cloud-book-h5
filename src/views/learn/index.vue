<template>
    <div class="container">
      <!-- <Loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false"> -->
        <div class="content">
          <contentItem/>
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
  }
}
</script>

<style scoped>

</style>
