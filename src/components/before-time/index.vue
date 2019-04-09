<template>
    <span>
        {{currentText}}
    </span>
</template>

<script>
export default {
  name: 'before-time',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      currentText: '',
      currentDate: new Date(),
      oldDate: null
    }
  },
  methods: {
    handleComputed () {
      this.oldDate = new Date(this.value)
      const oldTime = this.oldDate.getTime() // 获取服务器给我的unix时间戳
      const currentTime = this.currentDate.getTime() // 获取本地的unix时间戳
      const reduceTime = currentTime - oldTime
      const date = new Date()
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)
      const zeroTime = date.getTime()

      if (reduceTime / (1000 * 60 * 60) < 1) { // 小于一小时前 显示 多少分钟前
        this.currentText = `${Math.round(reduceTime / (1000 * 60))}分钟前`
      } else if (reduceTime / (1000 * 60 * 60) >= 1 && (zeroTime - oldTime) < 0) { // 小于一天前 显示 多少小时前
        this.currentText = `${Math.round(reduceTime / (1000 * 60 * 60))}小时前`
      } else if ((zeroTime - oldTime) >= 0 && reduceTime /
       (1000 * 60 * 60 * 24 * 31) < 1) { // 小于一月前 显示 多少天前
        this.currentText = `${Math.round(reduceTime / (1000 * 60 * 60 * 24))}天前`
      } else { // 显示多少月前
        this.currentText = `${Math.round(reduceTime / (1000 * 60 * 60 * 24 * 31))}月前`
      }
    }
  },
  watch: { // 立即监控 第一次传值不算，值发生变化才能进行监控
    value: {
      deep: true,
      immediate: true,
      handler (val) {
        if (val) {
          this.handleComputed()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
