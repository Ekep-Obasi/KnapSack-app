let itemList = [
  { name: "tomato", weight: 0.5, value: 200 },
  { name: "apples", weight: 0.25, value: 250 },
  { name: "banana", weight: 1, value: 200 },
  { name: "groundnut", weight: 0.5, value: 1500 },
  { name: "beans", weight: 0.75, value: 2000 },
  { name: "yam", weight: 2, value: 2000 },
  { name: "cocoyam", weight: 3, value: 3000 },
  { name: "bread", weight: 0.25, value: 200 },
  { name: "chocolate", weight: 0.5, value: 2000 },
  { name: "butter", weight: 0.75, value: 1500 },
  { name: "meat", weight: 1.5, value: 3500 },
  { name: "fish", weight: 0.75, value: 2000 },
  { name: "coconut", weight: 0.25, value: 750 },
  { name: "corn", weight: 2, value: 2500 },
  { name: "vegetable", weight: 0.75, value: 1200 },
  { name: "water", weight: 1, value: 2000 },
  { name: "orange", weight: 0.75, value: 200 },
  { name: "grapes", weight: 0.75, value: 1200 },
  { name: "pineapple", weight: 0.55, value: 500 },
];

let addButtonElement = document.getElementById("add");
let optionElement = document.getElementsByTagName("option");
let doneButtonElement = document.getElementById("done");
let selectingElement = document.querySelectorAll(".select");
let resetElement = document.querySelector(".title");

function getData() {
  let inputValue = document.querySelector(".input").value;
  let sum = 0;
  let totalPrice = 0;
  let count = 0;
  addButtonElement.addEventListener("click", () => {
    if ((count < itemList.length + 1 && Math.floor(sum) < inputValue) && sum + itemList[count+1].weight < inputValue) {
      sum += Math.ceil(itemList[count].weight);
      if(Math.floor(sum) > inputValue){
        count++
      }
      totalPrice += itemList[count].value;
      document.querySelector(".itemDisplay").style.display = "block";
      document.querySelector(".itemClass").innerHTML += "Item Name:" + " " + itemList[count].name + "</br>" + "Price:" + itemList[count].value + "frs" + "</br>"+"<hr>";
      document.querySelector(".dataWeight").innerHTML = sum;
      document.querySelector(".dataPrice").innerHTML = totalPrice;
      optionElement[count+1].style.display = "none";
      console.log(sum);
    }
    else if (Math.floor(sum) == inputValue) {
      addButtonElement.disabled = true;
      optionElement[count].style.display = "none";
      document.querySelector(".status").style.background = "red";
    }
    else{
      addButtonElement.disabled = true;
      document.querySelector(".status").style.background = "red";
    }
    count++;
  });
  resetElement.addEventListener("click",()=>{
    sum = 0;
    totalPrice = 0;
    addButtonElement.disabled = false;
    document.querySelector(".itemDisplay").style.display = "none";
    document.querySelector(".itemClass").innerHTML = null;
    document.querySelector(".dataWeight").innerHTML = null;
    document.querySelector(".dataPrice").innerHTML = "";
    let inputValue = document.querySelector(".input").value="";
    document.querySelector(".status").style.background = "green";
    for (let i = 0; i <= count; i++){
    optionElement[count].innerText = itemList[count].name;
    }
    count=0;
  })

}
