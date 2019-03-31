<template>
    <div>
        <router-view/>
        <xrlTabbar/>
    </div>
</template>

<script>
import xrlTabbar from '@/components/tab-bar'

export default {
  name: 'layout',
  components: {
    xrlTabbar
  }
}
</script>

<style scoped>

</style>
