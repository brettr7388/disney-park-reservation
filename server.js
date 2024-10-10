const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Disney Park Reservation System');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Reservation model
const Reservation = mongoose.model('Reservation', new mongoose.Schema({
  user: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: Date, required: true },
  guests: { type: Number, required: true }
}));

// POST route to create a reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to fetch all reservations (with search and filter functionality)
app.get('/api/reservations', async (req, res) => {
  const { user, event, startDate, endDate } = req.query;
  let query = {};

  if (user) query.user = user;
  if (event) query.event = event;
  if (startDate && endDate) {
    query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }

  try {
    const reservations = await Reservation.find(query);
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT route to update a reservation by ID
app.put('/api/reservations/:id', async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE route to delete a reservation by ID
app.delete('/api/reservations/:id', async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Reservation deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
