$(function() {
    "use strict";

    console.log("JavaScript file is loaded.");

    $(document).ready(function (e)
    {
        activities.init();

    });

    var html = document.documentElement,
        $html = $(html),
        multiplier,
        current = 'current',
        close = 'close',
        open = 'open',
        selected = 'selected',
        jsNone = 'js_none',
        ariaHidden = 'aria-hidden',
        ariaInvalid = 'aria-invalid',
        ariaDescribedBy = 'aria-describedby';

    var $activityGridLinks,
        $activityItems;



    var activities= {
        init: function () {
            var $activitiesStep2 = $('activitiesStep2'),
                $activities = $('activities'),
                activityTop,
                activityHeight,
                maxHeight = 0;

            window.onload = function () {
                if ($activities.length) {
                    activityTop = $activities.offset().top
                    activityHeight = $activities.height();
                }
            };

            $(window).scroll(function () {
                if ($activitiesStep2.hasClass('overflow')) {
                    maxHeight = activityHeight + (activityTop - window.scrollY - 15);
                    $activitiesStep2.css('max-height', maxHeight);
                }
            });

/*            $activitiesStep2.scrollToFixed({
                marginTop: 5,
                zIndex: 20,
                fixed: function () {
                    maxHeight = activityHeight + (activityTop - window.scrollY - 15);
                    $activitiesStep2.removeClass('static').addClass('overflow').css('max-height', maxHeight);
                },
                postFixed: function () {
                    $activitiesStep2.addClass('static').removeClass('overflow').css('max-height', none);
                }
            });*/


            $activityGridLinks = $('#activities_grid a');
            $activityItems = $('.activity_item');

            $activityGridLinks.on('click', function(e) {
                e.preventDefault();
                var $this=$(this),
                    id=$this[0].href.split('#')[1],
                    $target=$activityItems.filter('[id="' + id + '"]');

                $this.toggleClass(selected);
                console.log("selected " + $this.id);
            });
        }
    }
});