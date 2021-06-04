<template>
    <div v-if="error"> {{ error }} </div>
    <div v-if="posts.length">
        <PostList :posts="filtered"/>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PostList from "../components/PostList"
import getPosts from "../composables/getPosts"
import Spinner from "../components/Spinner"

export default {
    components: { PostList, Spinner },

    props: [ 'tag' ],

    setup() {
        const { posts, errors, load } = getPosts();
        load();

        const route = useRoute();

        let filtered = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(route.params.tag)
            })
        })

        return { posts, errors, load, filtered }
    }
}
</script>

<style>

</style>