require("dotenv").config({ path: "../.env" });
const Appointment = require("../Model/Appointment");

exports.createAppointment = (req, res) => {
  const { email, firstName, lastName, date } = JSON.parse(req.body.body);

  // First check database to see if a user exists, before registering one
  Appointment.find({ date }, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Cannot query Appointment Collection. " + err,
      });
    } else {
      // Create appointment
      let newAppointment = new Appointment({
        email,
        firstName,
        lastName,
        date,
      });

      newAppointment
        .save()
        .then(() => {
          res
            .status(201)
            .json({ message: "Appointment registered successfully" });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Cannot register an appointment" + err,
          });
        });

      res.status(200).json({ message: "Created successfully" });
    }
  });
};

// update appointment

exports.updateAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedAppointment = await Appointment.findOneAndUpdate(
      { id: id },
      req.body,
      { new: true }
    );

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointments

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get appointments by id

exports.getAppointmentById = async (req, res) => {
  const id = req.params.id;

  try {
    const appointment = await Appointment.findOne({ id: id });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete appointments

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    await Appointment.findOneAndDelete({ id: id });

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
