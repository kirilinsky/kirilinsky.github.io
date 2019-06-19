const search = document.querySelector('#search'),
    inp = document.querySelector('#input'),
    movies = document.querySelector('#movies'),
    btn = document.querySelector('#btn')

const startSearch = e => {
    movies.innerHTML = ''
    e.preventDefault()
    let text = inp.value,
        uri = 'https://api.themoviedb.org/3/search/multi?api_key=662b74bb042962fe22b43d842c0dd622&language=ru&query=' + text
    movies.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>`
    fetch(uri)
        .then(function(value){
            return value.json()
        })
        .then(function(query){
            movies.innerHTML = ''
            if(query.results.length == 0){
                movies.innerHTML = `
                    <div class="alert alert-secondary p-5" role="alert">
                        <h3>Sorry, did't find anything</h3>
                        <span class="text-muted">try to <a href="#" class="disabled" onclick="inp.value='';inp.focus()">change</a> your query</span>
                    </div>
                `
            }
            query.results.forEach((item, i) => {
                if (item.media_type == 'person') type = 0
                if (item.media_type == 'movie') type = 1
                if (item.media_type == 'tv') type = 2
                let poster, overview, name, loc_name, release, rate
                rate = (item.vote_average != 0) ? `<button type="button" title="Voted ${item.vote_count} people" class="btn btn-outline-info pill btn-sm disabled">
                                                        Rate <span title="Voted ${item.vote_count} people" class="badge badge-pill btn-info">${item.vote_average}</span>
                                                    </button>` : ''
                poster = item.poster_path ? 'http://image.tmdb.org/t/p/w500' + item.poster_path : 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                overview = item.overview ? cutText(item.overview, 237, '...') : 'This film dont have description'
                release = 'Release year '
                if (type == 0) {
                    name = item.name
                    loc_name = item.original_title == item.title ? ' ' : item.title
                    release = ''
                    rate = ''
                    overview = `
                        <h6>Known by:</h6>
                        <ul class="list-group list-group-flush" style="list-style-type:none">`
                    item.known_for.forEach(el => {
                        film = el.title || el.name
                        overview += `<li><a class="list-group-item d-flex justify-content-between align-items-center" href="https://www.themoviedb.org/${el.media_type}/${el.id}" target="_blank" rel="noopener">${film} <span class="badge badge-info badge-pill">${cutText(el.release_date || el.first_air_date, 4, '')}</span></a></li>`
                    })
                    overview += '</ul>'
                    poster = item.profile_path ? 'http://image.tmdb.org/t/p/w500' + item.profile_path : 'https://www.belr.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg'
                } if (type == 1) {
                    poster = item.poster_path ? 'http://image.tmdb.org/t/p/w500' + item.poster_path : 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                    name = cutText(item.original_title, 27, '...')
                    loc_name = item.original_title == item.title ? ' ' : cutText(item.title, 32, '...')
                    release += item.release_date ? cutText(item.release_date, 4, '') : 'unknow'
                } if (type == 2) {
                    name = cutText(item.original_name, 27, '...')
                    loc_name = item.original_name == item.name ? ' ' : cutText(item.name, 32, '...')
                    release += item.first_air_date ? cutText(item.first_air_date, 4, '') : 'unknow'
                }
                let col = document.createElement('div')
                col.classList.add('col-lg-6', 'col-md-12', 'animated', 'fadeIn', 'item')
                col.style.animationDelay = i < 10 ? `0.${i * 3}s` : `1.${i * 3}s`
                col.innerHTML =
                    `
                        <div class="card mb-4" style="max-width: 556px;">
                            <div class="row no-gutters" style="min-height:377px;">
                                <div class="col-md-4 align-self-center p-2">
                                    <img src="${poster}" class="card-img-top p-1 shadow-sm" alt="${name}" style="border-radius:15px;">
                                    <p class="card-text"><small class="text-muted p-2"> <b>${release}</b></small></p>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h2 class ="card-title"><a class="alert-link" href="https://www.themoviedb.org/${item.media_type}/${item.id}" target="_blank"> ${name}</a></h2>
                                        <p class="card-text"><small class="text-muted">${loc_name}</small></p>
                                        <p class="card-text animated fadeIn" title="Show full text" onclick="event.target.innerHTML = '${item.overview}'">${overview}</p>
                                        ${rate}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                movies.appendChild(col)
        })
    })
}

function cutText(str,num,str2){
    if (str.length > num-3) return str.substr(0,num) + str2
    else return str
}

search.addEventListener('submit', startSearch)