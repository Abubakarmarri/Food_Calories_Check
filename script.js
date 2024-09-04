var main = document.querySelector("main");
var allInfo = document.getElementById("all-info");
var mainBtn = document.getElementById("mainBtn");
var btnArrow = document.querySelector("#mainBtn i");
var allInfoClose = document.querySelector("#all-info i");
var bigImg = document.getElementById("bigImg");
var infoHeading = document.getElementById("info-heading");

function scrollFunc() {
  main.scrollIntoView();
}

function showDetail(pic) {
  allInfo.style.display = "flex";
  bigImg.src = pic;
}

function closeDetail() {
  allInfo.style.display = "none";
}

mainBtn.addEventListener("mouseover", () => {
  btnArrow.style.marginLeft = "23px";
  btnArrow.style.scale = "1.1";
});

mainBtn.addEventListener("mouseout", () => {
  btnArrow.style.marginLeft = "0px";
  btnArrow.style.scale = "1";
});

// Array
const foods = [
  {
    id: 1,
    title: "Banana",
    img: "img1.png",
    peragraph:
      "Bananas are a good source of several vitamins and minerals, especially potassium, vitamin B6, and vitamin C ( 1 ). Potassium. Bananas are a good source of potassium.",
  },

  {
    id: 2,
    title: "Beef Meat",
    img: "img2.png",
    peragraph:
      "Beef is one of the most popular types of meat. It's exceptionally rich in high-quality protein, vitamins, and minerals.",
  },
  {
    id: 3,
    title: "Butter",
    img: "img3.png",
    peragraph:
      "Butter is about 80% fat, and the rest is mostly water. It's basically the fatty portion of milk that has been isolated from the protein and carbs.",
  },

  {
    id: 4,
    title: "Rolled Oats",
    img: "img4.png",
    peragraph:
      "The nutrient composition of oats is well-balanced. They are a good source of carbs and fiber, including the fiber beta-glucan.",
  },

  {
    id: 5,
    title: "medjool Dates",
    img: "img5.png",
    peragraph:
      "Medjool dates offer a high number of carbs in a small serving. Carbs are your body's main source of energy ( 20 ). May support bone health.",
  },

  {
    id: 6,
    title: "Soya Chunks",
    img: "img6.png",
    peragraph:
      "Soy is full of polyunsaturated fats, proteins and omega 3 fatty acids.",
  },

  {
    id: 7,
    title: "Chia Seeds",
    img: "img7.png",
    peragraph:
      "Chia seeds are an excellent source of fiber, which can improve heart health, reduce cholesterol levels and promote intestinal health.",
  },

  {
    id: 8,
    title: "Eggs",
    img: "img8.png",
    peragraph:
      "According to the United States Department of Agriculture (USDA), one large boiled egg weighing 50 g can provide the following nutrients: Energy: 77.5 calories.",
  },
];

const displayItems = document.querySelectorAll(".displayItem");
const currentfood = document.querySelector(".heading");
const currentImg = document.querySelector(".infoImage");
const currentPera = document.querySelector(".peragraph");

let choosenFood = foods[0];

displayItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    choosenFood = foods[index];
    currentfood.textContent = choosenFood.title;
    currentImg.src = choosenFood.img;
    currentPera.textContent = choosenFood.peragraph;
  });
});
