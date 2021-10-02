<template>
  <!-- 附近商家 -->
  <div class="shopping">
    <div class="ShoppingList_title">
      <div clas="title_icon">
        <van-icon name="shop-o" />
      </div>
      <div class="title_text">附近商家</div>
    </div>
    <!-- 店铺列表 -->
    <div class="shoppinglist_list" v-for="item in data.shoppingList" :key="item.id">
      <div class="list_img">
        <img :src="item.image_url" />
      </div>
      <div class="list_title">
        <div class="title_a">
          <div class="a_icon">
            <van-tag type="warning">品牌</van-tag>
          </div>
          <div class="a_title">{{ item.name }}</div>
        </div>
        <div class="title_b">
          <div class="b_rate">
            <van-rate
              v-model="item.rating"
              readonly
              allow-half
              :size="6"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            ></van-rate>
          </div>
          <div class="b_text">
            <div class="text_a">{{ item.rating }}</div>
            <div class="text_b">月销{{ item.recent_order_num }}单</div>
          </div>
        </div>
        <div class="title_c">20￥起送/{{ item.piecewise_agent_fee.tips }}</div>
      </div>
      <div class="list_text">
        <div class="text_a">
          <van-tag color="#ccc" plain>保准票</van-tag>
        </div>
        <div class="text_b">
          <van-tag color="#57A9FF">{{ item.delivery_mode.text }}</van-tag>
          <van-tag color="#ffc0cb" plain>准时达</van-tag>
        </div>
        <div class="text_c">
          <span>{{ item.distance }}</span>/
          <span class="c_color">{{ item.order_lead_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
//! 引入网络请求
import { getShoppingList } from '../../../../api/getshoppinglist'
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //* 城市的经纬度
  geohashData: '',
  //* 店铺列表信息
  shoppingList: []
})
//! 生命周期函数
onMounted(() => {
  //* 通过vuex拿到数据
  data.geohashData = store.state.geohashData
  //* 请求店铺列表信息
  getShoppingList(data.geohashData[0], data.geohashData[1]).then((res: any) => {
    //* 拼接图片地址
    const arr = res.data
    for (var i = 0; i < arr.length; i++) {
      arr[i].image_url = 'https://elm.cangdu.org/img/' + arr[i].image_path
    }
    data.shoppingList = arr
  })
})
</script>

<style scoped lang="scss">
.shopping {
  margin-bottom: 80px;
  .ShoppingList_title {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #cccccc;
    font-size: 15px;
    .title_text {
      margin-left: 5px;
    }
  }
  .shoppinglist_list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    border-bottom: 1px solid #f1f1f1;
    .list_img {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .list_title {
      width: 40%;
      margin-left: 5px;

      .title_a {
        display: flex;
        .a_icon {
          width: 25%;
        }
        .a_title {
          width: 60%;
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap; //溢出不换行
          font-size: 14px;
          font-weight: 600;
        }
      }
      .title_b {
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-top: 10px;
        .b_rate {
          width: 40%;
        }
        .b_text {
          width: 55%;
          font-size: 12px;
          display: flex;
          .text_b {
            margin-left: 5px;
            color: #666666;
          }
        }
      }
      .title_c {
        margin-top: 10px;
        margin-left: 5px;
        font-size: 12px;
        color: #666666;
      }
    }
    .list_text {
      width: 40%;
      .text_a {
        margin-left: 68px;
      }
      .text_b {
        margin-left: 10px;
        margin-top: 10px;
      }
      .text_c {
        font-size: 5px;
        margin-top: 10px;
        .c_color {
          color: pink;
        }
      }
    }
  }
}
</style>
