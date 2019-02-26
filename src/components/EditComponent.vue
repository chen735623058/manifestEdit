<template>
    <div class="eidtcss">
        <el-row>
            <el-col :span="8" class="eidtlabel">App的名称:</el-col>
            <el-col :span="16"><el-input v-model="shortname" @change="changeconfig"  placeholder="请输入内容" size="mini"></el-input></el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="8" class="eidtlabel">预览模式:</el-col>
            <el-col :span="16">
                <el-select @change="changeconfig" size="mini" v-model="displayconfig" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="8" class="eidtlabel">屏幕方向:</el-col>
            <el-col :span="16">
                <el-select @change="changeconfig" size="mini" v-model="orientationconfig" placeholder="请选择">
                    <el-option
                            v-for="item in orientationoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="8" class="eidtlabel">启动页背景色:</el-col>
            <el-col :span="16">
                <el-color-picker @change="changeconfig" size="mini" v-model="backgroundcolorconfig"></el-color-picker>
            </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
            <el-col :span="8" class="eidtlabel">默认主题颜色:</el-col>
            <el-col :span="16">
                <el-color-picker @change="changeconfig" size="mini" v-model="themecolorconfig"></el-color-picker>
            </el-col>
        </el-row>

        <el-row style="margin-top: 10px;">
            <div style="text-align: left">
                <pre  v-highlightjson><code  v-html="jsonstr" ></code></pre>
            </div>

        </el-row>

    </div>
</template>

<script>
    import {mapState, mapMutations } from 'vuex'
    export default {
        name: 'Edit',
        data(){
          return {
              options: [{
                  value: 'standalone',
                  label: '当做一个独立应用'
              }, {
                  value: 'browser',
                  label: '使用默认浏览器模式'
              }],
              orientationoptions: [{
                  value: 'natural',
                  label: '竖屏'
              }, {
                  value: 'landscape',
                  label: '横屏'
              }],
              shortname:"应用名称",
              displayconfig:"standalone",
              orientationconfig:"natural",
              backgroundcolorconfig: '#409EFF',
              themecolorconfig: '#409EFF',
              imageUrl:'',
              jsonstr:''
          }
        },
        methods:{
            ...mapMutations([
                'changeoption' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
            ]),
            beforeAvatarUpload(file) {
                this.imageUrl = file.url;
                return false;
            },
            changeconfig(value){
                let obj = {};
                obj.short_name = this.shortname;
                obj.displayconfig = this.displayconfig;
                obj.orientationconfig = this.orientationconfig;
                obj.backgroundcolorconfig = this.backgroundcolorconfig;
                obj.themecolorconfig = this.themecolorconfig;
                this.$store.commit('changeoption',obj);

                let  objjson = JSON.parse(this.jsonstr);
                objjson.name = this.shortname;
                objjson.short_name = this.shortname;
                objjson.start_url = "/";
                objjson.display = this.displayconfig;
                objjson.background_color = this.backgroundcolorconfig;
                objjson.theme_color = this.themecolorconfig;
                objjson.orientation = this.orientationconfig;
                this.jsonstr =JSON.stringify(objjson,null, 4);
            }
        },
        created(){
            let  objjson = {};
            objjson.name = "应用名称";
            objjson.short_name = "应用名称";
            objjson.start_url = "/";
            objjson.display = "standalone";
            objjson.background_color = "#409EFF";
            objjson.theme_color = "#409EFF";
            objjson.orientation = "natural";
            let objjsonicons = [
                {
                    "src": "/icon128.png",
                    "sizes": "128x128",
                    "type": "image/png"
                },
                {
                    "src": "/icon144.png",
                    "sizes": "144x144",
                    "type": "image/png"
                }
            ]
            objjson.icons = objjsonicons;
            this.jsonstr =JSON.stringify(objjson,null, 4);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .eidtcss {
        padding: 10px;
    }

    .eidtlabel{
        line-height: 27px;
        height: 27px;
        font-size: 12px;
        font-weight: bold;
        color: #ca7804
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
