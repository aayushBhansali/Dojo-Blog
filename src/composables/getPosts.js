import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const errors = ref([])

    const load = async () => {
      try {

        let data = await fetch('http://localhost:3000/posts')

        if (!data.ok) {
          throw new Error('No Data Available')
        }

        posts.value = await data.json()

      } catch (error) {
        erros.value = error
        console.log(error.message)
      }
      
    }

    return { posts, errors, load }
}

export default getPosts;