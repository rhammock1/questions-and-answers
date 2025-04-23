require('dotenv').config();
const express = require('express');
const uuid = require('crypto').randomUUID;
const cookieParser = require('cookie-parser');

const router = require('./router');

const {NODE_ENV, PORT = 8080} = process.env;
const app = express();
app.use(cookieParser());

const IS_PRODUCTION = NODE_ENV === 'production';

app.use((req, res, next) => {
  if(!req.cookies.user_uuid) {
    const user_uuid = uuid();
    res.cookie('user_uuid', user_uuid, {
      httpOnly: true,
      secure: IS_PRODUCTION,
      sameSite: 'Lax',
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });
    req.user_uuid = user_uuid;
  } else {
    req.user_uuid = req.cookies.user_uuid;
  }
  next();
});

app.use(express.json());
app.use(router.router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`));

