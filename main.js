const floor = (diameter) => {
    var radius = diameter/2
    var floorArea = Math.PI * (radius * radius)

    return floorArea
}

const walls = (diameter, height) => {
    var radius = diameter/2
    var circumference = 2 * Math.PI * radius
    var wallArea = circumference * height

    return wallArea
}

const materials = () => {
    var d = document.getElementById("across").value
    var h = document.getElementById("height").value
    var carpetNeeded = Math.ceil(floor(d))
    var paintNeeded = Math.ceil(walls(d, h))

    console.log('Carpet needed is ' + carpetNeeded +' sqft')
    console.log('Paint needed is ' + paintNeeded + ' sqft')
}