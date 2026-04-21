class Registration {
  constructor(name, dateOfBirth, placeOfBirth, paymentStatus, examType) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.placeOfBirth = placeOfBirth;
    this.paymentStatus = paymentStatus;
    this.examType = examType;
  }

  generateCandidateNumber() {
    console.log(`Generating exam number for registration: ${this.registrationId}`);
    return CandidateNumber;
  }

  confirmRegistration() {
    console.log(`Confirming registration: ${this.registrationId}`);
    return this;
  }
  registerSubject(subjectCode, subjectTitle) {
    this.subjectCode = subjectCode;
    this.subjectTitle = subjectTitle;
  }

  updateRegistration() {
    
  }

  getRegistrationStatus() {
    return {
      registrationDate: registrationDate,
      paymentStatus: this.paymentStatus,
      examType: this.examType
    };
  }
}

module.exports = Registration;
