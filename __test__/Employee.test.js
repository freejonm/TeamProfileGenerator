const Employee = require('../lib/employee');

describe("Employee class", ()=>{
    it("should return user input for employees", ()=>{
        const employee = new Employee('Jon', 123, 'freejonm@gmail.com')
        expect(employee.name).toBe('Jon')
        expect(employee.id).toBe(123);
        expect(employee.email).toBe("freejonm@gmail.com");
    })
    test("should return correctl value from each method", ()=>{
        const myEmployee = new Employee ("Jon", 123, "freejonm@gmail.com");
        expect(myEmployee.getName()).toBe(myEmployee.name);
        expect(myEmployee.getID()).toBe(myEmployee.id);
        expect(myEmployee.getEmail()).toBe(myEmployee.email);
    })

}
)
