<!--
 * @Description: 中文文档
 * @Author: Harry
 * @Date: 2021-09-07 09:32:40
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-09-10 23:33:04
 * @LastEditors: Harry
-->
<div align="right">
  语言:
  中文
  <a title="English" href="/README_en.md">英文</a>
</div>

# hexo-generator-restful-wx
* 基于[hexo-generator-restful](https://www.npmjs.com/package/hexo-generator-restful) 进行修改, 增加了指定文章列表生成(用于轮播图的展示)

## Install

```bash
npm install hexo-generator-restful-wx --save
```

## 代表项目

* [代表项目](https://github.com/Rr210/hexo-wx-api)
* 基于此接口 设计的一款微信小程序

## 配置hexo文件下的_config.yml

* 加入以下为默认配置, 属性值为 `false` 表示不生成.

```yml
restful:
  # site 可配置为数组选择性生成某些属性
  # site: ['title', 'subtitle', 'description', 'author', 'since', email', 'favicon', 'avatar']
  # site: true        # hexo.config mix theme.config
  posts_size: 10    # 文章列表分页，0 表示不分页
  posts_props:      # 文章列表项的需要生成的属性
    title: true
    slug: true
    date: true
    updated: true
    comments: true
    path: true
    excerpt: false
    cover: true      # 封面图，取文章第一张图片
    content: false
    keywords: false
    categories: true
    tags: true
  categories: true         # 分类数据
  use_category_slug: false # Use slug for filename of category data
  tags: true               # 标签数据
  use_tag_slug: false      # Use slug for filename of tag data
  post: true               # 文章数据
  pages: false             # 额外的 Hexo 页面数据, 如 About
  swipers_list: []          # 生成指定的页面信息,填写你文章文件夹名称比如['css','js']，不加后缀名,主要用于轮播图api
  search_all:
    path: "/api/search.json"
    field: "post"
    content: true
```

## Document

* `Domain` 是你部署的域名地址, eg: `https://u.mr90.top`或者`https://u.mr90.top/blog`

请求方式|请求地址|请求详情
-----|-----|-----
Get|Domain+ `/api/site.json` |获取所有的Hexo配置(站点的配置和主题的配置)
Get|Domain+ `/api/posts.json` | 如果配置 `posts_size: 0` 则不分页, 获取全部文章
Get|Domain+ `/api/posts/:PageNum.json` | 获取分页数据, 设置列表分类后, `:PageNum` 为动态变量(页数), eg: `/api/1.json` .
Get|Domain+ `/api/tags.json` | 获取所有的文章标签, 无标签则不生成
Get|Domain+ `/api/tags/:TagName.json` | 获取指定的标签文章列表, `:TagName` 为你文章的自定义标签名, eg: `/api/tags/web.json` .
Get|Domain+ `/api/categories.json` | 获取所有的文章的分类
Get|Domain+ `/api/categories/:CateName` | 获取指定分类的文章列表
Get|Domain+ `/api/articles/:Slug.json` | 根据文章的别名获取文章的详细的数据, `:Slug` 为文章的别名.
Get|Domain+ `/api/swiper.json` | 获取指定的列表别名的文章列表, eg: `['web', 'hexo', 'java']` 数组中的字符为指定文章的别名, 功能主要用于微信小程序轮播图文章的指定动态配置
Get|Domain+ `/api/search.json` | 获取全部文档, 用于本地全局搜索

### Get Implecit Pages

获取来自主题的 Hexo 隐式页面内容, 如 About 等. 因隐式页面(除 About 等导航栏入口页外)一般在 Hexo 不提供直接访问入口, 调用此 API 的开发者需要了解其完整路径, 此接口默认关闭.

eg: 

###### Request

```
GET /api/pages/about.json
```
