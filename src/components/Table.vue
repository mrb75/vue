<template>
  <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,idx) in disable" :key="item">
        <th scope="row">{{idx+1}}</th>
        <td>{{item["1"]}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "Table",
  props: {
    disable: Array
  },
  data: function() {
    return {
      message: "k"
    };
  },
};
</script>
<style>

</style>