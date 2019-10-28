<template>
  <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th>حذف</th>
      </tr>
    </thead>
    <tbody>
      <tr :class="classObject(idx)" v-for="(item,idx) in disable" :key="item">
        <th scope="row">{{idx+1}}</th>
        <td>{{item["1"]}}</td>
        <td><button class="btn btn-danger" @click="removeFunc(idx)">حذف</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "Table",
  props: {
    disable: Array,
    removeFunc: Function,
    multiColor:Boolean,
  },
  data: function() {
    return {
      message: "k"
    };
  },
  methods:{
    classObject(idx){
      if (this.multiColor) {
        return{
          'table-success':idx<3,'table-primary':idx<5,'table-danger':idx>=5 
        }
      }else{
        return('')
      }
    }
  }
};
</script>
<style>
</style>