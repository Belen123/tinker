


$.fn.nodoubletapzoom = function() {
    $(this).bind('touchstart', function preventZoom(e){
        var t2 = e.timeStamp;
        var t1 = $(this).data('lastTouch') || t2;
        var dt = t2 - t1;
        var fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1){
            return; // not double-tap
        }
        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(e.target).trigger('click');
    });
};
})(jQuery);

$(document).on('pageinit',"#status_page", function(){
        $("body").nodoubletapzoom();
        $(".content").on("click", "#but", function() {
            var curr_val = parseInt($("#val").text());
            $("#val").text(curr_val + 1);
        });
});

// (function($) {
//   $.fn.nodoubletapzoom = function() {
//       $(this).bind('touchstart', function preventZoom(e) {
//         var t2 = e.timeStamp
//           , t1 = $(this).data('lastTouch') || t2
//           , dt = t2 - t1
//           , fingers = e.originalEvent.touches.length;
//         $(this).data('lastTouch', t2);
//         if (!dt || dt > 500 || fingers > 1) return; // not double-tap

//         e.preventDefault(); // double tap - prevent the zoom
//         // also synthesize click events we just swallowed up
//         $(this).trigger('click').trigger('click');
//       });
//   };
// })(jQuery);