const year = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
};

const leapYear = {
    Jan: 31,
    Feb: 29,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
};

// const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
// const today = [year, month, day].join("-");
// console.log(today);
// console.log(new Date());
const currentMonthAndYear=new Date().toUTCString().split(" ").slice(2,4).join(" ");
// console.log(currentMonthAndYear);
let selectedMonthAndYear=currentMonthAndYear;
const selectedMonth=selectedMonthAndYear.split(" ")[0];
const selectedYear=selectedMonthAndYear.split(" ")[1];
// const selectedMonth="Feb";
// const selectedYear=2023;
console.log("SELECTED MONTH: ", selectedMonth);
console.log("SELECTED YEAR: ", selectedYear);

const currentDaysSet=[];
if (parseInt(selectedYear)%4!==0) {
    for (let i=1; i<=year[selectedMonth]; i++) {
        currentDaysSet.push(i);
    };
} else {
    for (let i=1; i<=leapYear[selectedMonth]; i++) {
        currentDaysSet.push(i);
    };
};

console.log('FILLED ARRAY OF "SET OF DAYS" FOR "SELECTED MONTH"', currentDaysSet);



document.getElementById("selected-month-year").innerHTML = selectedMonthAndYear;

// console.log(year.Jan)
