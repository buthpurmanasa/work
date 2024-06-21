const users = {};

export function registerUser(user) {
  users[user.email] = { ...user, verified: false };
}

export function verifyUser(email) {
  if (users[email]) {
    users[email].verified = true;
    return true;
  }
  return false;
}

export function isUserVerified(email) {
  return users[email]?.verified;
}
