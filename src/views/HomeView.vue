<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="posts.length">
      <PostList :posts="posts" />
    </p>
    <p v-else>
      <Spinner />
    </p>
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
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
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
