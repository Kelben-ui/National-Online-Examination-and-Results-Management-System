const Registration = require("./Registration");

class Candidate {
  constructor(name, school, gender, email, phone) {
    this.name = name;
    this.school = school;
    this.gender = gender;
    this.email = email;
    this.phone = phone;
  }

  getName() {
    return this.name;
  }

  updateContactInfo(email, phone) {
    this.email = email;
    this.phone = phone;
    console.log(`Updated contact info for ${this.getFullName()}`);
  }
  updateInfo(updatedData) {
    Object.assign(this, updatedData);
    console.log(`Updated school information for ${this.schoolName}`);
  }

  register(dateOfBirth,placeOfBirth,paymentStatus,examType) {
    register = new Registration(this.name,dateOfBirth,placeOfBirth,paymentStatus,examType);
    console.log(`Registering candidate: ${this.getFullName()}`);
    return this;
  }

  getResult() {
    
    console.log(`Retrieving results for candidate: ${registrationNumber}`);
  }
}

module.exports = Candidate;
