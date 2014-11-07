---
layout: archive
category: archive
permalink: /archive/tag.html
---

<div class="tiles">
    <div>
    {% for tag in site.tags %} 
        {% if tag[1].size > 1 %}
            <a href="#{{ tag[0] }}" class="btn-success"> {{ tag[0] }}▼{{ tag[1].size }}</a> 
        {% endif %}
    {% endfor %}
    </div>
    <div>
        <a href="/archive/category.html" class="btn-inverse">类别◄</a>
        <a href="/archive/year.html" class="btn-inverse">年份◄</a>
        <span class="btn">标签▲</span>
        <a href="/archive/author.html" class="btn-inverse">作者◄</a>
    </div>
    {% for tag in site.tags %} 
    <div>
        <a name="{{ tag[0] }}" class="btn-success">{{ tag[0] }}</a>
        <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
        <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
    </div>
    <ol>
        {% for post in tag[1] %} 
            {% include post-list.html %}
        {% endfor %}
    </ol>
    {% endfor %}
    
</div>

