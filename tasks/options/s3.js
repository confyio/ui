module.exports = {
  all: {
    options: {
      bucket: 'confy',
      access: 'public-read',
      headers: {
        "Cache-Control": "max-age=630720000, public",
        "Expires": new Date(Date.now() + 63072000000).toUTCString()
      },
      region: 'us-east-1',
      maxOperations: 1
    },
    upload: [
      {
        src: 'dist/*',
        dest: '/'
      },
      {
        src: 'dist/assets/*',
        dest: '/assets'
      },
      {
        src: 'dist/assets/fonts/*',
        dest: '/assets/fonts'
      },
      {
        src: 'dist/assets/images/*',
        dest: '/assets/images'
      }
    ]
  }
};
