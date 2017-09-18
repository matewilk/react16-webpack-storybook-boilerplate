module.exports = (app) => {
    app.use('/api/login', require('./routes/login'));
};
