<template>
<div class="card ml-1 mt-5 mb-5" style="width: 18rem;">
  <img :src="imgSrc" class="card-img-top" alt="vue">
  <div class="card-body">
    <h5 class="card-title">{{cardTitle}}</h5>
    <p class="card-text">{{cardDescription}}</p>
    <a :href="link" class="btn btn-primary">{{buttonText}}</a>
  </div>
</div>
</template>
<script>
export default {
    name:"card",
    props:{
        cardTitle:String,
        cardDescription:Text,
        buttonText:String,
        imgSrc:String,
        link:String,
    }
}
</script>