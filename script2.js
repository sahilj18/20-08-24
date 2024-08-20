const menu ={
    periperiburger: "$10",
    hotburger:"$6",
}
// const keys = Object.keys (menu);
// for ( let i=0 ;i < keys.length;i++){
//     const key = keys [i];
//     const str = " the price of ${key} is ${value}";
//     console.log(menu[key]);

    
// }
for  (let key in menu){
    const value = menu [key];
    console.log(`The price of ${key} is ${value+2}`);
    

}