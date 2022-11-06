<template>
    <div>
        <input type="text" placeholder="New Todo" v-model="newTodo"/>
        <input type="submit" value="Submit" @click="getNewTodo" />
    </div>
</template>

<script>
export default {
    name : 'InputTodo',
    data(){
        return {
            newTodo : ''
        }
    },
    methods : {
        getNewTodo(e){
            if (this.newTodo !== '') {
                e.preventDefault()
                this.$emit('add-new-todo', this.newTodo)
                this.newTodo = ''
            }else{
                alert('You haven\'t typed a new task yet.')
            }
            
        }
    }
}
</script>

<style scoped>
</style>