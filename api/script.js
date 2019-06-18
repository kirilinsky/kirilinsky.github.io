const search = document.querySelector('#search'),
    inp = document.querySelector('#input'),
    movies = document.querySelector('#movies'),
    btn = document.querySelector('#btn')

const apiSearch = e => {
    movies.innerHTML = ''
    e.preventDefault()
    let text = inp.value,
        uri = 'https://api.themoviedb.org/3/search/multi?api_key=662b74bb042962fe22b43d842c0dd622&language=ru&query=' + text
    requsetApi('GET', uri)
}


const requsetApi = (method, url) => {
    const request = new XMLHttpRequest()
    request.open(method, url)
    request.send()
    inp.value = ''

    request.addEventListener('readystatechange',() => {
        if(request.readyState !== 4) return

        let query = JSON.parse(request.responseText), type
        console.log(query.results);
        query.results.forEach(item => {
                if (item.media_type == 'movie') type = 1
                if (item.media_type == 'tv') type = 2
                let poster, overview, name, loc_name,release,rate
                rate = (item.vote_average != 0) ? `<button type="button" class="btn btn-outline-info pill btn-sm disabled">
                                                    Rate <span class="badge badge-pill btn-info">${item.vote_average}</span>
                                                   </button>` : ''
                poster = item.poster_path ? 'http://image.tmdb.org/t/p/w185' + item.poster_path : 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                overview= item.overview ? item.overview.substr(0, 245) + '...' : 'This film dont have description'
                if(type == 1){
                    name = item.original_title
                    loc_name = item.original_title == item.title ? ' ' : item.title
                    release = item.release_date.substr(0, 4)
                } else {
                    name = item.original_name
                    loc_name = item.original_name == item.name ? ' ' : item.name
                    release = item.first_air_date.substr(0, 4)
                }
                let col = document.createElement('div')
                col.classList.add('col-lg-6', 'col-md-12', 'animated', 'zoomIn', 'item')
                col.innerHTML =
                    `
                    <div class="card mb-4" style="max-width: 556px;">
                        <div class="row no-gutters" style="min-height:377px;">
                            <div class="col-md-4 align-self-center p-1">
                                <img src="${poster}" class="card-img-top p-1 shadow-sm" alt="${item.original_title}" style="border-radius:15px;">
                                <p class="card-text"><small class="text-muted p-2">Release year ${release}</small></p>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class ="card-title"> ${name}</h2>
                                    <p class="card-text"><small class="text-muted">${loc_name}</small></p>
                                    <p class="card-text animated fadeIn" onclick="event.target.innerHTML = '${item.overview}'">${overview}</p>
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



search.addEventListener('submit', apiSearch)

