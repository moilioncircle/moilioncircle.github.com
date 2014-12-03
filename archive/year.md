---
layout: archive
category: archive
permalink: /archive/year.html
---

<div class="tiles">
    <div>
    {% assign yearcnt = 0 %}
    {% assign maxsize = site.posts | size%}
    {% for post in site.posts %} 
        {% assign yearcnt = yearcnt | plus:1 %} 
        {% assign year = post.date | date: '%Y' %}
        {% if forloop.index < forloop.length %}
            {% assign npost = site.posts[forloop.index] %}
            {% assign nyear = npost.date | date: '%Y' %}
        {% endif %}
        {% if nyear != year) or forloop.last %}
            <a href="#{{ year }}" class="btn-info"> {{ year }}▼{{ yearcnt }}</a>
            {% assign yearcnt = 0 %} 
        {% endif %}
    {% endfor %}
    </div>
    <div>
        <a href="/archive/category.html" class="btn-inverse">类别◄</a>
        <span class="btn">年份▲</span>
        <a href="/archive/tag.html" class="btn-inverse">标签◄</a>
        <a href="/archive/author.html" class="btn-inverse">作者◄</a>
    </div>    
    {% assign pyear = "" %}
    {% for post in site.posts %} 
        {% assign year = post.date | date: '%Y' %}
        {% unless forloop.first %}
            {% assign pindx = forloop.index0|minus:1 %}
            {% assign ppost = site.posts[pindx] %}
            {% assign pyear = ppost.date | date: '%Y' %}
        {% endunless %}
        {% if pyear != year %}
            {% unless forloop.first %}</ol>{% endunless %}
            <div>
                <a name="{{ year }}" class="btn-info">{{ year }}</a>
                <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
                <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
            </div>
            <ol class="archive-list" reversed>
        {% endif %}
        {% include post-list.html %}
        {% if forloop.last %}</ol>{% endif %}
    {% endfor %}
</div>

