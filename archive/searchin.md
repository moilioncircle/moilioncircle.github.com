---
layout: archive
category: archive
excerpt: 站内搜索（searchin），百度提供，深表感谢。
permalink: /archive/searchin.html
---

<style>
#bdcs{
  margin:2rem 0 2rem 0
}

#bdcs-search-form-input {
  float:left;
  width: 70%;
  width: calc(100% - 150px);
  width: -moz-calc(100% - 150px);
  width: -webkit-calc(100% - 150px);
}
#bdcs-search-form-submit {
  float:right;
  width:120px;
}
</style>

<script type="text/javascript">document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E%3Cscript charset="utf-8" src="http://znsv.baidu.com/customer_search/api/js?sid=11922223296734651648') + '&plate_url=' + (encodeURIComponent(window.location.href)) + '&t=' + (Math.ceil(new Date()/3600000)) + unescape('"%3E%3C/script%3E'));</script>

<div class="tiles">
{% for post in site.tags['$'] %}
    {% include post-grid.html %}
{% endfor %}
</div>
