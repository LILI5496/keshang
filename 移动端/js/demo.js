/**
 * Created by lili on 17/2/23.
 */
$(function () {

    var $container = $('#container');
    var $imgShow = $('#img-show');
    var margin = 2;
    var iNow=0;
    for (var i = 0; i < 24; i++) {
        // var index=$(this).index();
        $container.append('<li><img src="imgs/' + (i + 1) + '.jpg"></li>')
    }
    var liWidth = ($(document.body).width() - 3 * margin) / 4;
    $('li').css({
        width: liWidth,
        height: liWidth
    }).on('tap', function (e) {
        var index = $(this).index();
        iNow=index;
        $container.hide();
        $imgShow.show().css({
            // background:'url(imgs/'+(index+1)+'.jpg) no-repeat center',
            // backgroundSize:'contain'
            background:'url(imgs/'+(index+1)+'.jpg) no-repeat center',
            backgroundSize:'contain'
        });
        e.preventDefault();
    });
    $imgShow.on('tap',function (e) {
       $imgShow.hide();
        $container.show();
        e.preventDefault();
    }).on('swipeleft',function () {
        iNow--;
        if(iNow==-1){
            return
        }
        $imgShow.css({
            background: 'url(imgs/' + (iNow + 1) + '.jpg) no-repeat center',
            backgroundSize: 'contain'
        });
    }).on('swiperight',function () {
        iNow++;
        if(iNow==24){
            return
        }
        $imgShow.css({
            background: 'url(imgs/' + (iNow + 1) + '.jpg) no-repeat center',
            backgroundSize: 'contain'
        });
    });

// var $liWidth=($(document.body).width()-6)/4;

});
