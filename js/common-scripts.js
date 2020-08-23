
  
  var Script = function() {
    jQuery('#sidebar .sub-menu > a').click(function() {
      var o = ($(this).offset());
      diff = 250 - o.top;
      if (diff > 0)
        $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
      else
        $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    });
  
    $(function() {
      function responsiveView() {
        var wSize = window.outerWidth;
        if (wSize <= 768) {
          $('#container').addClass('sidebar-closed');
          $('#sidebar > ul').hide();
        }
  
        if (wSize > 768) {
          $('#container').removeClass('sidebar-close');
          $('#sidebar > ul').show();
        }
      }
      $(window).on('load', responsiveView);
      $(window).on('resize', responsiveView);
    });
  
    // for showing/hiding side navbar
    $('.fa-bars').click(function() {
      if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
          'margin-left': '0px'
        });
        $('#sidebar').css({
          'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
      } else {
        $('#main-content').css({
          'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
          'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
      }
    });

  }();
  
 
  