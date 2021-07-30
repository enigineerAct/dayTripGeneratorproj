function pickDestination (){
    let destinations = ["china", "new zealand", "california", "germany", "poland"]
    let number = Math.floor(Math.random() *5);
    return destinations[number]
}
let result = pickDestination()
console.log(result)

function pickARestaurant(){
    let restaurant = ["street vendor", "sushinado", "olive garden", "home cooked", "local eatery"]
    number = Math.floor(Math.random() *5);
    return restaurant[number]
}
let rPick = pickARestaurant()
console.log(rPick)

function pickTransportation(){
    let transportation = ["car", "bus", "tuk tuk", "helicopter", "rickshaw"]
    number = Math.floor(Math.random() *5)
    return transportation[number]
}
let trans = pickTransportation()
console.log(trans)

function fineEveningEntertainment(){
    let entertainment = ["dinner show", "street performers", "theater", "hike", "netflix and chill"]
    number = Math.floor(Math.random() *5)
    return entertainment[number]
}
let shows = fineEveningEntertainment()
console.log(shows)