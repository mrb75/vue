<template>
  <div class="container-fluid col-md-6">
    <h4>{{msg}}</h4>
    <slot></slot>
    <Table :multiColor="multiColor" :removeFunc="removeFunc" :disable="disable" />
    <Form :inputVal="form" buttonText="ثبت" />
    <a  class="btn btn-success mt-5 text-white" :class="{'btn-warning':danger}" @click="func">افزودن</a>
    
  </div>
</template>

<script>
import Table from "./Table.vue";
import Form from "./Form.vue";
export default {
  name: "Test",
  components: {
    Table,
    Form,
  },
  data: function() {
    return {
      message: "k",
      disable: this.disable,
      form: this.from,
      removeFunc:this.removeFunc,
    };
  },
  props: {
    msg: String,
    disable: Array,
    func: Function,
    form: Array,
    danger:Boolean,
    removeFunc: Function,
    multiColor: Boolean,
  }
};
</script>

<style>
</style>