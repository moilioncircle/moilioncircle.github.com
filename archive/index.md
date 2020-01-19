---
layout: home
category: archive
permalink: /index.html
title: 不等不靠，有囧有料
excerpt: millions of lions moil to build the world
feature: bg/1200x600-road-bluesky.jpg
---

<div class="tiles">
<!--  -->
{% comment %}
{% assign lmtshow = 12 %}
{% assign lmtstar = 4 %}
{% assign tagstar = '$' %}
{% assign catshow = 'starsea,release,publish,actions,manshow' %}

{% assign cntstar = site.tags[tagstar] | size %} 
{% if cntstar > lmtstar %}{% assign cntstar = lmtstar %}{% endif %}
{% assign cntnorm = lmtshow  | minus: cntstar %} 

{% assign counter = 1 %} 
{% for post in site.posts %}
  {% if counter > cntnorm %} {% break %} {% endif %}
  {% if post.tags contains tagstar %} {% continue %} {% endif %}
  {% unless catshow contains post.category %} {% continue %} {% endunless %}
  {% assign counter = counter | plus:1 %} 
  {% include post-arrow.html %}
{% endfor %}

{% for post in site.tags[tagstar] limit: cntstar %}
  {% include post-arrow.html %}
{% endfor %}
{% endcomment %}
<!--  -->
{% assign cate_show = 'starsea:4, release:4, actions:2, manshow:1, publish:1' | split: ',' %}
{% for catlmt in cate_show %}
  {% assign temp_ar = catlmt | split: ':' %}
  {% assign cate_nm = temp_ar[0] | strip %} 
  {% assign cate_sz = temp_ar[1] | plus:0 %} 
  {% for post in site.categories[cate_nm] %}
    {% if cate_sz <= 0 %} {% break %} {% endif %}
    {% assign cate_sz = cate_sz | minus:1 %} 
    {% include post-arrow.html %}
  {% endfor %}
{% endfor %}

</div>


