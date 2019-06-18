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
    btn.classList.remove('pulse')
}
const cutText = (str,num) => {

    if (str.length > num) return str.substr(0,num) + '...'
    else return str
}


const requsetApi = (method, url) => {
    const request = new XMLHttpRequest()
    request.open(method, url)
    request.send()
    inp.value = ''
 
    request.addEventListener('readystatechange',() => {
        if(request.readyState !== 4) return

        let query = JSON.parse(request.responseText), type
        console.log(query.results)
        query.results.forEach((item,i) => {
                if (item.media_type == 'person') type = 0
                if (item.media_type == 'movie') type = 1
                if (item.media_type == 'tv') type = 2
                    let poster, overview, name, loc_name,release,rate
                    rate = (item.vote_average != 0) ? `<button type="button" title="Voted ${item.vote_count} people" class="btn btn-outline-info pill btn-sm disabled">
                                                        Rate <span title="Voted ${item.vote_count} people" class="badge badge-pill btn-info">${item.vote_average}</span>
                                                    </button>` : ''
                    poster = item.poster_path ? 'http://image.tmdb.org/t/p/w200' + item.poster_path : 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                    overview = item.overview ? cutText(item.overview,237) : 'This film dont have description'
                    release = 'Release year '
                    if(type == 0){
                        name = item.name
                        loc_name = item.original_title == item.title ? ' ' : item.title
                        release = ''
                        rate = ''
                        overview =`
                        <h6>Known by:</h6>
                        <ul class="list-group list-group-flush">`
                        item.known_for.forEach(el=>{
                            film = el.title || el.name
                            overview +=`<li class="list-group-item">${film}</li>`
                        }) 
                        overview+='</ul>'
                        poster = item.profile_path ? 'http://image.tmdb.org/t/p/w200' + item.profile_path : 'https://www.belr.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg'
                    } if(type == 1){
                        poster = item.poster_path ? 'http://image.tmdb.org/t/p/w200' + item.poster_path : 'https://www.zone-mania.com/images/Default-Film-Affiche.png'
                        name = cutText(item.original_title,27)
                        loc_name = item.original_title == item.title ? ' ' : cutText(item.title, 32)
                        release += item.release_date ? item.release_date.substr(0, 4): 'unknow'
                    } if (type == 2) {
                        name = cutText(item.original_name, 27)
                        loc_name = item.original_name == item.name ? ' ' : cutText(item.name, 32)
                        release += item.first_air_date ? item.first_air_date.substr(0, 4) : 'unknow'
                    }
                    let col = document.createElement('div')
                    col.classList.add('col-lg-6', 'col-md-12', 'animated', 'fadeIn', 'item')
                    col.style.animationDelay = i < 10 ? `0.${i*3}s` : `1.${i*3}s`
                    col.innerHTML =
                        `
                        <div class="card mb-4" style="max-width: 556px;">
                            <div class="row no-gutters" style="min-height:377px;">
                                <div class="col-md-4 align-self-center p-1">
                                    <img src="${poster}" class="card-img-top p-1 shadow-sm" alt="${name}" style="border-radius:15px;">
                                    <p class="card-text"><small class="text-muted p-2"> <b>${release}</b></small></p>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h2 class ="card-title"> ${name}</h2>
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



search.addEventListener('submit', apiSearch)

