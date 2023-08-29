const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ipcRoutes = require('./routes/api/ipcCodes'); // Import your IPC routes

const app = express();
const PORT = process.env.PORT || 5960;

// MongoDB connection
mongoose.connect("your mongodb url here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "", // your MongoDB Atlas username
  pass: "" // your MongoDB Atlas password
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

// Use your IPC routes
app.use('/api/ipc', ipcRoutes);

// Define the root route handler after your API routes
app.get('/', (req, res) => {
  res.send("Hello, IPC Code Manager!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
