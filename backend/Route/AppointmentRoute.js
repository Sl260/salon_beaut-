const express = require("express");

const auth = require("../Middleware/auth");
const AppointmentController = require("../Controller/AppointmentController");
const router = express.Router();

router.post(
  "/create-appointment",
  auth.auth,
  AppointmentController.createAppointment
);

module.exports = router;
