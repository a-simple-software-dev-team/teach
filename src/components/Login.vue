<template>
    <div class="login_container">
        <div class="login_box">

            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form :model="form" label-width="auto" style="max-width: 600px" class="fp" >
             <el-form-item label="用户名">
             <el-input prefix-icon="User"  v-model="form.name"/>
            </el-form-item>



            <el-form-item label="密码">
             <el-input prefix-icon="Lock" v-model="form.password" type="password"/>
            </el-form-item>

            <el-form-item class="bp">
                <div class="bp">
                    <el-button type="primary">登录</el-button>
                    <!--<el-button type="info">Primary</el-button>-->
                </div>
            </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    const form = reactive({
        name: '',
        password:'',
    })
    // export default {}
</script>

<style lang="less" scoped>
.login_container{
    background-color:#2b4b6b ;
    height: 100%;

}
.login_box{
    width:450px ;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding:10px ;
        box-shadow: 0 0 10px #eee;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }

    }
}
.bp{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center !important;
}
.fp{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing:border-box ;
}
</style>
