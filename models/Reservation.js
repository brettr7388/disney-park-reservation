const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: { type: String, required: true },
  event: { type: String, required: true },
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
