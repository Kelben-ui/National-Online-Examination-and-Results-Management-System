class MalpracticeReport {
  constructor(reportId, incidentType, description, actionTaken) {
    this.reportId = reportId;
    this.incidentType = incidentType;
    this.description = description;
    this.actionTaken = actionTaken;
  }

  fileReport() {
    console.log(`Filing malpractice report: ${this.reportId}`);
    console.log(`Incident Type: ${this.incidentType}`);
  }

  appsMtuly() {
    console.log(`Applying rule for malpractice report: ${this.reportId}`);
  }

  getReportDetails() {
    return {
      reportId: this.reportId,
      incidentType: this.incidentType,
      description: this.description,
      actionTaken: this.actionTaken
    };
  }

  updateActionTaken(action) {
    this.actionTaken = action;
    console.log(`Updated action taken for report ${this.reportId} to: ${action}`);
  }
}

module.exports = MalpracticeReport;
