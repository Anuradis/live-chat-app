<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat {{this.userName }}</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-1">Message</span>
            <span class="grey-text time">Time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
       <NewMessage :userName="userName" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
  name: "Chat",
  data() {
    return {
      value: "ms"
    };
  },
  props: ['userName'],
  components: {
    NewMessage,
  },
};
</script>

<style lang="scss">
.chat{

  h2{
    font-size: 2.6rem;
    margin-bottom: 40px;
  }
  span{
    font-size: 1.4em;
    margin: 0 4px;
  }
  .time{
     display: block;
     font-size: 1.2em;
  }


}
</style>
