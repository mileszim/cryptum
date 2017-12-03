module.exports = (env) => {
  return {
    clientAllowedKeys: [
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_STORAGE_BUCKET'
    ],
    path: `./config/.env.${env}`
  };
};
