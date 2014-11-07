---
layout: archive
category: archive
excerpt: 狮友家族（family），F And M, I Love You :)
permalink: /archive/family.html
---

<div class="tiles">
{% for author in site.data.authors %}
    {% assign uid = author[0] %}
    {% assign uinfo = author[1] %}
    <a name="{{ uid }}" />
    <footer class="page-footer">
    <div class="author-image">
        <a href="/archive/author.html#{{uid}}"><img src="{{ site.url }}/images/{{ uinfo.avatar }}" alt="{{ uinfo.name }}"></a>
    </div>
    <div class="author-content">
        <h3 class="author-name" ><a href="/archive/author.html#{{uid}}"> {{ uinfo.name }}</a></h3>
        {% if uinfo.web %}<div><a href="{{uinfo.web}}" target="blank">{{uinfo.web}}</a></div>{% endif %}
        <div>{{ uinfo.role }} , {{ uinfo.city }} , {{ uinfo.join }}</div>
    </div>
    </footer>
    <div>{{ uinfo.bio }}</div>
    <br />
{% endfor %}
</div>
