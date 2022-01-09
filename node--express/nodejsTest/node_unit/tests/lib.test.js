const lib = require('../src/lib');
const db = require('../src/db');
const mail = require("../src/mail");

/**
 * 
 * number of given test for a given function 
 * should be greater than or equal to number of execution path...
 * 
 * tests are First clas citizens in your code
 * 
 */


// test('Our first amazing test', () => {
//     throw new Error("Something failed");
// });

/**
 * 
 * describe - used to grouping a bunch of related test
 * you can replace test() with it()
 * 
 * Watch for all flags
 * package.json {"test": "jest --watchAll"}
 * 
 */

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
    
        // matcher function for test against result...
        expect(result).toBe(1);
    })
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(1);
    
        // matcher function for test against result...
        expect(result).toBe(1);
    })
    
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
    
        // matcher function for test against result...
        expect(result).toBe(0);
    })
});

describe('greet',() => {
    it('should return the greeting message', () => {
        const result = lib.greet("Mosh")

        // when testing string - test should neither be to specific or to general
        // expect(result).toBe("Welcome Mosh");
        // Using match functions
        expect(result).toMatch(/Mosh/);
        expect(result).toContain("Mosh");
    })
});

describe('getCurrencies',() => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        // General ways -->> Bad most times
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        // To specific tests -- what if we change our sorting algorithm
        expect(result[0]).toBe("USD");
        expect(result[1]).toBe("AUD");
        expect(result[2]).toBe("EUR");
        expect(result.length).toBe(3);

        // Proper way to check -- Is the existence of an element in the array
        expect(result).toContain("USD")
        expect(result).toContain("EUR")
        expect(result).toContain("AUD")

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
    })
})

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1)

        // check for object equality
        expect(result).toEqual({ id: 1, price: 10 });
        // Wont fail as long as this property are present in the object
        expect(result).toMatchObject({ id: 1, price: 10 })
        expect(result).toHaveProperty('id', 1);
    })
});

describe('registerUser', () => {
    it('should return false when username is not given', () => {
        /**
         * false in js [false, null, NaN, "", undefined, 0]
         */
        // using multiple data to test this
        const args = [NaN, undefined, null, "", 0, false];
        args.forEach(arg => {
            // when it comes to testing exceptions take a different approach...
            expect(() => { lib.registerUser(arg) }).toThrow();
        })  
    });

    it('should return username if a valid username is passed', () => {
        const result = lib.registerUser("Mosh")

        expect(result).toMatchObject({ username: "Mosh" });
        expect(result.id).toBeGreaterThan(0);
    })
})

describe('applyDiscount', () => {
    it('should return 10% discount if points is higher than 10', () => {
        // Replacing a function in js is easy
        // called a mock function
        db.getCustomerSync = function (customerId) {
            console.log("Faker reading data from database")
            return { id: customerId, points: 20 }
        }

        const order = { customerId: 1, totalPrice: 10 }
        lib.applyDiscount(order)
        expect(order.totalPrice).toBe(9)
    })
})

describe('notifyCustomer', () => {
    it('should send an email to the customer or true', () => {
        db.getCustomerSync = function (customerId) {
            return {email: "ope@gmail.com"}
        }

        let mailSent = false
        mail.send = function (email, message) {
            mailSent = true
        }
        lib.notifyCustomer({customerId: 1});
        expect(mailSent).toBe(true)
    })
})