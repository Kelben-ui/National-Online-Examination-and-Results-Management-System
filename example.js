// Example usage of the classes

const NationalSession = require('./NationalSession');
const ExamCenter = require('./ExamCenter');
const School = require('./School');
const Candidate = require('./Candidate');
const Subject = require('./Subject');
const ExamTimetable = require('./ExamTimetable');
const Registration = require('./Registration');
const Attendance = require('./Attendance');
const Mark = require('./Mark');
const Result = require('./Result');
const Script = require('./Script');
const SystemUser = require('./SystemUser');

// Create instances and test functionality
const session = new NationalSession('SES001', '2024/2025', '2024-01-15', '2024-12-20');
session.createSession();

const center = new ExamCenter('CEN001', 'Central Exam Center', 'Region A', 'City X', 500);
center.updateCapacity(550);

const school = new School('SCH001', 'Saint Paul School', 'Region A', 'City X', 'Private');
console.log(school.getInfo());

const candidate = new Candidate('CAN001', 'John', 'Doe', 'REG001', 'Male', 'john@email.com', '1234567890');
console.log(`Candidate: ${candidate.getFullName()}`);

const subject = new Subject('SUB001', 'Mathematics', 'MATH', 3);
console.log(subject.getSubjectInfo());

const timetable = new ExamTimetable('TIM001', '2024-03-15', '09:00', '12:00', '3 hours');
timetable.scheduleExam();

const registration = new Registration('REG001', '2024-01-10', 'pending', 'EXM123456');
registration.processPayment();
console.log(registration.getRegistrationStatus());

const attendance = new Attendance('ATT001', 'present', '09:05');
attendance.markPresent();

const mark = new Mark('MRK001', 85, 85, '2024-03-20', 'Good performance');
mark.recordMark();

const result = new Result('RES001', 280, 70, 'B', false);
result.publishResults();

const script = new Script('SCR001', 'SCRIPT001', 'Written', false);
script.submitScript();

const user = new SystemUser('USR001', 'admin', 'hashedpassword123', 'admin@exam.com', 'Administrator', true);
user.login();

console.log('\n✅ All classes initialized successfully!');
