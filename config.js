'use strict';

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  options: {
    port: process.env.PORT || 3000,
    logs: {
      console: process.env.NO_CONSOLE !== 'true',
      consoleJSON: process.env.NODE_ENV === 'production',
      consoleColor: process.env.NODE_ENV !== 'production',
      consoleLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      app: process.env.LOGS === 'true' ? 'app' : false,
      error: process.env.LOGS === 'true' ? 'error' : false,
    },
    session: {
      ttl: 900,
      secret: process.env.SESSION_SECRET,
      cookieName: 'kbridh-app',
    },
    redis: {
      connectionString: process.env.REDIS_TLS_URL || process.env.REDIS_URL,
    },
    views: ['views'],
    translation: {
      fallbackLang: ['en', 'id'],
      allowedLangs: ['en', 'id'],
      cookie: {
        name: 'kbridh-lang',
      },
    },
  },
};
