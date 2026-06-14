
window.onload=()=>document.querySelector('.loader').style.display='none';
document.querySelectorAll('.reveal').forEach(el=>{
 new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})).observe(el);
});
document.addEventListener('click',e=>{
 if(e.target.classList.contains('faq-item')){
  let a=e.target.querySelector('.answer');
  a.style.display=a.style.display==='block'?'none':'block';
 }
});
