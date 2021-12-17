// const square = function(x){
//     return x*x 
// }

// const square = (x) => {
//     return x * x
//}

// const square = (x) => x*x


const event ={ 
    name: 'Birthday Party',
    guestList: ['androw','jen','mike'],
    printGuest(){
        console.log("guest list for " + this.name)
        this.guestList.forEach(element => {
            console.log(element + ' is attending '+ this.name)
        });
        }
}

event.printGuest()