let item = JSON.parse(localStorage.getItem("coffee"));
// console.log(item);

function append(data){
    console.log(data);

    
    var totalAmount = 0;
    data.forEach(function(elem, index){
        
        let div = document.createElement("div");
        div.setAttribute("id", "coffediv");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let type = document.createElement("h3");
        type.innerText = elem.title;

        let price = document.createElement("h3");
        price.innerText = elem.price;
        totalAmount += Number(elem.price);

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
           
            removeFun(elem, index);
        });
        
        div.append(image, type, price, btn);
        let bucket = document.querySelector("#bucket");
        bucket.append(div);

        let total = document.querySelector("#total_amount");
        total.innerText = totalAmount;
    });

    let total = document.querySelector("#total_amount");
    total.innerText = totalAmount;

    function removeFun(elem, index){
        console.log("working");
        item.splice(index, 1);
        localStorage.setItem("coffee", JSON.stringify(item));
        window.location.reload();
    }

}

function checkout(){
    window.location.href = "checkout.html";
}

append(item);