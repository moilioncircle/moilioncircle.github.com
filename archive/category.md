---
layout: archive
category: archive
permalink: /archive/category.html
---

<div class="tiles">
    <div>
    {% for cate in site.categories %} 
        {% assign name = cate[0] %}
        <a href="#{{ name }}" class="btn-info"> {{ site.data.category[name] }}▼{{ cate[1].size }}</a> 
    {% endfor %}
    </div>
    <div>
        <span class="btn">类别▲</span>
        <a href="/archive/year.html" class="btn-inverse">年份◄</a>
        <a href="/archive/tag.html" class="btn-inverse">标签◄</a>
        <a href="/archive/author.html" class="btn-inverse">作者◄</a>
    </div>
    {% for cate in site.categories %} 
    {% assign name = cate[0] %}
    <div>
        <a name="{{ name }}" class="btn-info">{{ site.data.category[name] }}</a>
        <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
        <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
    </div>
    <ol class="archive-list" reversed>
        {% for post in cate[1] %} 
            {% include post-list.html %}
        {% endfor %}
    </ol>
    {% endfor %}
    
</div>

