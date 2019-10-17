<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test disable="tex" :msg="txt" :func="change" />
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Test
  },
  data:function(){
    return{
    txt:"ggggg",
    }
  },
  methods:{
    change(){
      this.txt=Math.random().toString();
      console.log("test");
      }
  }
}
let text=1;

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
