class Employee  {
      constructor (role, emplyeeName, role='employee', id, email) {
            this.role = role;
            this.employeeName = employeeName;
            this.role = role;
            this.id = id;
            this.email = email;
      }
      getRole() {
            return this.role;
      }
      getName() {
            return this.employeeName;
      }
      getId() {
            return this.id;
      }
      getEmail() {
            return this.email;
      }
}
