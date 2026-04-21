class Subject {
  constructor(subjectName, subjectCode) {
    this.subjectName = subjectName;
    this.subjectCode = subjectCode;
  }

  updatePercentage(paperNum, newPercentage) {
    this.paperNum = paperNum;
    this.Percentage = newPercentage;
    console.log(`Updated percentage for ${this.subjectName} ${this.paperNum}to ${newPercentage}`);
  }
  deleteSubject() {
    
  }
  createPaper(paperNum, percentage) {
    this.paperNum = paperNum;
    this.percentage = percentage;
    this.count++;
  }

  getPaperInfo(paperNum) {
    return {
      name: this.subjectName,
      code: this.subjectCode,
      paperNum: paperNum,
      percentage: percentage
    }
  }

  getSubjectInfo() {
    return {
      name: this.subjectName,
      code: this.subjectCode,
      numOfPapers: this.count
    };
  }
}

module.exports = Subject;
