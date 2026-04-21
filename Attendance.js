class Attendance {
  constructor(subject, paperNum, checkInTime) {
    this.paperNum = paperNum;
    this.subject = subject;
    this.checkInTime = checkInTime;
  }

  markPresent(CandidateNumber) {
    this.status = 'present';
    console.log(`Candidate marked present at ${this.checkInTime}`);
  }

  markAbsent(CandidateNumber) {
    this.status = 'absent';
    console.log(`Candidate marked absent`);
  }

  generateReport(examCenter) {
    console.log(`Generating attendance report for ID: ${this.attendanceId}`);
    return {
      attendanceId: this.attendanceId,
      checkInTime: this.checkInTime
    };
  }
}

module.exports = Attendance;
