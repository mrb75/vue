<template>
  <div>
    <p v-for="item in disable" :key="item">{{item}}</p>
    <input v-model="msg" />
    <button @click="func">{{msg}}</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data: {
    message: "k"
  },
  props: {
    msg: String,
    disable: String,
    func: Function
  }
};
</script>

<style>
</style>