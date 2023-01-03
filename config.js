module.exports = {
  port: process.env.PORT,
  db: {
    prod: process.env.DATABASE_URL,
    test: 'mongodb://localhost/stackoverflow-test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: '7d'
  }
};
