<template>
    <div>
        <Header fixed :title="$route.meta.title">
          <Button icon="back" slot="left" @click="$router.back()">返回</Button>
        </Header>
        <router-view></router-view>
    </div>
</template>

<script>
import {Header, Button} from 'mint-ui'

export default {
  name: 'header-layout',
  components: {
    Header,
    Button
  }
}
</script>

<style  lang="scss">
    .mint-header{
      background: #f5f5f5;
      color: #333333;
      text-align: center;
      .mint-header-title{
      height: 20px;
    }
    }
    

</style>
