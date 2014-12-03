---
layout: archive
category: archive
permalink: /archive/author.html
---

<div class="tiles">
    <div>
    {% for author in site.data.authors %}
        {% assign uid = author[0] %}
        {% assign uinfo = author[1] %}
        {% assign upost = site.posts | where:"author", uid %}
        {% assign psize = upost.size %}
        {% if psize > 0 %}
        <a href="#{{ uid }}" class="btn-info"> {{ uinfo.name }}▼{{ psize }}</a>
        {% endif %}
    {% endfor %}
    </div>
    <div>
        <a href="/archive/category.html" class="btn-inverse">类别◄</a>
        <a href="/archive/year.html" class="btn-inverse">年份◄</a>
        <a href="/archive/tag.html" class="btn-inverse">标签◄</a>
        <span class="btn">作者▲</span>
    </div>
    {% for author in site.data.authors %}
        {% assign uid = author[0] %}
        {% assign uinfo = author[1] %}
        {% assign upost = site.posts | where:"author", uid %}
        {% assign psize = upost.size %}
        {% if psize > 0 %}
            <a name="{{ uid }}" />
            <div>
                <span class="btn-info">{{ uinfo.name }}</span>
                <a href="javascript:scroll(0,0)"  class="btn-inverse">回顶 ▲</a>
                <a href="javascript:history.back()"  class="btn-inverse">返回 ◄</a>
            </div>
            <footer class="page-footer">
            <div class="author-image">
                <a href="/archive/author.html#{{uid}}"><img src="{{ site.url }}/images/{{ uinfo.avatar }}" alt="{{ uinfo.name }}"></a>
            </div>
            <div class="author-content">
                <h3 class="author-name" ><a href="/archive/author.html#{{uid}}"> {{ uinfo.name }}</a></h3>
                {% if uinfo.web %}<div><a href="{{uinfo.web}}" target="blank">{{uinfo.web}}</a></div>{% endif %}
                <div class="author-bio">{{ uinfo.bio }}</div>
            </div>
            </footer>
            <ol class="archive-list" reversed>
                {% for post in upost %} 
                    {% include post-list.html %}
                {% endfor %}
            </ol>
        {% endif %}
    {% endfor %}
</div>
