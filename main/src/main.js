import "./render"; // 渲染主应用基座
import {
  registerMicroApps,
  runAfterFirstMounted,
  start,
  initGlobalState
} from "qiankun";
import store from './store';

const loader = loading => {
  store.commit("changeLoading", loading);
}
/**
 * 注册子应用
 */
registerMicroApps(
  [
    {
      name: "react",
      entry: "//localhost:8081",
      container: "#subapp-viewport",
      loader,
      activeRule: "/react"
    },
    {
      name: "vue",
      entry: "//localhost:8082",
      container: "#subapp-viewport",
      loader,
      activeRule: "/vue"
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log("[LifeCycle] before load %c%s", "color: green; ", app.name);
      }
    ],
    beforeMount: [
      app => {
        console.log(
          "[LifeCycle] before mount %c%s",
          "color: green; ",
          app.name
        );
      }
    ],
    afterUnmount: [
      app => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;   ",
          app.name
        );
      }
    ]
  }
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: "qiankun"
});

onGlobalStateChange((value, prev) =>
  console.log("[onGlobalStateChange - master]:", value, prev)
);

setGlobalState({
  ignore: "master",
  user: {
    name: "master"
  }
});

start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
