<template>
    <div class="container change-nickname">
        <dy-input-change :value="userMsg.username||userMsg.phone" @change="handleChange"/>
        <div class="desc">
            更好的昵称能让你的朋友更容易记住你
        </div>
        <div class="btn-wrap">
            <Button size="large" type="primary" @click="handleSave">保存更改</Button>
        </div>
    </div>
</template>

<script>
import dyInputChange from '@/components/dy-input-change'
import {Button, Toast} from 'mint-ui'
// import { duration } from 'moment';
export default {
  name: 'changeNickname',
  components: {
    dyInputChange,
    Button
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    handleChange (val) {
      this.username = val
    },
    handleSave () {
      this.$axios.put(this.$api.changeUser, {
        username: this.username
      }).then(res => {
        if (res.code === 200) {
          Toast({
            message: '昵称修改成功',
            duration: 800
          })
          this.$store.dispatch('getUserData')
          setTimeout(() => {
            this.$router.push('/revise')
          }, 1000)
        } else {
          Toast({
            message: res.msg
          })
        }
      })
    }
  },
  computed: {
    userMsg () {
      return this.$store.state.userData.user
    }
  }
}
</script>

<style scoped lang="scss" src="./index.scss">

</style>
