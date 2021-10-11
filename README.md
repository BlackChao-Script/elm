# elm开发

GitHub开源项目https://github.com/bailicangdu/vue2-elm

> 主要用于来练习vue3制作移动端 后续可能会制作小程序(接口太烂，暂时不开发)
>
> 技术栈：
>
> vue3 + vite + TS  + Vant + axios

## 遇到的问题:

- 此项目后台接口数据图片链接不完整

  > 解决：在项目演示界面查看源代码把图片地址拼接到接口数据

- 登录接口登录失效

  > 暂未解决（猜想:估计是因为Cookies的原因）
  >
  > 前端用的是axois 请求头添加了withCredentials：true(无效)

- 制作商品分类功能选中器时由于用的时Vant组件库中的 TreeSelectItem 分类选中器组件后台接口提供的数据不符合结构(text表示分类名称，children表示分类里的可选项值)

  > 解决: (主要使用for in 遍历)
  >
  > 1. 先*把第一层数据 name 换成 text , sub_categories 换成 children*
  > 2. 再*把第二层数据 name 换成 text*

- 商品分类与评论分类接口无效

## 各页面

### 选择城市页：

![](https://www.hualigs.cn/image/616410a73c7e6.jpg)

### 搜索城市页:

![](https://www.hualigs.cn/image/616410ef5bef0.jpg)

### 外卖店铺主页:

![](https://www.hualigs.cn/image/6164114463ded.jpg)

### 食品分类页:

![](https://www.hualigs.cn/image/6164117ca689d.jpg)

### 商家食品分类页:

![](https://www.hualigs.cn/image/616411fb2db9b.jpg)

### 评论:

![](https://www.hualigs.cn/image/6164122bd99cd.jpg)

### 商家详情页:

![](https://www.hualigs.cn/image/616412704d147.jpg)

等等
