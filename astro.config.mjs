import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Indie dev",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        { label: "React自学路径", link: "/react" },
        {
          label: "场景",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "写文档",
              link: "/scenes/docs/",
            },
            {
              label: "开发站点",
              link: "/scenes/website/",
            },
            {
              label: "建博客",
              link: "/scenes/blog/",
            },
            {
              label: "加订单、支付",
              link: "/scenes/order/",
            },
            {
              label: "集成服务",
              link: "/scenes/service/",
            },
            {
              label: "开发完整saas",
              link: "/scenes/saas/",
            },
            {
              label: "海外支付",
              link: "/scenes/stripe/",
            },
          ],
        },
        {
          label: "学习步骤",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "1、建站",
              link: "/guides/site/",
            },
            {
              label: "2、学习写组件和页面",
              link: "/guides/component/",
            },
            {
              label: "3、学习写文档",
              link: "/guides/doc/",
            },
            {
              label: "4、学习写博客",
              link: "/guides/blog/",
            },
            {
              label: "5、学习其他集成场景",
              link: "/guides/intergration/",
            },
          ],
        },
        {
          label: "专项学习",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "1、Node.js 写API",
              link: "/guides/node/",
            },
            {
              label: "2、Astro 建站",
              link: "/guides/astro/",
            },
            {
              label: "3、React 写组件和页面",
              link: "/guides/react/",
            },
            {
              label: "4、Tailwind CSS",
              link: "/guides/tailwind/",
            },
            {
              label: "5、Mdx 写文档",
              link: "/guides/mdx/",
            },
            {
              label: "6、Next.js 全栈",
              link: "/guides/example/",
            },
            {
              label: "7、Remix.js SSR",
              link: "/guides/example/",
            },
            {
              label: "8、Shadcn/ui 开箱即用组件库",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    react(),
  ],
});