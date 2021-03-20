<template>
  <div class="container">
    <div>
      <label for="">
        <input type="email" class="email" v-model="email">
        <p>Email</p>
      </label>
    </div>
    <div>
      <label for="">
        <input type="password" v-model="password">
        <p>Password</p>
      </label>
    </div>
    <div>
      <label for="">
        <button class="register--btn" @click="auth">Register</button>
      </label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      axios
      .post("https://peaceful-sea-42439.herokuapp.com/api/register", {
        email: this.email,
        password: this.password
      })
      .catch(error => {
        alert(error);
      })
    }
    
  }
}
</script>

<style scoped>

.register-btn {
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: rgb(151, 150, 150) 1px solid;
}

</style>