!function(){let e,t;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},i=a.parcelRequire0487;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},a.parcelRequire0487=i),i.register,i("8dLlr"),i("kvC6y"),i("hXsLy"),i("jcFG7");var n=i("dIxxU");let l="a51a9bb0cd5bc1ed985d30c82a20bd57";class o{static resetPage(){this.page=1}constructor(){this.inputValue="",this.page=1,this.genres=""}async fetchMovie(){try{let e=await (0,n.default).get("https://api.themoviedb.org/3/search/movie",{params:{api_key:l,query:this.inputValue,page:this.page}});return this.incrementPage(),e.data}catch(e){console.log(e.message)}}async getGenre(){try{return(await (0,n.default).get("https://api.themoviedb.org/3/genre/movie/list?&language=en-US`",{params:{api_key:l}})).data}catch(e){console.log(e.message)}}incrementPage(){this.page+=1}get value(){return this.inputValue}set value(e){this.inputValue=e}}var c=i("8dLlr"),p=i("jcFG7"),g=i("5Beei");let d={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")},u=!1,h="";async function m(a){try{if(a.preventDefault(),a.stopPropagation(),d.paginationCont.classList.remove("is-hidden"),o.resetPage(),(t=new o).value=a.currentTarget.elements.searchQuery.value,""===t.value){d.searchMessage.classList.remove("is-hidden"),u=!1,c.requireData.page=1,(0,c.loadPage)(),d.searchMessage.innerHTML="I can`t find an empty request. Please input something.";return}if(""!==t.value){let a=await t.fetchMovie();if(e=a.total_results,a.total_results){h=t.value,t.value,d.gallery.innerHTML="",(0,p.pagination).reset(a.total_results);let{results:e}=a,s=(0,g.filmCheckImgUrl)(e);await v({...a,...s}),u=!0}}if(0===e){t.value=h,d.searchMessage.classList.remove("is-hidden"),d.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.";return}a.target.reset()}catch(e){console.log(e)}}async function f(){if(""!==t.value){let e=await t.fetchMovie(),{results:a}=e,s=(0,g.filmCheckImgUrl)(a);await v({...e,...s})}}async function v(e){d.gallery.innerHTML="",d.searchMessage.classList.add("is-hidden");let t=e.results.map(({id:e,poster_path:a,title:s,release_date:r,genre_ids:i})=>{var n;let l,o,p;l=void 0!==r&&r.length>4?r.slice(0,4):"There is no info";let g=(n=c.GENRES_FULL_INFO,p=[],i.forEach(e=>{let t=n.find(t=>e===t.id);t&&p.push(t.name)}),p);if(g.length){if(g.length>2){let e=g.slice(0,2);e.push("Other"),o=e.join(", ")}else o=g.join(", ")}else o=["There is no info"];return`
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
      <span class="card-set__genre" id="${e}"> ${o} &nbsp| ${l}</span>
        </div>
      </a>
      </li>
      `}).join("");(0,c.addToHTML)(t)}d.searchForm.addEventListener("submit",m),(0,p.pagination).on("afterMove",async e=>{let a=e.page;if(u){let a=e.page;t.page=a,await f()}else(0,c.onPaginLoadMore)(a)}),i("8vUUN")}();
//# sourceMappingURL=index.fbc85f3d.js.map
