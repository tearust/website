var mobile = 767;
$(function() {

    function is_mobile(){
        return window.innerWidth <= mobile;
    }

    // Mobile menu
    $('.js-mobile-menu-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.js-navbar').toggleClass('visible');
    });

    $('.js-navtree-btn').on('click', function(e) {
        e.preventDefault();
        if( window.innerWidth <= mobile ) {
            var oldNavActive = $(this).parent().siblings().find('.subnav-active');
            oldNavActive.next().slideUp();
            oldNavActive.removeClass('subnav-active');
            $(this).toggleClass('subnav-active');
            $(this).next().slideToggle();
        }
    });

    $('.js_to_wallet').click(function(e){
        if(is_mobile()){
            alert('Only in Computer Mode.');
            return false;
        }
    });

    // Parallax
    parallax();
    $(window).on('scroll', parallax);

    function parallax() 
    {
        var speed = 0.6;
        $('.js-parallax').css({backgroundPosition: "50% "+(-window.pageYOffset/speed)+"px" });
    }

    // Fix sections to top
    fixSections();
    
    function fixSections() {

        if (Modernizr.csspositionsticky) {
            
            var headerHeight = Math.round($('.header').outerHeight());
            const sections = $('.section');
            var sectionsOnce = [];

            $.each(sections, function(i, section){
                sectionsOnce[i] = false;
            });

            $(window).on('scroll', function() {

                $.each(sections, function(i, section){

                    if($(window).scrollTop() + headerHeight >= $(section).offset().top) 
                    {
                        
                        if( $(section).outerHeight() >= $(window).innerHeight()-headerHeight ) {

                            if(!sectionsOnce[i]) {
                                $(section).removeClass('section-fixed');

                                if (isBottomInViewport(section)) {
                                    sectionsOnce[i] = true;
                                    $(section).css({top: section.getBoundingClientRect().top+'px' });
                                    $(section).addClass('section-fixed');
                                }
                                else{
                                    // sectionsOnce[i] = false;
                                    $(section).css({top: '' });
                                }
                            }
                        }
                        else{
                            $(section).addClass('section-fixed');
                            $(section).css({top: headerHeight+'px' });
                        }

                    }
                    else{
                        sectionsOnce[i] = false;
                        $(section).css({top: '' });
                        $(section).removeClass('section-fixed');
                    }

                });

            });

        }

    }

});

var isBottomInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csspositionsticky-setclasses !*/
!function(e,n,s){function t(e,n){return typeof e===n}function o(){var e,n,s,o,a,i,f;for(var c in r)if(r.hasOwnProperty(c)){if(e=[],n=r[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],f=i.split("."),1===f.length?Modernizr[f[0]]=o:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=o),l.push((o?"":"no-")+f.join("-"))}}function a(e){var n=c.className,s=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(t,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),u?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var l=[],r=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){r.push({name:e,fn:n,options:s})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var c=n.documentElement,u="svg"===c.nodeName.toLowerCase(),p=f._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];f._prefixes=p,Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",s=i("a"),t=s.style;return t.cssText=e+p.join(n+";"+e).slice(0,-e.length),-1!==t.position.indexOf(n)}),o(),a(l),delete f.addTest,delete f.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);