class ExamCenter {
  constructor(centerName, region, town, capacity) {
    this.centerName = centerName;
    this.region = region;
    this.town = town;
    this.capacity = capacity;
  }

  getCapacity() {
    return this.capacity;
  }

  generateCenterNumber() {
    return CenterNumber;
  }
  updateCapacity(newCapacity) {
    this.capacity = newCapacity;
    console.log(`Updated capacity for ${this.centerName} to ${newCapacity}`);
  }
  updateCenterName(name) {
    this.centerName = name;
  }
}

module.exports = ExamCenter;
