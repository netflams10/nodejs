<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
    import { onMounted, onUnmounted, onUpdated } from 'vue'
    import SinglePost from "./SinglePost.vue"

    export default {
        props: ["posts"],
        components: {SinglePost},
        // access props in setup function
        setup (props) {
            console.log(props)
            console.log(props.posts)

            onMounted(() => console.log("mounted component"))
            onUnmounted(() => console.log("component unmounted"))
            onUpdated(() => console.log('component updated'))
        }
    }
</script>

<style>

</style>