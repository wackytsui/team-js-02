let e,t;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=a.parcelRequire0487;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},a.parcelRequire0487=r),r.register,r("5exDt"),r("gjiCh"),r("5Jgp0"),r("2nhTy");var n=r("2shzp");const o="a51a9bb0cd5bc1ed985d30c82a20bd57";class l{static resetPage(){this.page=1}constructor(){this.inputValue="",this.page=1,this.genres=""}async fetchMovie(){try{let e=await (0,n.default).get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,query:this.inputValue,page:this.page}});return this.incrementPage(),e.data}catch(e){console.log(e.message)}}async getGenre(){try{return(await (0,n.default).get("https://api.themoviedb.org/3/genre/movie/list?&language=en-US`",{params:{api_key:o}})).data}catch(e){console.log(e.message)}}incrementPage(){this.page+=1}get value(){return this.inputValue}set value(e){this.inputValue=e}}var c=r("5exDt"),g=r("2nhTy"),p=r("iNllG");const d={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")};let h=!1,u="";async function m(a){try{if(a.preventDefault(),a.stopPropagation(),d.paginationCont.classList.remove("is-hidden"),l.resetPage(),(t=new l).value=a.currentTarget.elements.searchQuery.value,""===t.value){d.searchMessage.classList.remove("is-hidden"),h=!1,c.requireData.page=1,(0,c.loadPage)(),d.searchMessage.innerHTML="I can`t find an empty request. Please input something.";return}if(""!==t.value){let a=await t.fetchMovie();if(e=a.total_results,a.total_results){u=t.value,t.value,d.gallery.innerHTML="",(0,g.pagination).reset(a.total_results);let{results:e}=a,s=(0,p.filmCheckImgUrl)(e);await v({...a,...s}),h=!0}}if(0===e){t.value=u,d.searchMessage.classList.remove("is-hidden"),d.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.";return}a.target.reset()}catch(e){console.log(e)}}async function f(){if(""!==t.value){let e=await t.fetchMovie(),{results:a}=e,s=(0,p.filmCheckImgUrl)(a);await v({...e,...s})}}async function v(e){d.gallery.innerHTML="",d.searchMessage.classList.add("is-hidden");let t=e.results.map(({id:e,poster_path:a,title:s,release_date:i,genre_ids:r})=>{var n;let o,l,g;o=void 0!==i&&i.length>4?i.slice(0,4):"There is no info";let p=(n=c.GENRES_FULL_INFO,g=[],r.forEach(e=>{let t=n.find(t=>e===t.id);t&&g.push(t.name)}),g);if(p.length){if(p.length>2){let e=p.slice(0,2);e.push("Other"),l=e.join(", ")}else l=p.join(", ")}else l=["There is no info"];return`
      <li class="card-set__item" id="${e}">
      <a href='#' id='${e}' class="card-link">
      <picture>
                    <source srcset="
                    https://image.tmdb.org/t/p/w780${t.poster_path} 1x,
                   https://image.tmdb.org/t/p/original${t.poster_path} 2x" media="(min-width: 1280px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w342${t.poster_path} 1x,
                    https://image.tmdb.org/t/p/w500${t.poster_path} 2x" media="(min-width: 768px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w185${t.poster_path} 1x,
                    https://image.tmdb.org/t/p/w342${t.poster_path} 2x" media="(max-width: 480px)" type="image/jpeg" />
         <img id="${e}
          loading="lazy"
          src="https://image.tmdb.org/t/p/w342${t.poster_path}"
          alt="${s}"
          class="card-set__img "/>
      </picture>
     
      <h3 class="card-set__title">${s}</h3>
      <div class="card-set__description" id="${e}">
      <span class="card-set__genre" id="${e}"> ${l} &nbsp| ${o}</span>
        </div>
      </a>
      </li>
      `}).join("");(0,c.addToHTML)(t)}d.searchForm.addEventListener("submit",m),(0,g.pagination).on("afterMove",async e=>{let a=e.page;if(h){let a=e.page;t.page=a,await f()}else(0,c.onPaginLoadMore)(a)}),r("gfuoZ");
//# sourceMappingURL=index.c98d453f.js.map
