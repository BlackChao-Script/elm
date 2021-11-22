<template>
  <div class="skeleton">
    <!-- 骨架屏 -->
    <van-skeleton :row="20" :loading="data.loading">
      <!-- 内容 -->
      <div class="skeleton_tab">
        <van-tabs v-model:active="data.active1" @click-tab="onClickTab">
          <!-- 标签页1 -->
          <van-tab title="商品">
            <!-- 侧边导航 -->
            <div class="taba">
              <div class="taba_l">
                <van-sidebar v-model="data.active2">
                  <van-sidebar-item
                    v-for="item in data.foodCategoryData"
                    :key="item.id"
                    :title="item.name"
                    @click="clicksidebar(item.id)"
                  />
                </van-sidebar>
              </div>
              <div class="taba_r">
                <div class="r_content" v-for="(item1,index) in data.foodCategoryData" :key="index">
                  <div class="content_title" :ref="el => { divNodes[item1.id] = el }">
                    <span class="title_a">{{ item1.name }}</span>
                    <span class="title_b">{{ item1.description }}</span>
                  </div>
                  <div class="content_text" v-for="item2 in item1.foods" :key="item2.category_id">
                    <div class="text_img">
                      <van-image
                        width="3.5rem"
                        height="3.5rem"
                        fit="cover"
                        :src="item2.image_path"
                      />
                    </div>
                    <div class="text_a">
                      <div class="a_title1">{{ item2.name }}</div>
                      <div class="a_title2">{{ item2.description }}</div>
                      <div class="a_title3">{{ item2.tips }}</div>
                      <div class="a_title5">￥{{ item2.specfoods[0].price }}</div>
                    </div>
                    <div class="text_b">
                      <van-icon name="add-o" @click="addfoods(item2.specfoods[0])" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <!-- 标签页2 -->
          <van-tab title="评论">
            <!-- 评价评分 -->
            <div class="tabb">
              <div class="tabb_left">
                <div class="left_synthesis">{{ data.valuateFractiondata.overall_score }}</div>
                <div class="left_a">综合评价</div>
                <div class="left_b">高于周边商家{{ data.valuateFractiondata.compare_rating }}%</div>
              </div>
              <div class="tabb_right">
                <div class="right_a">
                  <div class="a_text">服务态度</div>
                  <div class="a_stay">
                    <van-rate
                      v-model="data.valuateFractiondata.service_score"
                      :size="10"
                      color="pink"
                      void-icon="star"
                      readonly
                      allow-half
                      void-color="#eee"
                    />
                  </div>
                  <div class="a_fen">{{ data.valuateFractiondata.service_score }}</div>
                </div>
                <div class="right_a">
                  <div class="a_text">菜品评价</div>
                  <div class="a_stay">
                    <van-rate
                      v-model="data.valuateFractiondata.food_score"
                      :size="10"
                      color="pink"
                      void-icon="star"
                      readonly
                      allow-half
                      void-color="#eee"
                    />
                  </div>
                  <div class="a_fen">{{ data.valuateFractiondata.food_score }}</div>
                </div>
                <div class="right_a">
                  <div class="a_text">送达时间</div>
                  <div class="a_stay">{{ data.valuateFractiondata.deliver_time }}分钟</div>
                </div>
              </div>
            </div>
            <!-- 分割 -->
            <div class="division"></div>
            <!-- 评论分类 -->
            <div class="tabc">
              <div class="tabc_a">
                <div
                  :class="{ bgccolor: data.j == index }"
                  class="a_item"
                  v-for="(item,index) in data.valuateClassData"
                  :key="item._id"
                  @click="clickClass(item.name, index)"
                >{{ item.name }}({{ item.count }})</div>
              </div>
            </div>
            <!-- 评论信息 -->
            <div class="tabd">
              <div class="tabd_valuateLists" v-for="item1 in data.valuateList" :key="item1._id">
                <div class="valuateLists_img">
                  <van-image round width="3rem" height="3rem" />
                </div>
                <div class="valuateLists_text">
                  <div class="text_name">{{ item1.username }}</div>
                  <div class="text_star">
                    <div class="star_a">
                      <van-rate
                        v-model="item1.rating_star"
                        :size="10"
                        color="pink"
                        void-icon="star"
                        void-color="#eee"
                        readonly
                        allow-half
                      />
                    </div>
                    <div class="star_b">{{ item1.time_spent_desc }}</div>
                  </div>
                  <div class="text_tag">
                    <div
                      class="tag_item"
                      v-for="item2 in item1.item_ratings"
                      :key="item2._id"
                    >{{ item2.food_name }}</div>
                  </div>
                </div>
                <div class="valuateLists_time">{{ item1.rated_at }}</div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!-- 购物导航 -->
      <div v-if="data.showSubmitBar" class="skeleton_submitBar">
        <van-submit-bar
          @submit="onSubmit"
          :price="data.foddsPrice"
          button-text="去结算"
          button-color="pink"
        >
          <div class="skeleton_submitBar_icon" @click="clickSubmitBar">
            <van-badge :content="data.foodsCount">
              <van-icon name="shopping-cart-o" />
            </van-badge>
          </div>
        </van-submit-bar>
      </div>
    </van-skeleton>
    <!-- 动作面板 -->
    <div class="skeleton_sheet">
      <van-action-sheet v-model:show="data.show" title="购物车">
        <div class="sheet_content">
          <!-- 商品卡片 -->
          <van-card
            v-for="(item,index) in data.addSubmitBarFoodsList"
            :key="item.food_id"
            :num="item.original_price"
            :price="item.price"
            :title="item.name"
          >
            <template #footer>
              <van-button size="mini" @click="jianNum(item, index)">-1</van-button>
              <van-button size="mini" @click="addNum(item)">+1</van-button>
            </template>
          </van-card>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "@vue/reactivity";
