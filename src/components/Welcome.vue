<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">
          Welcome
        </h2>
        <form @submit.prevent="logIn">
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="userName" />
          <p class="red-text" v-if="feedback">{{ this.feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      userName: null,
      feedback: null
    };
  },
  methods: {
    logIn() {
      if (this.userName) { 
        this.$router.push({ name: 'Chat', params: {userName: this.userName}})
         console.log(this.userName);
         this.feedback = null;
      } else {
        this.feedback = "You must enter the name";
      }
     
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.welcome {
  max-width: 500px;
  margin-top: 100px;

  h2 {
    font-size: 3rem;
  }

  button {
    margin: 30px auto;
  }
}
</style>
