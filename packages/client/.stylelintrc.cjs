module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order-fix',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'import-notation': 'string',
    "selector-class-pattern": "^([a-z]*)(-[a-z]+)?(__[a-z]+)?(-[a-z]+)?(_[a-z]+)?(-[a-z]+)?$",
  },
};
