class Script {
  constructor(scriptCode, subjectCode, paperNum, isMarked) {
    this.scriptCode = scriptCode;
    this.subjectCode = subjectCode;
    this.paperNum = paperNum;
    this.isMarked = isMarked;
  }

  submitScript() {
    console.log(`Submitting script: ${this.scriptId}`);
  }

  assignForMarking() {
    console.log(`Assigning script ${this.scriptId} for marking`);
  }

  markScript() {
    this.isMarked = true;
    console.log(`Marked script: ${this.scriptId}`);
  }

  getScriptInfo() {
    return {
      scriptCode: this.scriptCode,
      subjectCode: this.subjectCode,
      paperNum: this.paperNum,
      isMarked: this.isMarked
    };
  }
}

module.exports = Script;
