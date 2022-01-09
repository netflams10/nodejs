<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Post</button>
    <button @click="posts.pop()">Delete Post</button>
  </div>
</template>

<script>
    import PostList from "../components/PostList.vue"
    import {ref} from 'vue'
    export default {
        name: "Home",
        components: {PostList},
        setup () {
            const posts = ref([
                {title: "Post 1", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", id: 1},
                {title: "Post 2", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", id: 2}
            ])

            const showPosts = ref(true)

            return {posts, showPosts}
        },
        mounted () {
            console.log("mounted using options api")
        }
    }
</script>
