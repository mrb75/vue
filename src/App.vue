<template>
  <div id="app">
    <Test :danger="danger" :form="form" :disable="tex" :msg="txt" :func="change" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import "./assets/css/bootstrap.min.css";
import VueSweetAlert2 from 'vue-sweetalert2';
import "./assets/css/sweetalert2.min.css"
import Swal from 'sweetalert2';
export default {
  name: "app",
  components: {
    Test
  },
  data: function() {
    return {
      txt: "ggggg",
      tex: [{ 1: "one" }, { 1: "two" }],
      form: [
        {
          name: "title",
          type: "text",
          placeHolder: "title",
          lable: "title",
          error: "error"
        },
        {
          name: "news",
          type: "checkbox",
          placeHolder: "title",
          lable: "news",
          error: "error2"
        }
      ],
      danger:false,
      alertType:"success",
    };
  },
  methods: {
    change() {
      Swal({
        title:"افزوده شد.",
        text:"افزوده شدش",
        icon:this.alertType,
        footer: '<a href="xvideos.com">Why do I have this issue?</a>'
      });
      this.txt = Math.random().toString();
      let val = Math.pow(this.tex.length + 1, 2);
      this.tex.push({ "1": val.toString() });
      if(!this.danger && this.tex.length>4){
        this.danger=true;
        this.alertType="warning";
      }
    }
  },
  //lifeCycle
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
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
