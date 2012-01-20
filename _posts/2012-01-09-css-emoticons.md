---
layout: project
title: jQuery CSS Emoticons Plugin
heading: CSS Emoticons
stylesheets:
  - jquery.cssemoticons.css
javascripts:
  - jquery.cssemoticons.min.js
download:
  title: Download
  href: http://jspkg.com/packages/css-emoticons
github:
  title: Fork on Github
  href: https://github.com/JangoSteve/jQuery-CSSEmoticons
links:
  - title: View Live Demos
    href: http://jspkg.com/packages/css-emoticons/demos
  - title: Report bug or request feature
    href: https://github.com/JangoSteve/jQuery-CSSEmoticons/issues
anchors:
  - title: Demo
    href: '#demo'
  - title: Options
    href: '#options'
  - title: Unemoticonize
    href: '#unemoticonize'
  - title: More demos
    href: '#more-demos'
articles:
  - title: "A Practical Application for Pure-CSS Icons: Emoticons"
    href: http://www.alfajango.com/blog/a-practical-application-for-pure-css-icons-emoticons
  - title: Pure-CSS Emoticons WordPress Plugin Released
    href: http://www.alfajango.com/blog/pure-css-emoticons-wordpress-plugin-released/
---

The CSS Emoticons plugin is a simple jQuery plugin (and stylesheet) that allows you to turn any text emoticons on the page into cute little smiling faces with pure CSS3 styling (no images whatsoever).

The result is great-looking emoticons that leave the text exactly as written (so that the text emoticons actually get copied and pasted with the text if you select a block of text from the page). This uses the CSS3 properties, transform, border-radius, box-shadow, gradient, and transition (when supported).

Because the pure-CSS emoticon stylesheet uses CSS3 properties such as border-radius and transform, it is supported by FireFox, Chrome, Safari, and Opera. They also work (animations and all) on the iPhone and Android phone browsers. In Internet Explorer, emoticons will simply appear as the original textual emoticons.

<span id="demo"></span>

## Demo

<div class="comment">
  Hi, this is a great plugin! :-)
</div>

<script type="text/javascript">
  $('.comment').emoticonize();
</script>

### The Markup

{% highlight html %}
<div class="comment">
  Hi, this is a great plugin! :-)
</div>
{% endhighlight %}

### Required Files

{% highlight html %}
<link href="stylesheets/jquery.cssemoticons.css" media="screen" rel="stylesheet" type="text/css" />
<script src="javascripts/jquery.js" type="text/javascript"></script>
<script src="javascripts/jquery.cssemoticons.js" type="text/javascript"></script>
{% endhighlight %}

### The JS

{% highlight js %}
$('.comment').emoticonize();
{% endhighlight %}

<span id="options"></span>

## Options

There are three optional parameters.

<table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Description</th>
  <th>Values</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><code>animate</code></td>
  <td>Animates the emoticons on page-load and when you hover over them to show you the transition from the original text to the stylized emoticon. To see this animation effect, view the demo with Chrome or Safari.</td>
  <td><code>true</code> | <code>false</code><br />(default: <code>true</code>)</td>
  </tr>
  <tr>
  <td><code>delay</code></td>
  <td>Allows you to set how long the browser waits (in milliseconds) before styling up the emoticons (which makes the animation stand out more, otherwise it happens too quickly and loses some of its effect).</td>
  <td>integer (in milliseconds)<br />(default: <code>500</code>)</td>
  </tr>
  <tr>
  <td><code>exclude</code></td>
  <td>Allows you to exclude elements from being emoticonized using CSS selectors.</td>
  <td>any jQuery CSS selector(s)<br />(default: <code>'pre, code, .no-emoticons'</code>)</td>
  </tr>
</table>

<span id="unemoticonize"></span>

## Unemoticonize

If for some reason, you’d like to “unemoticonize” any of your elements, well there’s a function for that.

{% highlight js %}
$('.comment').unemoticonize();
{% endhighlight %}

I'd write more documentation, but really that's all there is to it. Enjoy!

<span id="more-demos"></span>

## More demos

<h1 class="text" id="large">
 It's a pirate ?-) ARGHHH!!!! :)
</h1>
<p>^^ <i>I made this one up, but it's my plugin so it's supported</i> ^^</p>
<p><a href="#" id="toggle-headline">Click here</a> to toggle the "emoticonization" of the headline above.</p>
<p class="text" id="small">
 Yo, this is some tiny text. :-)<br />
 This is how emoticons stack up in a paragraph B)
</p>
<p class="text wrapped" id="regular">:O
 Here is an example of what emoticons look like in a paragraph :-) You can tell here that the emoticons don't break the line-height (in most browsers) in paragraphs like most of the image-replacement methods.
 Also, here is a printed URL: http://www.alfajango.com. Notice the <code>:/</code> doesn't get styled. And one in a nested element
 <span>:-)</span>
</p>
<p class="text no-emoticons">
 This entire paragraph is excluded from being emoticonized ;-)
</p>
<p class="text">
 This paragraph has specific elements excluded. So this works B) <span class="no-emoticons">But this doesn't :(</span>
</p>
<hr />
<p class="text" id="regular">
 Here are all of the emoticons currently supported (though it's easy to add your own):
)
 :-) :) :o) :c) :^) :-D :-( :-9 ;-) :-P :-p :-Þ :-b :-O :-/ :-X :-# :'( B-) 8-) :-\ ;*( :-*
  :] :&gt; =] =) 8) :} :D 8D XD xD =D :( :&lt; :[ :{ =( ;) ;] ;D :P :p =P =p :b :Þ :O 8O :/ =/ :S :# :X B) O:)
</p>
<p class="text" id="regular">
 And some special emoticons: &lt;3 ;( &gt;:) &gt;;) &gt;:( O_o O_O o_o 0_o T_T ^_^ ?-) [+=..]
</p>

<script type="text/javascript">
$('.text').emoticonize({
  //delay: 800,
  //animate: false,
  //exclude: 'pre, code, .no-emoticons'
});
$('#toggle-headline').toggle(
  function(){
    $('#large').unemoticonize({
      //delay: 800,
      //animate: false
    })
  },
  function(){
    $('#large').emoticonize({
      //delay: 800,
      //animate: false
    })
  }
);
</script>
