class School {
  constructor(schoolName, region, town, schoolType) {
    this.schoolName = schoolName;
    this.region = region;
    this.town = town;
    this.schoolType = schoolType;
  }

  registerCandidates(name, dateOfBirth, gender, email, phone) {
    candidate = new Candidate (name, this.schoolName, dateOfBirth, gender, email, phone);
    console.log(`Registering candidate for school: ${this.schoolName}`);
  }

  getSchoolResults(){
    return;
  }
  getInfo() {
    return {
      id: schoolId,
      name: this.schoolName,
      region: this.region,
      town: this.town,
      type: this.schoolType
    };
  }

  updateInfo(updatedData) {
    Object.assign(this, updatedData);
    console.log(`Updated school information for ${this.schoolName}`);
  }
}

module.exports = School;
