import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      short_name: "应用名称",
      display:"standalone",
      orientation:"natural", // 屏幕的方向
      background_color:"#409EFF", // 启动页背景颜色
      theme_color:"#409EFF", // 如果你采用的是 browser 模型来阅览网页，那么，设置 theme_color 可以显示的改变 navigator bar 的颜色值。
  },
  mutations: {
      changeoption(state,payload){
          state.short_name = payload.short_name;
          state.display = payload.displayconfig;
          state.orientation = payload.orientationconfig;
          state.background_color = payload.backgroundcolorconfig;
          state.theme_color = payload.themecolorconfig;
      }
  },
  actions: {

  }
})
