
//var anshulYOB = 2008;
//console.log(2018-anshulYOB);
calcYearOfBirth(10);
function calcYearOfBirth(age){   
 var now , year;
now = new Date();
//console.log(now);
 year =   now.getFullYear();
console.log(year - age   );    
}
