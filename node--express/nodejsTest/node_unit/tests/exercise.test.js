const exercise = require('../src/exercise');





describe('FizzBuzz', () => {
    it('should Throw new Error', () => {
        const args = [null, undefined, {}]
        args.forEach(arg => { 
            expect(() => { exercise.fizzBuzz(arg) }).toThrow()
        })
    })

    it('should return FizzBuzz if divisible by 3 and 5', () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe("FizzBuzz")
    })

    it('should return Fizz if divisible by 3', () => {
        const result = exercise.fizzBuzz(9);
        expect(result).toBe("Fizz")
    })

    it('should return Buzz if divisible by 5', () => {
        const result = exercise.fizzBuzz(10);
        expect(result).toBe("Buzz")
    })

    it('should return input if not divisible by 3 or 5', () => {
        const result = exercise.fizzBuzz(7)
        expect(result).toBe(7)
    })
})