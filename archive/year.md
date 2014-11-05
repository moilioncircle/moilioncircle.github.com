---
layout: archive
category: archive
permalink: /archive/year.html
---

<div class="tiles">

    <div>
    {% assign counter = 0 %}
    {% assign yearcnt = 0 %}
    {% assign maxsize = site.posts | size%}
    {% for post in site.posts %} 
        {% assign counter = counter | plus:1 %} 
        {% assign yearcnt = yearcnt | plus:1 %} 
        {% assign year = post.date | date: '%Y' %}
        {% if counter < maxsize %}
            {% assign npost = site.posts[counter] %}
            {% assign nyear = npost.date | date: '%Y' %}
        {% endif %}
        {% if nyear != year) or counter >= maxsize %}
            <a href="#{{ year }}" class="btn-info"> {{ year }}▼{{ yearcnt }}</a>
            {% assign yearcnt = 0 %} 
        {% endif %}
    {% endfor %}
    </div>
    
    {% assign indexer = -1 %}
    {% assign pyear = "" %}
    {% assign maxindx = site.posts | size | minus:1%}
    {% for post in site.posts %} 
        {% assign year = post.date | date: '%Y' %}
        {% if indexer > -1 %}
            {% assign ppost = site.posts[indexer] %}
            {% assign pyear = ppost.date | date: '%Y' %}
        {% endif %}
        {% if pyear != year %}
            {% if indexer > -1 %}</ol>{% endif %}
            <div>
                <a name="{{ year }}" class="btn-info">{{ year }}</a>
                <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
                <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
            </div>
            <ol>
        {% endif %}
        {% include post-list.html %}
        {% if indexer ==  maxindx %}</ol>{% endif %}
        {% assign indexer = indexer | plus:1 %} 
    {% endfor %}
</div>

