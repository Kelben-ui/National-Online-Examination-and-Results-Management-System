class Result {
  constructor(totalScore, grade, isPublished) {
    this.totalScore = totalScore;
    this.grade = grade;
    this.isPublished = isPublished;
  }

  calculateTotal() {
    console.log(`Calculating total score for result: ${this.resultId}`);
    return this.totalScore;
  }

  publishResults() {
    this.isPublished = true;
    console.log(`Results published for result ID: ${this.resultId}`);
  }

  getGrade() {
    return this.grade;
  }

  updateGrade(newGrade) {
    this.grade = newGrade;
    console.log(`Updated grade to ${newGrade} for result: ${this.resultId}`);
  }

  getResultSummary() {
    return {
      resultId: this.resultId,
      totalScore: this.totalScore,
      averageScore: this.averageScore,
      grade: this.grade,
      isPublished: this.isPublished
    };
  }
}

module.exports = Result;
