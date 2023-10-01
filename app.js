
const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

const B = 0;
const H = 0;

const vraagBreed = () => {
    const B = prompt(" geef een getal");
    return B;
}

const vraaghoogte = () => {
    const H = prompt(" geef nog een getal");
    return H
}






btn.style.cssText = "border : solid; color: green; ";


const grid = () => {
    const breete = B;
    const hoogte = H;
    const aantal = breete * hoogte;
  const array = [];
    for (let i = 0; i < aantal; i++){
      
        const box = document.createElement("div");
         container.appendChild(box);
        box.style.cssText = " width: 50px; height: 50px; border: solid ";
        box.style.backgroundColor = "red";

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "blue"
        }
            
        )
       
    }


}


const START = () => {
    btn.addEventListener("click", () => {
        vraagBreed()
        vraaghoogte()
    })
    grid()
}

START();






