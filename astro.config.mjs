import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Indie dev",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "场景",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "写文档", link: "/scenes/docs/" },
            { label: "开发站点", link: "/scenes/website/" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
