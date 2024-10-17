
// let array=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// let date= new Date();
// let Days= date.getDay();
// console.log(array[Days]);

function tellTime(){
    let date= new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    console.log(hours,minutes,seconds);
}
tellTime()




