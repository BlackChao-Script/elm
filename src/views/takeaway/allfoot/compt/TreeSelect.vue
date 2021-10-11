<template>
  <!-- 下拉菜单 -->
  <div class="TreeSelect">
    <van-dropdown-menu>
      <van-dropdown-item title="分类" ref="items">
        <van-tree-select
          v-model:active-id="data.activeId"
          v-model:main-active-index="data.activeIndex"
          :items="data.AllShoppingLIst"
          @click-item="getValue"
        />
      </van-dropdown-item>
      <van-dropdown-item v-model="data.sortvalue" :options="data.sortArr" @change="sortShopping"></van-dropdown-item>
    </van-dropdown-menu>
  </div>
  <!-- 全部商品列表 -->
  <div
    class="shoppinglist_list"
    v-for="item in data.ClassShoppingList"
    :key="item.id"
    @click="toShoppingDet(item.id)"
  >
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
</template>

<script setup lang='ts'>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
//! 引入网络请求方法
import { getAllShoppingLIst, getIdShopping } from '../../../../api/getshoppinglist'
//! 使用vuex
const store = useStore()
//! 使用路由
const $router = useRouter()
//! 数据
const data = reactive<any>({
  //* 所有分类
  AllShoppingLIst: [],
  //* 表示右侧高亮选项的 id
  activeId: '',
  //*  表示左侧高亮选项的索引
  activeIndex: '',
  //* 选中的分类
  value: '',
  //* 分类店铺列表
  ClassShoppingList: [],
  //* 选中的排序值
  sortvalue: 0,
  //* 排序的数据
  sortArr: [
    {
      text: '默认排序', value: 0
    },
    {
      text: '距离最近', value: 1
    },
    {
      text: '销量最高', value: 2
    },
    {
      text: '配送速度最快', value: 3
    },
    {
      text: '评分最高', value: 4
    }
  ],
})
//! 获取ref
const items = ref<any>(null)
//! 获取所有分类数据
const getAllData = () => {
  getAllShoppingLIst().then((res: any) => {
    const arr = res.data
    //! 把第一层数据 name 换成 text , sub_categories 换成 children
    const rename = (arr: any) => {
      for (let i in arr) {
        for (let j in arr[i]) {
          if (j === 'name') {
            arr[i]['text'] = arr[i][j]
            delete arr[i]['name']
          } else if (j === 'sub_categories') {
            arr[i]['children'] = arr[i][j]
            delete arr[i]['sub_categories']
          }
        }
      }
      return arr
    }
    const newarr = rename(arr)
    //! 把第二层数据 name 换成 text
    const renameb = (newarr: any) => {
      for (let i in newarr) {
        for (let j in newarr[i].children) {
          for (let k in newarr[i].children[j]) {
            if (k === 'name') {
              newarr[i].children[j]['text'] = newarr[i].children[j][k]
              delete newarr[i].children[j]['name']
            }
          }
        }
      }
      return newarr
    }
    data.AllShoppingLIst = renameb(newarr)
  })
}
//! 获取分类店铺列表数据
const getClassData = () => {
  console.log(store.state.classId)
  getIdShopping(store.state.geohashData[0], store.state.geohashData[1], store.state.classId).then((res: any) => {
    const arr = res.data
    for (let i = 0; i < arr.length; i++) {
      arr[i].image_url = 'https://elm.cangdu.org/img/' + arr[i].image_path
    }
    data.ClassShoppingList = arr
  })
}
//! 生命周期函数
onMounted(() => {
  getAllData()
  getClassData()
})
//! 点击右侧选项时触发
const getValue = (item: any) => {
  //* 把选中的分类id保存到vuex中
  store.state.classId = item.id
  //* 把选中的标题保存到vuex中
  store.state.classTitle = item.text
  //* 关闭下拉菜单
  items.value.toggle()
  //* 重新获取分类店铺列表数据
  getClassData()
}
//! 点击排序的值发生改变时触发
const sortShopping = (value: any) => {
  //* 距离最近排序
  if (value === 1) {
    // distance
    const sortDistance = (obj1: any, obj2: any) => {
      let val1 = obj1.distance
      let val2 = obj2.distance
      //* localeCompare用于比较字符串加数字
      return val1.localeCompare(val2, 'zh-CN', { numeric: true })
    }
    data.ClassShoppingList.sort(sortDistance)
  }
  //* 销量最高排序
  else if (value === 2) {
    // recent_order_num
    const sortRecent_order_num = (obj1: any, obj2: any) => {
      let val1 = obj1.recent_order_num
      let val2 = obj2.recent_order_num
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    }
    data.ClassShoppingList.sort(sortRecent_order_num).reverse()
  }
  //* 配送速度最快排序
  else if (value === 3) {
    // order_lead_time
    const sortOrder_lead_time = (obj1: any, obj2: any) => {
      let val1 = obj1.order_lead_time
      let val2 = obj2.order_lead_time
      //* localeCompare用于比较字符串加数字
      return val1.localeCompare(val2, 'zh-CN', { numeric: true })
    }
    data.ClassShoppingList.sort(sortOrder_lead_time).reverse()
  }
  //* 评分最高排序
  else if (value === 4) {
    //rating
    const sortRating = (obj1: any, obj2: any) => {
      let val1 = obj1.rating
      let val2 = obj2.rating
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    }
    data.ClassShoppingList.sort(sortRating).reverse()
  } else {
    getClassData()

  }
}
//! 点击店铺进入店铺详细与分类
const toShoppingDet = (id: Number) => {
  $router.push(`/shoppingdet/${id}`)
}
</script>

