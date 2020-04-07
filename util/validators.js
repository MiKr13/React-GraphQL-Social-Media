module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};

  if (username.trim() === '') {
    errors.username = 'Username should not be empty';
  }

  if (email.trim() === '') {
    errors.email = 'Email should not be empty';
  } else {
    const validator = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(validator)) {
      errors.email = 'Email should be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password should not empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords should match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};

  if (username.trim() === '') {
    errors.username = 'Username should not be empty';
  }

  if (password.trim() === '') {
    errors.password = 'Password should not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