import { onBeforeUpdate, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
//! 引入网络请求方法
import { getcategory } from '../../../api/getshoppinglist'
import { getValuate, getValuateClass, getValuateMessageData } from '../../../api/getEvaluate'
import { addCarts } from '../../../api/addCarts'
import { useStore } from "vuex";
//! 使用路由
const $route = useRoute()
//! 使用vuex
const store = useStore()
//! 数据
const data = reactive<any>({
  //* 骨架屏幕是否显示
  loading: true,
  //* 标签页选中
  active1: 0,
  //* 侧边栏选中
  active2: 0,
  //* 食品分类数据
  foodCategoryData: [],
  //* 是否展示购物车面板
  showSubmitBar: true,
  //* 是否展示动作面板
  show: false,
  //* 商品数量
  foodsCount: '',
  //* 商品总额
  foddsPrice: 0,
  //* 添加到购物车的商品
  addSubmitBarFoodsList: [],
  //* 评论分数
  valuateFractiondata: [],
  //* 评价分类
  valuateClassData: [],
  //* 选中的评价分类
  j: 0,
  //* 被选中的评论分类name
  valuateClassName: '全部',
  //* 请求评论条数
  limit: 10,
  //* 评论列表
  valuateList: [],
  //* 跳过数据条数
  offset: 0
})
//! 获取食品分类数据
const getcategoryData = () => {
  const id = $route.params.id
  getcategory(id).then((res: any) => {
    //* 把 res.data.category_list 里 foods 为空的数组排除掉
    const arr = res.data.category_list.filter((value: any) => value.foods.length !== 0)
    //* 把arr数组里面的foods的图片地址加上前缀地址
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].foods.length; j++)
        arr[i].foods[j].image_path = 'https://elm.cangdu.org/img/' + arr[i].foods[j].image_path
    }
    data.ClassShoppingList = arr
    data.foodCategoryData = arr
    //* 隐藏骨架屏
    data.loading = false
  })
}
//! 获取ref
const divNodes = ref<any>({})
//! 切换tab栏时触发
const onClickTab = (title: any) => {
  if (title.title === '评论') {
    data.showSubmitBar = false
  } else {
    data.showSubmitBar = true
  }

}
//! 点击左侧导航栏时触发
//* el 标签 speed 滚动速率 此处是100px 值越大滚动的越快
const clicksidebar = (index: number) => {
  const speed = 50
  //* 浏览器窗口高度
  let windowH = window.innerHeight
  //* 模块内容高度
  let h = divNodes.value[index].offsetHeight
  //* 模块相对于内容顶部的距离
  let t = divNodes.value[index].offsetTop
  //* 需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
  let top = t - (windowH - h) / 2;
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    //* 滚动条距离顶部高度
    document.body.scrollTop;
  //* 默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
  let currentTop = scrollTop;
  let requestId: any;
  //* 采用requestAnimationFrame，平滑动画
  function step() {
    //* 判断让滚动条向上滚还是向下滚
    if (scrollTop < top) {
      if (currentTop <= top) {
        //* window.scrollTo(x,y) y为上下滚动位置
        window.scrollTo(0, currentTop);
        requestId = window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(requestId);
      }
      //* 向下滚动
      currentTop += speed;
    } else {
      if (top <= currentTop) {
        //* 注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
        window.scrollTo(0, currentTop - speed);
        requestId = window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(requestId);
      }
      //* 向上滚动
      currentTop -= speed;
    }
  }
  window.requestAnimationFrame(step)
}
//! 点击购物车图标时触发
const clickSubmitBar = () => {
  //* 展示动作面板
  if (data.addSubmitBarFoodsList != '') {
    data.show = true
  }
}
//! 点击添加商品时触发
const addfoods = (foods: any) => {
  let price = 0
  //* 商品数量++
  foods.original_price++
  //* 重复商品不超过一条
  if (foods.original_price == 1) {
    data.addSubmitBarFoodsList.push(foods)
  }
  //* 遍历得到总金额
  for (let i in data.addSubmitBarFoodsList) {
    price = price + (data.addSubmitBarFoodsList[i].original_price * data.addSubmitBarFoodsList[i].price)
  }
  data.foddsPrice = price
  //* 商品总数
  data.foodsCount = data.addSubmitBarFoodsList.reduce((prev: any, next: any) => {
    return prev + next.original_price
  }, 0)
  //* 保存到vuex
  store.state.FoodsList = data.addSubmitBarFoodsList
  addCartSData()
}
//! 点击购物车卡片中的 + 时触发
const addNum = (foods: any) => {
  //* 调用addfoods函数
  addfoods(foods)
  addCartSData()
}
//! 点击购物车卡片中的 - 时触发
const jianNum = (item: any, i: any) => {
  let price = 0
  //* 商品数量--
  item.original_price--
  //* 判断original_price是否<=0 是的话删除data.addSubmitBarFoodsList
  if (item.original_price <= 0) {
    data.addSubmitBarFoodsList.splice(i, 1)
  }
  //* 重新计算商品总数
  data.foodsCount = data.addSubmitBarFoodsList.reduce((prev: any, next: any) => {
    return prev + next.original_price
  }, 0)
  //* 重新计算总金额
  for (let i in data.addSubmitBarFoodsList) {
    price = price + (data.addSubmitBarFoodsList[i].original_price * data.addSubmitBarFoodsList[i].price)
  };
  data.foddsPrice = price
  //* 当商品总数为0时关闭动作栏
  if (data.foodsCount == 0) {
    data.show = false
  }
}
const addCartSData = () => {
  //* 添加到购物车
  addCarts($route.params.id, store.state.geohasDataStr, data.addSubmitBarFoodsList)
}
//! 点击购物栏中的去结算时触发
const onSubmit = () => {
}
//! 获取评论数据
const getValuateData = () => {
  const id = $route.params.id
  //* 获取评论分数数据
  getValuate(id).then((res: any) => {
    //* 把 compare_rating * 100 并保留一位小数
    const num = res.data.compare_rating * 100
    res.data.compare_rating = parseFloat(num.toFixed(1))
    //* 把评分数据都保留一位小数
    res.data.food_score = parseFloat(res.data.food_score.toFixed(1))
    res.data.overall_score = parseFloat(res.data.overall_score.toFixed(1))
    res.data.service_score = parseFloat(res.data.service_score.toFixed(1))
    data.valuateFractiondata = res.data
  })
  //* 获取评价分类数据
  getValuateClass(id).then((res: any) => {
    data.valuateClassData = res.data
  })
}
//! 点击评价分类时触发
const clickClass = (name: any, index: any) => {
  data.j = index
  data.valuateClassName = name
  getValuateMessageDatas()
}
//! 获取评论列表数据
const getValuateMessageDatas = () => {
  //* 店铺信息
  const id = $route.params.id
  getValuateMessageData(id, data.valuateClassName, data.offset, data.limit).then((res: any) => {
    data.valuateList = res.data
  })
}
//! 生命周期函数
onBeforeUpdate(() => {
  //*在更新前重置
  divNodes.value = {};
})
onMounted(() => {
  //* 调用获取食品分类数据
  getcategoryData()
  //* 调用获取评论数据
  getValuateData()
  getValuateMessageDatas()
})
</script>

