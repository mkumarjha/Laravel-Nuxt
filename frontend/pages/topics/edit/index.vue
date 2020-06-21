<template>
    <div class="container">
        <h2>
            Update Topic Title
        </h2> 
        <form @submit.prevent="update">
            <div class="form-group">
                <label><strong>Topic Title</strong></label>
                <input type="text" v-model.trim="topic.title" class="form-control"  placeholder="Enter Topic Title" autofocus>
                <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
            </div>
            <button type="submit" class="btn btn-outline-success">Update</button>
        </form>
        <p class="mt-5 btn-outline-warning">
            <nuxt-link to="/topics">Back to topics</nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            topic:{
                title:''
            }
        }
    },
    async asyncData({$axios,params}){
        const {data} = await $axios.$get(`/topics/${params.id}`)
        return  {topic: data}
    },
    methods:{
        async update(){
            await this.$axios.patch(`/topics/${this.$route.params.id}`,{
                title: this.topic.title
            })
            this.$router.push('/topics')
        }

        
    }
}
</script>