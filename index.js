// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance >= 43) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) / 50;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}