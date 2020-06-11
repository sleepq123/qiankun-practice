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
    <span v-if="loading">loading...</span>
    <main ref="main" id="subapp-viewport"><HelloWorld v-if="!loading" /></main>
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed:{
    loading(){
      return this.$store.state.loading;
    }
  },
  methods: {
    layout() {
      localStorage.clear("token");
      this.$router.push("/login");
    },
    push(subapp) {
      history.pushState(null, subapp, subapp);
    }
  },
  mounted(){
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
