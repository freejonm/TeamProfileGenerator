const Engineer= require('../lib/engineer.js');

describe("Engineer class", ()=>{
    it("should return user input for engineers", ()=>{
        const myEngineer = new Engineer('Jon', 123, 'freejonm@gmail.com', 'github')
        expect(myEngineer.name).toBe('Jon')
        expect(myEngineer.id).toBe(123);
        expect(myEngineer.email).toBe("freejonm@gmail.com");
        expect(myEngineer.github).toBe("github");
    })
    test("should return correctl value from each method", ()=>{
        const myEngineer = new Engineer ("Jon", 123, "freejonm@gmail.com", 'github');
        expect(myEngineer.getName()).toBe(myEngineer.name);
        expect(myEngineer.getID()).toBe(myEngineer.id);
        expect(myEngineer.getEmail()).toBe(myEngineer.email);
        expect(myEngineer.getGithub()).toBe(myEngineer.github);
    })

}
)