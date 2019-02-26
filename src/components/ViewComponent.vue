<template>
    <el-row class="viewcss">
        <el-col :span="8" class="colviewcss">
            <div>
                <div class="titlecss">桌面图标样式</div>
                <div class="appiconview">
                    <div class="appicondiv">
                        <img class="appiconimg" src="../assets/icon.png" alt="">
                        <div class="appiconname" >{{shortname}}</div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="colviewcss">
            <div>
                <div class="titlecss">启动页样式</div>
                <div class="appiconview"  >
                    <div class="startpagebg" v-bind:style="{ background:viewbackgroundcolor}">
                        <div>
                            <img class="appiconimg" src="../assets/icon.png" alt="">
                            <div class="appiconname">{{shortname}}</div>
                        </div>

                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="colviewcss">
            <div>
                <div class="titlecss">程序主页面</div>
                <div class="appiconview" v-bind:class="{'ifnatural':isnatural}" >
                    <div class="themecolorcss"  v-bind:style="{ background: viewthemecolor}">
                        <span style="font-size: 10px">11:42</span>
                    </div>
                    <img v-show="isstandalone" v-bind:class="{'isnaturalimg':isnatural}" style="width: 222px;top: 49px;position: relative;left: -3px" src="../assets/bowertop.png" alt="">
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import {mapState, mapMutations } from 'vuex'
    export default {
        name: 'ViewComponent',
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                shortname:  state => state.short_name,
                isstandalone: function (state) {
                    let rtflag = state.display == "standalone" ? false:true
                    return rtflag
                },
                isnatural: function (state) {
                    let rtflag = state.orientation == "natural" ? false:true
                    return rtflag
                },
                viewbackgroundcolor:state => state.background_color,
                viewthemecolor:state => state.theme_color,
            })
        },
        methods:{
            ...mapMutations([
                'changename' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
            ]),
            changeconfig(value){
                this.$store.commit('changename',{short_name:value});
            }
        }
    }
</script>

<style scoped lang="scss">
   .viewcss{
       padding: 10px;
       height: 100%;
       min-width: 1200px;
   }

   .ifnatural{
       transform: rotate(90deg);
   }

   .isnaturalimg{
       transform: rotate(-90deg);
       width: 401px !important;
       top: 230px !important;
       left: -164px !important;
       height: 40px !important;
   }
   .colviewcss{
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100%;
   }
   .appiconview{
        background:url("../assets/phonebj.png");
        height: 505px;
        width: 260px;
    }

    .appiconimg{
        width: 100px;
        height: 100px;
        border-radius: 12px;
    }
    .appiconname{
        font-size: 14px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
    }

    .appicondiv{
        position: relative;
        top: 80px;
    }

    .titlecss{
        font-size: 16px;
        font-weight: bold;
        font-family: "microsoft yahei";
        color: #00BBD3;
    }

    .startpagebg{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 221px;
        height: 401px;
        top: 49px;
        left: 17px;
        position: relative;
    }

    .themecolorcss{
        text-align: left;
        width: 221px;
        height: 17px;
        position: relative;
        top: 49px;
        left: 17px;
    }
</style>