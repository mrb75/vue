<template>
  <div id="app">
    <span>{{this.store.getters.getAli.age}}</span>
    <Test :multiColor="multiColor" :removeFunc="remove" :danger="danger" :form="form" :disable="tex" :msg="txt" :func="change">
    <a>{{this.store.state.text}}</a>
    
    </Test>
    <container_row_6>
      <card v-for="(item) in card"  :key="item"
       :cardTitle="item['cardTitle']" :cardDescription="item['cardDescription']" :buttonText="getATextVal" :imgSrc="item['imageSrc']" :link="item['link']" />
    </container_row_6>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import card from "./components/card.vue"
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-rtl.css";
import "./assets/css/sweetalert2.min.css";
import container_row_6 from "./wrapper/container_row_6.vue"
import Swal from 'sweetalert2'
import {mapState} from 'vuex'

export default {
  name: "app",
  components: {
    Test,
    card,
    container_row_6,
  },
  computed:mapState({
      getCardButtonText:state=>state.text,
      getATextVal:state=>state.a.text,
    })
  ,
  data: function() {
    return {
      store:this.$store,
      txt: this.getCardButtonText,
      cardButtonText:this.count,
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
      multiColor:true,
      card:[{cardTitle:'testTitle',cardDescription:'testDescription',imageSrc:require('./assets/logo.png'),link:'http://mrb76.com'},
            {cardTitle:'testTitle',cardDescription:'testDescription',imageSrc:require('./assets/logo.png'),link:'http://mrb76.com'},
            {cardTitle:'testTitle',cardDescription:'testDescription',imageSrc:require('./assets/logo.png'),link:'http://mrb76.com'},
            {cardTitle:'testTitle',cardDescription:'testDescription',imageSrc:require('./assets/logo.png'),link:'http://mrb76.com'},
            {cardTitle:'testTitle',cardDescription:'testDescription',imageSrc:require('./assets/logo.png'),link:'http://mrb76.com'},],
    };
  },
  
  methods: {
    change() {
      this.store.dispatch("inc");
      //this.store.commit("increament")
      console.log(this.store.getters.getAli)
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
    },
    remove(idx){
      let self=this;
      // eslint-disable-next-line
      swal("پایه ای بزنیم سوشیو فردا؟", {
                        dangerMode: true,
                          buttons: true,
                        }).then(function(dismiss) {
                           if(dismiss){
                           self.tex.splice(idx,1);
                           }
                           if(self.danger && self.tex.length<5){
                              self.danger=false;
                              self.alertType="success"
                            }
                        });
            
                }
  },
  //lifeCycle
  beforeCreate() {
    // eslint-disable-next-line
    console.log("beforeCreate");
  },
  created() {
    // eslint-disable-next-line
    console.log("created");
  },
  beforeMount() {
    // eslint-disable-next-line
    console.log("beforeMount");
  },
  mounted() {
    // eslint-disable-next-line
    console.log("mounted");
  },
  beforeUpdate() {
    // eslint-disable-next-line
    console.log("beforeUpdate");
  },
  updated() {
    // eslint-disable-next-line
    console.log("updated");
  },
  beforeDestroy() {
    // eslint-disable-next-line
    console.log("beforeDestroy");
  },
  destroyed() {
    // eslint-disable-next-line
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
