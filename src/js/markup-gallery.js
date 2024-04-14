export default function createMarkup(films) {
  return films
    .map(film => {
      return `
      
      <li class="card-set__item" id="${films.id}">
      <a href='#' id='${films.id}' class="card-link">
      <picture>
                    <source srcset="
                    ${films.base_url}w780/${films.poster_path} 1x,
                    ${films.base_url}original/${films.poster_path} 2x" media="(min-width: 1280px)" type="image/jpeg" />
                    <source srcset="
                    ${films.base_url}w342/${films.poster_path} 1x,
                    ${films.base_url}w500/${films.poster_path} 2x" media="(min-width: 768px)" type="image/jpeg" />
                    <source srcset="
                    ${films.base_url}w185/${films.poster_path} 1x,
                    ${films.base_url}w342/${films.poster_path} 2x" media="(max-width: 480px)" type="image/jpeg" />
        <img id="${films.id}"
          loading="lazy"
          src="${films.base_url}w342/${films.poster_path}"
          alt="${films.title}"
          class="card-set__img "/>
                </picture>
      
    
      <h3 class="card-set__title">${films.title}</h3>
      <div class="card-set__description" id="${films.id}">
      <span class="card-set__genre" id="${films.id}">
          ${films.filmGenreList} &nbsp| ${films.releaseYear}
      </span>
      
      </div>
      </a>
      </li>
      `;
    })
    .join('');
}
