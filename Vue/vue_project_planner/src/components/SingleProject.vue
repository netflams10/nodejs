<template>
  <!-- if the project.id === true = clas="complte" -->
  <div class="project" :class="{complete: project.complete}">
    <div class="action">
        <h3 @click="toggle_content = !toggle_content">{{ project.title }}</h3>
        <!-- <h3 @click="toggleContent">{{ project.title }}</h3> -->
        <div class="icons">
            <router-link :to="{name: 'EditProject', params: {id: project.id}}">
                <span class="material-icons">edit</span>
            </router-link>
            <span @click="deleteProject" class="material-icons">delete</span>
            <span @click="toggleComplete" class="material-icons tick">done_all</span>
        </div>
    </div>
    <div v-if="toggle_content" class="details">
        {{ project.details }}
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data () {
        return {
            toggle_content: false,
            uri: "http://localhost:3000/projects/" + this.project.id
        }
    }, 
    methods: {
        toggleContent () {
            this.toggle_content = !this.toggle_content
        },
        deleteProject () {
            fetch(this.uri, {method: "DELETE"})
                // emit delete data locally to parent 
                // this.$emit('funcNameinString', dataToBeSent)
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err.message))
        },
        toggleComplete () {
            fetch(this.uri, {
                method: "PATCH", 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({complete: !this.project.complete})
            }).then(() => {
                this.$emit('complete', this.project.id)
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .project {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
        border-left: 4px solid #e90074;
    }
    h3 {
        cursor: pointer;
    }
    .action {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .material-icons {
        font-size: 24px;
        margin-left: 10px;
        color: #bbb;
        cursor: pointer;
    }

    .material-icons:hover {
        color: #777;
    }

    .project.complete {
        border-left: 4px solid #00ce89;
    }

    .project.complete .tick{
        color: #00ce89;
    }
</style>