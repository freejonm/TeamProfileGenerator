const Intern= require('../lib/intern.js');

describe("intern class", ()=>{
    it("should return user input for Interns", ()=>{
        const intern = new Intern('Jon', 123, 'freejonm@gmail.com', 'school')
        expect(intern.name).toBe('Jon')
        expect(intern.id).toBe(123);
        expect(intern.email).toBe("freejonm@gmail.com");
        expect(intern.school).toBe("school");
    })
    test("should return correct value from each method", ()=>{
        const myIntern = new Intern ("Jon", 123, "freejonm@gmail.com", 'school');
        expect(myIntern.getName()).toBe(myIntern.name);
        expect(myIntern.getID()).toBe(myIntern.id);
        expect(myIntern.getEmail()).toBe(myIntern.email);
        expect(myIntern.getSchool()).toBe(myIntern.school); 
    })

}
)