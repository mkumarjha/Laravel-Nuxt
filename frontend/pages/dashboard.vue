<template>
    <div class="container col-md-6 mt-5">
        <h2>Create A New Topic</h2>
        <hr>
        <form @submit.prevent="create"> 
            <div class="form-group">
                <label><strong>Topic Title</strong></label>
                <input type="text" v-model.trim="form.title" class="form-control"  placeholder="Enter Topic Title" autofocus>
                <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small>
            </div>
            <div class="form-group">
                <label ><strong>Topic Body</strong></label>
                <textarea class="form-control" rows="5" v-model="form.body"></textarea>
                <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small>
            </div>
           
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
        <br/>
    </div>
</template>

<script>
export default {
    middleware:['auth'],
    data(){
        return {
            form:{
                title:'',
                body:'',
            }
        }
    },
    methods:{
        async create(){
            try{
                await this.$axios.$post('/topics',this.form)
                this.$router.push({
                    path: "/"
                })
            }catch(e){
                console.log(e)                
            }  
        }
    }
}
</script>