---
layout: archive
categories: index
title: 
excerpt: 
permalink: /archive/year.html
---

<div class="tiles">
    <div>
    {% assign pyear = "" %}
    {% assign gotit = 0 %}
    {% assign counter = 0 %}
    {% for post in site.posts reversed %} 
        {% assign counter = counter | plus:1 %} 
        {% assign year = post.date | date: '%Y' %}
        {% if post.next %}
            {% assign pyear = post.next.date | date: '%Y' %}
        {% endif %}
        {% if post.next %}
        {% if pyear != year %}{% assign gotit = 1 %}{% endif %}
        {% else %}{% assign gotit = 1 %}{% endif %}
        {% if gotit == 1 %}
            <a href="#{{ year }}" class="btn-info"> {{ year }}▼{{ counter }}</a>
            {% assign counter = 0 %}
            {% assign gotit = 0 %}
        {% endif %}
    {% endfor %}
    </div>
    
    {% assign nyear = "" %}
    {% for post in site.posts %} 
        {% assign year = post.date | date: '%Y' %}
        {% if post.next %}
            {% assign nyear = post.next.date | date: '%Y' %}
        {% endif %}

        {% if nyear != year %}
            {% unless post.previous %}</ol>{% endunless %}
            <div>
                <a name="{{ year }}" class="btn-info">{{ year }}</a>
                <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
                <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
            </div>
            <ol>
        {% endif %}
        {% include post-list.html %}
        {% unless post.next %}</ol>{% endunless %}
    {% endfor %}
</div>

