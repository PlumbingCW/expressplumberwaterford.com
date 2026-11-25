(function(){
var d=document,r=d.documentElement;
function openM(){r.classList.add('mob-open');r.style.overflow='hidden';var b=d.getElementById('burger');if(b)b.setAttribute('aria-expanded','true')}
function closeM(){r.classList.remove('mob-open');r.style.overflow='';var b=d.getElementById('burger');if(b)b.setAttribute('aria-expanded','false')}
var b=d.getElementById('burger');if(b)b.addEventListener('click',openM);
['mob-close','mob-overlay'].forEach(function(i){var e=d.getElementById(i);if(e)e.addEventListener('click',closeM)});
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM()});
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){
var it=q.parentNode,a=it.querySelector('.faq-a'),o=it.classList.toggle('open');
q.setAttribute('aria-expanded',o?'true':'false');a.style.maxHeight=o?a.scrollHeight+'px':'0'})});
})();
