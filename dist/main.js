(()=>{"use strict";function e(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="About Us";const n=document.createElement("div");n.classList.add("description");const c=document.createElement("p");c.classList.add("title"),c.textContent="Who are we?";const o=document.createElement("p");o.classList.add("text"),o.textContent="We are a new, up-and-coming team of highly trained professionals, here to bring YOU the finest cuisine this city has to offer! Bring your family and friends, everyone is invited!",n.append(c,o);const s=document.createElement("p");s.classList.add("team-title"),s.textContent="Our Team";const a=document.createElement("div");a.classList.add("team");const d=document.createElement("div");d.classList.add("personnel");const m=document.createElement("img"),i=document.createElement("p");i.textContent="Our Manager, Albert",m.src="./images/manager.jpg",m.classList.add("staff");const r=document.createElement("div");r.classList.add("personnel");const l=document.createElement("img"),u=document.createElement("p");u.textContent="Our Chef, Fred",l.src="./images/chef.webp",l.classList.add("staff");const p=document.createElement("div");p.classList.add("personnel");const g=document.createElement("img"),E=document.createElement("p");E.textContent="Our Cook, Gregory",g.src="./images/cook.jpeg",g.classList.add("staff"),d.append(m,i),r.append(l,u),p.append(g,E),a.append(d,r,p);const f=document.createElement("footer");f.classList.add("footer");const L=document.createElement("img");L.classList.add("logo"),L.src="./images/github.png";const h=document.createElement("a");h.classList.add("footer-text"),h.textContent="pequito193",h.href="https://github.com/pequito193",h.target="_blank",f.append(L,h),e.append(t,n,s,a,f)}e(),document.querySelector(".about").addEventListener("click",e),document.querySelector(".menu").addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Menu";const n=document.createElement("p");n.classList.add("main-dishes"),n.textContent="Main Course (Meat)";const c=document.createElement("div");c.classList.add("menu-grid");const o=document.createElement("div");o.classList.add("food");const s=document.createElement("img"),a=document.createElement("p");s.classList.add("food-image"),s.src="./images/steak.webp",a.textContent="Outstanding roasted beef, 8.00$";const d=document.createElement("div");d.classList.add("food");const m=document.createElement("img"),i=document.createElement("p");m.classList.add("food-image"),m.src="./images/pork.webp",i.textContent="Delicious cooked pork, 7.00$";const r=document.createElement("div");r.classList.add("food");const l=document.createElement("img"),u=document.createElement("p");l.classList.add("food-image"),l.src="./images/chicken.webp",u.textContent="Spicy chicken curry, 6.00$";const p=document.createElement("div");p.classList.add("food");const g=document.createElement("img"),E=document.createElement("p");g.classList.add("food-image"),g.src="./images/lamb.webp",E.textContent="Lamb (mutton) chops, 7.50$";const f=document.createElement("div");f.classList.add("food");const L=document.createElement("img"),h=document.createElement("p");L.classList.add("food-image"),L.src="./images/rabbit.webp",h.textContent="Spicy rabbit broth, 6.50$",o.append(s,a),d.append(m,i),r.append(l,u),p.append(g,E),f.append(L,h);const b=document.createElement("p");b.classList.add("main-dishes"),b.textContent="Main Course (Fish)";const x=document.createElement("div");x.classList.add("menu-grid2");const C=document.createElement("div");C.classList.add("food");const v=document.createElement("img"),y=document.createElement("p");v.classList.add("food-image"),v.src="./images/salmon.webp",y.textContent="Delicious roasted salmon, 9.00$";const k=document.createElement("div");k.classList.add("food");const q=document.createElement("img"),w=document.createElement("p");q.classList.add("food-image"),q.src="./images/pufferfish.webp",w.textContent="Pufferfish sashimi, 9.50$";const M=document.createElement("div");M.classList.add("food");const S=document.createElement("img"),$=document.createElement("p");S.classList.add("food-image"),S.src="./images/cod.webp",$.textContent="Exquisite salted cod, 7.50$",C.append(v,y),k.append(q,w),M.append(S,$),c.append(o,d,r,p,f),x.append(C,k,M);const O=document.createElement("footer");O.classList.add("footer");const T=document.createElement("img");T.classList.add("logo"),T.src="./images/github.png";const H=document.createElement("a");H.classList.add("footer-text"),H.textContent="pequito193",H.href="https://github.com/pequito193",H.target="_blank",O.append(T,H),e.append(t,n,c,b,x,O)})),document.querySelector(".contacts").addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Contacts";const n=document.createElement("footer");n.classList.add("footer");const c=document.createElement("img");c.classList.add("logo"),c.src="./images/github.png";const o=document.createElement("a");o.classList.add("footer-text"),o.textContent="pequito193",o.href="https://github.com/pequito193",o.target="_blank",n.append(c,o),e.append(t,n)}))})();