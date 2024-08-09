let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");
  console.log(ul);
  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
  shops.style.color = "rgb(251, 185, 5)";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});
reviews.addEventListener("click", () => {
  reviews.style.color = "rgb(251, 185, 5)";
  shops.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});
blogs.addEventListener("click", () => {
  blogs.style.color = "rgb(251, 185, 5)";
  shops.style.color = "white";
  reviews.style.color = "white";
  contacts.style.color = "white";
});
contacts.addEventListener("click", () => {
  contacts.style.color = "rgb(251, 185, 5)";
  reviews.style.color = "white";
  blogs.style.color = "white";
  shops.style.color = "white";
});

// card js

let card = document.querySelectorAll(".card");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".continer");
let itemImg = document.getElementById("itemImg");
let itemPrice = document.querySelectorAll('.itemPrice');
let buyBtn = document.getElementById("buyBtn");

console.log(card);

card.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    itemPage.style.display = "flex";
    container.style.display = "none";

    let imgSrc = curValue.firstElementChild.src;
    itemImg.src = imgSrc;

    let price = curValue.lastElementChild.innerText;
    itemPrice.forEach((p)=>{
      p.innerText=price
    })

    let buyText = document.querySelector('.buyText')
    buyBtn.addEventListener("click", function () {
      document.querySelector(".buyPage").style.display = "block";
      buyText.innerHTML = `
         <h3>Enter Details :</h3>
         <label for="Name">Name:-</label>
         <input type="text" placeholder="Enter Your Name" id="name">
         <br><br>
         <label for="adress">Adress:-<input type="text" placeholder="Enter Your Adress" id="address"></label>
         <br><br>
         <label for="">Ph  No:-<input type="text" placeholder="Enter Your Mobile Number" id="num"></label>
         <br>
         <h3>Payment Option :</h3>
         <select name="" id="">
            <option value="Google-Pay">Google-Pay</option>
            <option value="Phone-Pay">Phone-Pay</option>
            <option value="Bharat-Pay">Bharat-Pay</option>
            <option value="Cash-on-Delivery">Cash-on-Delivery</option>
         </select><br><br>
         <label for="">Enter your password :<input type="password"></label>        
         `;

      let button = document.createElement('button');
      button.innerText="Submit";
      buyText.appendChild(button);

      button.addEventListener('click',function(){
         let name = document.getElementById("name");
         let address = document.getElementById("address");
         let num = document.getElementById("num");

         if(name.value == "" || address.value == "" || num.value == ""){
            alert("Please Enter Detail");
         }else{
            alert("Your Response Recorded");
            document.querySelector(".buyPage").style.display="none";
         }
      })

      let cross = document.querySelector(".cross");
      cross.addEventListener("click", function () {
        document.querySelector(".buyPage").style.display = "none";
      });
    });
  });
});


// connect

function connect(){
   let names = document.getElementById('names');
   let num = document.getElementById('number');
   if(name.value == "" || num.value == ""){
      alert("Enter all Details")
   }else{
      alert('Thanks for connecting with us');
   }
}