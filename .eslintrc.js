module.exports = {
  ignorePatterns: ['node_modules', 'public/**/*'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'unused-imports', 'unicorn', 'jsx-a11y'],
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'no-useless-computed-key': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        allowArgumentsExplicitlyTypedAsAny: true
      }
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-pascal-case': 'error',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        allowList: {
          getInitialProps: true,
          getServerSideProps: true,
          getStaticProps: true,
          props: true
        }
      }
    ],
    'unicorn/no-useless-undefined': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/prefer-dom-node-remove': 'off'
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
    'import/resolver': {
      typescript: {}
    }
  }
};
