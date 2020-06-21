<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
         <nuxt-link to="/" class="nav-link">Frontend</nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <li class="nav-item active">
                    <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                </li>
                <li class="nav-item active">
                    <nuxt-link to="/topics" class="nav-link">Topics</nuxt-link>
                </li>
                <li class="nav-item ">
                    
                    <nuxt-link to="/dashboard" class="nav-link">Create </nuxt-link>
                </li>            
            </div>
            
            <template v-if="!$auth.loggedIn">
                <div class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                    </li>
                    <li class="nav-item ">
                        <nuxt-link to="/register" class="nav-link">Register</nuxt-link>
                    </li>
                </div>
            </template>
            <template v-if="$auth.loggedIn">
                <div class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <a class="nav-link"> {{$auth.user.name}}</a>
                    </li>
                    <li class="nav-item ">
                        <a @click.prevent="logout" class="nav-link">Logout</a>
                    </li>
                </div>
            </template>
        </div>
    </nav>    
</template>

<script>
    export  default{
        methods:{
            logout(){
                this.$auth.logout()
            }
        }
    }    
</script>