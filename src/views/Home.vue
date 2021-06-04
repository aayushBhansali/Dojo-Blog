<template>
  <div class="home">
    <h1> Home </h1>
    <div v-if="errors.length">
      <h4> {{ errors }} </h4>
    </div>

    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>

    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList"
import getPosts from "../composables/getPosts"
import Spinner from "../components/Spinner"

export default {
  name: 'Home', 
  components: { PostList, Spinner },

  setup() {

    const { posts, errors, load } = getPosts();
    load()
    
    return { posts, errors }
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