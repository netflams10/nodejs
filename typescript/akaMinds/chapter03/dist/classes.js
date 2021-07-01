"use strict";
class Department {
    // readonly only exist not to write this property afterwards
    constructor(id, n) {
        this.id = id;
        this.n = n;
        // private name: string;
        // string array
        this.employees = [];
        // this.name = n;
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    //     // console.log('Department: ' + this.name);
    //     console.log(`Department (${this.id}): $({this.name})`);
    // }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // close to property you want to get
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass in a valid value!");
        this.addReport(value);
    }
    describe() {
        console.log("Hello World");
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
/*
// constructor is called
const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();
*/
// const accountingCopy = {name: "DUMMY", describe: accounting.describe};
// accountingCopy.describe();
// Access Modifiers...
// Avoid somrthing like this
// accounting.employees[2] = "Manuel";
/*
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
*/
// ReadOnly Modifiers
// inheritance
const it = new ITDepartment('d1', ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
// it.name = "NEW NAME";
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printReports();
accounting.printEmployeeInformation();
// static Methods
const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log(Department.fiscalYear);
// Abstract class
// Whenever you want to ensure a certain method is available in all class bassed on based class
// 
