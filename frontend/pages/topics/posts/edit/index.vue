<template>
    <div class="container">
        <h2>
            Update Post
        </h2> 
        <form @submit.prevent="update">
            <div class="form-group mt-5">
                <textarea class="form-control" rows="5" v-model="post.body"></textarea>
                
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
            post:{
                body:''
            }
        }
    },
    async asyncData({$axios,params}){
        const {data} = await $axios.$get(`/topics/${params.id}/posts/${params.pid}`)
        return  {post: data}
    },
    methods:{
        async update(){
            await this.$axios.$patch(`/topics/${this.$route.params.id}/posts/${this.$route.params.pid}`,{
                body: this.post.body
            })
            this.$router.push('/topics')
        }

        
    }
}
</script>