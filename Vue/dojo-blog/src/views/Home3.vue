<template>
  <div>
    <input type="text" v-model="search">
    <p>Search - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
        {{ name }}
    </div>
  </div>
</template>

<script>
    import {computed, ref} from "vue"

    export default {
        setup () {
            const search = ref ('')
            const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'bowser', 'kooper', 'peach']);

            const matchingNames = computed(() => {
                return names.value.filter(name => name.includes(search.value))
            })
            return {search, names, matchingNames}
        }
    }
</script>
