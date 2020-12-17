module.exports = {
  extends: ['@nice-move/eslint-config-base'],
  overrides: [
    {
      files: '*.jsx',
      extends: [
        'airbnb',
        'airbnb/hooks',
        'prettier/react',
        '@nice-move/eslint-config-base/lib/import.cjs',
        require.resolve('./lib/react.cjs'),
        '@nice-move/eslint-config-base/lib/base.cjs',
        'prettier',
      ],
    },
  ],
};