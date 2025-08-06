import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "张稼铄的个人空间",
  description: "张稼铄的个人空间",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/13552569078/zhj-vitepress" },
    ],
  },
});
