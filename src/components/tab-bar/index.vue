<template>
    <div>
        <Tabbar v-model="selected" :fixed="true">
        <TabItem id="index">
          <i class="iconfont icon-shouye" slot="icon"></i>
          首页
        </TabItem>
        <TabItem id="learn">
          <i class="iconfont icon-xuexi-" slot="icon"></i>
          我的学习
        </TabItem>
        <TabItem id="person">
          <i class="iconfont icon-gerenzhongxin1" slot="icon"></i>
          个人中心
        </TabItem>
        </Tabbar>
    </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'

export default {
  name: 'tab-bar',
  components: {
    Tabbar,
    TabItem
  },
  data () {
    return {
      selected: this.$route.name
    }
  },
  watch: {
    selected (val) {
      this.$router.push(val)
    }
  }
}
</script>

<style scoped lang="scss">
    .iconfont{
        font-size: 26px;
    }
</style>
