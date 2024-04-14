let e,t;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=a.parcelRequire0487;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},a.parcelRequire0487=r),r.register,r("5exDt"),r("gjiCh"),r("5Jgp0"),r("2nhTy");var n=r("2shzp");const l="a51a9bb0cd5bc1ed985d30c82a20bd57";class o{static resetPage(){this.page=1}constructor(){this.inputValue="",this.page=1,this.genres=""}async fetchMovie(){try{let e=await (0,n.default).get("https://api.themoviedb.org/3/search/movie",{params:{api_key:l,query:this.inputValue,page:this.page}});return this.incrementPage(),e.data}catch(e){console.log(e.message)}}async getGenre(){try{return(await (0,n.default).get("https://api.themoviedb.org/3/genre/movie/list?&language=en-US`",{params:{api_key:l}})).data}catch(e){console.log(e.message)}}incrementPage(){this.page+=1}get value(){return this.inputValue}set value(e){this.inputValue=e}}var c=r("5exDt"),g=r("2nhTy"),d=r("iNllG");const p={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")};let u=!1,h="";async function m(a){try{if(a.preventDefault(),a.stopPropagation(),p.paginationCont.classList.remove("is-hidden"),o.resetPage(),(t=new o).value=a.currentTarget.elements.searchQuery.value,""===t.value){p.searchMessage.classList.remove("is-hidden"),u=!1,c.requireData.page=1,(0,c.loadPage)(),p.searchMessage.innerHTML="I can`t find an empty request. Please input something.";return}if(""!==t.value){let a=await t.fetchMovie();if(e=a.total_results,a.total_results){h=t.value,t.value,p.gallery.innerHTML="",(0,g.pagination).reset(a.total_results);let{results:e}=a,s=(0,d.filmCheckImgUrl)(e);await v({...a,...s}),u=!0}}if(0===e){t.value=h,p.searchMessage.classList.remove("is-hidden"),p.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.";return}a.target.reset()}catch(e){console.log(e)}}async function f(){if(""!==t.value){let e=await t.fetchMovie(),{results:a}=e,s=(0,d.filmCheckImgUrl)(a);await v({...e,...s})}}async function v(e){p.gallery.innerHTML="",p.searchMessage.classList.add("is-hidden");let t=e.results.map(({id:e,poster_path:t,title:a,release_date:s,genre_ids:i})=>{var r;let n,l,o;n=void 0!==s&&s.length>4?s.slice(0,4):"There is no info";let g=(r=c.GENRES_FULL_INFO,o=[],i.forEach(e=>{let t=r.find(t=>e===t.id);t&&o.push(t.name)}),o);if(g.length){if(g.length>2){let e=g.slice(0,2);e.push("Other"),l=e.join(", ")}else l=g.join(", ")}else l=["There is no info"];return`
      <li class="card-set__item" id="${e}">
      <a href='#' id='${e}' class="card-link">
       <picture>
                    <source srcset="
                    https://image.tmdb.org/t/p/w780/${t} 1x,
                   https://image.tmdb.org/t/p/original/${t} 2x" media="(min-width: 1280px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w342/${t} 1x,
                    https://image.tmdb.org/t/p/w500/${t} 2x" media="(min-width: 768px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w185/${t} 1x,
                    https://image.tmdb.org/t/p/w342/${t} 2x" media="(max-width: 480px)" type="image/jpeg" />
         <img id="${e}
          loading="lazy"
          src="https://image.tmdb.org/t/p/w342/${t}"
          alt="${a}"
          class="card-set__img "/>
      </picture>
     
      <h3 class="card-set__title">${a}</h3>
      <div class="card-set__description" id="${e}">
      <span class="card-set__genre" id="${e}"> ${l} &nbsp| ${n}</span>
        </div>
      </a>
      </li>
      `}).join("");(0,c.addToHTML)(t)}p.searchForm.addEventListener("submit",m),(0,g.pagination).on("afterMove",async e=>{let a=e.page;if(u){let a=e.page;t.page=a,await f()}else(0,c.onPaginLoadMore)(a)}),r("gfuoZ");
//# sourceMappingURL=index.3ba7a81f.js.map
