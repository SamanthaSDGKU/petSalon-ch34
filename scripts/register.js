//object literal
let petSalon = {
    name:"The Fashion Pet",
    phone:"555-555-555",
    address:{
        street:"University",
        number:"7250",
        zip:"11176"
    },
    hours:{
        open: "9:00 am",
        close: "5:00 pm"
    },
    pets:[
        { // anonymous object
           name:"Scooby",
           age:50,
           gender:"Male",
           breed:"Dane",
           service:"Grooming",
           owner:"Shaggy",
           contactPhone:"555-555-5555" 
        },
        {

        }
    ] 
}
function displayInfo(){
}
function init(){
    console.log(petSalon.pets[0].name);

}
window.onload = init;
