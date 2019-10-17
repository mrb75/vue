<template>
<div class="container-fluid col-md-6">
    <h4>{{msg}}</h4>
<table class="table">
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
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <a class="btn btn-success mt-5" @click="func">add</a>
</div>
</template>

<script>
export default {
  name: "Test",
  data: function(){
      return{
    message: "k"
      }
  },
  props: {
    msg: String,
    disable: Array,
    func: Function
  }
};
</script>

<style>
</style>