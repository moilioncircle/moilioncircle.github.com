---
layout: home
categories: index
permalink: /index.html
title: 不等不靠，有囧有料
excerpt: millions of lions moil to build the world
image:
  feature: bg/1200x600-road-bluesky.jpg
---

<div class="tiles">

{% for post in site.posts limit:4 %}
    <div class="tile">
      <h2 class="post-title" itemprop="name"><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-excerpt" itemprop="description">{{ post.excerpt | strip_html | truncate: 100 }}</p>
    </div><!-- /.tile -->
{% endfor %}

</div><!-- /.tiles -->


