import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const errors = ref(null)

    const load = async () => {
      try {

        let data = await fetch('http://localhost:3000/posts/' + id)

        if (!data.ok) {
          throw new Error('Post does not exist')
        }

        post.value = await data.json()

      } catch (error) {
        errors.value = error
        console.log(error.message)
      }
      
    }

    return { post, errors, load }
}

export default getPost