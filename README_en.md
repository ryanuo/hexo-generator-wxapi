<div align="right">
  language:
  en
  <a title="Chinese" href="/README.md">cn</a>
</div>

# hexo-generator-wxapi
* Based on [hexo generator restful](https://www.npmjs.com/package/hexo-generator-restful)Modified to add a long list of specified articles (for the display of rotation chart)
* Based on [hexo-generator-search](https://www.npmjs.com/package/hexo-generator-search), the article file alias is changed and added to facilitate the configuration of applet interface

## Install

```bash
npm install hexo-generator-wxapi --save
```

## Representative project

* [on behalf of the project](https://github.com/Rr210/hexo-wx-api)
* Based on this, a wechat applet is designed

## Under the configuration hexo file `_config.yml`

* Add the following as the default configuration. If the attribute value is`false`, it means that it will not be generated

```yml
restful_api:
  #Site can be configured to selectively grow some properties of the array
  # site: ['title'，'subtitle'，'description'，'author'，'since'，email'，'favicon'，'avatar']
  # site: true # hexo.config mix theme.config
  posts_size: 10 # article list pagination, 0 means no Pagination
  posts_props: # article list item features to be generated
    title: true
    slug: true
    date: true
    updated: true
    comments: true
    path: true
    excerpt: false
    cover: true # cover picture, take the first picture of the article
    content: false
    keywords: false
    categories: true
    tags: true
  categories: true # classification data
  use_category_slug: false # use slug is filename of category data
  tags: true # tag data
  use_tag_slug: false # use slug is filename of tag data
  post: true # article data
  pages: false # additional hexo page data, such as about
  swipers_list: [] # generate the specified page information and fill in the name of your article folder, such as ['css','js'], without suffix. It is mainly used for the rotation map API
  search_all:
    enable: true   # default on
    path: api/search.json
    field: post
    content: true
```

## Document

*'domain 'is your deployed domain name address, eg: `https://u.mr90.top` Or `https://u.mr90.top/blog`

Request method | request address | request details
-----|-----|-----
Get | domain + `/api/site.json ` | get all hexo configurations (station configuration and topic configuration)
Get | domain + `/api/posts.json ` | if configured | `posts_Size: 0` does not page and gets all articles
Get | domain + `/api/posts/:pagenum. json ` | get paging data. After setting the list classification, `:pagenum` is a dynamic variable (number of pages), eg: `/api/1.json` .
Get | domain + `/api/tags.json` | get all article tags. If there is no tag, it will not be generated
Get | domain + `/api/tags/:tagName.json ` | get the specified tag article list, `:tagName` is the custom tag name of your article, eg: `/api/tags/Web.json` .
Get | domain + `/api/categories.json` | get the classification of all articles
Get | domain + `/api/categories/:catename.json` | get the article list of the specified category
Get | domain + `/api/articles/:slug.json` | obtain the detailed data of the article according to the other name of the article, ` : slug 'is the other name of the article
Get | domain + `/api/swiper.json` | get the article list with the specified name. Eg: ` ['Web ',' hexo ',' Java '] ` the characters in the array are the different names of the specified articles. The function is mainly used for the specified dynamic configuration of wechat applet rotation map articles
Get | domain + `/api/search.json` | obtain all documents for local and global search.

### Get Implecit Pages

Get the content of hexo implicit pages from the theme, such as about, etc. because implicit pages (except about and other navigation bar entry pages) generally do not provide direct access in hexo, developers calling this API need to know the full path, which is closed by default
eg:

###### Request

```
GET /api/pages/about.json
```
