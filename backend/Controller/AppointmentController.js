require("dotenv").config({ path: "../.env" });
const Appointment = require("../Model/Appointment");

exports.createAppointment = (req, res) => {
  const { email, firstName, lastName, date } = JSON.parse(req.body.body);

  // First check database to see if a user exists, before registering one
  Appointment.find({ email }, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Cannot query User Collection. " + err,
      });
    } else {
      // Create appointment

      res.status(200).json({ message: "Created successfully" });
    }
  });
};
