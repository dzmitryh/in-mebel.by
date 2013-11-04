var AC_ID=52374;
var AC_TR=false;
(function(){
    var l='http://adlik.akavita.com/acode.js';
    var t='text/javascript';
    try {
        var h=document.getElementsByTagName('head')[0];
        var s=document.createElement('script');
        s.src=l;
        s.type=t;
        h.appendChild(s);
    }catch(e){
        document.write(unescape('%3Cscript src="'+l+'" type="'+t+'"%3E%3C/script%3E'));
    }
})();

