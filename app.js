/* VetFlowCare · B&G Systems · vfc-web-sig-fMDKYJ4-bg26 · trava:inicio */
(function(){try{
var G=function(s){var h=5381,i;for(i=0;i<s.length;i++){h=(Math.imul(h,33)^s.charCodeAt(i))>>>0}h=(h^(h>>>16))>>>0;return h.toString(36)};
var N=String(location.hostname||'').toLowerCase().replace(/\.+$/,'');
if(['45h','1h3nykp','nfqu7q','xcm24m','fh6acq','1jqhve7'].indexOf(G(N))>-1)return;
var U='https://www.vetflowcare.com.br',D=document,R=D.documentElement,ID='vfcLockOv',F='system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif',T0=0;
var K='position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;z-index:2147483647!important;display:flex!important;overflow:auto!important;box-sizing:border-box!important;width:auto!important;height:auto!important;max-width:none!important;max-height:none!important;margin:0!important;padding:24px 20px!important;opacity:1!important;visibility:visible!important;transform:none!important;filter:none!important;clip-path:none!important;pointer-events:auto!important;background:#0F1B2E!important;color:#fff!important;font:16px/1.5 '+F+'!important';
function E(t,s,x){var e=D.createElement(t);if(s)e.style.cssText=s;if(x)e.textContent=x;return e}
function ok(o){
if(!o||o.parentNode!==R||!o.querySelector('a'))return false;
var c=getComputedStyle(o),r=o.getBoundingClientRect();
return c.display==='flex'&&c.visibility==='visible'&&c.opacity==='1'&&c.position==='fixed'&&c.zIndex==='2147483647'&&c.transform==='none'&&c.clipPath==='none'&&c.filter==='none'&&c.pointerEvents==='auto'&&(c.backgroundColor==='rgb(15, 27, 46)'||matchMedia('(forced-colors: active)').matches)&&r.width>=innerWidth*.9&&r.height>=innerHeight*.9&&!o.inert&&!o.hasAttribute('inert')
}
function mk(){
var o=E('div'),w=E('div','margin:auto;max-width:440px;text-align:center'),
i=E('div','width:64px;height:64px;margin:0 auto 18px;border-radius:50%;background:#F5B73B;color:#0F1B2E;font:800 38px/64px '+F,'!'),
a=E('div','margin:0 0 10px;font:800 26px/1.25 '+F+';letter-spacing:normal;color:#fff','Cópia não autorizada'),
p=E('div','margin:0 0 24px;font:400 16px/1.55 '+F+';color:#B9C7D8','Este endereço não é um site oficial do VetFlowCare. O conteúdo, as imagens e o código pertencem à B&G Systems e não podem ser copiados nem hospedados em outro endereço.'),
l=E('a','display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 28px;border:2px solid #fff;border-radius:12px;background:#fff;color:#0F1B2E;font:800 17px/1.2 '+F+';text-decoration:none','Ir para o site oficial'),
u=E('div','margin:14px 0 0;font:600 14px/1.4 '+F+';color:#B9C7D8',U.replace(/^https?:\/\//,''));
o.setAttribute('style',K);o.id=ID;o.setAttribute('role','alertdialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-labelledby','vfcLockT');o.setAttribute('aria-describedby','vfcLockD');
i.setAttribute('aria-hidden','true');a.id='vfcLockT';a.setAttribute('role','heading');a.setAttribute('aria-level','2');p.id='vfcLockD';l.id='vfcLockGo';l.setAttribute('href',U);
w.appendChild(i);w.appendChild(a);w.appendChild(p);w.appendChild(l);w.appendChild(u);o.appendChild(w);return o
}
function go(){try{
var o=D.getElementById(ID),n,b;
if(!ok(o)){n=Date.now();if(n-T0>=250){T0=n;if(o&&o.parentNode)o.parentNode.removeChild(o);o=mk();R.appendChild(o);try{o.querySelector('a').focus({preventScroll:true})}catch(e){}}}
b=D.body;if(b&&!b.hasAttribute('inert'))b.setAttribute('inert','')
}catch(e){}}
go();D.addEventListener('DOMContentLoaded',go);
new MutationObserver(go).observe(R,{childList:true,subtree:true,attributes:true,attributeFilter:['style','class','hidden','inert','id','role']});
setInterval(go,1500)
}catch(e){}})();
/* trava:fim */
const paths={patients:'<g fill="currentColor" stroke="none"><ellipse cx="8.3" cy="5" rx="2.6" ry="3.6" transform="rotate(-12 8.3 5)"/><ellipse cx="15.7" cy="5" rx="2.6" ry="3.6" transform="rotate(12 15.7 5)"/><ellipse cx="3.3" cy="10.4" rx="2.3" ry="3.2" transform="rotate(-24 3.3 10.4)"/><ellipse cx="20.7" cy="10.4" rx="2.3" ry="3.2" transform="rotate(24 20.7 10.4)"/><path d="M12 10.3c-2.5 0-4 2.2-5.8 4C4.6 15.8 3 17.2 3 19c0 2.3 2.1 3.2 4.3 2.7 1.9-.4 3-1.4 4.7-1.4s2.8 1 4.7 1.4c2.2.5 4.3-.4 4.3-2.7 0-1.8-1.6-3.2-3.2-4.7-1.8-1.8-3.3-4-5.8-4Z"/></g>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h2m4 0h2"/>',heart:'<path d="M20.8 5.6a5.3 5.3 0 0 0-7.5 0L12 7l-1.3-1.4a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.9a5.3 5.3 0 0 0 0-7.5Z"/><path d="M6 12h3l2-3 2 6 2-3h3"/>',check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-8h6v8"/>',wallet:'<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 9h18m0 4h-6v4h6M7 5V3h11v2"/>',document:'<path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h6"/>',offline:'<path d="M3 8a15 15 0 0 1 18 0M6 12a10 10 0 0 1 12 0m-9 4a5 5 0 0 1 6 0M12 20h.01M3 3l18 18"/>',shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',chat:'<path d="M21 11a8 8 0 0 1-8 8H7l-4 3V11a9 9 0 0 1 18 0Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>'};document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+paths[el.dataset.icon]+'</svg>'});const screens={inicio:['screen1.jpg.jpeg','Uma visão do seu dia.','Acompanhe seus pacientes e os próximos cuidados na tela inicial.'],pacientes:['screen2.jpg.jpeg','Cada paciente com suas informações.','Encontre os dados de pacientes e tutores e acesse o histórico de cada animal.'],agenda:['screen3.jpg.jpeg','Sua agenda, sempre por perto.','Consulte os compromissos no calendário e organize os atendimentos externos com a Rota do dia.'],financeiro:['screen4.jpg.jpeg','Clareza para acompanhar o financeiro.','Visualize recebimentos e cobranças relacionados à sua rotina de atendimentos.']};function selectScreen(key){const s=screens[key];if(!s)return;document.querySelector('#app-screen').src='assets/'+s[0];document.querySelector('#app-screen').alt='Tela real do VetFlowCare: '+key;document.querySelector('#screen-title').textContent=s[1];document.querySelector('#screen-description').textContent=s[2];document.querySelector('#screen-panel').setAttribute('aria-labelledby','tab-'+key);document.querySelectorAll('[data-tab]').forEach(b=>{b.classList.toggle('active',b.dataset.tab===key);b.setAttribute('aria-selected',String(b.dataset.tab===key));b.tabIndex=b.dataset.tab===key?0:-1;});}document.querySelectorAll('[data-tab]').forEach(b=>{b.addEventListener('click',()=>selectScreen(b.dataset.tab));b.tabIndex=b.classList.contains('active')?0:-1;});document.querySelector('.app-menu').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const a=[...document.querySelectorAll('[data-tab]')];let n=a.indexOf(document.activeElement);if(e.key==='Home')n=0;else if(e.key==='End')n=a.length-1;else n=(n+(['ArrowRight','ArrowDown'].includes(e.key)?1:-1)+a.length)%a.length;a[n].focus();selectScreen(a[n].dataset.tab);});

document.querySelectorAll('[data-view]').forEach(a=>a.addEventListener('click',()=>selectScreen(a.dataset.view)));
