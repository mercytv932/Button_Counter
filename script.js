const count = document.querySelector("#count");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const subtractBtn = document.querySelector("#subtractBtn");

let countValue = 0;


addBtn.addEventListener("click", function(){
countValue++;
updateColor();
count.textContent = countValue;
});


subtractBtn.addEventListener("click", function(){
  countValue--;
  updateColor();
  count.textContent = countValue;
});


resetBtn.addEventListener("click", function(){
  countValue = 0;
  updateColor();
  count.textContent = countValue;
});


function updateColor(){
  if(countValue>0){
    count.style.color = "#0B3D91";
  }
  else if( countValue<0){
    count.style.color = "Red";
  }

  else{
    count.style.color = "Black";
  }
}
