import { createApp } from 'vue'
import App from './App.vue'
//! 引入样式
import './style/index.scss'
//! 引入路由
import router from './router/index'
//! 引入vuex
import store from './store/index'
//! 按需引入vant
import {
  Button,
  Grid,
  GridItem,
  Icon,
  Search,
  IndexBar,
  IndexAnchor,
  Divider,
  Loading,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Tag,
  Rate,
  DropdownMenu,
  DropdownItem,
  TreeSelect,
  Form,
  Field,
  CellGroup,
  Image as VanImage,
  Cell,
  Skeleton,
  Collapse,
  CollapseItem,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  SubmitBar,
  Badge,
  ActionSheet,
  Card,
  List,
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.component(Button.name, Button)
app.component(Grid.name, Grid)
app.component(GridItem.name, GridItem)
app.component(Icon.name, Icon)
app.component(Search.name, Search)
app.component(IndexBar.name, IndexBar)
app.component(IndexAnchor.name, IndexAnchor)
app.component(Divider.name, Divider)
app.component(Loading.name, Loading)
app.component(Tabbar.name, Tabbar)
app.component(TabbarItem.name, TabbarItem)
app.component(Swipe.name, Swipe)
app.component(SwipeItem.name, SwipeItem)
app.component(Tag.name, Tag)
app.component(Rate.name, Rate)
app.component(DropdownMenu.name, DropdownMenu)
app.component(DropdownItem.name, DropdownItem)
app.component(TreeSelect.name, TreeSelect)
app.component(Form.name, Form)
app.component(Field.name, Field)
app.component(CellGroup.name, CellGroup)
app.component(VanImage.name, VanImage)
app.component(Cell.name, Cell)
app.component(Skeleton.name, Skeleton)
app.component(Collapse.name, Collapse)
app.component(CollapseItem.name, CollapseItem)
app.component(Sidebar.name, Sidebar)
app.component(SidebarItem.name, SidebarItem)
app.component(Tab.name, Tab)
app.component(Tabs.name, Tabs)
app.component(SubmitBar.name, SubmitBar)
app.component(Badge.name, Badge)
app.component(ActionSheet.name, ActionSheet)
app.component(Card.name, Card)
app.component(List.name, List)
