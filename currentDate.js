let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
const yyyy = today.getFullYear()+1;
if (dd<10) {
    dd = `0${dd}`;

}
if (mm<10) {
    mm = `0${mm}`;
}
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);





