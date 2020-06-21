<template>
    <div class="container">
        <div  class="bg-light mt-5 mb-5" style="padding:20px;">
            <h2 class="display-3">{{topic.title}}</h2>
            <hr>
            <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
            <div v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
                <p>{{content.body}}</p>
                <div v-if="authenticated">
                    <div v-if="content.user.id==user.id">
                        <nuxt-link :to="{name:'topics-posts-edit',params:{id:$route.params.id,pid:content.id}}">  
                            <button class="btn btn-success fa fa-edit  pull-right"></button>
                        </nuxt-link>

                        <button @click="deletePost(content.id)" class="btn btn-outline-danger fa fa-trash  pull-right"></button>
                    </div>
                </div>
                <p class="text-muted">{{content.created_at}} by {{content.user.name}}</p>
            </div>
        </div>
        <div class="mt-5 ml-5 mb-5" v-if="authenticated">
            <form @submit.prevent="create">
                <div class="form-group">
                    <label>Add a new post</label>
                    <textarea class="form-control" rows="5" v-model="body"></textarea>
                    
                    <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small>
                </div>
                <button class="btn btn-outline-primary">Add a new post</button>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            topic:'',
            body:''
        }
    },
    async asyncData({$axios,params}){ 
        const {data} = await $axios.get(`/topics/${params.id}`)
        return {
            topic: data.data
        }
    },
    methods:{
        async create(){
            await this.$axios.$post(`/topics/${this.$route.params.id}/posts`,{body: this.body})
            this.$router.push('/topics')
        },
        async deletePost(id){
            this.$axios.$delete(`/topics/${this.$route.params.id}/posts/${id}`)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .content{
        border-left:10px solid white;
        padding: 0 10px 0 10px;
    }
    .btn-outline-success, .btn-outline-danger{
        border:none;
    }
</style>