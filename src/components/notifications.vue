<template>
  <div class="show">
    <el-icon size="large"  class="place"><ChatDotRound /></el-icon>
    &emsp; &emsp; 
    <el-text  size="large">家教消息通知</el-text>
    <el-text class="mx-1" >消息框</el-text>
  <div class="con">

    <el-icon class="place1"><User /></el-icon>
    <el-input
    v-model="textarea"
    style="width: 240px"
    :rows="2"
    type="textarea"
    placeholder="Please input"
    class="place3"
  />
   
    <el-button type="primary" class="place2":icon="Position" color="#f9f7f7" />

  </div>


  </div>
</template>
<script setup>

import { ref } from 'vue'
const textarea = ref('')
import { Position, Edit } from '@element-plus/icons-vue'
</script>
<style scoped>
.con{
  position: relative;
  width: 350px;
  height: 60px;
  border: 2px solid #071a52;
  position: absolute;
    left:7%;
    top: 80%;
}
.show{
  position: relative;
  width: 400px;
  height: 500px;
  border: 2px solid #071a52;
  position: absolute;
    left: 40%;
    top: 20%;
}
.place{
 position: absolute;
  width: 20px;
  height: 25px;

}
.place1{
 position: relative;
  width: 20px;
  height: 25px;
  position: absolute;
    left: 10%;
    top: 30%;
    font-size: 25px;


}
.place2{
 position: relative;
  width: 20px;
  height: 25px;
  position: absolute;
    left: 90%;
    top: 30%;
    font-size: 25px;


}
.mx-1{
  position: absolute;
    left: 10%;
    top: 20%;
    font-size:15px;
    border: 2px solid #071a52;
    height: 50%;
    width: 80%;
}

</style>
