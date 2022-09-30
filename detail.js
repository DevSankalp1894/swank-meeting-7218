import navbar from "./componets/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("Details"));
console.log(data);

//////////////////details appending here////////////////////////////////
const append = (data) => {
  let gifdata = document.querySelector("#left_con1");

  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news_div");
    let title = document.createElement("h2");
    title.innerText = e.title;
    let description = document.createElement("p");
    description.innerText = e.description;
    let date = document.createElement("p");
    date.innerText = `Published -   ${e.publishedAt}`;
    let img = document.createElement("img");
    img.src = e.urlToImage;
    let content = document.createElement("h5");
    content.innerText = e.content;
    div.append(title, description, date, img, content);

    gifdata.append(div);
  });
};
append(data);

////////// Right side MOST POPULAR div//////////////////////////
let API = `d01b979c685d4ea289a3400c3441a84b`;
async function mostPopular() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=athletes&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
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
  let gifdata = document.querySelector("#right_con_div");

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

// grids below video detail///////////////////////////////////

async function below_details() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=hollywood&from=2022-08-29&sortBy=publishedAt&apiKey=${API}`
    );

    let data = await res.json();
    console.log(data.articles);
    Grid_append(data.articles);
  } catch (error) {
    console.log("error", error);
  }
}
below_details();

const Grid_append = async (data) => {
  let gifdata = document.querySelector("#left_con2");

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
