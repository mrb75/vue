<template>
  <div id="app">
    <Test  :disable="tex" :msg="txt" :func="change" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import "./assets/css/bootstrap.min.css";
export default {
  name: "app",
  components: {
    Test
  },
  data: function() {
    return {
      txt: "ggggg",
      tex: [{1:"one"},{1:"two"}],
    };
  },
  methods: {
    change() {
      this.txt = Math.random().toString();
      let val=Math.pow((this.tex.length+1),2);
      this.tex.push({"1":val.toString()});
    }
  },
  //lifeCycle
   beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
      console.log("updated");
    },
  beforeDestroy(){
    console.log("beforeDestroy");
  },
  destroyed(){
    console.log("destroyed");
  },
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
