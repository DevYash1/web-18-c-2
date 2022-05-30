// Add the coffee to local storage with key "coffee"
async function coffee(){
    try{
        let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

        let res = await fetch(url);
        let data = await res.json();
        // console.log(data.menu.data);
        return data.menu.data;
    }
    catch(error){
        console.log("error");
    }
}

async function coffees(){
    let coffeeP = coffee();
    let coffeeMenu = await coffeeP;
    console.log(coffeeMenu)
    append(coffeeMenu);
}

coffees();

var coffeearr = JSON.parse(localStorage.getItem(coffee)) || [];

function append(data){
    data.forEach(function(elem){
        
        let div = document.createElement("div");
        div.setAttribute("id", "coffediv");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let type = document.createElement("h3");
        type.innerText = elem.title;

        let price = document.createElement("h3");
        price.innerText = elem.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Basket";
        btn.addEventListener("click", function(){
            bucket = {};
            bucket.image = elem.image;
            bucket.title = elem.title;
            bucket.price = elem.price;

            coffeearr.push(bucket);
            localStorage.setItem("coffee", JSON.stringify(coffeearr));

            var total = document.querySelector("#coffee_count");
            total.innerText = coffeearr.length;

        })

        div.append(image, type, price, btn);

        let menu = document.querySelector("#menu");
        menu.append(div);

    });
}