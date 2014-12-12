---
layout: archive
category: archive
excerpt: 闷骚闷秀（manshow），码农装呆，程序猿卖萌，攻城狮闷骚。
permalink: /manshow/index.html
---

<div class="tiles">
{% for post in site.categories.manshow %}
  {% include post-grid.html %}
{% endfor %}
</div>
