//-------- simple a practice task 01 ---------
// const products ={
//     title:"Brand new pen",
//     reting:5,
//     // dealOf:true,
//     price:270,
//     offer:6,
// }
// console.log(products)
// console.log(typeof products)
// --------------------------------------------
//-------- simple a practice task 02 ---------
const profile ={
    fullName:'Mehedi Hasan',
    follower:500,
    userName:'mhedi-hasan',
    workPlace:'Microsoft',
    address:'Dhaka,Bangladesh',
    isMale:true,
    isBadman:false,
    isBangali:true,
    isIndian:false,
}
console.log(profile)
// -------------- fullName change--------------
profile['fullName']='Hasan ali';
console.log(profile['fullName'])
console.log(typeof profile['fullName'])
// ------------- follower changes --------------
profile['follower']+=50,
console.log(profile['follower'])
console.log(typeof profile['follower'])
// ------------ userName changes ----------------
profile['userName']='Rokib hossin'
console.log(profile['userName'])
console.log(typeof profile['userName'])
// ----------- workPlace changes ---------------
profile['workPlace']='Shift to Google'
console.log(profile['workPlace'])
console.log(typeof profile['workPlace'])
// --------------- address changes ------------
profile['address']='Shift from USA'
console.log(profile['address'])
console.log(typeof profile['address'])