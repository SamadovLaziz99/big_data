<template>
  <div>
    <iframe id="iframepdf" :src="`https://trator-laravel-images.s3.eu-central-1.amazonaws.com/category/bigdata/lessons/${$route.query.id}-mavzu.pdf`"></iframe>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
#iframepdf {
  width: 100%;
  height: 100vh;
}
</style>
