function VehicleConstructor (name, type, wheels, passengers){
    var vehicle = {};

    vehicle._name = name;
    vehicle.type = type;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.addPassengers = function(){
        this.passengers++
    }
    vehicle.makeNoise = function(){
        console.log("Honk, Honk!")
    }
    return vehicle;
}

sedan = VehicleConstructor("Rolls", "Luxury Sedan", 4, 1);
console.log(sedan);
sedan.makeNoise = function(){
    console.log("Honk, Honk!")
}
sedan.makeNoise();

bike = VehicleConstructor("10 Speed", "Multi-geared Bicycle", 2, 1);
bike.makeNoise = function(){
    console.log("Ring, Ring")
}
console.log(bike);
bike.makeNoise();
bus = VehicleConstructor("Metro Bus", "Multi-Passenger transport Vehicle", 10, 1);
bus.pickUp = function(count){
    this.passengers+=count;
}
console.log(bus);
bus.pickUp(3);
console.log(bus.passengers);