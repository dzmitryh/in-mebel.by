/*1330474568,177627415,JIT Construction: v516323,en_US*/
if (!window.FB) {
    FB = {};
    
}
if(!FB.dynData) {
    FB.dynData = {
        "site_vars":{
            "canvas_client_compute_content_size_method":1,
            "use_postMessage":0,
            "use_xdProxy":0,
            "use_ui_server":1,
            "monitor_usage_regex":"somethingtoputhere.com|huffingtonpost.com|lala.com",
            "monitor_usage_rate":0.05,
            "enable_custom_href":1
        },
        "ui_server_dialogs":{
            "bookmark.add":1,
            "friends.add":1
        },
        "resources":{
            "base_url_format":"http:\/\/{0}.facebook.com\/",
            "base_cdn_url":"http:\/\/static.ak.fbcdn.net\/",
            "api_channel":1330360176,
            "api_server":1330360176,
            "www_channel":1330360114,
            "xd_proxy":1330360039,
            "xd_comm_swf_url":"http:\/\/connect.facebook.net\/rsrc.php\/v1\/yQ\/r\/f3KaqM7xIBg.swf",
            "share_button":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yg\/r\/yZiDLhSvAE9.gif",
            "login_img_dark_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y2\/r\/ECSptXRJiXu.gif",
            "login_img_dark_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yN\/r\/WMAGVllinGS.gif",
            "login_img_dark_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/CtXTsD9gwTy.gif",
            "login_img_dark_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yg\/r\/di8GQ4yWYmF.gif",
            "login_img_dark_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yz\/r\/WuhUANysBjg.gif",
            "login_img_light_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yG\/r\/HPpl_Q9ir03.gif",
            "login_img_light_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yG\/r\/QVAKZwo2mNu.gif",
            "login_img_light_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yA\/r\/11hJsvQEMup.gif",
            "login_img_light_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yq\/r\/RwaZQIP0ALn.gif",
            "login_img_light_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y6\/r\/kGCxkZx-uZa.gif",
            "login_img_white_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yu\/r\/HSGgAQzgm6f.gif",
            "login_img_white_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yJ\/r\/a3H8zoa1Ymj.gif",
            "login_img_white_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yK\/r\/McNhTwo6iLp.gif",
            "login_img_white_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y_\/r\/vE_oh0zqP1Z.gif",
            "login_img_white_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yc\/r\/bGxF25CxBsQ.gif",
            "logout_img_small":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yL\/r\/_gsP01S3mwQ.gif",
            "logout_img_medium":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/y2\/r\/NhZ-RyMbOUr.gif",
            "logout_img_large":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/v1\/yf\/r\/C9lMHpC5ik8.gif"
        }
    };
    
}
if (!FB.locale) {
//    FB.locale = "en_US";
    FB.locale = "ru_RU";
}
if (!FB.localeIsRTL) {
    FB.localeIsRTL = false;
}
if(!window.FB)window.FB={};
    
if(!window.FB.isSecure)window.FB.isSecure=function(){
    return (window.location.href.indexOf('https')===0)||(window.name.indexOf('_fb_https')>-1);
};

