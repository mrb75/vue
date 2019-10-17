<template>
    <div>
        <p v-for="item in disable" :key="item">
            {{item}}
        </p>
        <input v-model="message">
        <p>{{message}}</p>
        <button @click="func">test</button>
    </div>
</template>

<script>
export default {
    name:'Test',
    data:{
        message:"k"
    },
    props:{
        msg:String,
        disable:String,
        func:Function,
    }
}
</script>

<style>

</style>