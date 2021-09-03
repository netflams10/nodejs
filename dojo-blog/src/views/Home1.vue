<template>
  <div class="home">
    <p ref="p">My name is {{ name }}, and I am {{ age }} year Old.</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Increase Age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  setup () {
    // let name = "David"
    // let age = 30
    let name = ref("David")
    let age = ref(30)

    const p = ref(null)

    const handleClick = () => {
      // console.log("I am clicked!")
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = "Hello ninjas"

      name.value = "luigi"
      age.value = 35
    }

    return {name, age, handleClick, p}
  }
}
</script>
