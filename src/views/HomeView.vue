<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import SinglePost from "../components/SinglePost.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "HomeView",
  components: { SinglePost },
  setup() {
    const posts = ref([]);
    getPosts().then((data) => {
      posts.value = data;
    });
    console.log(posts);
    return { posts };    
  },
};
</script>
