const search = document.querySelector('#search'),
    inp = document.querySelector('#input'),
    movies = document.querySelector('#movies')


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

    request.addEventListener('readystatechange',() => {
        if(request.readyState !== 4) return
        if (request.status !== 200){
            console.log(request.status)
        }

        let query = JSON.parse(request.responseText)
        console.log(query.results)
        query.results.forEach(item => {
            if(item.media_type == 'tv'){
                let poster, overview
                item.poster_path ? poster = 'http://image.tmdb.org/t/p/w185' + item.poster_path : poster = 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                item.overview ? overview = item.overview.substr(0, 245) + '...' : overview = 'This show dont have description'

                let col = document.createElement('div')
                col.classList.add('col-lg-6','col-md-12','animated','zoomIn')
                col.innerHTML =
                `
                    <div class="card mb-3" style="max-width: 550px;">
                        <div class="row no-gutters" style=";min-height:375px;">
                            <div class="col-md-4 align-self-center">
                                <img src="${poster}" class="card-img-top p-2" alt="${item.original_name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class = "card-title"> ${item.original_name}</h2>
                                    <p class="card-text"><small class="text-muted">- ${item.name} -</small></p>
                                    <p class = "card-text">${overview}</p>
                                    <button type="button" class="btn btn-outline-info pill btn-sm">
                                        Rate <span class="badge badge-pill btn-info">${item.vote_average}</span>
                                    </button>
                                    <p class="card-text"><small class="text-muted">Release year ${item.first_air_date.substr(0,4)}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                movies.appendChild(col)
            }
        })
    })

}



search.addEventListener('submit', apiSearch)