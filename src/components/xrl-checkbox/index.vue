<template>
    <div class="components">
        <label >
            <input type="checkbox" v-model="currentValue" :value="options">
            <span class="box"></span>
        </label>
    </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    options: Object,
    value: Array
  },
  data () {
    return {
        currentValue:[]
    }
  },
  watch: {
    currentValue (value) {
      this.$emit("input",value)
    },
    value (val) {
      this.currentValue = val
    }
  },
  created () {
      this.currentValue= this.value
      console.log(this.options);
  }
}
</script>

<style scoped lang="scss" src="./index.scss">
    
</style>
