<template>
    <div>

    </div>
</template>

<script>
export default {
  name: 'collection',
  created () {
    this.$axios.get(this.$api.getCollection, {pn: 100, size: 30}).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
