---
layout: home
category: archive
permalink: /index.html
title: 不等不靠，有囧有料
excerpt: millions of lions moil to build the world
feature: bg/1200x600-road-bluesky.jpg
---

<div class="tiles">


{% assign lmtshow = 8 %}
{% assign lmtstar = 4 %}
{% assign tagstar = '$' %}
{% assign catshow = 'publish,release,manshow,actions' %}

{% assign cntstar = site.tags[tagstar] | size %} 
{% if cntstar > lmtstar %}{% assign cntstar = lmtstar %}{% endif %}
{% assign cntnorm = lmtshow  | minus: cntstar %} 

{% assign counter = 1 %} 
{% for post in site.posts %}
    {% if counter > cntnorm %} {% break %} {% endif %}
    {% if post.tags contains startag %} {% continue %} {% endif %}
    {% unless catshow contains post.category %} {% continue %} {% endunless %}
    {% assign counter = counter | plus:1 %} 
{% include post-arrow.html %}
{% endfor %}

{% for post in site.tags[tagstar] limit: cntstar %}
{% include post-arrow.html %}
{% endfor %}
</div>


