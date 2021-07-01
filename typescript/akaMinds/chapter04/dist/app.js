"use strict";
// Intersection types
// Can be used with any types...
const e1 = {
    name: "Max",
    priviledges: ["create-server"],
    startDate: new Date()
};
// Type Guard helps with Union Types
function add(a, b) {
    if (typeof a === 'string' || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name " + emp.name);
    // 'priviledges' in emp means if exists in object...
    if ('priviledges' in emp) {
        console.log("Priviledges" + emp.priviledges);
    }
    if ("startDate" in emp) {
        console.log("StartDate" + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Driving a truck");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const v1 = new Car;
const v2 = new Truck;
function useVehicle(vehicle) {
    vehicle.drive;
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
