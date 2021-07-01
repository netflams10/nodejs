






abstract class  Department {
    // private name: string;
    // string array
    protected employees: string[] = []
    static fiscalYear = 2020;

    // readonly only exist not to write this property afterwards
    constructor (private readonly id: string, public n: string) {
        // this.name = n;
        console.log(Department.fiscalYear);
    }

    static createEmployee (name: string) {
        return {name: name};
    }

    abstract describe (this: Department): void | string;
    //     // console.log('Department: ' + this.name);
    //     console.log(`Department (${this.id}): $({this.name})`);
    // }

    addEmployee (employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    public admins: string[];
    constructor (id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }

    describe () {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    // close to property you want to get
    get mostRecentReport () {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }

    set mostRecentReport (value: string) {
        if (!value) throw new Error("Please pass in a valid value!");
        this.addReport(value);
    }

    constructor (id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe () {
        console.log("Hello World");
    }

    addEmployee (name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    addReport (text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports () {
        console.log(this.reports)
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
accounting.printEmployeeInformation()

// static Methods

const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log(Department.fiscalYear);

// Abstract class
// Whenever you want to ensure a certain method is available in all class bassed on based class
// 