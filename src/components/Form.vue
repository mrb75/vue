<template>
  <form>
    <div class="form-group" v-for="val in inputVal" :key="val">
      <label :for="val['name']">{{val['name']}}</label>
      <input
        :type="val.type"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        :placeholder="val.placeHolder"
      />
      <small id="emailHelp" class="form-text text-muted">{{val["error"]}}</small>
    </div>
    <!-- <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>-->
    <button type="submit" class="btn btn-primary">{{buttonText}}</button>
  </form>
</template>
<script>
export default {
  name: "Form",
  data: function() {
    return {};
  },
  props: {
    inputVal: Array,
    buttonText: String
  }
};
</script>