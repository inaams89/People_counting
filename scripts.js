let saveEl = document.getElementById("save-el");
let countEL =  document.getElementById("count-el")
  let count = 0;


  function increment() {
      count += 1;
     
      countEL.innerHTML = count;
       
  }


  
  function save() {
    savedVar = count + " - ";
    saveEl.textContent +=  savedVar;
    count = 0;
    countEL.textContent =count;
  }
  