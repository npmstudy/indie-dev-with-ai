# 独立开发者的最佳技术栈

## 技术栈

基础5大件：node+astro+react+tailwind+mdx

后端node里已经有了。koa\express就够了，vercel上发布。
当然，vercel funcion、next也行
如果在补一个，shadcn/ui可以算一个。

至此。8大技术栈

- 1、node（基础）
- 2、astro（基础）
- 3、react（基础）
- 4、tailwind（基础）
- 5、mdx（基础）
- 6、next（进阶）
- 7、remix（进阶）
- 8、shadcn/ui（进阶）

## 使用场景

- 快速建站
- 写文档
- 建博客
- 加订单、支付
- 集成服务
- 开发完整saas
- 海外支付

分析

- 门户、博客、文档，astro无敌，性能好，开发简单，如果想ssr，也可以有很多node adapter
- 简单api，express、koa、vercel funcion、next都可以
- astro可以quick，也可以dirty。我个人比较习惯react，组件生态足够。实在需要，加个shadcn/ui
- 我不喜欢next，但next有一些生态是不错的，拿过来改改用，还是很爽的
- 关于css，tailwind写响应式，真是太爽了，不是那么关注可读性，那真是太快了
- 用tailwind 和 shadcn/ui 的好处之一是可以搭配https://v0.dev 遇到想不出来的样式，可以直接问，拷贝一下，依赖一装，成了
- 以上技术和各种现有服务都非常容易集成，比如clark、paddle、supabase、stripe，这些现有集成的，都放在独立开发者的服务。集成服务是要花不少精力的一部分。

## 还愿清单

- 写一个个人站点
- 写一个项目或教程文档
- 建一个博客
- 写一个组件
- 开发一个micro saas
- 用一次ai写10行以上代码

## 其他

- 限于篇幅，remix我没写，我很喜欢这个。
- 有人说next就不需要astro。我的回复是未必，做静态站点，next远没有astro爽。别说astro兼容vue、alphine等，就是性能，collection也吊打next。
- 2gua过两天会说用go也挺好的：go只能替换node部分，都是function，无所谓的。会啥用啥。剩下那几个都依赖node，娃哈哈

独立开发者要求快，能复用就复用，将精力放到产品设计上才是正经事。

以上。欢迎讨论
