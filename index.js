// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array){
    return array.slice(Math.max(array.length - 2,1));
};

function createFareMultiplier(multiplier){
    return function(fare){return fare * multiplier}; 
};

const fareDoubler = function(fare){
    return fare * 2;
};

const fareTripler = function(fare){
    return fare * 3;
};

function selectDifferentDrivers(driverArray, func){
    if(func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(driverArray);
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(driverArray);
    }
};



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

