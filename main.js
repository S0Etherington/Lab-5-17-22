const floor = (diameter) => {
    var radius = diameter/2
    var floorArea = Math.PI * (radius * radius)

    return floorArea
}

const walls = (diameter, height) => {
    var radius = diameter/2
    var wallArea = circumference * height
    var circumference = 2 * Math.PI * radius

    return wallArea
}

const materials = () => {
    var d = 8
    var h = 10
    var carpetNeeded = floor(d)
    var paintNeeded = walls(d, h)

    console.log(carpetNeeded, paintNeeded)
}