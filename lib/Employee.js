class Employee  {
      constructor (name, id, email, role='Employee') {
            this.role = role;
            this.name = name;
            this.id = id;
            this.email = email;
      }
      getRole() {
            return this.role;
      }
      getName() {
            return this.name;
      }
      getId() {
            return this.id;
      }
      getEmail() {
            return this.email;
      }
}

let testEmployee = new Employee ('testName', 123, "testEmail");
console.log(testEmployee);

module.exports = Employee
