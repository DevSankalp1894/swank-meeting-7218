import navbar from "./componets/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

////////// left side main news div//////////////////////////

let API = `2e5d4752cefc436398c511131e6adda1`;
async function newsApi() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=jobs&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
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

  data.forEach((e) => {
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
  });
};

////////// Right side MOST POPULAR div//////////////////////////
async function mostPopular() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=popular&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
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
      `https://newsapi.org/v2/everything?q=education&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
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
      `https://newsapi.org/v2/everything?q=gallery&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
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
