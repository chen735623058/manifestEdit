<template>
    <div style="height: 100%">
        <el-header height="80px" style="background: #00838F;color: #fff">Manifest文件编辑器</el-header>
        <el-container>
            <el-aside width="300px">
                <EditComponent></EditComponent>
            </el-aside>
            <el-main>
                <ViewComponent></ViewComponent>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    // @ is an alias to /src
    import EditComponent from '@/components/EditComponent.vue'
    import ViewComponent from '@/components/ViewComponent.vue'

    export default {
        name: 'home',
        components: {
            EditComponent,
            ViewComponent
        }
    }
</script>
<style>
    .el-header{
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        font-weight: bold;
    }
    .el-aside {
        background-color: #00BBD3;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        padding: 0px !important;
    }

    .el-container{
        height: calc(100% - 80px);
        position: relative;
        top: 0px;
    }


</style>