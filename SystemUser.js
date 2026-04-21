class SystemUser {
  constructor(userId, username, passwordHash, email, role, isActive) {
    this.userId = userId;
    this.username = username;
    this.passwordHash = passwordHash;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
  }

  login() {
    console.log(`User ${this.username} attempting to login`);
  }

  logout() {
    console.log(`User ${this.username} logged out`);
  }

  changePassword(newPasswordHash) {
    this.passwordHash = newPasswordHash;
    console.log(`Password changed for user: ${this.username}`);
  }

  updateUserInfo(email, role) {
    this.email = email;
    this.role = role;
    console.log(`Updated user information for ${this.username}`);
  }

  getUserInfo() {
    return {
      userId: this.userId,
      username: this.username,
      email: this.email,
      role: this.role,
      isActive: this.isActive
    };
  }

  deactivateUser() {
    this.isActive = false;
    console.log(`User ${this.username} has been deactivated`);
  }
}

module.exports = SystemUser;
