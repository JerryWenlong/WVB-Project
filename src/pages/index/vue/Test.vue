<template>
    <div class="test">
        <p>{{message}}</p>
        <input v-model="message"></input>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                message: 'Hello Vue.js!'
            }
        }
    }
</script>

<style type="text/css">
    .test input{
        color: #424242
    }
</style>