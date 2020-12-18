<template>
  <div class="container">
    <Loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :auto-fill="false">
      <div class="content">
        <span class="mode" @click="isShow=!isShow" v-text="isShow?'完成':'管理'"></span>
        <div class="collect" v-for="(item, index) in contentData" :key="index" >
          <xrlCheckbox  :options="item" v-model="checkData" v-if="isShow"></xrlCheckbox>
          <contentItem :options="item"/>
        </div>
      </div>
    </Loadmore>
    <div class="footer" v-if="isShow">
          <div class="left">
            <label for="quan">
                <div class="checkbox">
                  <input type="checkbox" id="quan" @click="checkAll($event)">
                  <span class="box"></span>
                  <span>全选</span>
                </div>
            </label>
          </div>
          <Button @click="handleDelete">删除</Button>
      </div>
  </div>
</template>

<script>
import contentItem from './components/contentItem'
import moment from 'moment'
import { Loadmore ,Button } from 'mint-ui'
import xrlCheckbox from '@/components/xrl-checkbox'

export default {
  name: 'index',
  components: {
    contentItem,
    Loadmore,
    xrlCheckbox,
    Button
  },
  data () {
    return {
      contentData: [],
      queryData: {
        pn: 1,
        size: 4
      },
      allLoaded: false,
      checkData: [],
      isShow: false
    }
  },
  methods: {
    getCollection () {
      return new Promise(resolve => {
        this.$axios.get(this.$api.getLike, {
          params: this.queryData
        })
          .then(res => {
            console.log(res)
            let resData = res.data
            if (resData.length < this.queryData.size) {
              this.allLoaded = true // 若数据已全部获取完毕
            }
            resData = resData.map(item => {
              item.book.updateTime = moment(item.book.updateTime).format('YYYY年MM月DD日')
              return item
            })
            this.contentData = [...this.contentData, ...resData]
            resolve()
          })
      })
    },
    loadBottom () {
      this.queryData = {
        pn: this.queryData.pn + 1,
        size: 4
      }
      this.getCollection().then(() => {
        // this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded()
      })
    },
    handleDelete () {
      for (let i=0; i<this.checkData.length; i++) {
        let id = this.checkData[i]._id
        this.$axios.delete(this.$api.deleteLike + id).then(res => {
          if (res.code === 200) {
              this.contentData = this.contentData.filter((item,index) => {
                return item._id != id
              })
            }
        })
      }
    },
    checkAll (e) {
      console.log(e);
        if (e.target.checked) {
            this.contentData.forEach((el,i) => {
                if (this.checkData.indexOf(el) == '-1') {
						// 数组里没有这一个ID才push，防止重复push
                    this.checkData.push(el)
                }
            });
        } else {
            this.checkData = []
        }  
    },
  },
  watch: {
    checkData: { // 监视双向绑定的数组变化
        handler () {
            if (this.checkData.length == this.contentData.length) {
                document.querySelector('#quan').checked = true
            }else {
                document.querySelector('#quan').checked = false
            }
        },
        deep: true
    }  
  },
  created () {
    this.getCollection()
  }
}
</script>

<style scoped lang="scss" >
@import "../../globalCss/px2-rem";

.container {
  padding: px-to-rem(18);
  padding-bottom: 60px;
  margin-top: 40px;
  .content {
    position: relative;
  }
  .mode {
    position: absolute;
    right: 6px;
    top: 0;
    color: #409eff;
  }
  .collect {
    display: flex;
    align-items: center;
    background: #fff;
  }
  .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: px-to-rem(100);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 0.5px solid #efefef;
        background: #fff;
        input[type="checkbox"] {
        // -webkit-appearance: none;
        display: none;
        }
        label {
          flex: 1;
          .box {
            display: inline-block;
            position: relative;
            width: 14px;
            height: 14px;
            margin-right: 4px;
            border: 1px solid #555;
            border-radius: 50%;
            background: #fff;
          }
        }
        input[type="checkbox"]:checked ~.box::after{
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 10px;
          height: 5px;
          border-left: 1px solid #fff;
          border-bottom: 1px solid #fff;
          transform: rotateZ(-45deg)
        }
        input[type="checkbox"]:checked ~.box{
          background: #409eff;
          border: 1px solid #409eff;
        }
        .left {
          padding-left: 30px;
          align-self: center;
          color: #888;
          .checkbox {
            display: flex;
          }
        }
        .mint-button {
          margin-right: 12px;
          border-radius: 20px;
          width: 100px;
          background-color: #FF5000;
          background-image: red;
          color:#fff;
          font-size: 16px;
        }
      }
}
</style>
