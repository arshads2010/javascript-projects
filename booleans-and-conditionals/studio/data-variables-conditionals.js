console.log("All systems are a go! Initiating space shuttle launch sequence. ")
// Initialize Variables below
let data = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = 'ready'
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = 100
let weatherStatus = 'clear'
let fuelMassKg = 760000
let shuttleMass = 74842.31
let totalMass = shuttleMass + fuelMassKg + crewMassKg
let preparedForLiftOff = true  

console.log("Data:" + data)
console.log("Time:" + time)
console.log("Astronaut Count:" + astronautCount)
console.log("Crew Mass:" + crewMassKg + 'kg')
console.log("Fuel Mass:" + fuelMassKg + "kg")
console.log("Shuttle Mass:" + shuttleMass + "kg")
console.log("Total Mass:" + totalMass + "kg")
console.log("Fuel Temperature:" + fuelTempCelsius + "Celcius")
console.log("Weather Status:" + weatherStatus)
let astronautCountReady = false;

let preparedForLiftOffReady = false;

let crewMassKgReady = false;

let fuelTempCelsiusReady = false;

let fuelLevelReady = false;

let weatherStatusReady = false;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
    astronautCountReady = true;
}

// add logic below to verify all astronauts are ready

if(astronautStatus == 'ready'){
    preparedForLiftOffReady = true;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (crewMassKg <= maximumMassLimit){
    crewMassKgReady = true;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp <= maximumFuelTemp){
    fuelTempCelsiusReady = true;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel == 100){
    fuelLevelReady = true;
}
// add logic below to verify the weather status is clear
if (weatherStatus == 'clear'){
    weatherStatusReady = true;
}
// Verify shuttle launch can proceed based on above conditions
if(astronautCountReady && preparedForLiftOffReady && preparedForLiftOffReady && crewMassKgReady && fuelLevelReady && weatherStatusReady){
    console.log(" Have a safe flight astronauts");
}else{
    console.log("Abort");
}
