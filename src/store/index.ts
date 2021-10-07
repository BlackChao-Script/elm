import { createStore } from 'vuex'

export default createStore({
  state: {
    //* 城市经纬度数组
    geohashData: [],
    //* 城市经纬度字符串
    geohasDataStr: '',
    //* 城市地址
    addressData: '',
    //* 分类id
    classId: '',
    //* 分类标题
    classTitle: '',
  },
  mutations: {},
  actions: {},
  modules: {},
})
