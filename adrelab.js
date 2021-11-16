
document.addEventListener( 'DOMContentLoaded', function () {
    
    let gzwqbefmtspdockyir = {
        style: 'compact',      
		timeout: '0',    
		closeable: 'off',  
		title: `ReLab.Top đã phát hiện AdBlocker`,
		content: `Mình đang thấy bạn dùng tiện ích chặn quảng cáo, bạn có thể vui lòng tắt nó để giúp mình duy trì hoạt động của Website được không? Mình xin chân thành cảm ơn.

&nbsp;`,
		bg_color: 'rgba(255, 0, 0, 0.75)',
		modal_color: 'rgba(255, 255, 255, 1)',
		text_color: 'rgba(35, 40, 45, 1)', 
		blur: 'on',
		prefix: 'wp-qtbhcfprgvwej',
		redirect: '',
    };
    
    /** Detect ad blockers. */
    adsBlocked( function ( blocked ) {
        
        if ( blocked ) {
            
            doAction();
        
        /** Check by two different methods. */
        } else if ( ! document.getElementById( 'mdp-deblocker-ads' ) ) { 
            
            doAction();
            
        }
        
    } );
    
    /** Do some action if ad blockers detected */
    function doAction() {
        
        setTimeout( function () {
            
            let redURL=gzwqbefmtspdockyir.redirect;
        
	        if ( redURL.length > 1  ) {
	            
	            window.location.replace( redURL );
	            
	        } else {
	            
	            showModal();
	            
	        }
        
        }, ( gzwqbefmtspdockyir.timeout ) );
        
    }
    
    /** Disable text selection on page. */
    function disableTextSelection( e ) {
        
        if ( typeof e.onselectstart !== 'undefined' ){
            e.onselectstart = function(){ return false; };
        } else if ( typeof e.style.MozUserSelect != 'undefined' ) {
            e.style.MozUserSelect = 'none';
        } else if ( typeof e.style.webkitUserSelect != 'undefined' ) {
            e.style.webkitUserSelect = 'none';
        } else {
            e.onmousedown = function(){ return false; };
        }
        
        e.style.cursor = 'default';
    }
    
    /** Enable text selection on page. */
    function enableSelection( e ) {
        
        if ( typeof e.onselectstart != 'undefined' ){
            e.onselectstart = function(){ return true; };
        } else if ( typeof e.style.MozUserSelect != 'undefined' ) {
            e.style.MozUserSelect = 'text';
        } else if ( typeof e.style.webkitUserSelect != 'undefined' ) {
            e.style.webkitUserSelect = 'text';
        } else {
            e.onmousedown = function(){ return true; };
        }
        
        e.style.cursor = 'auto';
    }
    
    /** Disable context menu on page. */
    function disableContextMenu() {
        document.oncontextmenu = function( e ) { 
            let t = e || window.event;
            let n = t.target || t.srcElement;
            
            if ( n.nodeName != 'A' ) {
                return false;  
            }
        };
        
        document.body.oncontextmenu = function () { return false; };
        
        document.ondragstart = function() { return false; };
    }

    /** Enable context menu on page. */
    function enableContextMenu() {
        document.oncontextmenu = null;
        document.body.oncontextmenu = null;
        document.ondragstart = null;
    }
    
    let h_win_disableHotKeys;
    let h_mac_disableHotKeys;
    
    /** Disable HotKeys on page. */
    function disableHotKeys() {
        
        h_win_disableHotKeys = function( e ) { 
            if( 
                e.ctrlKey && 
                ( 
                    e.which == 65 || 
                    e.which == 66 || 
                    e.which == 67 ||
                    e.which == 70 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                e.preventDefault();
            }
        };
        
        /** For Windows check ctrl. */
        window.addEventListener( 'keydown', h_win_disableHotKeys );
        
        document.keypress = function( e ) {
            if( 
                e.ctrlKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                ) 
            ) {
                return false;
            }
            
        };
        
        h_mac_disableHotKeys = function( e ) { 
            if( 
                e.metaKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 67 ||
                    e.which == 70 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) { 
                e.preventDefault();
            }
        };
        
        /** For mac check metakey. */
        window.addEventListener( 'keydown', h_mac_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.metaKey &&
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                return false;
            }
            
        };
        
        /** Disable DevTools. */
        document.onkeydown = function( e ) {
            if (
                e.keyCode == 123 || // F12
                ( ( e.ctrlKey || e.metaKey ) && e.shiftKey && e.keyCode == 73 ) // CTRL+SHIFT+I, CMD+OPTION+I
            ) {
                e.preventDefault();
            }
        };

    }
    
    /** Disable Disable Developer Tool on page. */
    function disableDeveloperTools() {
        
        window.addEventListener( 'keydown', function( e ) {

            if (
                e.keyCode === 123 || // F12
                ( ( e.ctrlKey || e.metaKey ) && e.shiftKey && e.keyCode === 73 ) // Ctrl+Shift+I, âŒ˜+âŒ¥+I
            ) {
                e.preventDefault();
            }
            
        } );
        
        /** Remove body, if you can open dev tools. */
        let checkStatus;

        let element = new Image();
        Object.defineProperty( element, 'id', {
            get:function() {
                checkStatus = 'on';
                throw new Error( 'Dev tools checker' );
            }
        } );

        requestAnimationFrame( function check() {
            checkStatus = 'off';
            console.dir( element );
            if ( 'on' === checkStatus ) {
                document.body.parentNode.removeChild( document.body );
                document.head.parentNode.removeChild( document.head );
                /** Block JS debugger. */
                setTimeout(function() { 
                    while (true) { 
                        eval("debugger");
                    }
                }, 100);
            } else {
                requestAnimationFrame( check );
            }
        } );
                
    }
    
    /** Enable HotKeys on page. */
    function enableHotKeys() {
        
        /** For Windows check ctrl. */
        window.removeEventListener( 'keydown', h_win_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.ctrlKey && 
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                ) 
            ) {
                return true;
            }
        };
        
        /** For mac check metakey. */
        window.removeEventListener( 'keydown', h_mac_disableHotKeys );
        
        document.keypress = function( e ) { 
            if( 
                e.metaKey &&
                (
                    e.which == 65 ||
                    e.which == 66 ||
                    e.which == 70 ||
                    e.which == 67 ||
                    e.which == 73 ||
                    e.which == 80 ||
                    e.which == 83 ||
                    e.which == 85 ||
                    e.which == 86
                )
            ) {
                return true;
            }  
        };
        
        /** Enable DevTools. */
        document.onkeydown = function( e ) {
            e = e || window.event; 
            if ( e.keyCode == 123 || e.keyCode == 18 || ( e.ctrlKey && e.shiftKey && e.keyCode == 73 ) ) { return true; }
     
        };
    }
    
    /**
     * Adds Front-end CSS.
     **/
    function addStyles() {

        let prefix = gzwqbefmtspdockyir.prefix;

        /** Create our stylesheet. */
        let style = document.createElement( 'style' );

        // language=CSS
        style.innerHTML = `
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-blackout,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-blackout,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-blackout,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-blackout,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-blackout,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-blackout {
                position: fixed;
                z-index: 9997;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-blackout.active,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-blackout.active,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-blackout.active,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-blackout.active,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-blackout.active,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-blackout.active {
                display: block;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-duration: .2s;
                animation-duration: .2s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-wrapper,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-wrapper,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-wrapper,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-wrapper,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-wrapper,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9998;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal {
                height: auto;
                width: auto;
                position: relative;
                max-width: 40%;
                padding: 4rem;
                opacity: 0;
                z-index: 9999;
                transition: all 0.5s ease-in-out;
                border-radius: 1rem;
                margin: 1rem;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal.active,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal.active,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal.active,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal.active,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal.active,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal.active {
                opacity: 1;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-delay: .1s;
                animation-delay: .1s;
                -webkit-animation-duration: .5s;
                animation-duration: .5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal h4,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal h4,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal h4,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal h4,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal h4,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal h4 {
                margin: 0 0 1rem 0;
                padding-right: .8rem;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal p,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal p,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal p,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal p,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal p,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal p {
                margin: 0;
            }

            @media only screen and (max-width: 1140px) {
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal {
                    min-width: 60%;
                }
            }

            @media only screen and (max-width: 768px) {
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal {
                    min-width: 80%;
                }
            }

            @media only screen and (max-width: 420px) {
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-modal,
                .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-modal {
                    min-width: 90%;
                }
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close {
                position: absolute;
                right: 1rem;
                top: 1rem;
                display: inline-block;
                cursor: pointer;
                opacity: .5;
                width: 32px;
                height: 32px;
                -webkit-animation: deblocker-close-appear;
                animation: deblocker-close-appear;
                -webkit-animation-delay: 1s;
                animation-delay: 1s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:hover,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close:hover,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close:hover,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close:hover,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close:hover,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:hover {
                opacity: 1;
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 33px;
                width: 2px;
                background: rgba(35, 40, 45, 1);
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:before {
                transform: rotate(45deg);
            }

            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-close:after,
            .wp-qtbhcfprgvwej-style-compact .wp-qtbhcfprgvwej-close:after {
                transform: rotate(-45deg);
            }

            .wp-qtbhcfprgvwej-style-compact-right-top .wp-qtbhcfprgvwej-wrapper {
                justify-content: flex-end;
                align-items: flex-start;
            }

            .wp-qtbhcfprgvwej-style-compact-left-top .wp-qtbhcfprgvwej-wrapper {
                justify-content: flex-start;
                align-items: flex-start;
            }

            .wp-qtbhcfprgvwej-style-compact-right-bottom .wp-qtbhcfprgvwej-wrapper {
                justify-content: flex-end;
                align-items: flex-end;
            }

            .wp-qtbhcfprgvwej-style-compact-left-bottom .wp-qtbhcfprgvwej-wrapper {
                justify-content: flex-start;
                align-items: flex-end;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-blackout {
                position: fixed;
                z-index: 9998;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: none;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-blackout.active {
                display: block;
                -webkit-animation: deblocker-appear;
                animation: deblocker-appear;
                -webkit-animation-delay: .4s;
                animation-delay: .4s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-modal {
                height: 100%;
                width: 100%;
                max-width: 100%;
                max-height: 100%;
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                padding: 45px;
                opacity: 0;
                z-index: 9999;
                transition: all 0.5s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-modal.active {
                opacity: 1;
                -webkit-animation: mdp-deblocker-appear;
                animation: mdp-deblocker-appear;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-modal h4 {
                margin: 0 0 1rem 0;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-modal p {
                margin: 0;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 32px;
                height: 32px;
                display: inline-block;
                cursor: pointer;
                opacity: .3;
                -webkit-animation: mdp-deblocker-close-appear;
                animation: mdp-deblocker-close-appear;
                -webkit-animation-delay: 1s;
                animation-delay: 1s;
                -webkit-animation-duration: .4s;
                animation-duration: .4s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close:hover {
                opacity: 1;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close:before,
            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 33px;
                width: 2px;
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close:before {
                transform: rotate(45deg);
            }

            .wp-qtbhcfprgvwej-style-full .wp-qtbhcfprgvwej-close:after {
                transform: rotate(-45deg);
            }

            @-webkit-keyframes mdp-deblocker-appear {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @keyframes mdp-deblocker-appear {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            @-webkit-keyframes mdp-deblocker-close-appear {
                from {
                    opacity: 0;
                    transform: scale(0.2);
                }
                to {
                    opacity: .3;
                    transform: scale(1);
                }
            }

            @keyframes mdp-deblocker-close-appear {
                from {
                    opacity: 0;
                    transform: scale(0.2);
                }
                to {
                    opacity: .3;
                    transform: scale(1);
                }
            }

            body.wp-qtbhcfprgvwej-blur { 
                -webkit-backface-visibility: none;
            }

            body.wp-qtbhcfprgvwej-blur > *:not(#wpadminbar):not(.wp-qtbhcfprgvwej-modal):not(.wp-qtbhcfprgvwej-wrapper):not(.wp-qtbhcfprgvwej-blackout) {
                -webkit-filter: blur(5px);
                filter: blur(5px);
            }
        `;

        /** Get the random script tag. */
        let ref = document.querySelectorAll('script');
        let rand = ref[ Math.floor( Math.random() * ref.length ) ];

        /** Insert our new styles before the first script tag. */
        rand.parentNode.insertBefore( style, rand );

    }
    
    /** Show DeBlocker Modal. */
    function showModal() {

        let prefix = gzwqbefmtspdockyir.prefix;

        /** Adds Front-end CSS. */
        addStyles();

        /** Add only one popup */
        if ( document.body.classList.contains( `wp-qtbhcfprgvwej-style-` + gzwqbefmtspdockyir.style ) ) { return }
        
        /** Set Style class. */
        document.body.classList.add( `wp-qtbhcfprgvwej-style-` + gzwqbefmtspdockyir.style );

        /** Blur Content: */
        if ( gzwqbefmtspdockyir.blur === 'on' ) {
            document.body.classList.add( `wp-qtbhcfprgvwej-blur` );
        }

        /** Create body overlay. */
        let overlay = document.createElement( 'div' );
        overlay.classList.add( `wp-qtbhcfprgvwej-blackout` );
        overlay.style.backgroundColor = gzwqbefmtspdockyir.bg_color; // Set Overlay Color.
        overlay.classList.add( 'active' );
        document.body.appendChild( overlay );

        /** Create the Modal Wrapper. */
        let modalWrapper = document.createElement( 'div' );
        modalWrapper.classList.add( `wp-qtbhcfprgvwej-wrapper` );
        document.body.appendChild( modalWrapper );

        /** Create Modal. */
        let modal = document.createElement( 'div' );
        modal.classList.add( `wp-qtbhcfprgvwej-modal` );
        modal.style.backgroundColor = gzwqbefmtspdockyir.modal_color; // Set Modal Color.
        modal.classList.add( 'active' );
        modalWrapper.appendChild(modal);

        /** Is it possible to close? */
        if (gzwqbefmtspdockyir.closeable === 'on') {

            /** Create Close Button. */
            let close = document.createElement( 'span' );
            close.classList.add( `wp-qtbhcfprgvwej-close` );
            close.innerHTML = '&nbsp;';
            close.setAttribute( 'href', '#' );

            /** Close Event. */
            close.addEventListener( 'click', function (e) {
                e.preventDefault();
                let elem = document.querySelector( `.wp-qtbhcfprgvwej-modal` );
                elem.parentNode.removeChild(elem);
                elem = document.querySelector( `.wp-qtbhcfprgvwej-wrapper` );
                elem.parentNode.removeChild(elem);
                elem = document.querySelector( `.wp-qtbhcfprgvwej-blackout` );
                elem.parentNode.removeChild(elem);

                /** Remove Blur. */
                document.body.classList.remove( `wp-qtbhcfprgvwej-blur` );
                enableSelection( document.body );
                enableContextMenu();
                enableHotKeys();
            });

            modal.appendChild(close);
        }

        /** Create Title. */
        let title = document.createElement( 'h4' );
        title.innerHTML = gzwqbefmtspdockyir.title;
        title.style.color = gzwqbefmtspdockyir.text_color; // Set Text Color.
        modal.appendChild( title );

        /** Create Content. */
        let content = document.createElement( 'div' );
        content.classList.add( `wp-qtbhcfprgvwej-content` );
        content.innerHTML = gzwqbefmtspdockyir.content;
        content.style.color = gzwqbefmtspdockyir.text_color; // Set Text Color.
        modal.appendChild( content );

        disableTextSelection( document.body );
        disableContextMenu();
        disableHotKeys();
        disableDeveloperTools();

    }
    
    /**
     * Detect Fair AdBlocker extension.
     **/
    function isFairAdBlocker() {

        let stndzStyle = document.getElementById('stndz-style');

        return null !== stndzStyle;

    }

    /** Detect ad blockers. */
    function adsBlocked( callback ) {

        let adsSrc = 'https://googleads.g.doubleclick.net/pagead/id';
        
        let isChromium = window.chrome;
        let isOpera = window.navigator.userAgent.indexOf('OPR') > -1 || window.navigator.userAgent.indexOf('Opera') > -1;
        
        /** Check Fair AdBlocker. */
        if ( isFairAdBlocker() ) {
            
            callback( true ); // Blocked!
            
        /** For Opera browser. */
        } else if ( isChromium !== null && isOpera == true ) {
            
            let RequestSettings = {
                method: 'HEAD',
                mode: 'no-cors'
            };

            let DeBlockerRequest = new Request( adsSrc, RequestSettings );

            fetch( DeBlockerRequest ).then( function ( response ) {
                return response;
            } ).then( function ( response ) {
                
                callback( false ); // All fine.
                
            } ).catch( function ( e ) {
                
                callback( true ); // Blocked!
                
            } );
            
        /** For all other browsers. */
        } else {

            adsSrc = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

            let head = document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            let done = false;

            script.setAttribute( 'src', adsSrc );
            script.setAttribute( 'type', 'text/javascript' ); // 'text/javascript' 'application/json'
            script.setAttribute( 'charset', 'utf-8' );

            script.onload = script.onreadstatechange = function() {

                if ( ! done && ( ! this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') ) {

                    done = true;
                    script.onload = script.onreadystatechange = null;
                    
                    if ( 'undefined' === typeof window.adsbygoogle ) {
                        callback( true ); // Blocked!
                    } else {
                        callback( false ); // All fine.
                    }

                    script.parentNode.removeChild( script );

                }

            };

            /** On Error. */
            script.onerror = function() {
                callback( true ); // Blocked!
            };
            
            /** Async */
            let callbacked = false;            
            const request = new XMLHttpRequest();  
            request.open( 'GET', adsSrc, true );            
            request.onreadystatechange = () => {  
                if ( ! callbacked ) {
                    callback( request.responseURL !== adsSrc );
                    callbacked = true;
                }                
            };            
            request.send();            

            head.insertBefore( script, head.firstChild );

        }

    }
    
}, false );
