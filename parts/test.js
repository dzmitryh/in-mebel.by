(function(af,aX){
    var aY=aX.documentElement;
    var aH={};
    
    function aj(a){
        if(!(a in aH)){
            aH[a]=new RegExp("(^|\\s+)"+a+"(\\s+|$)","")
            }
            return aH[a]
        }
        function ai(a,b){
        return aj(b).test(a.className)
        }
        function aA(a,b){
        if(!ai(a,b)){
            a.className+=" "+b
            }
        }
    function aK(a,b){
    a.className=a.className.replace(new RegExp("((?:^|\\s+)"+b+"|"+b+"(?:\\s+|$))","g"),"")
    }
    function aZ(a,b){
    if(ai(a,b)){
        aK(a,b)
        }else{
        aA(a,b)
        }
    }
var ae,al,ad=ae=function(b,a){
    var e=b[az]("*"),f=[],c=0,d=e.length;
    for(;c<d;c++){
        if(ai(e[c],a)){
            f.push(e[c])
            }
        }
    return f
};

if(aX.querySelectorAll){
    ae=function(b,a){
        return b.querySelectorAll("."+a)
        }
    }else{
    if(aX.getElementsByClassName){
        ae=function(b,a){
            if(b.getElementsByClassName){
                return b.getElementsByClassName(a)
                }
                return ad(b,a)
            }
        }
}
function aF(c,a){
    var b=c;
    do{
        if(ai(b,a)){
            return b
            }
        }while(b=b.parentNode);
return null
}
if(af.innerHeight){
    al=function(){
        return{
            width:af.innerWidth,
            height:af.innerHeight
            }
        }
}else{
    if(aY&&aY.clientHeight){
        al=function(){
            return{
                width:aY.clientWidth,
                height:aY.clientHeight
                }
            }
    }else{
    al=function(){
        var a=aX.body;
        return{
            width:a.clientWidth,
            height:a.clientHeight
            }
        }
}
}
var aU=aX.addEventListener?function(c,b,a){
    c.addEventListener(b,a,false)
    }:function(c,b,a){
    c.attachEvent("on"+b,a)
    },a4=aX.removeEventListener?function(c,b,a){
    c.removeEventListener(b,a,false)
    }:function(c,b,a){
    c.detachEvent("on"+b,a)
    };
    
var aM,ak;
if("onmouseenter" in aY){
    aM=function(b,a){
        aU(b,"mouseenter",a)
        };
        
    ak=function(b,a){
        aU(b,"mouseleave",a)
        }
    }else{
    aM=function(b,a){
        aU(b,"mouseover",function(c){
            if(ag(c,this)){
                a(c)
                }
            })
    };
    
ak=function(b,a){
    aU(b,"mouseout",function(c){
        if(ag(c,this)){
            a(c)
            }
        })
}
}
function ag(b,d){
    var c=b.relatedTarget;
    try{
        while(c&&c!==d){
            c=c.parentNode
            }
            if(c!==d){
            return true
            }
        }catch(a){}
}
function ar(a){
    try{
        a.preventDefault()
        }catch(b){
        a.returnValue=false
        }
    }
function ao(a){
    try{
        a.stopPropagation()
        }catch(b){
        a.cancelBubble=true
        }
    }
var aL=(function(f,d){
    var b={
        boxModel:null
    },l=d.defaultView&&d.defaultView.getComputedStyle,c=/([A-Z])/g,k=/-([a-z])/ig,j=function(o,n){
        return n.toUpperCase()
        },h=/^-?\d+(?:px)?$/i,e=/^-?\d/,a=function(){};
    
    if("getBoundingClientRect" in aY){
        return function(n){
            if(!n||!n.ownerDocument){
                return null
                }
                m();
            var o=n.getBoundingClientRect(),s=n.ownerDocument,p=s.body,q=(aY.clientTop||p.clientTop||0)+(parseInt(p.style.marginTop,10)||0),r=(aY.clientLeft||p.clientLeft||0)+(parseInt(p.style.marginLeft,10)||0),t=o.top+(f.pageYOffset||b.boxModel&&aY.scrollTop||p.scrollTop)-q,u=o.left+(f.pageXOffset||b.boxModel&&aY.scrollLeft||p.scrollLeft)-r;
            return{
                top:t,
                left:u
            }
        }
    }else{
    return function(p){
        if(!p||!p.ownerDocument){
            return null
            }
            i();
        var r=p.offsetParent,s=p,u=p.ownerDocument,w,o=u.body,n=u.defaultView,t=n?n.getComputedStyle(p,null):p.currentStyle,v=p.offsetTop,q=p.offsetLeft;
        while((p=p.parentNode)&&p!==o&&p!==aY){
            if(b.supportsFixedPosition&&t.position==="fixed"){
                break
            }
            w=n?n.getComputedStyle(p,null):p.currentStyle;
            v-=p.scrollTop;
            q-=p.scrollLeft;
            if(p===r){
                v+=p.offsetTop;
                q+=p.offsetLeft;
                if(b.doesNotAddBorder&&!(b.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(p.nodeName))){
                    v+=parseFloat(w.borderTopWidth,10)||0;
                    q+=parseFloat(w.borderLeftWidth,10)||0
                    }
                    s=r,r=p.offsetParent
                }
                if(b.subtractsBorderForOverflowNotVisible&&w.overflow!=="visible"){
                v+=parseFloat(w.borderTopWidth,10)||0;
                q+=parseFloat(w.borderLeftWidth,10)||0
                }
                t=w
            }
            if(t.position==="relative"||t.position==="static"){
            v+=o.offsetTop;
            q+=o.offsetLeft
            }
            if(b.supportsFixedPosition&&t.position==="fixed"){
            v+=Math.max(aY.scrollTop,o.scrollTop);
            q+=Math.max(aY.scrollLeft,o.scrollLeft)
            }
            return{
            top:v,
            left:q
        }
    }
}
function g(p,s,r){
    var v,t=p.style;
    if(!r&&t&&t[s]){
        v=t[s]
        }else{
        if(l){
            s=s.replace(c,"-$1").toLowerCase();
            var w=p.ownerDocument.defaultView;
            if(!w){
                return null
                }
                var u=w.getComputedStyle(p,null);
            if(u){
                v=u.getPropertyValue(s)
                }
            }else{
        if(p.currentStyle){
            var o=s.replace(k,j);
            v=p.currentStyle[s]||p.currentStyle[o];
            if(!h.test(v)&&e.test(v)){
                var q=t.left,n=p.runtimeStyle.left;
                p.runtimeStyle.left=p.currentStyle.left;
                t.left=o==="fontSize"?"1em":(v||0);
                v=t.pixelLeft+"px";
                t.left=q;
                p.runtimeStyle.left=n
                }
            }
    }
}
return v
}
function m(){
    var n=d.createElement("div");
    n.style.width=n.style.paddingLeft="1px";
    d.body.appendChild(n);
    b.boxModel=n.offsetWidth===2;
    d.body.removeChild(n).style.display="none";
    n=null;
    m=a
    }
    function i(){
    var p=d.body,o=d.createElement("div"),t,r,s,q,n=parseFloat(g(p,"marginTop",true),10)||0,u="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    o.style.cssText="position:absolute;top:0;lefto:0;margin:0;border:0;width:1px;height:1px;visibility:hidden;";
    o.innerHTML=u;
    p.insertBefore(o,p.firstChild);
    t=o.firstChild;
    r=t.firstChild;
    q=t.nextSibling.firstChild.firstChild;
    b.doesNotAddBorder=(r.offsetTop!==5);
    b.doesAddBorderForTableAndCells=(q.offsetTop===5);
    r.style.position="fixed",r.style.top="20px";
    b.supportsFixedPosition=(r.offsetTop===20||r.offsetTop===15);
    r.style.position=r.style.top="";
    t.style.overflow="hidden",t.style.position="relative";
    b.subtractsBorderForOverflowNotVisible=(r.offsetTop===-5);
    b.doesNotIncludeMarginInBodyOffset=(p.offsetTop!==n);
    p.removeChild(o);
    p=o=t=r=s=q=null;
    m();
    i=a
    }
})(af,aX);
var a0=(function(g,b){
    var e=false,f=false,a=[],d;
    function c(){
        if(!e){
            if(!b.body){
                return setTimeout(c,13)
                }
                e=true;
            if(a){
                var j,k=0;
                while((j=a[k++])){
                    j.call(null)
                    }
                    a=null
                }
            }
    }
function h(){
    if(f){
        return
    }
    f=true;
    if(b.readyState==="complete"){
        return c()
        }
        if(b.addEventListener){
        b.addEventListener("DOMContentLoaded",d,false);
        g.addEventListener("load",c,false)
        }else{
        if(b.attachEvent){
            b.attachEvent("onreadystatechange",d);
            g.attachEvent("onload",c);
            var k=false;
            try{
                k=g.frameElement==null
                }catch(j){}
            if(aY.doScroll&&k){
                i()
                }
            }
    }
}
if(b.addEventListener){
    d=function(){
        b.removeEventListener("DOMContentLoaded",d,false);
        c()
        }
    }else{
    if(b.attachEvent){
        d=function(){
            if(b.readyState==="complete"){
                b.detachEvent("onreadystatechange",d);
                c()
                }
            }
    }
}
function i(){
    if(e){
        return
    }
    try{
        aY.doScroll("left")
        }catch(j){
        setTimeout(i,1);
        return
    }
    c()
    }
    return function(j){
    h();
    if(e){
        j.call(null)
        }else{
        a.push(j)
        }
    }
})(af,aX);
function aJ(){
    var b=(function(e){
        e=e.toLowerCase();
        var f=/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||!/compatible/.test(e)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||[];
        return{
            browser:f[1]||"",
            version:f[2]||"0"
            }
        })(navigator.userAgent);
var d=".b-share-popup-wrap{z-index:1073741823;position:absolute;width:500px}.b-share-popup{position:absolute;z-index:1073741823;border:1px solid #888;background:#FFF;color:#000}.b-share-popup-wrap .b-share-popup_down{top:0}.b-share-popup-wrap .b-share-popup_up{bottom:0}.b-share-popup-wrap_state_hidden{position:absolute!important;top:-9999px!important;right:auto!important;bottom:auto!important;left:-9999px!important;visibility:hidden!important}.b-share-popup,x:nth-child(1){border:0;padding:1px!important}@media all and (resolution = 0dpi){.b-share-popup,x:nth-child(1),x:-o-prefocus{padding:0!important;border:1px solid #888}}.b-share-popup__i{display:-moz-inline-box;display:inline-block;padding:5px 0!important;overflow:hidden;vertical-align:top;white-space:nowrap;visibility:visible;background:#FFF;-webkit-box-shadow:0 2px 9px rgba(0,0,0,0.6);-moz-box-shadow:0 2px 9px rgba(0,0,0,0.6);box-shadow:0 2px 9px rgba(0,0,0,0.6)}.b-share-popup__item{font:1em/1.25em Arial,sans-serif;display:block;padding:5px 15px!important;white-space:nowrap;background:#FFF}.b-share-popup__item,a.b-share-popup__item:link,a.b-share-popup__item:visited{text-decoration:none!important;border:0!important}a.b-share-popup__item{cursor:pointer}a.b-share-popup__item .b-share-popup__item__text{display:inline;text-decoration:underline;color:#1a3dc1}a.b-share-popup__item:hover{word-spacing:0}a.b-share-popup__item:hover .b-share-popup__item__text{color:#F00;cursor:pointer}.b-share-popup__icon{display:-moz-inline-box;display:inline-block;margin:-3px 0 0 0;padding:0 5px 0 0!important;vertical-align:middle}.b-share-popup__icon_input{width:21px;height:16px;margin-top:-6px;padding:0!important}.b-share-popup__icon__input{margin-right:0;margin-left:2px;vertical-align:top}.b-share-popup__spacer{display:block;padding-top:10px!important}.b-share-popup__header{font:86%/1em Verdana,sans-serif;display:block;padding:10px 15px 5px 15px!important;color:#999}.b-share-popup__header_first{padding-top:5px!important}.b-share-popup__input{font:86%/1em Verdana,sans-serif;display:block;padding:5px 15px!important;color:#999;text-align:left}.b-share-popup__input__input{font:1em/1em Verdana,sans-serif;display:block;width:10px;margin:5px 0 0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;text-align:left;direction:ltr}.b-share-popup_down .b-share-popup_with-link .b-share-popup__input_link{position:absolute;top:5px;right:0;left:0}.b-share-popup_up .b-share-popup_with-link .b-share-popup__input_link{position:absolute;right:0;bottom:5px;left:0}.b-share-popup_down .b-share-popup_with-link{padding-top:55px!important}.b-share-popup_up .b-share-popup_with-link{padding-bottom:55px!important}.b-share-popup_down .b-share-popup_expandable .b-share-popup__main{padding-bottom:25px!important}.b-share-popup_up .b-share-popup_expandable .b-share-popup__main{padding-top:25px!important}.b-share-popup_down .b-share-popup_yandexed{padding-bottom:10px!important}.b-share-popup_up .b-share-popup_yandexed{padding-top:10px!important}.b-share-popup__yandex{position:absolute;right:4px;bottom:2px;font:78.125%/1em Verdana,sans-serif;padding:3px!important;background:transparent}a.b-share-popup__yandex:link,a.b-share-popup__yandex:visited{color:#c6c5c5;text-decoration:none}a.b-share-popup__yandex:link:hover,a.b-share-popup__yandex:visited:hover{color:#F00;text-decoration:underline}.b-share-popup_up .b-share-popup__yandex{top:2px;bottom:auto}.b-share-popup_expandable .b-share-popup__yandex{right:auto;left:4px}.b-share-popup_to-right .b-share-popup_expandable .b-share-popup__yandex{right:4px;left:auto}.b-share-popup__expander .b-share-popup__item{position:absolute;bottom:5px;font:86%/1em Verdana,sans-serif;margin:10px 0 0;padding:5px 10px!important;cursor:pointer;color:#999;background:transparent}.b-share-popup_to-right,.b-share-popup_to-right .b-share-popup__expander{direction:rtl}.b-share-popup_to-right .b-share-popup__expander .b-share-popup__icon{padding:0 0 0 5px!important}.b-share-popup_up .b-share-popup__expander .b-share-popup__item{top:-5px;bottom:auto}.b-share-popup__expander .b-share-popup__item:hover .b-share-popup__item__text{text-decoration:underline}.b-share-popup__expander .b-ico_action_rarr,.b-share-popup_to-right .b-share-popup__expander .b-ico_action_larr,.b-share-popup_full .b-share-popup__expander .b-ico_action_larr,.b-share-popup_to-right .b-share-popup_full .b-share-popup__expander .b-ico_action_rarr,.b-share-popup__expander .b-share-popup__item__text_collapse,.b-share-popup_full .b-share-popup__item__text_expand{display:none}.b-share-popup_to-right .b-share-popup__expander .b-ico_action_rarr,.b-share-popup_full .b-share-popup__item__text_collapse,.b-share-popup_full .b-share-popup__expander .b-ico_action_rarr,.b-share-popup_to-right .b-share-popup_full .b-share-popup__expander .b-ico_action_larr{display:inline}.b-ico_action_rarr,.b-ico_action_larr{width:8px;height:7px;border:0}.b-share-popup__main,.b-share-popup__extra{direction:ltr;vertical-align:bottom;text-align:left}.b-share-popup_down .b-share-popup__main,.b-share-popup_down .b-share-popup__extra{vertical-align:top}.b-share-popup__main{display:-moz-inline-stack;display:inline-block}.b-share-popup__extra{display:none;margin:0 -10px 0 0}.b-share-popup_full .b-share-popup__extra{display:-moz-inline-stack;display:inline-block}.b-share-popup_to-right .b-share-popup__extra{margin:0 0 0 -10px}.b-share-popup__tail{position:absolute;width:21px;height:10px;margin:0 0 0 -11px}.b-share-popup_down .b-share-popup__tail{top:-10px;background:url(//yandex.st/share/static/b-share-popup_down__tail.gif) 0 0 no-repeat}.b-share-popup_up .b-share-popup__tail{bottom:-10px;background:url(//yandex.st/share/static/b-share-popup_up__tail.gif) 0 0 no-repeat}.b-share-popup_down .b-share-popup__tail,x:nth-child(1){top:-9px;background-image:url(//yandex.st/share/static/b-share-popup_down__tail.png)}.b-share-popup_up .b-share-popup__tail,x:nth-child(1){bottom:-9px;background-image:url(//yandex.st/share/static/b-share-popup_up__tail.png)}@media all and (resolution = 0dpi){.b-share-popup_down .b-share-popup__tail,x:nth-child(1),x:-o-prefocus{top:-10px;background-image:url(//yandex.st/share/static/b-share-popup_down__tail.gif)}.b-share-popup_up .b-share-popup__tail,x:nth-child(1),x:-o-prefocus{bottom:-10px;background-image:url(//yandex.st/share/static/b-share-popup_up__tail.gif)}}.b-share-popup .b-share-popup_show_form_mail,.b-share-popup .b-share-popup_show_form_html{padding:0!important}.b-share-popup .b-share-popup_show_form_mail .b-share-popup__main,.b-share-popup .b-share-popup_show_form_html .b-share-popup__main,.b-share-popup .b-share-popup_show_form .b-share-popup__main,.b-share-popup .b-share-popup_show_form_mail .b-share-popup__extra,.b-share-popup .b-share-popup_show_form_html .b-share-popup__extra,.b-share-popup .b-share-popup_show_form .b-share-popup__extra{height:15px;padding:0!important;overflow:hidden;visibility:hidden}.b-share-popup_show_form_mail .b-share-popup__expander,.b-share-popup_show_form_html .b-share-popup__expander,.b-share-popup_show_form .b-share-popup__expander,.b-share-popup_show_form_mail .b-share-popup__input_link,.b-share-popup_show_form_html .b-share-popup__input_link,.b-share-popup_show_form .b-share-popup__input_link{display:none}.b-share-popup__form{position:relative;display:none;overflow:hidden;padding:5px 0 0!important;margin:0 0 -15px;white-space:normal}.b-share-popup_show_form_mail .b-share-popup__form_mail,.b-share-popup_show_form_html .b-share-popup__form_html,.b-share-popup_show_form .b-share-popup__form{display:block}.b-share-popup__form__link{font:86%/1.4545em Verdana,sans-serif;float:left;display:inline;padding:5px!important;margin:0 0 5px 10px;text-decoration:underline;cursor:pointer;color:#1a3dc1}.b-share-popup__form__button{font:86%/1.4545em Verdana,sans-serif;float:left;display:inline;margin:5px 0 0 15px}.b-share-popup__form__close{font:86%/1.4545em Verdana,sans-serif;float:right;display:inline;padding:5px!important;margin:0 10px 5px 0;cursor:pointer;color:#999}a.b-share-popup__form__link:hover,a.b-share-popup__form__close:hover{text-decoration:underline;color:#F00}.b-share-popup_font_fixed .b-share-popup__item{font-size:12.8px}.b-share-popup_font_fixed .b-share-popup__header,.b-share-popup_font_fixed .b-share-popup__input,.b-share-popup_font_fixed .b-share-popup__expander .b-share-popup__item,.b-share-popup_font_fixed .b-share-popup__form__link,.b-share-popup_font_fixed .b-share-popup__form__button,.b-share-popup_font_fixed .b-share-popup__form__close{font-size:11px}.b-share-popup_font_fixed .b-share-popup__yandex{font-size:10px}.b-share-form-button{font:86%/17px Verdana,Arial,sans-serif;display:-moz-inline-box;display:inline-block;position:relative;height:19px;margin:0 3px;padding:0 4px;cursor:default;white-space:nowrap;text-decoration:none!important;color:#000!important;border:none;outline:none;background:url(//yandex.st/share/static/b-share-form-button.png) 0 -20px repeat-x}.b-share-form-button:link:hover,.b-share-form-button:visited:hover{color:#000!important}.b-share-form-button__before,.b-share-form-button__after{position:absolute;width:3px;height:19px;background:url(//yandex.st/share/static/b-share-form-button.png)}.b-share-form-button__before{margin-left:-7px}.b-share-form-button__after{margin-left:4px;background-position:-3px 0}.b-share-form-button::-moz-focus-inner{border:none}button.b-share-form-button .b-share-form-button__before,button.b-share-form-button .b-share-form-button__after{margin-top:-1px}@-moz-document url-prefix(){button.b-share-form-button .b-share-form-button__after{margin-top:-2px;margin-left:6px}button.b-share-form-button .b-share-form-button__before{margin-top:-2px;margin-left:-9px}}SPAN.b-share-form-button:hover,.b-share-form-button_state_hover{background-position:0 -60px}SPAN.b-share-form-button:hover .b-share-form-button__before,.b-share-form-button_state_hover .b-share-form-button__before{background-position:0 -40px}SPAN.b-share-form-button:hover .b-share-form-button__after,.b-share-form-button_state_hover .b-share-form-button__after{background-position:-3px -40px}.b-share-form-button_state_pressed,.b-share-form-button_state_pressed .b-share-form-button_share{background-position:0 -100px!important}.b-share-form-button_state_pressed .b-share-form-button__before{background-position:0 -80px!important}.b-share-form-button_state_pressed .b-share-form-button__after{background-position:-3px -80px!important}button.b-share-form-button_state_pressed{overflow:visible}.b-share-form-button_icons{position:relative;padding:0;background-position:0 -20px!important}.b-share-form-button_icons .b-share-form-button__before{left:0;margin-left:-3px;background-position:0 0!important}.b-share-form-button_icons .b-share-form-button__after{z-index:-1;margin-left:0;background-position:-3px 0!important}.b-share-form-button_icons .b-share__handle{padding:2px!important}.b-share-form-button_icons .b-share__handle_more{position:relative;padding-right:6px!important;margin-right:-4px}.b-share-form-button_icons .b-share-icon{opacity:.5;background-image:url(//yandex.st/share/static/b-share-icon_size_14.png)}.b-share-form-button_icons A.b-share__handle:hover .b-share-icon{opacity:1}.b-share{font:86%/1.4545em Arial,sans-serif;display:-moz-inline-box;display:inline-block;padding:1px 3px 1px 4px!important;vertical-align:middle}.b-share .b-share-form-button{font-size:1em}.b-share__text .b-share-icon{margin:0 5px 0 0;border:none}.b-share__text{margin-right:5px}.b-share__handle{float:left;cursor:pointer;text-align:left;text-decoration:none!important;height:16px;padding:5px 3px 5px 2px!important;cursor:pointer;text-align:left;text-decoration:none!important}.b-share__handle_cursor_default{cursor:default}.b-share__handle .b-share-form-button{margin-top:-2px}.b-share__hr{display:none;float:left;width:1px;height:26px;margin:0 3px 0 2px}a.b-share__handle:hover .b-share__text{text-decoration:underline;color:#F00}.b-share_bordered{padding:0 2px 0 3px!important;border:1px solid #e4e4e4;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.b-share_bordered .b-share__hr{display:inline;background:#e4e4e4}.b-share_link{margin:-8px 0}a.b-share_link{margin:0}.b-share_link .b-share__text{text-decoration:underline;color:#1a3dc1}.b-share-form-button_share{padding-left:26px!important;vertical-align:top}.b-share-form-button_share .b-share-form-button__before{margin-left:-29px}.b-share-form-button_share .b-share-form-button__icon{position:absolute;width:20px;height:17px;margin:1px 0 0 -23px;background:url(//yandex.st/share/static/b-share-form-button_share__icon.png) 0 0 no-repeat}.b-share-pseudo-link{border-bottom:1px dotted;cursor:pointer;text-decoration:none!important}.b-share_font_fixed{font-size:11px}.b-share__handle_more{font-size:9px;margin-top:-1px;color:#7b7b7b}A.b-share__handle_more:hover{color:#000}.b-share__group{float:left}.b-share-icon{float:left;display:inline;overflow:hidden;width:16px;height:16px;padding:0!important;vertical-align:top;border:0;background:url(//yandex.st/share/static/b-share-icon.png) 0 99px no-repeat}.b-share-icon_vkontakte,.b-share-icon_custom{background-position:0 0}.b-share-icon_yaru,.b-share-icon_yaru_photo,.b-share-icon_yaru_wishlist{background-position:0 -17px}.b-share-icon_lj{background-position:0 -34px}.b-share-icon_twitter{background-position:0 -51px}.b-share-icon_facebook{background-position:0 -68px}.b-share-icon_moimir{background-position:0 -85px}.b-share-icon_friendfeed{background-position:0 -102px}.b-share-icon_mail{background-position:0 -119px}.b-share-icon_html{background-position:0 -136px}.b-share-icon_postcard{background-position:0 -153px}.b-share-icon_odnoklassniki{background-position:0 -170px}.b-share-icon_blogger{background-position:0 -187px}.b-share-icon_greader{background-position:0 -204px}.b-share-icon_delicious{background-position:0 -221px}.b-share-icon_gbuzz{background-position:0 -238px}.b-share-icon_linkedin{background-position:0 -255px}.b-share-icon_myspace{background-position:0 -272px}.b-share-icon_evernote{background-position:0 -289px}.b-share-icon_digg{background-position:0 -306px}.b-share-icon_juick{background-position:0 -324px}.b-share-icon_moikrug{background-position:0 -341px}.b-share-icon_yazakladki{background-position:0 -358px}.b-share-icon_liveinternet{background-position:0 -375px}.b-share-icon_tutby{background-position:0 -392px}.b-share-icon_diary{background-position:0 -409px}.b-share-icon_gplus{background-position:0 -426px}",a=".b-share-popup__i,.b-share-popup__icon,.b-share-popup__main,.b-share-popup_full .b-share-popup__extra{zoom:1;display:inline}.b-share-popup_to-left{left:0}.b-share-popup_to-right .b-share-popup__expander{direction:ltr}.b-share-popup_to-right .b-share-popup__expander .b-share-popup__item{direction:rtl}.b-share-popup__icon{margin-top:-1px}.b-share-popup__icon_input{margin-top:-4px}.b-share-popup__icon__input{width:14px}.b-share-popup__spacer{overflow:hidden;font:1px/1 Arial}.b-share-popup__input__input{width:100px;direction:ltr}.b-share-popup_full .b-share-popup__input_link .b-share-popup__input__input,.b-share-popup_full .b-share-popup__form .b-share-popup__input__input{width:200px}.b-share-popup-wrap{margin-bottom:25px}.b-share-popup__form{direction:ltr}.b-share-popup__form__button,.b-share-popup__form__close,.b-share-popup__form__link{float:none;display:inline-block}.b-share-popup_full .b-share-popup__form__close{margin-left:70px}* HTML .b-share-popup_up .b-share-popup__tail{overflow:hidden;bottom:-10px}* html .b-share-form-button{text-decoration:none!important}.b-share-form-button{position:relative;overflow:visible}.b-share-form-button__before,.b-share-form-button__after{top:0}button.b-share-form-button .b-share-form-button__before,button.b-share-form-button .b-share-form-button__after{margin-top:auto}.b-share-form-button__icon{top:0}.b-share{zoom:1;display:inline}* HTML .b-share-form-button_share .b-share-form-button__icon{margin-top:-1px;background-image:url(//yandex.st/share/static/b-share-form-button_share__icon.gif)}";
var c=document.createElement("style");
c.type="text/css";
c.id="ya_share_style";
if(c.styleSheet){
    c.styleSheet.cssText=b.browser==="msie"&&(b.version<8||aX.documentMode<8)?d+a:d
    }else{
    c.appendChild(aX.createTextNode(d))
    }
    d=a="";
aN.appendChild(c);
aJ=function(){}
}
var aT=function(){},av=null,az="getElementsByTagName",aO=encodeURIComponent,aN=aX[az]("head")[0]||aX.body,aW="//yandex.st/share",aS="http://share.yandex.ru",aP={
    blogger:"Blogger",
    diary:"Diary",
    digg:"Digg",
    evernote:"Evernote",
    delicious:"delicious",
    facebook:"Facebook",
    friendfeed:"FriendFeed",
    gbuzz:"Google Buzz",
    gplus:"Google Plus",
    greader:"Google Reader",
    juick:"Juick",
    linkedin:"LinkedIn",
    liveinternet:"LiveInternet",
    lj:"LiveJournal",
    moikrug:"\u041C\u043E\u0439 \u041A\u0440\u0443\u0433",
    moimir:"\u041C\u043E\u0439 \u041C\u0438\u0440",
    myspace:"MySpace",
    odnoklassniki:"\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438",
    tutby:"Я ТУТ!",
    twitter:"Twitter",
    vkontakte:"\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",
    yaru:"\u042F.\u0440\u0443",
    yazakladki:"\u042F\u043D\u0434\u0435\u043A\u0441.\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438"
},a3={
    be:{
        close:"\u0437\u0430\u043A\u0440\u044B\u0446\u044C",
        "code blog":"\u041A\u043E\u0434 \u0434\u043B\u044F \u0431\u043B\u043E\u0433\u0430",
        link:"C\u043F\u0430\u0441\u044B\u043B\u043A\u0430",
        share:"\u041F\u0430\u0434\u0437\u044F\u043B\u0456\u0446\u0446\u0430",
        "share with friends":"\u041F\u0430\u0434\u0437\u044F\u043B\u0456\u0446\u0446\u0430 \u0437 \u0441\u044F\u0431\u0440\u0430\u043Ci"
    },
    en:{
        close:"close",
        "code blog":"Blog code",
        link:"Link",
        share:"Share",
        "share with friends":"Share with friends"
    },
    kk:{
        close:"\u0436\u0430\u0431\u0443",
        "code blog":"\u0411\u043B\u043E\u0433 \u04AF\u0448\u0456\u043D \u043A\u043E\u0434",
        link:"\u0421\u0456\u043B\u0442\u0435\u043C\u0435",
        share:"\u0411\u04E9\u043B\u0456\u0441\u0443",
        "share with friends":"\u0414\u043e\u0441\u0442\u0430\u0440\u044b\u04a3\u044b\u0437\u0431\u0435\u043d \u0431\u04e9\u043b\u0456\u0441\u0456\u04a3\u0456\u0437"
    },
    ru:{
        close:"\u0437\u0430\u043A\u0440\u044B\u0442\u044C",
        "code blog":"\u041A\u043E\u0434 \u0434\u043B\u044F \u0431\u043B\u043E\u0433\u0430",
        link:"\u0421\u0441\u044B\u043B\u043A\u0430",
        share:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
        "share with friends":"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438"
    },
    tr:{
        close:"kapat",
        "code blog":"Blog i\u00E7in eklenti kodu",
        link:"Ba\u011flant\u0131",
        share:"Payla\u015F",
        "share with friends":"Arkada\u015flarla payla\u015f"
    },
    tt:{
        close:"\u044F\u0431\u0443",
        "code blog":"\u0411\u043B\u043E\u0433 \u04E9\u0447\u0435\u043D \u043A\u043E\u0434",
        link:"\u0421\u044b\u043b\u0442\u0430\u043c\u0430",
        share:"\u0411\u04AF\u043B\u0435\u0448\u04AF",
        "share with friends":"\u0414\u0443\u0441\u043B\u0430\u0440\u0433\u044B\u0437 \u0431\u0435\u043B\u04D9\u043D \u0431\u04AF\u043B\u0435\u0448\u0435\u0433\u0435\u0437"
    },
    uk:{
        close:"\u0437\u0430\u043A\u0440\u0438\u0442\u0438",
        "code blog":"\u041A\u043E\u0434 \u0434\u043B\u044F \u0431\u043B\u043E\u0433\u0443",
        link:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        share:"\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F",
        "share with friends":"\u041F\u043E\u0434\u0456\u043B\u0456\u0442\u044C\u0441\u044F \u0437 \u0434\u0440\u0443\u0437\u044F\u043C\u0438"
    }
};

function ay(g,e){
    aJ();
    if(!g||(!g.element&&!g.elementID)){
        throw new Error("Invalid parameters")
        }
        var D=g.element||g.elementID;
    if(typeof D==="string"){
        D=aX.getElementById(D)
        }else{
        if(!D.nodeType===1){
            D=null
            }
        }
    if(!D||D.yashareInited){
    return
}
D.yashareInited=true;
var u={};

if(g.style){
    u.type=g.style.button===false?"link":"button";
    u.linkUnderline=g.style.link;
    u.border=g.style.border;
    u.linkIcon=g.style.icon
    }
    var G,c=g.l10n,y=(g.link||af.location)+"",o=g.elementStyle||u||{
    type:"button"
},E=o.quickServices||g.services||["|","yaru","vkontakte","odnoklassniki","twitter","facebook","moimir","lj"],a=g.title||aX.title,t=g.serviceSpecific||g.override||{},h=g.popupStyle||g.popup||{},F=h.codeForBlog,k=h.blocks||["yaru","vkontakte","odnoklassniki","twitter","facebook","moimir","lj"],i=h.copyPasteField||h.input,A="ya-share-"+Math.random()+"-"+ +(new Date()),v=!/(?:moikrug\.ru|ya\.ru|yandex\.by|yandex\.com|yandex\.com\.tr|yandex\.kz|yandex\.net|yandex\.ru|yandex\.ua|yandex-team\.ru)$/.test(location.hostname),m,C=g.servicesDeclaration;
if(!v&&C){
    for(m in C){
        if(C.hasOwnProperty(m)&&!(m in aP)){
            var b=C[m];
            if(b&&b.url&&b.title&&(b.icon_16||b.icon_from)){
                aP[m]=C[m]
                }else{
                throw new Error("Invalid new service declaration")
                }
            }
    }
    }
if(!o.type||("block button link icon none".indexOf(o.type)===-1)){
    o.type="button"
    }
    var x=o.afterIconsText;
if(x){
    o.type="text"
    }
    if(!c||!(c in a3)){
    c=location.hostname.split(".").splice(-1,1)[0];
    switch(c){
        case"by":
            c="be";
            break;
        case"kz":
            c="kk";
            break;
        case"ua":
            c="uk";
            break;
        default:
            c="ru"
            }
        }
c=a3[c];
G=o.text||g.text||(c.share+(o.type=="button"?"\u2026":""));
G=am(G);
if(Object.prototype.toString.call(k)==="[object Array]"){
    var f=k;
    k={};
    
    k[c["share with friends"]]=f;
    f=null
    }
    switch(typeof F){
    case"string":
        var p=F;
        F={};
        
        F[c["code blog"]]=p;
        break;
    case"object":
        for(var d in F){
        break
    }
    if(!d){
        F=null
        }
        break;
    default:
        F=null
        }
        var s=' id="'+A+'" data-hdirection="'+(h.hDirection||"")+'" data-vdirection="'+(h.vDirection||"")+'"';
var r,n,b,q=['<span class="b-share'+(o.type=="block"?" b-share-form-button b-share-form-button_icons":"")+(o.border?" b-share_bordered":"")+(o.linkUnderline?" b-share_link":"")+'"'+(o.background?' style="background:'+o.background+'"':"")+">"+((o.type!=="none"&&o.type!=="text")?'<a class="b-share__handle"'+s+">":"")];
if(o.type=="block"){
    q=['<div class="b-share"><span class="b-share-form-button b-share-form-button_icons"><i class="b-share-form-button__before"></i>']
    }else{
    if(o.type=="button"){
        q.push('<span class="b-share-form-button b-share-form-button_share"><i class="b-share-form-button__before"></i><i class="b-share-form-button__icon"></i>'+G+'<i class="b-share-form-button__after"></i></span>')
        }else{
        if(o.type==="link"||o.type==="text"){
            q.push('<span class="b-share__text'+(o.type==="text"?" b-share__handle b-share__handle_cursor_default":"")+(o.linkUnderline==="dotted"?" b-share-pseudo-link":"")+'">')
            }
            if(((o.type==="link"||o.type==="text")&&o.linkIcon)||o.type==="icon"){
            q.push('<img alt="" class="b-share-icon" src="'+aW+'/static/b-share.png"/>')
            }
            if(o.type==="link"||o.type==="text"){
            q.push(G+"</span>")
            }
        }
}
if(o.type!=="none"&&o.type!=="text"){
    q.push("</a>")
    }
    if(o.group){
    q.push('<span class="b-share__group">')
    }
    for(r=0,n=E.length;r<n;r++){
    b=E[r];
    q.push(a2(b,ax(b,"link",y,t),ax(b,"title",a,t),ax(b,"description",g.description||"",t),ax(b,"image",g.image||"",t)))
    }
    if(o.group){
    q.push("</span>")
    }
    if(o.type=="block"){
    x="▼";
    q.push('<a class="b-share__handle b-share__handle_more" title="Ещё" '+s+'><span class="__b-share__handle_more">'+x+"</span></a>");
    q.push('<i class="b-share-form-button__after"></i>')
    }else{
    if(x){
        q.push('<a class="b-share__handle b-share_link"'+s+'><span class="b-share__text b-share-pseudo-link">'+x+"</span></a>")
        }
    }
q.push("</span>");
if(o.type=="block"){
    q.push("</div>")
    }
    D.innerHTML=q.join("");
aE(D,e,x,o.type==="none");
if(o.type!=="none"){
    var j=['<div class="b-share-popup-wrap b-share-popup-wrap_state_hidden" id="'+A+'-popup"><div class="b-share-popup b-share-popup_down b-share-popup_to-right"><div class="b-share-popup__i'+(i?" b-share-popup_with-link":"")+'">'];
    if(F){
        j.push('<div class="b-share-popup__form b-share-popup__form_html">');
        for(var w in F){
            if(F.hasOwnProperty(w)){
                j.push('<label class="b-share-popup__input">'+w+'<textarea class="b-share-popup__input__input" cols="10" rows="5">'+F[w]+"</textarea></label>")
                }
            }
        j.push('<a class="b-share-popup__form__close">'+c.close+"</a></div>")
    }
    j.push('<div class="b-share-popup__main '+(v?" b-share-popup_yandexed":"")+'">');
if(i){
    j.push('<label class="b-share-popup__input b-share-popup__input_link">'+c.link+'<input class="b-share-popup__input__input" readonly="readonly" type="text" value="'+am(y)+'" /></label>')
    }
    for(var l in k){
    if(k.hasOwnProperty(l)){
        var B=k[l];
        n=B.length;
        if(n){
            if(l){
                j.push('<div class="b-share-popup__header b-share-popup__header_first">'+l+"</div>")
                }
                for(r=0;r<n;r++){
                b=B[r];
                j.push(aw(b,ax(b,"link",y,t),ax(b,"title",a,t),ax(b,"description",g.description,t),ax(b,"image",g.image||"",t)))
                }
            }
        }
}
if(F){
    j.push('<div class="b-share-popup__spacer"></div><a class="b-share-popup__item b-share-popup__item_type_code"><span class="b-share-popup__icon"><span class="b-share-icon b-share-icon_html"></span></span><span class="b-share-popup__item__text">'+c["code blog"]+"</span></a>")
    }
    if(v){
    j.push('<a href="http://api.yandex.ru/share/" class="b-share-popup__yandex">\u042F\u043D\u0434\u0435\u043A\u0441</a>')
    }
    j.push("</div>");
j.push('</div><div class="b-share-popup__tail"></div></div></div>');
var z=aX.createElement("div"),H;
z.innerHTML=j.join("");
H=z.firstChild;
aX.body.appendChild(H);
z=null;
au(H,e)
}
return[D,H]
}
function aD(a){
    var b=aX.createElement("script");
    b.setAttribute("src",location.protocol+"//clck.yandex.ru/jclck/dtype=stred/pid=52/cid=70685/path="+a+"/rnd="+Math.round(Math.random()*100000)+"/*"+encodeURIComponent(location.href));
    aN.appendChild(b)
    }
    function ax(f,a,e,d){
    var b=e,c=d[f];
    if(c&&a in c){
        b=c[a]
        }
        return(a=="description"||a=="image")?b:aO(b)
    }
    function aQ(a){
    return Boolean(aP[a]["title"])
    }
    function a1(b){
    var c=aP[b];
    var d="";
    var a="";
    if(aQ(b)){
        if(c.icon_from){
            d+=c.icon_from
            }else{
            d+="custom";
            a=' style="background-image:url('+c.icon_16+");"+(c.icon_16_css?c.icon_16_css:"")+'"'
            }
        }else{
    d+=b
    }
    return'<span class="b-share-icon b-share-icon_'+d+'"'+a+"></span>"
}
function an(a){
    var b=aP[a];
    return aQ(a)?b.title:b
    }
    function aV(f,b,g,c,h){
    h=h?aO(h):"";
    c=c?aO(c):"";
    var e=aS+"/go.xml?service="+f;
    if(aQ(f)){
        var d=aP[f];
        var a=d.url.replace("{link}",b).replace("{title}",g).replace("{description}",c).replace("{image}",h);
        if(d.directLink){
            return a
            }else{
            return e+"&amp;goto="+aO(a)
            }
        }else{
    return e+"&amp;url="+b+"&amp;title="+g+(c?"&amp;description="+c:"")+(h?"&amp;image="+h:"")
    }
}
function a2(e,c,a,d,b){
    if(e in aP){
        return'<a rel="nofollow" target="_blank" title="'+an(e)+'" class="b-share__handle b-share__link" href="'+aV(e,c,a,d,b)+'" data-service="'+e+'">'+a1(e)+"</a>"
        }else{
        if(e=="|"){
            return'<span class="b-share__hr"></span>'
            }
        }
}
function aw(e,c,a,d,b){
    if(e in aP){
        return'<a rel="nofollow" target="_blank" href="'+aV(e,c,a,d,b)+'" class="b-share-popup__item" data-service="'+e+'"><span class="b-share-popup__icon">'+a1(e)+'</span><span class="b-share-popup__item__text">'+an(e)+"</span></a>"
        }else{
        if(e=="|"){
            return'<div class="b-share-popup__spacer"></div>'
            }
        }
}
var aR;
function at(){
    af.clearTimeout(aR)
    }
    function aI(a){
    aR=af.setTimeout(a.onDocumentClick,2000)
    }
    function au(g,d){
    var a,c,b=ae(g,"b-share-popup__expander")[0],h=ae(g,"b-share-popup__item");
    if(b){
        aU(b.firstChild,"click",aq)
        }
        for(a=0,c=h.length;a<c;a++){
        aU(h[a],"click",d.onshare)
        }
        ap(g[az]("input"));
    ap(g[az]("textarea"));
    var f=ae(g,"b-share-popup__item_type_code")[0];
    if(f){
        var e=ae(g,"b-share-popup__i")[0];
        aU(f,"click",function(i){
            aA(e,"b-share-popup_show_form_html");
            ar(i)
            });
        aU(ae(g,"b-share-popup__form__close")[0],"click",function(i){
            aK(e,"b-share-popup_show_form_html");
            ar(i)
            })
        }
        aM(g,at);
    ak(g,d.setPopupCloseTimeout)
    }
    function ap(d){
    var a=0,b=d.length,c;
    for(;a<b;a++){
        c=d[a];
        aU(c,"click",(function(e){
            return function(){
                e.select()
                }
            })(c))
    }
    }
function aE(h,f,i,c){
    var d=1,e,g=ae(h,"b-share__handle");
    var j=g.length;
    var a=j;
    if(c){
        d=0
        }else{
        var b=g[0];
        if(i){
            b=g[j-1];
            a--
        }
        aU(b,"click",f.toggleOpenMode);
        aM(b,at);
        ak(b,f.setPopupCloseTimeout)
        }
        for(d,e=a;d<e;d++){
        aU(g[d],"click",f.onshare)
        }
    }
    function ah(a){
    var c,d,b;
    if(!(c=a.currentTarget)){
        b=a.target||a.srcElement;
        if(!(c=aF(b,"b-share__handle"))){
            c=aF(b,"b-share-popup__item")
            }
        }
    if(c&&(d=c.getAttribute("data-service"))){
    aD(d);
    switch(d){
        case"facebook":
            aC(a,c,800,500);
            break;
        case"moimir":
            aC(a,c,560,400);
            break;
        case"twitter":
            aC(a,c,650,520);
            break;
        case"vkontakte":
            aC(a,c,550,420);
            break;
        case"odnoklassniki":
            aC(a,c,560,370);
            break
            }
        }
return d
}
function aC(a,c,b,d){
    ar(a);
    window.open(c.href,"yashare_popup","scrollbars=1,resizable=1,menubar=0,toolbar=0,status=0,left="+((screen.width-b)/2)+",top="+((screen.height-d)/2)+",width="+b+",height="+d).focus()
    }
    function aq(){
    var a=aF(this,"b-share-popup__i");
    aZ(a,"b-share-popup_full")
    }
    function a5(a,c){
    if(a&&typeof a!=="number"){
        var b=a.which?a.which:1;
        if(b!==1||aF(a.target||a.srcElement,"b-share-popup-wrap")){
            return
        }
    }
    if(av){
    c.closePopup(av.id)
    }
}
function a6(g,c){
    g=g.replace("-popup","");
    var d=aX.getElementById(g),e=aX.getElementById(g+"-popup"),f=ae(e,"b-share-popup__input__input");
    aK(d,"b-share-popup_opened");
    aK(d,"b-share-form-button_state_pressed");
    e.className="b-share-popup-wrap b-share-popup-wrap_state_hidden";
    e.style.cssText="";
    if(f){
        for(var a=0,b=f.length;a<b;a++){
            f[a].style.cssText=""
            }
        }
        e.firstChild.className="b-share-popup";
a4(aX,"click",c.onDocumentClick);
av=null;
c.onclose(c._this)
}
function aB(q,l,a){
    a=a||{};
    
    var m=a.hDirection||q.getAttribute("data-hdirection"),e=a.vDirection||q.getAttribute("data-vdirection"),b=aX.getElementById(q.id+"-popup"),n=b.firstChild,o=ae(b,"b-share-popup__input__input"),p=al(),d,c,i=aL(q);
    if(m==="left"||m==="right"){
        d=m
        }else{
        d=(i.left-Math.max(aY.scrollLeft,aX.body.scrollLeft))>=p.width/2?"left":"right"
        }
        if(e==="up"||e==="down"){
        c=e
        }else{
        c=(i.top-Math.max(aY.scrollTop,aX.body.scrollTop))>=p.height/2?"up":"down"
        }
        l.onDocumentClick();
    var k=ae(b,"b-share-popup__tail")[0],g=Math.round(q.offsetWidth/2),j=a.width||n.offsetWidth,r=Math.round(j/2);
    if(i.left-(r-g)>5){
        i.left-=Math.round(r-g);
        g=r-10
        }
        i.top+=(c==="up"?-9:9+q.offsetHeight);
    b.style.cssText="top:"+(a.top||i.top)+"px;left:"+(a.left||i.left)+"px;width:"+j+"px";
    k.style.cssText="left: "+g+"px";
    if(o){
        for(var f=0,h=o.length;f<h;f++){
            o[f].style.width=(j-30)+"px"
            }
        }
        n.className="b-share-popup b-share-popup_"+c+" b-share-popup_to-"+d;
b.className="b-share-popup-wrap b-share-popup-wrap_state_visible";
aA(q,"b-share-popup_opened");
aA(q,"b-share-form-button_state_pressed");
n.firstChild.style.zoom=1;
af.setTimeout(function(){
    aU(aX,"click",l.onDocumentClick)
    },50);
aD("share");
av=b;
l.onopen(l._this)
}
function aG(a,b){
    var c=a.currentTarget||aF(a.target||a.srcElement,"b-share__handle");
    if(ai(c,"b-share-popup_opened")){
        b.closePopup(c.id,b)
        }else{
        if(b.onbeforeopen(b._this)!==false){
            b.openPopup(c,b)
            }
        }
    ar(a);
ao(a)
}
if(!("Ya" in af)){
    af.Ya={}
}
Ya.share=function(b){
    if(!(this instanceof Ya.share)){
        return new Ya.share(b)
        }
        if(b){
        aW=b.STATIC_HOST||aW;
        aS=b.SHARE_HOST||aS
        }
        this._loaded=false;
    var a=this,c=b.onshare||aT,d={
        onready:b.onready||b.onload||aT,
        onbeforeclose:b.onbeforeclose||aT,
        onclose:b.onclose||aT,
        onbeforeopen:b.onbeforeopen||aT,
        onopen:b.onopen||aT,
        onshare:function(e){
            var f=ah(e);
            if(f){
                c(f,a)
                }
            },
    _this:a
};

d.toggleOpenMode=function(e){
    aG(e,d)
    };
    
d.closePopup=function(e){
    at();
    if(d.onbeforeclose(a)!==false){
        a6(e,d)
        }
    };

d.openPopup=function(f,e){
    aB(f,e)
    };
    
d.onDocumentClick=function(e){
    a5(e,d)
    };
    
d.setPopupCloseTimeout=function(){
    aI(d)
    };
    
this.closePopup=function(){
    a6(this._popup.id,d)
    };
    
this.openPopup=function(e){
    aB(ae(this._block,"b-share__handle")[0],d,e)
    };
    
a0(function(){
    var e=ay(b,d);
    b=null;
    if(!e){
        return
    }
    a._block=e[0];
    a._popup=e[1];
    a._loaded=true;
    d.onready(a)
    })
};

Ya.share.prototype={
    updateShareLink:function(e,d,b){
        if(!this._loaded){
            return this
            }
            var h,i,a,g,c="",j="";
        if(arguments.length==1&&typeof arguments[0]=="object"){
            var f=arguments[0];
            e=f.link||af.location.toString();
            d=f.title||aX.title;
            c=f.description||"";
            j=f.image||"";
            b=f.serviceSpecific||{}
        }else{
        e=e||af.location.toString();
        d=d||aX.title;
        b=b||{}
    }
    a=ae(this._block,"b-share__link");
for(h=0,i=a.length;h<i;h++){
    g=a[h].getAttribute("data-service");
    a[h].href=aV(g,ax(g,"link",e,b),ax(g,"title",d,b),ax(g,"description",c,b),ax(g,"image",j,b))
    }
    if(this._popup){
    a=ae(this._popup,"b-share-popup__item");
    for(h=0,i=a.length;h<i;h++){
        g=a[h].getAttribute("data-service");
        a[h].href=aV(g,ax(g,"link",e,b),ax(g,"title",d,b),ax(g,"description",c,b),ax(g,"image",j,b))
        }
        a=ae(this._popup,"b-share-popup__input__input")[0];
    if(a){
        a.value=e
        }
    }
return this
},
updateCustomService:function(b,a){
    if(aP[b]&&aP[b].url){
        aP[b].url=a;
        this.updateShareLink()
        }
    }
};

a0(function(){
    var g=ae(aX.body,"yashare-auto-init"),c=0,e=g.length,b,d,f,a;
    for(;c<e;c++){
        b=g[c];
        d=b.getAttribute("data-yashareQuickServices");
        f=b.getAttribute("data-yasharePopupServices");
        if(typeof d==="string"){
            d=d.split(",")
            }else{
            d=null
            }
            a={
            element:b,
            l10n:b.getAttribute("data-yashareL10n"),
            link:b.getAttribute("data-yashareLink"),
            title:b.getAttribute("data-yashareTitle"),
            elementStyle:{
                type:b.getAttribute("data-yashareType"),
                quickServices:d
            }
        };
        
    if(f&&typeof f==="string"){
        f=f.split(",");
        a.popupStyle={
            blocks:f
        }
    }
    new Ya.share(a)
    }
});
function am(a){
    return(a||"").replace(/</g,"&lt;").replace(/"/g,"&quot;")
    }
})(window,document);
