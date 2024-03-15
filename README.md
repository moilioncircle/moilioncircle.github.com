# Skinny Bones Jekyll Starter

Just a little something I'm using to jump start a site refresh. I like to think of it as a starter for building your own Jekyll site. I purposely keep the styling minimal and bare to make it easier to add your own flare and markup.

I'm currently using a variation of it on my personal website [Made Mistakes](http://mademistakes.com) with some modifications. To learn more about how to use the theme and install it check out the [Skinny Bones demo](http://mmistakes.github.io/skinny-bones-jekyll/) (*work in progress*).

![screenshot of Skinny Bones](http://mmistakes.github.io/skinny-bones-jekyll/images/skinny-bones-theme-feature.jpg)

---

## Notable Features

* Stylesheet built using Sass. *Requires Jekyll 2.x*
* Data files for easier customization of the site navigation/footer and for supporting multiple authors.
* Optional Disqus comments, table of contents, social sharing links, and Google AdSense ads.
* And more.

## Start Docker

```bash
docker run -it \
--name jekyll-moilioncircle \
-p 4000:4000 \
-e DEBUG=true \
-e VERBOSE=true \
-e CONNECTED=true \
-e TZ=Asia/Shanghai \
-v /Users/trydofor/Workspace/moilion-com/moilioncircle-github-com:/srv/jekyll \
-v /Users/trydofor/Docker/jekyll/bundle:/usr/local/bundle \
jekyll/jekyll:3.8.6 \
jekyll serve
```

visit http://localhost:4000/