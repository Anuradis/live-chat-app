<template>
  <div class="new-message">
    <form @submit.prevent='addMessage'>
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="feedback" class="red-text">{{this.feedback}}</p>
    </form>
{{userName}}
  </div>
</template>

<script>

import db from '@/firebase/init'

  export default {
    Name: 'NewMessage',
    data() {
      return {
        newMessage: null ,
        feedback: null
      }
    },
    methods: {
      addMessage() {
        if(this.newMessage){
          db.collection('messages').add({
            userName: this.userName,
            message: this.newMessage,
            date: Date.now()
          }).catch(err => console.log(err));
          console.log(this.userName, this.newMessage, Date.now());
          this.feedback = null;
        } else {
          this.feedback = "You must enter the message in order to send one"
        }
        
      }
    },
    props: ['userName']
  }
</script>

<style lang="scss" scoped>

</style>