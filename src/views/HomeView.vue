<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </p>
    <p v-else>
      <Spinner />
    </p>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import { ref } from '@vue/reactivity'
import getPosts from "../composables/getPosts"
import Spinner from "../components/Spinner.vue"

export default {
  name: 'Home',
  components: { PostList, Spinner },
  setup() {
    const showPosts = ref(true)
    
    const { posts, error, load } = getPosts()

    load()

    return { showPosts, posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
