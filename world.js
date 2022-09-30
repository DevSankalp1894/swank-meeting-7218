
//https://newsapi.org/v2/everything?q=world&apiKey=493fc75293174974ac640d607862a8f4


let worldNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=world&apiKey=f2dc9de1c0fa42c2a75ae5ac03a6bfd5
    `;

    let res = await fetch(url);

    let data = await res.json();

    let newdata = data.articles;

    appendWorld(newdata)
    //console.log(newdata);

}

worldNews();

let appendWorld = (data) => {

    let child_1 = document.getElementById('child-1');
    child_1.innerHTML = null;

    data.map((el, i) => {

        if(i<5) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.style.width = '100%'
            img.src = el.urlToImage;


            let title = document.createElement('h2');
            title.innerText = el.title;

            let desc = document.createElement('p');
            desc.innerText = el.description;

            div.append(img, title, desc);
            

            child_1.append(div)

        }
    })
}



let middleNews = async () => {

    let url = `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=2957328f0c6947efa41e73e2f9058927`;

    let res = await fetch(url);

    let data = await res.json();

    let newdata = data.articles;

    appendMiddle(newdata);

   // console.log(newdata);

}

middleNews();

 
let appendMiddle = (data) => {

    let child_2 = document.getElementById('child-2');
    child_2.innerHTML = null;

    data.map((el,i) => {


        if(i<15) {

        
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(img, title);

            child_2.append(div)

        }
    })
}



let popularNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=trending&apiKey=493fc75293174974ac640d607862a8f4`;

    let res = await fetch(url);

    let data = await res.json();

    let newdata = data.articles;

    appendPopular(newdata);

   // console.log(newdata);
}

popularNews();


let appendPopular = (data) => {

    let child_3 = document.getElementById('child-3');
    child_3.innerHTML = null;

    data.map((el,i) => {

        if(i<24) {

        
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;

            let title = document.createElement('p');
            title.innerText = el.title;

            div.append(title, img);

            child_3.append(div)

        }
    })
}


let asiaNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=asia&apiKey=8310b5752c8c4c30b984ed3c77811b9d`;

    let res = await fetch(url);

    let data = await res.json();

    let newdata = data.articles;

    appendAsia(newdata);

}

asiaNews();


let appendAsia = (data) => {

     let asia = document.getElementById('asia');
     asia.innerHTML = null;

     data.map((el,i) => {

        if(i<8) {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.urlToImage;

        let title = document.createElement('p');
        title.innerText = el.title;

        div.append(img, title);

        asia.append(div);

        }
     })
}



let americaNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=america&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`;

    let res = await fetch(url);

    let data = await res.json();

    let newdata = data.articles;

    appendAmerica(newdata)


}

americaNews();


let appendAmerica = (data) => {
    console.log(data);

    let america = document.getElementById('america');
    america.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;
    
            let title = document.createElement('p');
            title.innerText = el.title;
    
            div.append(img, title);

            america.append(div);

        }

    })
}


let ausNews = async () => {

    
    let url=`https://newsapi.org/v2/everything?q=australia&apiKey=2f58e9bcb00342cb8cfbf66eca44ad59`;

    let res = await fetch(url);

    let data = await res.json();

    appendAus(data.articles)

}

ausNews();


let appendAus = (data) => {

    let aus = document.getElementById('aus');
    aus.innerHTML = null;

    data.map((el,i) => {

        if(i<6) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;
    
            let title = document.createElement('p');
            title.innerText = el.title;
    
            div.append(img, title);

            aus.append(div);

        }

    })
}


let eastNews = async () => {

    let url=`https://newsapi.org/v2/everything?q=australia&apiKey=8310b5752c8c4c30b984ed3c77811b9d`;

    let res = await fetch(url);

    let data = await res.json();

    appendEast(data.articles)

}

eastNews();


let appendEast = (data) => {

    let east = document.getElementById('mid-east');
    east.innerHTML = null;

    data.map((el,i) => {

        if(i<3) {

            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = el.urlToImage;
    
            let title = document.createElement('p');
            title.innerText = el.title;
    
            div.append(img, title);

            east.append(div);

        }

    })

}

import navbar from './componets/navbar.js';

let nav=document.getElementById('navbar');

nav.innerHTML=navbar();