<template>
    <div class="dy-progress-wrap">
        <div class="child" :style="{width}" ></div>
    </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    total: Number,
    value: Number
  },
  data () {
    return {
      isShowChild: false,
      width: 0
    }
  },
  methods: {
    handleTransition () {
      this.width = this.value / this.total * 100 + '%'
    }
  },
  created () {
    setTimeout(() => {
      this.handleTransition()
    }, 300)
  },
  watch: {
    total () {
      this.handleTransition()
    },
    value () {
      this.handleTransition()
    }
  }
}
</script>

<style  lang="scss">
.dy-progress-wrap {
    position: relative;
    background: #ebebeb;
    height: 6px;

    .child {
        position: absolute;
        top: 0;
        left: 0;
        background: #409eff;
        height: 100%;
        width: 0;
        transition: width 0.8s ease;
    }
}

</style>
