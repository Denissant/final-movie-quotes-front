export const validationRules = {
  password: {
    required: 'password_required',
    minLength: {
      value: 8,
      message: 'password_length',
    },
    maxLength: {
      value: 15,
      message: 'max_length_16',
    },
    pattern: {
      value: /^[a-z0-9_\-]+$/,
      message: 'password_only_lowercase',
    },
  },
  password_confirmation: {
    required: 'password_confirmation_required',
    validate: () => {},
  },
};
