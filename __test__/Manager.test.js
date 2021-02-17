const Manager= require('../lib/manager.js');

describe("manager class", ()=>{
    it("should return user input for managers", ()=>{
        const manager = new Manager('Jon', 123, 'freejonm@gmail.com', 123)
        expect(manager.name).toBe('Jon')
        expect(manager.id).toBe(123);
        expect(manager.email).toBe("freejonm@gmail.com");
        expect(manager.officeNumber).toBe(123);
    })
    test("should return correct value from each method", ()=>{
        const myManager = new Manager("Jon", 123, "freejonm@gmail.com", 123);
        expect(myManager.getName()).toBe(myManager.name);
        expect(myManager.getID()).toBe(myManager.id);
        expect(myManager.getEmail()).toBe(myManager.email);
        expect(myManager.getOfficeNumber()).toBe(myManager.officeNumber); 
    })

}
)