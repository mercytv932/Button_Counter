const count = document.querySelector("#count");
const btn = document.querySelector("#btn");
const resetBtn = document.querySelector("#resetBtn");
const subtract = document.querySelector("#subtract");

let countValue = 0;

btn.addEventListener("click", function(){
countValue++;
count.textContent = countValue;
});

resetBtn.addEventListener("click", function(){
  countValue = 0;
  count.textContent = countValue;
});

subtract.addEventListener("click", function(){
  countValue--;
  count.textContent = countValue;
});
