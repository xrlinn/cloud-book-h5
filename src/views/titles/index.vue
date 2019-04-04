<template>
    <div class="container">
        <ul class="titles">
          <li class="title-item" v-for="(item, index) in titles" :key="index">
            <router-link :to="{name: 'article', params: {id: item._id}}">
              {{item.title}}
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'titles',
  data () {
    return {
      titles: [],
      bookData: []
    }
  },
  methods: {
    getTitles () {
      const id = this.$route.params.id
      this.$axios.get(this.$api.getTitles + id).then(res => {
        console.log(res)
        this.titles = res.data
      })
    },
    getBook () {
      const id = this.$route.params.id
      this.$axios.get(this.$api.getBook + id).then(res => {
        console.log(res)
        let resData = res.data
        this.bookData = resData
        document.title = this.bookData.title + '  ' + '目录'
      })
    }
  },
  created () {
    this.getTitles()
    this.getBook()
  }
}
</script>

<style scoped lang="scss">
  .container{
    margin-top: 40px;
  }
  .title-item {
    line-height: 40px;
    height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #e0e0e0;

  a {
    color: #333;
  }
  }

</style>
