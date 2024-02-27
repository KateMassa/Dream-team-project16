import{a as c}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const u=document.getElementById("themeSwitch");u.addEventListener("change",function(){const t=document.querySelector(".logo-icon use");this.checked?t.setAttribute("href","../img/icons.svg#icon-logo-dark"):t.setAttribute("href","../img/icons.svg#icon-logo-light")});window.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("theme");t&&(document.body.classList.add(t),t==="dark-theme"&&(u.checked=!0))});u.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"))});const y=document.querySelector(".btn-close"),g=document.querySelector(".burger-menu"),d=document.querySelector(".menu-section");function v(){d.classList.add("is-open"),g.style.display="none",y.style.display="inline-block",d.style.display="block"}g.addEventListener("click",v);function B(){g.style.display="inline-block",y.style.display="none",d.style.display="none"}y.addEventListener("click",B);class k{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.TOP_BOOKS_ENDPOINT="/top-books",this.CATEGORY_ENDPOINT="/category?category=",this.CATEGORY_LIST_ENDPOINT="/category-list"}async getTopBooks(){try{const e=`${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;return(await c.get(e)).data}catch(e){throw console.error("Error fetching popular books:",e),e}}async getBooksByCategory(e){try{const o=`${this.BASE_URL}${this.CATEGORY_ENDPOINT}${e}`;return(await c.get(o)).data}catch(o){throw console.error(`Error fetching books for category '${e}':`,o),o}}async getDetails(e){try{const o=`${this.BASE_URL}/${e}`;return(await c.get(o)).data}catch(o){throw console.error(`Error fetching details for book with ID '${e}':`,o),o}}async getCategoryList(){try{const e=`${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;return(await c.get(e)).data}catch(e){throw console.error("Error fetching category list:",e),e}}}function $(t,e){return`<li class='gallery-book-item' data-bookid="${t.books[e]._id}">
        <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${t.books[e]._id}" src="${t.books[e].book_image}" alt="${t.books[e].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${t.books[e].title}</h3>
            <h4 class="gallery-book-text">${t.books[e].author}</h4>
          </div>
        </a>
    </li>`}const E=new k,l={bookList:document.querySelector(".book-list"),topBooksList:document.querySelector(".top-books-list"),booksTitleContainer:document.querySelector(".books-title-container")};function S(t){l.topBooksList.innerHTML="",l.booksTitleContainer.innerHTML="";const e=document.createElement("h2");e.textContent=t,l.booksTitleContainer.appendChild(e),E.getBooksByCategory(t).then(o=>T(o)).catch(o=>console.error("Error fetching top books:",o))}function T(t){const e=t.map(o=>`<li class='gallery-book-item' data-bookid="${o._id}">
        <a class="gallery-book-link">
            <div class="preview">
            <img class="gallery-book-img" data-id="${o._id}" src="${o.book_image}" alt="${o.title}">
            <div class="actions-card">
                <p class="action-text">quick view</p>
            </div>
            </div>
            <div class="content">
            <h3 class="gallery-book-name">${o.title}</h3>
            <h4 class="gallery-book-text">${o.author}</h4>
            </div>
        </a>
        </li>`).join("");l.bookList.innerHTML=e}const p=new k;let h=1;function m(){h=M(window.innerWidth),p.getTopBooks().then(t=>w(t,h)).catch(t=>console.error("Error fetching top books:",t))}function M(t){return t>=1440?5:t>=768?3:1}function w(t,e){l.topBooksList.innerHTML="",l.booksTitleContainer.innerHTML="";const o=t.map(s=>{let r=`<li><h2 class="gallery-title">${s.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${s.list_name}">`,n=[];for(let a=0;a<e&&a<s.books.length;a++){let L=$(s,a);n.push(L)}const b=`<button class="see-more-btn" data-filter="${s.list_name}" type="button">See More</button>`,f=n.join(" ");return r+f+"</ul>"+b+"</li>"}).join("");l.topBooksList.innerHTML=o;const i='<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>';l.booksTitleContainer.innerHTML=i,C()}function C(){document.querySelectorAll(".see-more-btn").forEach(e=>{e.addEventListener("click",_)})}async function _(t){t.preventDefault(),document.querySelectorAll(".gallery-book-list").forEach(n=>{n.style.display="none"});let o=t.target.dataset.filter;const i=document.querySelector(`ul[data-filter="${o}"]`);i.style.display="block",document.querySelectorAll(".top-books-list > li").forEach(n=>{n.querySelector(`ul[data-filter="${o}"]`)===null&&n.remove()});const r=i.parentElement.querySelector(".see-more-btn");if(r.style.display="none",o!=="Best Sellers Books"){const n=await p.getBooksByCategory(o);O(n,o)}}function O(t,e){const o=document.querySelector(`ul[data-filter="${e}"]`),i=t.map(s=>`
    <li class='gallery-book-item' data-bookid="${s._id}">
      <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${s._id}" src="${s.book_image}" alt="${s.title}">
          <div class="actions-card">
            <p class="action-text">quick view</p>
          </div>
        </div>
        <div class="content">
          <h3 class="gallery-book-name">${s.title}</h3>
          <h4 class="gallery-book-text">${s.author}</h4>
        </div>
      </a>
    </li>`).join("");o.innerHTML=i}window.addEventListener("resize",()=>{m()});m();S("Advice How-To and Miscellaneous");
//# sourceMappingURL=commonHelpers.js.map
