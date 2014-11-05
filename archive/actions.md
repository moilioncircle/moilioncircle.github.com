---
layout: archive
category: archive
excerpt: 爱可深思（actions），人是逼出来的，万物生长靠日。
permalink: /actions/index.html
---

<div class="tiles">
{% for post in site.categories.actions %}
  {% include post-grid.html %}
{% endfor %}
</div>
