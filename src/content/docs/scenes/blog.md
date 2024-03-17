---
title: 这是一篇react自学路径指南
description: A guide in react roadmap for self-study.
---


## 需求背景

- 希望尽可能构建，部署，维护，编辑发布文章简单。
- 支持SEO，网站统计分析，newsletter之类的营销工具，无代码情况下的可扩展性高。
- 支持tag分类；全文检索。
- 手机，平板， web都要看的舒服。

## 方案
部署平台： vercel：

其实github pages, cloudflare等等也可以，方案太多了，选vercel是因为他上面有很多支持一键部署的blog独立站模版，太舒服了。另外我是nextjs 爱好者，有情怀加成。

blog程序： Tailwind Nextjs Starter Blog ：

1）开源项目，基于nextjs，对于我来说是熟悉的技术栈，遇到问题方便调试。

2）可扩展性好：与主流的Newsletter，Analytics，全文检索框架，rss，自定义block扩展都集成得非常好。

3）支持mdx格式Hugo's standards编写博客，这个也是配套生态丰富。

4）官方对vercel集成，一键部署，非常丝滑。

5） 集成contentLayer。 有很多主题可以选择。

6） yarn dev即可本地调试，预览。

## qita



- Domain：CloudFlare： 这个最便宜，直接买了10年。而且本来就是做cdn出生，流量安全之类的生态体系有保障。
- md编辑器： Craft， 免费，本地，体验非常好，我感觉不输语雀，飞书之类的。
- newsletter： ConvertKit 暂时选这个，就他对新用户免费试用的流程最舒服。其他几个例如buttondown之类的免费版本连个api key都不给。
- 评论系统：GISCUS 开源免费。
- 网站流量分析： umami 开源免费，简单，支持自定义埋点。