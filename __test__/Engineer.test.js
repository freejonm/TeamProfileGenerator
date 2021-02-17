const Engineer= require('../lib/engineer');

describe("Engineer class", ()=>{
    it("should return user input for engineers", ()=>{
        const engineer = new engineer('Jon', 123, 'freejonm@gmail.com', 'github')
        expect(engineer.name).toBe('Jon')
        expect(engineer.id).toBe(123);
        expect(engineer.email).toBe("freejonm@gmail.com");
        expect(engineer.github).toBe("github");
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