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
        <button class="login--btn" @click="auth">Login</button>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      this.$store.dispatch("login", {
        emial: this.email,
        password: this.password
      })
      
    }
  }
}
</script>

<style scoped>

.login--btn {
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: rgb(151, 150, 150) 1px solid;
}

</style>
