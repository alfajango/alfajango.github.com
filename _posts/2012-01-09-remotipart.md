---
layout: project
title: Remotipart Rails Gem
links:
  - title: Install from RubyGems.org
    href: https://rubygems.org/gems/remotipart
  - title: View Source or Fork on GitHub
    href: https://github.com/JangoSteve/remotipart
  - title: Report bug or request feature
    href: https://github.com/JangoSteve/remotipart/issues
anchors:
  - title: Dependencies
    href: '#dependencies'
  - title: Installation
    href: '#installation'
  - title: Implementation
    href: '#implementation'
  - title: Middleware
    href: '#middleware'
  - title: Demos and test suite
    href: '#demos'
articles:
  - title: "AJAX File Uploads with the iFrame Method"
    href: http://www.alfajango.com/blog/ajax-file-uploads-with-the-iframe-method/
  - title: "Rails 3 AJAX File Uploads with Remotipart"
    href: http://www.alfajango.com/blog/rails-3-ajax-file-uploads-with-remotipart/
---

The Remotipart gem enables AJAX file-upload capability to remote forms in Rails 3 apps by extending the native jquery-ujs functionality.

For an introduction explaining how and why Remotipart works, check out [AJAX File Uploads with the iFrame Method](http://www.alfajango.com/blog/ajax-file-uploads-with-the-iframe-method/) and [Rails 3 AJAX File Uploads with Remotipart](http://www.alfajango.com/blog/rails-3-ajax-file-uploads-with-remotipart/).

<span id="dependencies"></span>

## Dependencies

* [Rails &gt;= 3](https://rubygems.org/gems/rails)
* [jquery-rails &gt;= 1.0](https://rubygems.org/gems/jquery-rails) (which bundles the rails jquery-ujs and the latest jquery)

<span id="installation"></span>

## Installation

Installing is easy. Just add it to your Gemfile:

{% highlight ruby %}
gem "remotipart", "~> 1.0"
{% endhighlight %}

And run:

{% highlight bash %}
bundle install
{% endhighlight %}

### Rails 3.0

For Rails 3.0 apps, run:

{% highlight bash %}
bundle exec rails g remotipart:install
{% endhighlight %}

This will copy the jquery [ iframe-transport.js ](http://cmlenz.github.com/jquery-iframe-transport/) and jquery.remotipart.js files to your public/javascripts directory and add them to your JS `:defaults`:

{% highlight ruby %}
<%= javascript_include_tag :defaults %>
{% endhighlight %}

### Rails 3.1

For Rails 3.1 apps, the required javascript files will be added to the asset pipeline, no installation script necessary. Simply add this to app/assets/javascripts/application.js (make sure to add them just after `//= require jquery_ujs`):

{% highlight js %}
//= require jquery.remotipart
{% endhighlight %}

Now you're ready to start uploading files.

<span id="implementation"></span>

## Implementation

Your remote forms are now able to upload files via ajax.

In previous versions, it was required to wrap js.erb responses in a remotipart_response block. This is no longer required in v1.0.

Was the form was submitted with Remotipart?

In your controllers, views, or helpers, you may want to know if the form was submitted with Remotipart (using the iframe-transport) or submitted with the native rails jquery-ujs, for whatever reason. Remotipart makes a method available called remotipart_submitted?

{% highlight ruby %}
if remotipart_submitted?
  # do one thing
else
  # do another
end
{% endhighlight %}

<span id="middleware"></span>

## Middleware

Remotipart includes a rack middleware that automatically translates the request/response between your app and the iframe-transport when necessary. Because of this, everything just works. no additional configuration needed.

<span id="demos"></span>

## Demo apps and test suite

And that's it! To see it in action, check out the demo Rails app using the remotipart gem for AJAX file uploads in both 3.0 and 3.1 flavors:

* [ Rails 3.0 Demo App ](https://github.com/JangoSteve/Rails-jQuery-Demo/tree/remotipart-rails-3-0)
* [ Rails 3.1 Demo App ](https://github.com/JangoSteve/Rails-jQuery-Demo/tree/remotipart)

The Rails 3.1 demo app also includes a full test suite, using Rspec and Capybara, to test the ajax file uploads. [ Check out the tests ](https://github.com/JangoSteve/Rails-jQuery-Demo/blob/remotipart/spec/integration/comments_spec.rb#L61-238) if you're looking for inspiration to write your own.
