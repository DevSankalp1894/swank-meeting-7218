import navbar from "./componets/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

////////// left side main news div//////////////////////////

let API = `d01b979c685d4ea289a3400c3441a84b`;
async function newsApi() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=sports&from=2022-08-30&sortBy=publishedAt&apiKey=${API}`
    );

    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  } catch (error) {
    console.log("error", error);
  }
}
newsApi();

const append = async (data) => {
  let gifdata = document.querySelector("#container1");

  data.forEach((e,i) => {
    if(i<20){
    let div = document.createElement("div");
    div.setAttribute("class", "news_div");
    let div_text = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.urlToImage;
    img.style.cursor = "pointer";

    let title = document.createElement("h3");
    title.innerText = e.title;
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    img.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    let description = document.createElement("p");
    description.innerText = e.description;
    let date = document.createElement("p");
    date.innerText = e.publishedAt;
    div_text.append(title, description, date);
    div.append(img, div_text);
    gifdata.append(div);
  }
  });
};

////////// Right side MOST POPULAR div//////////////////////////
async function mostPopular() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=popular&from=2022-08-30&sortBy=publishedAt&apiKey=${API}`
    );

    let data = await res.json();
    console.log(data.articles);
    mostPopular_append(data.articles);
  } catch (error) {
    console.log("error", error);
  }
}
mostPopular();

const mostPopular_append = async (data) => {
  let gifdata = document.querySelector("#container2_content");

  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news_div");
    let div_text = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.urlToImage;
    img.style.cursor = "pointer";

    let title = document.createElement("h4");
    title.innerText = e.title;
    title.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    img.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    title.style.cursor = "pointer";
    div_text.append(title);
    div.append(div_text, img);
    gifdata.append(div);
  });
};

////////// Right side MORE FROM JOB AND EDUCATION //////////////////////////

async function moreJobs() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=education&from=2022-08-30&sortBy=publishedAt&apiKey=${API}`
    );

    let data = await res.json();
    console.log(data.articles);
    moreJobs_append(data.articles);
  } catch (error) {
    console.log("error", error);
  }
}
moreJobs();
const moreJobs_append = async (data) => {
  let gifdata = document.querySelector("#container2_content1");

  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news_div");
    let div_text = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.urlToImage;
    img.style.cursor = "pointer";

    let title = document.createElement("h4");
    title.innerText = e.title;
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    img.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    div_text.append(title);
    div.append(div_text, img);
    gifdata.append(div);
  });
};

////////// Right side Worls gallery //////////////////////////

async function worldGallery() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=gallery&from=2022-08-30&sortBy=publishedAt&apiKey=${API}`
    );

    let data = await res.json();
    console.log(data.articles);
    worldGallery_append(data.articles);
  } catch (error) {
    console.log("error", error);
  }
}
worldGallery();
const worldGallery_append = async (data) => {
  let gifdata = document.querySelector("#container2_content2");

  data.forEach((e) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = e.urlToImage;
    img.style.cursor = "pointer";

    let title = document.createElement("h4");
    title.innerText = e.title;
    title.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    img.addEventListener("click", () => {
      let data = [];
      data.push(e);
      window.location.href = "detail.html";
      localStorage.setItem("Details", JSON.stringify(data));
    });
    title.style.cursor = "pointer";
    div.append(img, title);
    gifdata.append(div);
  });
};

//////////////slide show in the right side ///////////////////////////////

function slideShow() {
  let slides = [
    `https://i.pinimg.com/originals/ee/f6/e6/eef6e697143eea117549b343e9069b30.jpg`,
    `https://i.pinimg.com/originals/0e/81/56/0e8156c62d5db86b2d423323456fc286.jpg`,

    `https://media.istockphoto.com/vectors/soccer-football-web-banner-template-or-background-vector-id892142922?k=6&m=892142922&s=170667a&w=0&h=V5kxjD1STuUFNnd2FWSkbhElvCV6WS-R_FGsBncEVuc=`,
  ];

  let i = 0;
  let div = document.querySelector("#corosoul");
  div.innerHTML = null;
  let img = document.createElement("img");
  img.src = img[0];
  div.append(img);
  i++;
  console.log(i);
  setInterval(function () {
    if (i == 3) {
      i = 0;
    }
    img.src = slides[i];
    div.append(img);
    console.log(i);
    i++;
  }, 3000);
}
slideShow();
