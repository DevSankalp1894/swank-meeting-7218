
  let api= "9f411c4d96b04b50a987250d9d7e74c2";
  

let entertain = async () => {

    let url = `https://newsapi.org/v2/everything?q=india&apiKey=${api}`;

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

            child_1.append(div)

        }
    })
}


let bollywood = async () => {

    let url = `https://newsapi.org/v2/everything?q=geopolitics&apiKey=${api}`;

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

        if(i<22) {

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

    let url = `https://newsapi.org/v2/everything?q=world&apiKey=${api}`;

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

    let url=`https://newsapi.org/v2/everything?q=south&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly(data.articles)

}

bollyNews();


let appendbolly = (data) => {

    let bolly = document.getElementById('bolly');
    bolly.innerHTML = null;

    data.map((el,i) => {

        if(i<8) {

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

    let url=`https://newsapi.org/v2/everything?q=entertainment&apiKey=${api}`

    let res = await fetch(url);

    let data = await res.json();

    appendholly(data.articles)
}

hollyNews();


let appendholly = (data) => {

    let holly = document.getElementById('holly');
    holly.innerHTML = null;
    
    data.map((el,i) => {

        if(i<8) {

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

    let url = `https://newsapi.org/v2/everything?q=jobs&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendTele(data.articles)

}

teleNews();

let appendTele = (data) => {

    let tele = document.getElementById('tele');
    tele.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

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

            tele.append(div);

        }
    })
}


let musicNews = async () => {

    let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendMusic(data.articles)

}

musicNews();


let appendMusic = (data) => {

    let music = document.querySelector('#music');
    music.innerHTML = null;

    data.map((el,i) => {

        if(i<8) {

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

let musicNewss = async () => {

    let url = `https://newsapi.org/v2/everything?q=lifestyle&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendlife(data.articles)

}

musicNewss();


let appendlife = (data) => {

    let life = document.getElementById('style');
      
    life.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            life.append(div);

        }
    })

}


let musicNewsss = async () => {

    let url = `https://newsapi.org/v2/everything?q=technology&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendtech(data.articles);

}

musicNewsss();


let appendtech = (data) => {

    let life = document.getElementById('tech');
      
    life.innerHTML = null;

    data.map((el,i) => {

        if(i<3) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            life.append(div);

        }
    })

}

 
let musicNewssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=bollywood&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly2(data.articles);

}

musicNewssss();


let appendbolly2 = (data) => {

    let bollywood = document.getElementById('wood');
      
    bollywood.innerHTML = null;

    data.map((el,i) => {

        if(i<6) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            bollywood.append(div);

        }
    })

}

let musicNewsssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=world&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly3(data.articles);

}

musicNewsssss();


let appendbolly3 = (data) => {

    let world = document.getElementById('world');
      
    world.innerHTML = null;

    data.map((el,i) => {

        if(i<8) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            world.append(div);

        }
    })

}


let musicNewssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=world&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly4(data.articles);

}

musicNewssssss();


let appendbolly4 = (data) => {

    let science = document.getElementById('science');
      
    science.innerHTML = null;

    data.map((el,i) => {

        if(i<3) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            science.append(div);

        }
    })

}

let musicNewsssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=business&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly5(data.articles);

}

musicNewsssssss();


let appendbolly5 = (data) => {

    let business = document.getElementById('business');
    business.style.boxShadow=" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      
    business.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
              div.style.boxShadow=" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            business.append(div);

        }
    })

}


let musicNewssssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=opinion&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly6(data.articles);

}

musicNewssssssss();


let appendbolly6 = (data) => {

    let opinion = document.getElementById('opinion');
      
    opinion.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            opinion.append(div);

        }
    })

}


 
let musicNewsssssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=sharemarket&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly7(data.articles);

}

musicNewsssssssss();


let appendbolly7 = (data) => {

    let share = document.getElementById('share');
      
        share.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";
            div.style.boxShadow=" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            share.append(div);

        }
    })

}

let musicNewssssssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=health&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly8(data.articles);

}

musicNewssssssssss();


let appendbolly8 = (data) => {

    let health = document.getElementById('health');
      
        health.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            health.append(div);

        }
    })

}

let musicNewsssssssssss = async () => {

    let url = `https://newsapi.org/v2/everything?q=editor pic&apiKey=${api}`;

    let res = await fetch(url);

    let data = await res.json();

    appendbolly9(data.articles);

}

musicNewsssssssssss();


let appendbolly9 = (data) => {

    let edit = document.getElementById('edit');
      
        edit.innerHTML = null;

    data.map((el,i) => {

        if(i<4) {

            let div = document.createElement('div');
              div.setAttribute('class' ,' life');
              div.style.width="250px";
            //   div.style.font-weight= "bold";
            //   div.style.font-family= "sans-serif";

            let img = document.createElement('img');
            img.src = el.urlToImage;
            img.style.width="250px";
            img.style.height="150px";
         
           

            let title = document.createElement('p');
            title.innerText = el.title;
            title.style.fontWeight = "bold";
            div.style.fontFamily= "sans-serif";

            div.append(img, title);

            edit.append(div);

        }
    })

}

import navbar from './componets/navbar.js';

let nav=document.getElementById('navbar');

nav.innerHTML=navbar();