const app = require('./app');
const PORT = process.env.PORT || 0;

const server = app.listen(PORT, () => {
    console.log(`Server running on ${server.address().port}`)
});