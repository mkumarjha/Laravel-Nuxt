<template>
    <div class="container col-md-6 mt-5">
        <h2>Register</h2>
        <br/>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model.trim="form.name" class="form-control"  placeholder="Enter name" autofocus>
                <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
            </div>
            <div class="form-group">
                <label >Email address</label>
                <input type="email" v-model.trim="form.email" class="form-control"  placeholder="Enter email" >
                <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label >Password</label>
                <input type="password" v-model.trim="form.password" class="form-control" placeholder="Password">
                <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
            </div>
           
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <br/>
        <p>Already have an account ? <nuxt-link to="/login">Login</nuxt-link></p>
    </div>
</template>

<script>
export default {
    middleware: ['guest'], 
    data(){
        return {
            form:{
                name:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        async submit(){
            try{
                await this.$axios.$post('register',this.form);
                await this.$auth.loginWith('local',{
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
            }catch(e){
                console.log(e)
            }
            if(this.$auth.loggedIn) {
                this.$router.push({
                    path: "/dashboard"
                })
            }else{
               
            }
        }
    }
}
</script>