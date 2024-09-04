const today = new Date();
const christMas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() === 11 && today.getDate(), 25) {
    christMas.setFullYear(christMas.getFullYear() +1);
}
const oneDay = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((christMas.getTime() - today.getTime()) / oneDay)} days left until christmas`)