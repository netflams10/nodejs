import {ref} from "vue";

/**
 * take in an array of posts
 * create anew tag set (no duplicate in sets)
 * add the tags of each of the post to the tag set
 * return a single array of tags based on the set
 * @param {*} posts 
 */
const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag))
    })

    // trun set to array
    tags.value = [...tagSet]

    return {tags}
}

export default useTags