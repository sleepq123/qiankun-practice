<template>
  <div class="home-container">
    <!-- nav顶部导航 -->
    <nav>
      <ul>
        <li class="btn-hover" @click="push('/react')">React</li>
        <li class="btn-hover" @click="push('/vue')">Vue</li>
      </ul>
      <p class="btn-hover" @click="layout">登出</p>
    </nav>
    <!-- 子应用容器 -->
    <main id="subapp-viewport">子应用</main>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    layout() {
      localStorage.clear("token");
      this.$router.push("/login");
    },
    push(subapp) {
      history.pushState(null, subapp, subapp);
    }
  }
};
</script>
<style lang="less" scoped>
.home-container {
  padding-top: 2.5rem;
}
nav {
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #fff;
  box-shadow: 0 0 5px #888;
  p {
    margin-right: 1.25rem;
  }
  ul {
    display: flex;
    li {
      display: inline-block;
      margin-left: 0.833333rem;
    }
  }
}

.btn-hover:hover {
  cursor: pointer;
  color: #4251df;
  font-weight: bold;
}
</style>
