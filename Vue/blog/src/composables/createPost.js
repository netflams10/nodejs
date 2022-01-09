import { ref } from "vue"

const createPost = (data) => {
    const error = ref(null)
    const message = ref(null)

    const load = async () => {
        try {
            const res = await fetch('http://localhost:3000/posts', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }) 


            console.log(res)

        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {load, message, error}
}

export default createPost