(function(){
  var html=document.documentElement;
  html.classList.add('js');
  window.addEventListener('load',function(){html.classList.add('loaded')});
  setTimeout(function(){html.classList.add('loaded')},1600);

  // Header shadow + floating call button
  var head=document.querySelector('.site-head'),fab=document.querySelector('.fab');
  function onScroll(){
    var y=window.scrollY||0;
    if(head)head.classList.toggle('scrolled',y>10);
    if(fab)fab.classList.toggle('show',y>420);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Mobile menu
  var burger=document.querySelector('.burger');
  if(burger){
    burger.addEventListener('click',function(){
      var open=document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded',open?'true':'false');
      document.body.style.overflow=open?'hidden':'';
    });
    document.querySelectorAll('.mobile-menu a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('menu-open');document.body.style.overflow='';burger.setAttribute('aria-expanded','false')})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.body.classList.contains('menu-open')){burger.click();burger.focus()}});
  }

  // Scroll reveal
  var els=document.querySelectorAll('.rv,.rv-clip,.bars');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}

  // A–Z service picker
  var az=document.querySelector('[data-az]');
  if(az){
    var data=JSON.parse(document.getElementById('az-data').textContent);
    var btns=az.querySelectorAll('.az-letters button');
    var big=az.querySelector('.az-big'),title=az.querySelector('.az-title'),text=az.querySelector('.az-text'),icon=az.querySelector('.az-icon'),link=az.querySelector('.az-link'),inner=az.querySelector('.az-panel-in');
    function pick(btn,focus){
      var k=btn.dataset.k,d=data[k];if(!d)return;
      btns.forEach(function(b){b.setAttribute('aria-selected',b===btn?'true':'false');b.tabIndex=b===btn?0:-1});
      big.textContent=k;title.textContent=d.t;text.textContent=d.d;icon.innerHTML=d.i;link.href='services.html#'+k.toLowerCase();
      inner.classList.remove('az-swap');void inner.offsetWidth;inner.classList.add('az-swap');
      if(focus)btn.focus();
    }
    btns.forEach(function(b,i){
      b.addEventListener('click',function(){pick(b)});
      b.addEventListener('keydown',function(e){
        var n=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=btns[(i+1)%btns.length];if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=btns[(i-1+btns.length)%btns.length];
        if(n){e.preventDefault();pick(n,true)}
      });
    });
  }

  // Review filters
  var filt=document.querySelector('.filters');
  if(filt){
    var fb=filt.querySelectorAll('button'),rv=document.querySelectorAll('.reviews-grid .review');
    fb.forEach(function(b){b.addEventListener('click',function(){
      var f=b.dataset.f;fb.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      rv.forEach(function(r){var show=f==='all'||(r.dataset.tags||'').indexOf(f)>-1;r.classList.toggle('hide',!show);if(show){r.classList.add('in')}});
    })});
  }

  // Opening hours: highlight today + open now (Sydney time)
  var hours=document.querySelector('.hours');
  if(hours){
    try{
      var parts=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
      var wd='',h=0,m=0;parts.forEach(function(p){if(p.type==='weekday')wd=p.value;if(p.type==='hour')h=+p.value%24;if(p.type==='minute')m=+p.value});
      var row=hours.querySelector('tr[data-d="'+wd.slice(0,3)+'"]');
      if(row){row.classList.add('today');
        var o=row.dataset.o,c=row.dataset.c,badge=document.querySelector('.open-now');
        if(badge){var t=h+m/60,isOpen=o&&t>=+o&&t<+c;badge.classList.add(isOpen?'yes':'no');badge.querySelector('span').textContent=isOpen?'Open now':'Closed right now — call to book for the next opening'}
      }
    }catch(e){}
  }

  var y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
})();
