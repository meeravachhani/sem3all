const express = require('express');
const app = express();
const sequelize = require('./config'); // Sequelize instance
const songRoutes = require('./routes/songRoutes');

app.use(express.json());

app.use('/songs', songRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    app.listen(3000, () => console.log('Server started on port 3000'));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
