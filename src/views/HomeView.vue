<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from '@vue/reactivity'
export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)
    const showPosts = ref(true)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts1')
        if (!data.ok) {
          throw Error('no data available')
        }
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    load()
    return { posts, showPosts, load }
  }
}
</script>
