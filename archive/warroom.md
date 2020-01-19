---
layout: archive
category: archive
excerpt: 瓦奧如沐（warroom），不等不靠，有囧有料。
permalink: /warroom/index.html
---

<div class="tiles">
{% assign catshow = 'actions,manshow' %}
{% for post in site.posts %}
    {% unless catshow contains post.category %} {% continue %} {% endunless %}
    {% include post-grid.html %}
{% endfor %}
</div>
