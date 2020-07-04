// You need to complete this controller with the required 7 actions

const reservation = require('../models/reservation');
const User = require('../models/user');

var roomTypes = [
      'Single Bed',
      'Double Bed',
      'Queen',
      'King'
    ];

    exports.create = async (req, res) => {
      try
       {
        console.log(req.session.passport);
        const reservation = await reservation.create({user: user._id, ...req.body});
        req.flash('success', 'reservation created successfully');
        res.redirect(`/reservations/${reservation.id}`);
      }
      catch (error)
       {
        req.flash(`There is an error`);
        res.redirect('/reservations');
      }
    };

    exports.new = (req, res) => {
      res.render(`reservations/new`, {
        pageTitle: 'Reservation test'
      });
    };

exports.index = async (req, res) => {
     try
    {
    const reservations = await Reservation
    res.render(`/reservations/index`, {
      pageTitle: 'Reservations index',
    });
  }
  catch (error)
  {
    req.flash(`There is an error`);
    res.redirect('/reservations');
  }
};


exports.show = async (req, res) => {
      try {
    const reservation = await reservation.findById(req.params.id)
    res.render(`/reservations/show`, {
      pageTitle: reservation.title,
      reservation: reservation
    });
   }
  catch (error)
   {
    req.flash(`There is an error`);
    res.redirect('/reservations');
  }
};

exports.edit = async (req, res) =>
 {
  try {
    const reservation = await reservation.findById(req.params.id);
    res.render(`/reservations/edit`,
      {
      pageTitle: reservation.title,
      formData: reservation
    });
  }
  catch (error)
  {
    req.flash(`There is an error which is: ${error}`);
    res.redirect('/reservations');
  }
};

exports.update = async (req, res) => {
     try {
    let reservation = await reservation.findById(req.body.id);
    const attributes = {user: user._id, ...req.body};
    await reservation.validate(attributes);
    await reservation.findByIdAndUpdate(attributes.id, attributes);
    req.flash('Reservation was successfully updated');
    res.redirect(`/reservations/${req.body.id}`);
       }
  catch (error)
  {
    req.flash(`There is an error which is: ${error}`);
    res.redirect(`/reservations/${req.body.id}/edit`);
  }
};

exports.delete = async(req, res)=> {
  try {
    await reservation.deleteOne({_id: req.body.id});
    req.flash('Successfully deleted the reservation');
    res.redirect(`/reservations`);
      }
  catch (error)
  {
    req.flash(`There is an error which is: ${error}`);
    res.redirect(`/reservations`);
  }
};
