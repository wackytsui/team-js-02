import KeyMovieFetch from './keyMovieFetch.js';
import { addToHTML, loadPage } from './popular-gallery.js';
import {
  GENRES_FULL_INFO,
  onPaginLoadMore,
  requireData,
} from './popular-gallery.js';
import { pagination } from './pagination.js';
import { filmCheckImgUrl } from './popular-gallery-function.js';

const refs = {
  searchForm: document.querySelector('.header-search-form'),
  gallery: document.querySelector('.gallery'),
  searchMessage: document.querySelector('.header-message'),
  page: document.querySelector('a[data-page="home"]'),
  paginationCont: document.getElementById('tui-pagination-container'),
  
};
let SEARCH_ACTIVE = false;
let total_films;
let prevSearch = '';
let keyMovieFetchInstance;
refs.searchForm.addEventListener('submit', onSearchSubmit);


async function onSearchSubmit(evt) {
  try {
    evt.preventDefault();
    evt.stopPropagation();
    refs.paginationCont.classList.remove('is-hidden');
    
    KeyMovieFetch.resetPage()

    keyMovieFetchInstance = new KeyMovieFetch();
   
    keyMovieFetchInstance.value = evt.currentTarget.elements.searchQuery.value;
    if (keyMovieFetchInstance.value === '') {
     
      refs.searchMessage.classList.remove('is-hidden');
     
      SEARCH_ACTIVE = false;
      requireData.page = 1;
      loadPage();
      refs.searchMessage.innerHTML =
        'I can`t find an empty request. Please input something.';
    
      return;
    }
    if (keyMovieFetchInstance.value !== '') {
      const fetch = await keyMovieFetchInstance.fetchMovie();
   
      total_films = fetch.total_results;
    
      if (fetch.total_results) {
        prevSearch = keyMovieFetchInstance.value;
        keyMovieFetchInstance.value
        refs.gallery.innerHTML = '';
        pagination.reset(fetch.total_results);
        const { results } = fetch;

        const CheckImgUrl = filmCheckImgUrl(results);
       
        await createMarkupKey({ ...fetch, ...CheckImgUrl });
        SEARCH_ACTIVE = true;
        
      }

      
    }
    if (total_films === 0) {
      keyMovieFetchInstance.value = prevSearch;
      refs.searchMessage.classList.remove('is-hidden');
     
      refs.searchMessage.innerHTML =
        'Search result not successful. Enter the correct movie name and try again.';
     
      return;
    }
    
    evt.target.reset();
  } catch (error) {
   
    console.log(error);
  }
}


async function renderGalleryKey() {
  
  if (keyMovieFetchInstance.value !== '') {
    const fetch = await keyMovieFetchInstance.fetchMovie();
   
    const { results } = fetch;

    const CheckImgUrl = filmCheckImgUrl(results);
   
    await createMarkupKey({ ...fetch, ...CheckImgUrl });
   
  } else return;
}

function matchGenres(genreIdArr, genresFool) {
  let result = [];

  genreIdArr.forEach(genreId => {
    const matchGenre = genresFool.find(genre => genreId === genre.id);

    if (matchGenre) {
      result.push(matchGenre.name);
    }
  });
  return result;
}

async function createMarkupKey(data) {
  refs.gallery.innerHTML = '';
  refs.searchMessage.classList.add('is-hidden');

 

  const markup = data.results
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
      let year;

      if (release_date !== undefined) {
        if (release_date.length > 4) {
          year = release_date.slice(0, 4);
        } else {
          year = 'There is no info';
        }
      } else {
        year = 'There is no info';
      }

      const genr = matchGenres(genre_ids, GENRES_FULL_INFO);

      let formatedGenres;
      if (!genr.length) {
        formatedGenres = ['There is no info'];
      } else if (genr.length > 2) {
        const genresList = genr.slice(0, 2);
        genresList.push('Other');

        formatedGenres = genresList.join(', ');
      } else {
        formatedGenres = genr.join(', ');
      }

      return `
      <li class="card-set__item" id="${id}">
      <a href='#' id='${id}' class="card-link">
       <picture>
                    <source srcset="
                    https://image.tmdb.org/t/p/w780/${poster_path} 1x,
                   https://image.tmdb.org/t/p/original/${poster_path} 2x" media="(min-width: 1280px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w342/${poster_path} 1x,
                    https://image.tmdb.org/t/p/w500/${poster_path} 2x" media="(min-width: 768px)" type="image/jpeg" />
                    <source srcset="
                    https://image.tmdb.org/t/p/w185/${poster_path} 1x,
                    https://image.tmdb.org/t/p/w342/${poster_path} 2x" media="(max-width: 480px)" type="image/jpeg" />
         <img id="${id}
          loading="lazy"
          src="https://image.tmdb.org/t/p/w342/${poster_path}"
          alt="${title}"
          class="card-set__img "/>
      </picture>
     
      <h3 class="card-set__title">${title}</h3>
      <div class="card-set__description" id="${id}">
      <span class="card-set__genre" id="${id}"> ${formatedGenres} &nbsp| ${year}</span>
        </div>
      </a>
      </li>
      `;
    })
    .join('');
  addToHTML(markup);
}

pagination.on('afterMove', async event => {
  const currentPage = event.page;
  if (SEARCH_ACTIVE) {
    const currentPage = event.page;
   
    keyMovieFetchInstance.page = currentPage;
    await renderGalleryKey();
    //topFunction();
  } else {
    onPaginLoadMore(currentPage);
    //topFunction();
  }
});