if(!window.FB.Share){
    FB.Share={
        results:{},
        resetUrls:function(){
            this.urls={};
            
            this.urlsA=[];
        },
        addQS:function(a,b){
            var c=[];
            for(var d in b)if(b[d])c.push(d.toString()+'='+encodeURIComponent(b[d]));return a+'?'+c.join('&');
        },
        getUrl:function(a){
            return a.getAttribute('share_url')||window.location.href;
        },
        getType:function(a){
            return a.getAttribute('type')||'button_count';
        },
        pretty:function(a){
            return a>=1e+07?Math.round(a/1e+06)+'M':(a>=10000?Math.round(a/1000)+'K':a);
        },
        updateButton:function(a){
            var b=this.getUrl(a);
            if(this.results[b])a.fb_count=this.results[b].total_count;
            this.displayBox(a,3);
        },
        displayBox:function(a,b){
            if(typeof(a.fb_count)=='number'&&a.fb_count>=b)for(var c=1;c<=2;c++){
                var d=a.firstChild.childNodes[c];
                d.className=d.className.replace('fb_share_no_count','');
                if(c==2)d.lastChild.innerHTML=this.pretty(a.fb_count);
            }
            },
    renderButton:function(a){
        var b=this.getUrl(a),c=this.getType(a),d=a.innerHTML.length>0?a.innerHTML:'Share',e={
            u:b,
            t:b==window.location.href?document.title:null,
            src:'sp'
        };
        
        a.href=this.addQS((FB.isSecure()?'https:':'http:')+'//www.facebook.com/sharer.php',e);
        a.onclick=function(){
            if(!a.fb_clicked){
                a.fb_count+=1;
                FB.Share.displayBox(this,1);
                a.fb_clicked=true;
            }
            window.open(a.href,'sharer','toolbar=0,status=0,width=626,height=436');
            return false;
        };
        
        a.style.textDecoration='none';
        if(!this.results[b]&&(c.indexOf('count')>=0)){
            this.urls[b]=true;
            this.urlsA.push(b);
        }
        var f='Small',g='<span class=\'FBConnectButton FBConnectButton_'+f+'\''+' style=\'cursor:pointer;\'>'+'<span class=\'FBConnectButton_Text\'>'+d+'</span></span>';
        if(c.indexOf('count')>=0){
            var h=(c=='box_count'),i=(h?'top':'right'),j='<span class=\'fb_share_size_'+f+' '+(h?'fb_share_count_wrapper':'')+'\'>',k='<span class=\'fb_share_count_nub_'+i+' fb_share_no_count\'></span>';
            k+='<span class=\'fb_share_count fb_share_no_count'+' fb_share_count_'+i+'\'>'+'<span class=\'fb_share_count_inner\'>&nbsp;</span></span>';
            j+=(h)?'<span></span>'+k+g:g+k;
        }else if(c.indexOf('icon')>=0){
            var j='<span class=\'FBConnectButton_Simple\'>'+'<span class=\'FBConnectButton_Text_Simple\'>'+(c=='icon_link'?d:'&#xFEFF;')+'</span>';
        }else var j=g;
        a.innerHTML=j;
        a.fb_rendered=true;
    },
    insert:function(a){
        (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(a);
    },
    renderAll:function(a){
        var b=document.getElementsByName('fb_share'),c=b.length;
        for(var d=0;d<c;d++){
            if(!b[d].fb_rendered)this.renderButton(b[d]);
            if(this.getType(b[d]).indexOf('count')>=0&&!b[d].fb_count&&this.results[this.getUrl(b[d])])this.updateButton(b[d]);
        }
        },
    fetchData:function(){
        var a=document.createElement('script'),b=[];
        for(var c=0;c<this.urlsA.length;++c)b.push('"'+this.urlsA[c].replace('\\','\\\\').replace('"','\\"')+'"');
        a.src=this.addQS((FB.isSecure()?'https:':'http:')+'//api.facebook.com/restserver.php',{
            v:'1.0',
            method:'links.getStats',
            urls:'['+b.join(',')+']',
            format:'json',
            callback:'fb_sharepro_render'
        });
        this.resetUrls();
        this.insert(a);
    },
    stopScan:function(){
        clearInterval(FB.Share.scanner);
        FB.Share.renderPass();
    },
    renderPass:function(){
        FB.Share.renderAll();
        if(FB.Share.urlsA.length>0)FB.Share.fetchData();
    },
    _onFirst:function(){
        var a=document.createElement('link');
        a.rel='stylesheet';
        a.type='text/css';
        var b=(FB.isSecure()?'https://s-static.ak.fbcdn.net/':'http://static.ak.fbcdn.net/');
        a.href=b+'connect.php/css/share-button-css';
        this.insert(a);
        this.resetUrls();
        window.fb_sharepro_render=function(c){
            for(var d=0;c&&d<c.length;d++)FB.Share.results[c[d].url]=c[d];
            FB.Share.renderAll();
        };
        
        this.renderPass();
        this.scanner=setInterval(FB.Share.renderPass,700);
        if(window.attachEvent){
            window.attachEvent("onload",FB.Share.stopScan);
        }else window.addEventListener("load",FB.Share.stopScan,false);
    }
};

FB.Share._onFirst();
}
if (FB && FB.Loader) {
    FB.Loader.onScriptLoaded(["FB.Share","FB.SharePro"]);
}