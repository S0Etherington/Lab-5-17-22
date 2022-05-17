// functions to calculate the paint and carpet needed for a circular room of any given dimensions

// const floor = (diameter) => {
//     var radius = diameter/2
//     var floorArea = Math.PI * (radius * radius)

//     return floorArea
// }

// const walls = (diameter, height) => {
//     var radius = diameter/2
//     var circumference = 2 * Math.PI * radius
//     var wallArea = circumference * height

//     return wallArea
// }

// const materials = () => {
//     var d = document.getElementById("across").value
//     var h = document.getElementById("height").value
//     var carpetNeeded = Math.ceil(floor(d))
//     var paintNeeded = Math.ceil(walls(d, h))

//     console.log('Carpet needed is ' + carpetNeeded +' sqft')
//     console.log('Paint needed is ' + paintNeeded + ' sqft')
// }


// let i = 1
// while (i<=100) {
//     i = i + 2
//     console.log(i)
//     i = i - 1
//     console.log(i)
// }

// for(let i = 100; i >= 1; i = i - 5){
//     console.log(i)
// }


// Loop practice

// const showStuff = (elem) => {
//     const elementId = document.getElementById(elem)

//     for(let i = 0; i < elementId.length; i++){
//         if (elementId[i].selected === true){
//             var x = elementId[i].text
//         }
//     }
//     return x
// }

// const showMore = (el) => {
//     var elementId = document.getElementsByName(el)
//     var myCheck = ''
//     for(let i = 0; i < elementId.length; i++){
//         // console.log(elementId[i].checked)
//         // console.log(elementId[i].value)
//         if(elementId[i].checked === true){
//             myCheck += elementId[i].value + ', '
//         }
//     }
//     return(myCheck)
// }


// const evaluatePage = () => {
//     var feedbackState = showStuff('state')
//     var feedbackHome = showStuff('home')
//     var feedbackLight = showMore('bulb')
//     document.getElementById('output').innerHTML = feedbackState +'<br>'+ feedbackHome + '<br>' + feedbackLight
// }


const myFunction = () => {
    var elem = document.getElementById("chooseMe")
    var fortuneNum = elem.options[elem.selectedIndex].value
    var fortuneMessage
    console.log(fortuneMessage)

    switch (Number(fortuneNum)) {
        case 1:
        case 6:
            fortuneMessage = "You will inherit a fortune"
            break
        case 2:
        case 7:
            fortuneMessage = "You will win nothing"
            break
        case 3:
            fortuneMessage = "You will become sad"
            break
        case 4:
        case 8:
            fortuneMessage = "Aliens will arive for you shortly"
            break
        
        default:
            fortuneMessage = "Nothing is real"
    }

    document.getElementById('feedback').innerHTML = fortuneMessage
}