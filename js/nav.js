var timeout = null,
    fadingIn = false,
    fadingOut = false,
    $window = $(window),
    minWindowWidth = 979,
    svg = false;

var navFadeIn = function($nav) {
  if (!fadingIn) {
    fadingIn = true;
    $nav.stop(true, true).fadeTo(200, 1, function() {
      fadingIn = false;
    });
  }
};

var navFadeOut = function($nav) {
  // :hover check needed below, because mouseout is triggered on the
  // parent nav div when hovering over a link in the nav.
  if (!fadingOut && $window.scrollTop() > $nav.height() && $nav.find(':hover').length === 0) {
    fadingOut = true;
    $nav.stop(true, true).fadeTo(500, 0.75, function() {
      fadingOut = false;
    });
  }
};

if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
  svg = true;
  document.documentElement.className = "svg";
} else {
  document.documentElement.className = "non-svg";
}

var awaken = false;
$(document)
  .delegate('form.contact-form', 'submit', function() {
    $(this).find('input[type="submit"]').prop('disabled', true).val('Submitting...').after('<span class="submitting-msg">Please wait. This is exciting!</span>');
  })
  .delegate('form.contact-form', 'focus', function() {
    if (!awaken) {
      var $form = $(this),
          target = $form.attr('action'),
          awakenTarget = target.replace(/\/contact$/, '/wakeup');
      awaken = true;
      $.get(awakenTarget);
    }
  });

$(document).delegate('a[href^="#"]', 'click', function() {
  var slashedHash = '#/' + this.hash.slice(1);
  if ( this.hash ) {

    if ( slashedHash === location.hash ) {
      $.smoothScroll({scrollTarget: this.hash});
    } else {
      $.bbq.pushState(slashedHash);
    }

    return false;
  }
});


$(document)
  .delegate('.site-nav a', 'click', function() {
    var $this = $(this);
    $('[data-toggle][data-target=".nav-collapse"]').click();
  });

$(window).bind('hashchange', function(event) {
  var tgt = location.hash.replace(/^#\/?/,'').replace(/\/$/,'');
  if ( document.getElementById(tgt) ) {
    $.smoothScroll({
      scrollTarget: '#' + tgt,
      offset: -80,
      afterScroll: function() {
        if (tgt === 'contact') {
          $('#full_name').focus();
        }
      }
    });
  }
});

$(document).ready( function() {

  var $nav = $('.navbar-fixed-top'),
      navHeight = $nav.height(),
      $brandFull = svg ? $nav.find('img.full-logo.svg') : $nav.find('img.full-logo.non-svg'),
      $brandHorizontal = svg ? $nav.find('img.horizontal-logo.svg') : $nav.find('img.horizontal-logo.non-svg'),
      animatingToHorizontal = false,
      animatingToFull = false;
  if (!$brandFull.length) { $brandFull = $nav.find('img.full-logo') }
  if (!$brandHorizontal.length) { $brandHorizontal = $nav.find('img.horizontal-logo') }

  $(window).scroll(function() {
    var scrollTop = $window.scrollTop();
    if ($window.width() > minWindowWidth) {
      if (scrollTop < navHeight) {
        navFadeIn($nav);
        if (scrollTop < 46) { // hard-coded since it's a little more than half
          if ($nav.hasClass('fixed-half')) {
            $nav.removeClass('fixed-half');
            if (!animatingToFull) {
              animatingToFull = true;
              $brandHorizontal.show().animate({marginTop: '-51px'}, {
                duration: 200,
                complete: function() {
                  $brandFull.show().animate({marginTop: '0px'}, {
                    duration: 200,
                    complete: function() {
                      // Don't use cached scrollTop height from when animation started.
                      animatingToFull = false;
                    }
                  });
                }
              });
            }
          }
        } else if (!$nav.hasClass('fixed-half')) {
          $nav.addClass('fixed-half');
          if (!animatingToHorizontal) {
            animatingToHorizontal = true;
            $brandFull.show().animate({marginTop: '-91px'}, {
              duration: 200,
              complete: function() {
                $brandHorizontal.show().animate({marginTop: '47px'}, {
                  duration: 200,
                  complete: function() {
                    animatingToHorizontal = false;
                  }
                });
              }
            });
          }
        }
      } else {
        if (!animatingToHorizontal) {
          $brandFull.hide();
          $brandHorizontal.show();
          $nav.addClass('fixed-half');
          navFadeOut($nav);
        }
      }
    }
  });

  $nav.bind('mouseover', function() {
    navFadeIn($nav);
  });

  $nav.bind('mouseout', function() {
    if ($window.width() > minWindowWidth) {
      navFadeOut($nav);
    }
  });

  var $siteLinks = $('a[data-waypoint]');
  //$siteLinks.smoothScroll({offset: -80});

  $(window).trigger('hashchange');

  $siteLinks.each(function() {
    var $this = $(this),
        selector = $this.attr('href');
    $(selector).waypoint(function() {
      $siteLinks.parent('li').removeClass('active');
      $this.parent('li').addClass('active');
    }, {offset: 80})
  });

});
