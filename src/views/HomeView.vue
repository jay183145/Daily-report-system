<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </p>
    <p v-else>Loading...</p>
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
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
        console.log(data)
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    load()

    return { posts, showPosts, load, error }
  }
}
</script>
