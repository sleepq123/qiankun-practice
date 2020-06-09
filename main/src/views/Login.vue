<template>
  <div class="container">
    <div class="login-container">
      <h1>Login</h1>
      <form id="signUpForm" action="null" @submit.prevent="doLogin">
        <div class="form-group">
          <input
            id="username"
            v-model="form.username"
            class="form-control-input"
            type="text"
          />
          <label class="label-control" for="username">username:</label>
        </div>
        <div class="form-group">
          <input
            id="password"
            v-model="form.password"
            class="form-control-input"
            type="password"
          />
          <label class="label-control" for="password">password:</label>
        </div>
        <div class="form-group">用户名：admin 密码：admin</div>
        <div class="form-group">
          <button class="signup-btn" type="submit">sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      const { username, password } = this.form;
      if (username === "admin" && password === "admin") {
        // 登录成功
        localStorage.setItem("token", new Date());
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #5f4dee;
  .login-container {
    width: 80%;
    max-width: 400px;
    padding: 20px 40px 20px 20px;
    text-align: center;
    border-radius: 50px;
    background-color: #fff;
    .form-group {
      position: relative;
      margin-bottom: 20px;
      .form-control-input {
        display: block;
        width: 100%;
        padding-top: 1.0625rem;
        padding-bottom: 0.0625rem;
        padding-left: 20px;
        border: 1px solid #c4d8dc;
        border-radius: 0.25rem;
        background-color: #fff;
        color: #555;
        font: 400 0.875rem/1.875rem "Open Sans", sans-serif;
        transition: all 0.2s;
        -webkit-appearance: none;
        &:focus {
          border: 1px solid #a1a1a1;
          outline: none;
        }
        &:focus + .label-control,
        &:not(:empty) + .label-control {
          top: 0.125rem;
          opacity: 1;
          font-size: 0.75rem;
          font-weight: 700;
        }
      }
      .label-control {
        position: absolute;
        top: 0.87rem;
        left: 1.25rem;
        color: #555;
        opacity: 1;
        font: 400 0.875rem/1.375rem "Open Sans", sans-serif;
        cursor: text;
        transition: all 0.2s ease;
      }
      .signup-btn {
        display: inline-block;
        width: 100%;
        height: 3.125rem;
        border: 1px solid #5f4dee;
        border-radius: 1.5rem;
        background-color: #5f4dee;
        color: #fff;
        font: 700 0.875rem/0 "Open Sans", sans-serif;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: transparent;
          color: #5f4dee;
        }
      }
    }
  }
}
</style>
