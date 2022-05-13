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
import getPosts from "../composables/getPosts";

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const showPosts = ref(true)
    
    const { posts, error, load } = getPosts()

    load()

    return { showPosts, posts, error }
  }
}
</script>
