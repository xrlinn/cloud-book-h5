<template>
  <div>
     <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in swiperData" :key="index">
      <router-link :to="{name: 'details', params: {id: item.book._id}}" class="swiper-img-wrap">
        <img :src="item.img" :alt="item.img" class="swiper-img">
        <div class="title">
          {{item.title}}
        </div>
      </router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperData: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    getSwiper () {
      this.$axios.get(this.$api.getSwiper).then(res => {
        this.swiperData = res.data
      })
    }
  },
  created () {
    this.getSwiper()
  }
}
</script>

<style scoped lang="scss">
 @import '../../globalCss/px2-rem';
 .swiper-img-wrap {
    display: block;
    width: 100%;
    position: relative;
    color: rgba(255,255,255,.9);
    text-decoration: none;

    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 4px;
      height: 20px;
      background: rgba(0,0,0,.5);
    }
  }
   .swiper-img {
      height: px-to-rem(400)
    }

</style>
