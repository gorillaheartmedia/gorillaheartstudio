$(document).ready(function() {
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jarallax/2.0.4/jarallax.min.js", function() {
        $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jarallax/2.0.4/jarallax-video.min.js", function() {
            console.log("Jarallax loaded!");
        });
    });
});

$(document).on(':passagerender', function() {
    if (typeof jarallax !== 'undefined') {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2
        });
        console.log("Jarallax initialized!");
    } else {
        console.error("Jarallax not loaded!");
    }
});
