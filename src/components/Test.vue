<template>
    <div>
        <p v-for="item in disable" :key="item">
            {{item}}
        </p>
        <button v-on:click="ch">a</button>
    </div>
</template>

<script>
export default {
    name:'Test',
    props:{
        msg:String,
        disable:String,
        func:Function
    }
}
</script>

<style>

</style>