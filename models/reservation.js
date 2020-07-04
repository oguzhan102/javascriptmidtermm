// You need to define the schema for a reservation
// The fields you require are:
// associated user
// numOfOccupants (number of occupants)
// roomType (options are 'single bed', 'double bed', 'queen', 'king')
// checkIn (just date, not time)
// checkOut (just date, not time)


const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const user = require('../models/user');
const reservationcontrollerisa = require('../controllers/ReservationsController');

const ReservationSchema = new mongoose.Schema({
  associatedUser: {
    type: String,
    required: true
  },
  numOfOccupants: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  checkIn: {
    type: String,
  },
  checkOut: {
    type: String,
  }
});



module.exports = mongoose.model('Reservation', ReservationSchema);
