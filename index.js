import{a as D,i as M,S as _,N as E,K as T,c as P}from"./assets/vendor-DSjDnG7C.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const b=document.querySelector(".toggle"),m=document.body;b.addEventListener("click",()=>{m.classList.contains("bg-dark")?(m.classList.remove("bg-dark"),m.classList.add("bg-light"),b.classList.remove("dark")):(m.classList.remove("bg-light"),m.classList.add("bg-dark"),b.classList.add("dark"))});const B="/test/assets/icons-yh5Ih9pv.svg",f="/test/assets/projects-desk-03-min-bAztutHK.png",$="/test/assets/projects-desk-03@2x-min-D7O6BJsL.png",C="/test/assets/projects-mob-03-min-BsXsyoM6.png",N="/test/assets/projects-mob-03@2x-min-tmcSzpo2.png",O="/test/assets/projects-tabl-03-min-ZgDTbOh9.png",z="/test/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",v="/test/assets/projects-desk-04-min-yxZx66BP.png",I="/test/assets/projects-desk-04@2x-min-DHJNdR6B.png",A="/test/assets/projects-mob-04-min-5yr3aGDi.png",F="/test/assets/projects-mob-04@2x-min-BeXemoj4.png",X="/test/assets/projects-tabl-04-min-Dt9XScdK.png",K="/test/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",h="/test/assets/projects-desk-05-min-CfD1cLSZ.png",R="/test/assets/projects-desk-05@2x-min-BRPn2X1J.png",H="/test/assets/projects-mob-05-min-Db3py1Xm.png",J="/test/assets/projects-mob-05@2x-min-B8zvmCB6.png",W="/test/assets/projects-tabl-05-min-F3tbbktz.png",Z="/test/assets/projects-tabl-05@2x-min-BRqBFzgK.png",k="/test/assets/projects-desk-06-min-X_gqtJm5.png",Q="/test/assets/projects-desk-06@2x-min-Dj8eCfdF.png",V="/test/assets/projects-mob-06-min-C9QNW9Tj.png",U="/test/assets/projects-mob-06@2x-min-DEtw7lg5.png",G="/test/assets/projects-tabl-06-min-ugbcXMlD.png",Y="/test/assets/projects-tabl-06@2x-min-CmmfjQzn.png",y="/test/assets/projects-desk-07-min--lZv1p8n.png",ee="/test/assets/projects-desk-07@2x-min-DmSkXiQs.png",te="/test/assets/projects-mob-07-min-BSVWNsA-.png",se="/test/assets/projects-mob-07@2x-min-Dd3dUvIN.png",oe="/test/assets/projects-tabl-07-min-CPlUFmPk.png",ce="/test/assets/projects-tabl-07@2x-min-BDIDMcu4.png",w="/test/assets/projects-desk-08-min-xocuOah2.png",re="/test/assets/projects-desk-08@2x-min-BIWP6k6v.png",ne="/test/assets/projects-mob-08-min-DBYeKoNQ.png",ae="/test/assets/projects-mob-08@2x-min-Ws78KLoX.png",ie="/test/assets/projects-tabl-08-min-C_fZqAdW.png",le="/test/assets/projects-tabl-08@2x-min-DRzjhCHA.png",L="/test/assets/projects-desk-09-min-DsvIyQeP.png",pe="/test/assets/projects-desk-09@2x-min-BvUdwZmo.png",de="/test/assets/projects-mob-09-min-DX2Z5Nr9.png",me="/test/assets/projects-mob-09@2x-min-Cc_85EFK.png",ue="/test/assets/projects-tabl-09-min-DT00A0X5.png",ge="/test/assets/projects-tabl-09@2x-min-BOveHSsW.png",g=[{alt:"Mimino website",img:f,sources:{mobile:{"1x":C,"2x":N},tablet:{"1x":O,"2x":z},desktop:{"1x":f,"2x":$}}},{alt:"Vyshyvanka vibes Landing Page",img:v,sources:{mobile:{"1x":A,"2x":F},tablet:{"1x":X,"2x":K},desktop:{"1x":v,"2x":I}}},{alt:"Power pulse webservice",img:h,sources:{mobile:{"1x":H,"2x":J},tablet:{"1x":W,"2x":Z},desktop:{"1x":h,"2x":R}}},{alt:"Chego jewelry website",img:k,sources:{mobile:{"1x":V,"2x":U},tablet:{"1x":G,"2x":Y},desktop:{"1x":k,"2x":Q}}},{alt:"Energy flow webservice ",img:y,sources:{mobile:{"1x":te,"2x":se},tablet:{"1x":oe,"2x":ce},desktop:{"1x":y,"2x":ee}}},{alt:"Starlight studio landing page",img:w,sources:{mobile:{"1x":ne,"2x":ae},tablet:{"1x":ie,"2x":le},desktop:{"1x":w,"2x":re}}},{alt:"Fruitbox online store",img:L,sources:{mobile:{"1x":de,"2x":me},tablet:{"1x":ue,"2x":ge},desktop:{"1x":L,"2x":pe}}}],be=document.querySelector(".project-list"),S=document.querySelector(".more-projects");let xe=document.querySelector("li.project_card");S.addEventListener("click",je);let p=0;function je(){const s=xe.getBoundingClientRect().height,c=g.slice(p,p+3);be.insertAdjacentHTML("beforeend",fe(c));let r=3;g.length-p<3&&(r=g.length-p),window.scrollBy({top:s*r,left:0,behavior:"smooth"}),p+=c.length,p>=g.length&&S.classList.add("hidden")}function fe(s){return s.map(({alt:o,img:c,sources:{mobile:r,tablet:e,desktop:t}})=>`
      <li class="project_card">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${r["1x"]} 1x, ${r["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${e["1x"]} 1x, ${e["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${t["1x"]} 1x, ${t["2x"]} 2x"
          />
          <img
            class="project-img-card"
            src="${c}"
            alt="${o}"
            loading="lazy"
          />
        </picture>

        <p class="project-skills">React, JavaScript, Node JS, Git</p>
        <div class="bottom-box">
          <h3 class="project-name">${o}</h3>
          <a
            class="visit-button"
            href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers"
            target="_blank"
          >
            <span>VISIT</span>
            <svg class="button_icon" width="24" height="24">
              <use href="${B}#icon-arrow45"></use>
            </svg>
          </a>
        </div>
      </li>`).join("")}const x=document.querySelector(".ham-menu"),j=document.querySelector(".off-screen-menu");x.addEventListener("click",()=>{x.classList.toggle("active"),j.classList.toggle("active")});j.addEventListener("click",()=>{x.classList.toggle("active"),j.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".faq-item"),o=s[0],c=s[0].querySelector(".faq-answer"),r=s[0].querySelector(".faq-arrow"),e=o.querySelector(".faq-question");o.classList.add("open"),c.classList.add("show"),r.classList.add("open"),e.classList.add("active"),s.forEach(n=>{const a=n.querySelector(".faq-question"),l=n.querySelector(".faq-answer"),i=n.querySelector(".faq-arrow");a.addEventListener("click",()=>{t(n,l,i,a)}),i.addEventListener("click",d=>{d.stopPropagation(),t(n,l,i,a)})});function t(n,a,l,i){const d=a.classList.contains("show");s.forEach(u=>{u.classList.remove("open"),u.querySelector(".faq-answer").classList.remove("show"),u.querySelector(".faq-arrow").classList.remove("open"),u.querySelector(".faq-question").classList.remove("active")}),d||(n.classList.add("open"),a.classList.add("show"),l.classList.add("open"),i.classList.add("active"))}});const q=document.querySelector(".swiper-wrapper"),ve=document.querySelector(".button-wrapper");function he(s){const o=s.map(({author:c,avatar_url:r,review:e,_id:t})=>t===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${r}" alt="${c}">
						<h2 class="reviews-author">${c}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${r}" alt="${c}">
						<h2 class="reviews-author">${c}</h2>
					</div>
				</li>`).join("");q.innerHTML=o,ve.classList.remove("visually-hidden")}function ke(){const s=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;q.innerHTML=s}async function ye(s){try{const{data:o}=await D.get("https://portfolio-js.b.goit.study/api/reviews");he(o)}catch(o){ke(),M.error({position:"topRight",message:o.message})}}ye();new _(".swiper",{modules:[E,T],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".wt-form"),o=document.querySelector(".backdrop");document.querySelector(".modal");const c=document.querySelector(".close-button-modal"),r="https://portfolio-js.b.goit.study/api/requests";function e(){o.classList.add("is-open")}function t(){o.classList.remove("is-open")}function n(a){a.key==="Escape"&&t()}o.addEventListener("click",a=>{a.target===o&&t()}),c.addEventListener("click",t),s.addEventListener("submit",async a=>{a.preventDefault();const l=s.querySelector("#user-email").value.trim();s.querySelector("#user-message").value.trim();try{const i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,comment:P})});if(!i.ok)throw new Error("Failed to send the request. Please try again.");const d=await i.json();console.log("Success:",d),e(),s.reset()}catch(i){alert(`Error: ${i.message}`)}}),document.addEventListener("keydown",n)});
//# sourceMappingURL=index.js.map
