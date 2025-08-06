export default [
  { text: "首页", link: "/" },
  {
    text: "生活分享",
    link: "/markdown-examples",
    activeMatch: "/markdown-examples",
  },
  { text: "成长点滴", link: "/life/index" },
  { text: "二级菜单", items: [{ text: "二级菜单1", link: "/life/index" }] },
  { text: "点击跳转", link: "http://baidu.com", target: "_blank" },
];
