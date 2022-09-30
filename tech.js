

  import navbar from './componets/navbar.js';

  let nav=document.getElementById('navbar');

  nav.innerHTML=navbar();





let entertain = async () => {

    let url = `https://newsapi.org/v2/everything?q=technology&apiKey=2957328f0c6947efa41e73e2f9058927`;

    let res = await fetch(url);

    let data = await res.json();

    appendEntertain(data.articles);

}

entertain();


let appendEntertain = (data) => {

    let child_1 = document.getElementById('child-1');
    child_1.innerHTML = null;

    data.map((el,i) => {

        if(i<5) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.style.width = '100%'
            img.src = el.urlToImage;

            let title = document.createElement('h2');
            title.innerText = el.title;

            let desc = document.createElement('p');
            desc.innerText = el.description;

            div.append(img,title,desc);

            child_1.append(div)

        }
    })
}


let bollywood = async () => {

    let url = `https://newsapi.org/v2/everything?q=tech&apiKey=493fc75293174974ac640d607862a8f4`;

    let res = await fetch(url);

    let data = await res.json();

    appendBollywood(data.articles);


}

bollywood();


let appendBollywood = (data) => {

    //console.log(data);

    let child_2 = document.getElementById('child-2');
    child_2.innerHTML = null;

    data.map((el,i) => {

        if(i<18) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img,title);

            child_2.append(div)
        }
    })
}


let movieNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=mobiles&apiKey=8310b5752c8c4c30b984ed3c77811b9d`;

    let res = await fetch(url);

    let data = await res.json();

    appendMovie(data.articles)

}

movieNews();


let appendMovie = (data) => {

    let box_3 = document.getElementById('child-3');
    box_3.innerHTML = null;

    data.map((el,i) => {

        if(i<28) {

            
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(title,img);

            box_3.append(div);

        }
    })
}



let bollyNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=smartphones&apiKey=2957328f0c6947efa41e73e2f9058927`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly(data.articles)

}

bollyNews();


let appendbolly = (data) => {

    let bolly = document.getElementById('bolly');
    bolly.innerHTML = null;

    data.map((el,i) => {

        if(i<6) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img, title);

            bolly.append(div);

        }
    })
}


let hollyNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=gadgets&apiKey=8310b5752c8c4c30b984ed3c77811b9d`

    let res = await fetch(url);

    let data = await res.json();

    appendholly(data.articles)
}

hollyNews();


let appendholly = (data) => {

    let holly = document.getElementById('holly');
    holly.innerHTML = null;
    
    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img, title);

            holly.append(div);

        }
    })
}


let teleNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=digital&apiKey=493fc75293174974ac640d607862a8f4`;

    let res = await fetch(url);

    let data = await res.json();

    appendTele(data.articles)

}

teleNews();

let appendTele = (data) => {

    let tele = document.getElementById('tele');
    tele.innerHTML = null;

    data.map((el,i) => {

        if(i<3) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img, title);

            tele.append(div);

        }
    })
}


let musicNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=science&apiKey=493fc75293174974ac640d607862a8f4`;

    let res = await fetch(url);

    let data = await res.json();

    appendMusic(data.articles)

}

musicNews();


let appendMusic = (data) => {

    let music = document.getElementById('music');
    music.innerHTML = null;

    data.map((el,i) => {

        if(i<7) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img, title);

            music.append(div);

        }
    })

}