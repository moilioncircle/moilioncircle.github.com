// 1）press `Esc` to goto the 'overview' or step-0
//    press `Esc` again to get back
// 2）press `b` or `f` to back or forward 

(function ( document, window ) {
    // wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        var api = event.detail.api;
        var bak = 0;
        document.addEventListener("keyup", function ( event ) {
            var kc = event.keyCode;
            if( kc === 27 ) {  // ESC 27
                var id = document.URL.substring(document.URL.lastIndexOf('#/')+2);
                var ov = 0;
                if(bak == 0){
                    bak = id;
                    ov = document.getElementById('overview') || 0;
                }else{
                    ov = document.getElementById(bak);
                    bak = 0;
                }
                api.goto(ov);
            }
            if( kc === 66 ) {  // b 66
                window.history.back();
            }
            if( kc === 70 ) {  // f 70
                window.history.forward();
            }

            event.preventDefault();
        }, false);
    }, false);
})(document, window);