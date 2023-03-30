const market = 500;
const newmarket = 500;
const diff = newmarket-market;
const percentage = diff/100;
if(diff > 0 && percentage >= 1.5){
    console.log(percentage)
    console.log('You can Sell and take profit now');
}else if(diff < 0 && percentage <= -1.5){
    console.log(percentage)
    console.log('You can Buy a currency now');
}else {
    console.log('Just relax and wait!');
}
