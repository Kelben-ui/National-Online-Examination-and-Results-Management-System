class NationalSession {
  constructor(sessionName, academicYear, startDate, endDate, status) {
    this.sessionName = sessionName;
    this.academicYear = academicYear;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }

  createSession() {
    console.log(`Creating session: ${this.sessionName} for academic year ${this.academicYear}`);
    return this;
  }

  updateSession(status, endDate) {
    this.status = status;
    this.endDate = endDate;
    console.log(`Updating status for session: ${this.sessionName}`);
  }

  getSessionInfo() {
    return {
      session : this.sessionName,
      academicYear : this.academicYear,
      startDate : this.startDate,
      endDate : this.endDate,
      status : this.status
    };
  }
}

module.exports = NationalSession;
