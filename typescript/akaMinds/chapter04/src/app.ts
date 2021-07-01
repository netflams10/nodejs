




// Intersection types
// Can be used with any types...

type  Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: string,
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    priviledges: ["create-server"],
    startDate: new Date()
}

// Union type
type Combineable = string | number;
type Numberic = number | boolean;

type Universal = Combineable & Numberic;

// Type Guard helps with Union Types
function add (a: Combineable, b: Combineable) {
    if (typeof a === 'string' || typeof b === "string") {
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee) {
    console.log("Name " + emp.name);
    // 'priviledges' in emp means if exists in object...
    if ('priviledges' in emp) {
        console.log("Priviledges" + emp.priviledges)
    }
    if ("startDate" in emp) {
        console.log("StartDate" + emp.startDate)
    }
}

printEmployeeInformation(e1);

class Car {
    drive () {
        console.log("Driving a truck");
    }
}

class Truck {
    drive () {
        console.log("Driving a truck...");
    }

    loadCargo (amount: number) {
        console.log("Loading Cargo..." + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehicle (vehicle: Vehicle) {
    vehicle.drive
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);