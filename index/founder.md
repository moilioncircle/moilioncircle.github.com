---
layout: archive
categories: index
title: 创业狮友
excerpt: 创业狮友（founder），人是逼出来的，万物生长靠日。
permalink: /founder/index.html
---

<div class="tiles">
{% for post in site.categories.founder %}
  {% include post-grid.html %}
{% endfor %}
</div>
