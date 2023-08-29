require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ipcRoutes = require('./routes/api/ipcCodes');


const app = express();
const PORT = process.env.PORT || 2115;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use('/api/ipc', ipcRoutes);


app.get('/', (req, res) => {
  res.send("Hello, IPC Code Manager!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
