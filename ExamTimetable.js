class ExamTimetable {
  constructor(session) {
    this.session = session;
  }

  scheduleExam(subject, paperNum, examDate, startTime, endTime, duration) {
    this.subject = subject;
    this.paperNum = paperNum;
    this.examDate = examDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = duration;

    console.log(`Scheduling exam on ${this.examDate} from ${this.startTime} to ${this.endTime}`);
  }

  notifyCandidates() {
    console.log(`Notifying candidates about exam on ${this.examDate}`);
  }

  rescheduleExam(subject, paperNum, newDate, newStartTime, newEndTime) {
    this.examDate = newDate;
    this.subject = subject;
    this.paperNum = paperNum;
    this.startTime = newStartTime;
    this.endTime = newEndTime;
    console.log(`Exam rescheduled to ${newDate} from ${newStartTime} to ${newEndTime}`);
  }

  getSchedules() {
    return schedule;
  }

  getExamTimetable() {
    return {
      examSession: this.session.sessionName,
      academicYear: this.session.academicYear,
      startDate: this.session.startDate,
      endDate: this.session.endDate,
      schedules: this.getSchedules()
    };
  }
}

module.exports = ExamTimetable;
