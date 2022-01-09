<template>
  <div class="home">
      <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
      <button @click="updateNinjaOne">Update Ninja One Age</button>



      <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
      <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
    import {ref, reactive} from "vue";
    export default {
        setup() {
            const ninjaOne = ref({name: "mario", age: 30})
            const ninjaTwo = reactive({name: "luigi", age: 35})

            const updateNinjaOne = () => {
                ninjaOne.value.age = 40
            }

            const updateNinjaTwo = () => {
                ninjaTwo.age = 40
            }

            return {ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo}
        }
    }
</script>

<style>

</style>