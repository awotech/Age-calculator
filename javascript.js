
     function myFunction() {
     let day = Number(document.getElementById("day").value);
     let month = Number(document.getElementById("month").value);
     let year = Number(document.getElementById("year").value);
 
    var userInput = Date.parse(month-day-year);
    currenttoday = Date.parse(currenttoday)
    userage = userInput - currentdate;
    alert(userage);
 
 }
   