//MD Ripple
jQuery(function($) {
  // MAD-RIPPLE // (jQ+CSS)
    $(document).on("mousedown", "[data-ripple]", function(e) {
        var $self = $(this);
        if($self.is(".btn-disabled")) {
            return;
        }
        if($self.closest("[data-ripple]")) {
            e.stopPropagation();
        }

        var initPos = $self.css("position"),
            offs = $self.offset(),
            x = e.pageX - offs.left,
            y = e.pageY - offs.top,
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
            $ripple = $('<div/>', {class : "ripple",appendTo : $self });

        if(!initPos || initPos==="static") {
            $self.css({position:"relative"});
        }

        $('<div/>', {
            class : "rippleWave",
            css : {
                background: $self.data("ripple"),
                width: dia,
                height: dia,
                left: x - (dia/2),
                top: y - (dia/2),
            },
            appendTo : $ripple,
            one : {
                animationend : function(){
                    $ripple.remove();
                }
            }
        });
    });
});

//Youtube Latest Video
var channelID = 'UCxuVW6G4Ieu_YU1x4nSe1yA';
var reqURL = 'https://www.youtube.com/feeds/videos.xml?channel_id=';
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(reqURL)+channelID, function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf('=')+1);
    $('#youtube_video').attr('src','https://youtube.com/embed/'+id + '?controls=0&showinfo=0&rel=0');
});
