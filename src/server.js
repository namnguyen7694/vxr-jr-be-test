const app = require('./app');
const { port } = require('./config');

app.listen(port, () => {
  console.log(`Ticket service listening on port ${port}`);
});
