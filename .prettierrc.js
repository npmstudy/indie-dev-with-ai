export default {
  plugins: ['prettier-plugin-astro'],
  semi:false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
