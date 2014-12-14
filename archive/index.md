---
layout: home
category: archive
permalink: /index.html
title: 不等不靠，有囧有料
excerpt: millions of lions moil to build the world
feature: bg/1200x600-road-bluesky.jpg
---

<div class="tiles">

{% assign counter = 1 %}
{% assign limiter = 8 %}
{% assign starlmt = limiter | divided_by:2 %}
{% assign startag = '$' %}

{% for post in site.tags[startag] %}
    {% if counter > starlmt %} {% break %} {% endif %}
    {% assign counter = counter | plus:1 %} 
{% include post-arrow.html %}
{% endfor %}

{% if counter <= limiter %}
    {% assign categories = 'publish,release,manshow,actions' %}
    {% for post in site.posts %}
        {% if counter > limiter %} {% break %} {% endif %}
        {% if post.tags contains startag %} {% continue %} {% endif %}
        {% unless categories contains post.category %} {% continue %} {% endunless %}
        {% assign counter = counter | plus:1 %} 
{% include post-arrow.html %}
    {% endfor %}
{% endif %}

</div>


