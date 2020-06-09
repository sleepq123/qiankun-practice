<template>
  <div class="entry-container">
    <ul>
      <li @click="push('/react')">React</li>
      <li @click="push('/vue')">Vue</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    push(subapp) {
      history.pushState(null, subapp, subapp);
    }
  }
};
</script>

<style scoped lang="less">
.entry-container {
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    transition: all 10s ease;
    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8.333333rem;
      height: 8.333333rem;
      margin: 20px;
      font-weight: bold;
      border-radius: 1.25rem;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      transition: all 2s ease;
      &:hover {
        cursor: pointer;
        color: #fff;
        background: linear-gradient(to bottom, #d3959b, #bfe6ba);
      }
    }
  }
}
</style>
