



let entertain = async () => {

    let url = `https://newsapi.org/v2/everything?q=entertainment&apiKey=7fdc47b90ca44741881fc18f47323cec`;
    

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

            div.addEventListener("click", () => {
                let data = [];
                data.push(el);
                window.location.href = "detail.html";
                localStorage.setItem("Details", JSON.stringify(data));
              });
            //   img.addEventListener("click", () => {
            //     let data = [];
            //     data.push(el);
            //     window.location.href = "detail.html";
            //     localStorage.setItem("Details", JSON.stringify(data));
            //   });

            child_1.append(div)

        }
    })
}


let bollywood = async () => {

    let url = `https://newsapi.org/v2/everything?q=bollywood&apiKey=493fc75293174974ac640d607862a8f4`;

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

            div.addEventListener("click", () => {
                let data = [];
                data.push(el);
                window.location.href = "detail.html";
                localStorage.setItem("Details", JSON.stringify(data));
              });

            child_2.append(div)
        }
    })
}


let movieNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=movies&apiKey=8310b5752c8c4c30b984ed3c77811b9d`;

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

            div.addEventListener("click", () => {
                let data = [];
                data.push(el);
                window.location.href = "detail.html";
                localStorage.setItem("Details", JSON.stringify(data));
              });

            box_3.append(div);

        }
    })
}



let bollyNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=bollywood&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`;

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

            div.addEventListener("click", () => {
                let data = [];
                data.push(el);
                window.location.href = "detail.html";
                localStorage.setItem("Details", JSON.stringify(data));
              });

            bolly.append(div);

        }
    })
}


let hollyNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=hollywood&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`

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

    let url = `https://newsapi.org/v2/everything?q=television&apiKey=493fc75293174974ac640d607862a8f4`;

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

    let url = `https://newsapi.org/v2/everything?q=music&apiKey=493fc75293174974ac640d607862a8f4`;

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

import navbar from './componets/navbar.js';

let nav=document.getElementById('navbar');

nav.innerHTML=navbar();