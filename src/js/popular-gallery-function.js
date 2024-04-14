export function filmAddYearRelease(dataForModify) {
  const {
    filmsData: { results },
  } = dataForModify;

  const filmAddYearRelease = results.map(result => {
    const { release_date } = result;
    let releaseYear;
    if (release_date !== undefined) {
      if (release_date.length > 4) {
        releaseYear = release_date.slice(0, 4);
      } else {
        releaseYear = 'There is no info';
      }
    } else {
      releaseYear = 'There is no info';
    }
    
    return { releaseYear, ...result };
  });

  return { results: filmAddYearRelease };
}
// ========================================================
export function filmAddGenreList(dataForModify) {
  const {
    genres,
    modifedData: { results },
  } = dataForModify;
  
  const filmAddGenreList = results.map(result => {
    const { genre_ids } = result;
    const filmGenreList = genresList({ genre_ids, genres });
    return { filmGenreList, ...result };
  });

  
  return { results: filmAddGenreList };
}
function genresList(genreToFindData) {
  const { genre_ids, genres } = genreToFindData;
  
  const genresNames = [];
  for (let i = 0; i < genre_ids.length; i += 1) {
    if (i < 2) {
      const id = genre_ids[i];
      genresNames.push(genresById({ id, genres }));
    } else {
      genresNames.push('Other');
      break;
    }
  }
  return genresNames.join(', ');
}

function genresById(genreToFind) {
  const { id, genres } = genreToFind;
  for (const genre of genres) {
    if (genre.id === id) {
      return genre.name;
    }
  }
}
export function filmAddUrl(dataForModify) {
  const {
    configAndGenreData: { base_url },
    modifedData: { results },
  } = dataForModify;
  
  const filmAddUrl = results.map(result => {
    return { base_url, ...result };
  });

  
  return filmAddUrl;
}

export function filmCheckImgUrl(dataForModify) {
 
  const filmCheckImgUrl = dataForModify.map(result => {
    const { poster_path, releaseYear, title, filmGenreList } = result;
    if (
      poster_path === null ||
      poster_path === undefined ||
      poster_path === ''
    ) {
      
      result.poster_path = 'IfB9hy4JH1eH6HEfIgIGORXi5h.jpg';
      // return result;
    }
    if (
      releaseYear === null ||
      releaseYear === undefined ||
      releaseYear === ''
    ) {
     
      result.releaseYear = 'There is no info';
      
    }
    if (title === null || title === undefined || title === '') {
      
      result.title = 'There is no info';
     
    }
    if (
      filmGenreList === null ||
      filmGenreList === undefined ||
      filmGenreList === ''
    ) {
    
      result.filmGenreList = 'There is no info';
      
    }
    return result;
  });

  
  return filmCheckImgUrl;
}
