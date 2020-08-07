<template>
  <div class="chat container">
    <h2 class="center teal-text">{{ this.userName }} logged to the chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="(message, index) in messages" :key="index">
            <span class="teal-text">{{ message.userName }}:</span>
            <span class="grey-text text-darken-1">{{ message.message }}</span>
            <span class="grey-text time">{{ message.date }}</span>
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
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";

export default {
  name: "Chat",

  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("date");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            message: doc.data().message,
            userName: doc.data().userName,
            date: moment(doc.data().date).format("lll")
          });
        }
      });
    });
  },
  methods: {},
  props: ["userName"],
  components: {
    NewMessage
  }
};
</script>

<style lang="scss">
.chat {
  h2 {
    font-size: 2.6rem;
    margin-bottom: 40px;
  }
  span {
    font-size: 1.4em;
    margin: 0 4px;
  }
  .time {
    display: block;
    font-size: 0.8em;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
  .messages::-webkit-scrollbar {
    width: 3px;
  }
  .messages::-webkit-scrollbar-track {
    background-color: #ddd;
  }
  .messages::-webkit-scrollbar-thumb{
    background-color: #aaa;
  }
  }
</style>
