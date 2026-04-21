class Mark {
  constructor(rawScore, scaledScore, markingDate, remarks) {
    this.rawScore = rawScore;
    this.scaledScore = scaledScore;
    this.markingDate = markingDate;
    this.remarks = remarks;
  }

  validateScore() {
    if (this.rawScore >= 0 && this.scaledScore >= 0) {
      console.log(`Score validated for mark ID: ${this.markId}`);
      return true;
    }
    console.log(`Invalid scores for mark ID: ${this.markId}`);
    return false;
  }

  recordMark() {
    console.log(`Recording mark: ${this.markId} with raw score: ${this.rawScore}`);
  }

  updateMark(newRawScore, newScaledScore) {
    this.rawScore = newRawScore;
    this.scaledScore = newScaledScore;
    this.markingDate = new Date();
    console.log(`Updated mark ${this.markId}`);
  }

  getMarkDetails() {
    return {
      rawScore: this.rawScore,
      scaledScore: this.scaledScore,
      markingDate: this.markingDate,
      remarks: this.remarks
    };
  }
}

module.exports = Mark;
