const { Job } = require("../models/Job");

const jobController = {
  getJobsByLocationId: async (req, res) => {
    try {
      const locationId = req.params.locationId;

      const location = await Location.findById(locationId);

      if (!location) {
        return res.status(404).json({ message: "Location not found" });
      }

      const jobIds = location.jobs;

      const jobs = await Job.find({ _id: { $in: jobIds } });

      res.json(jobs);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  add: async (req, res) => {
    try {
      let job = new Job({
        title: req.body.title,
        summary: req.body.summary,
        locations: req.body.locations,
      });
      await job.save();

      const locationIds = req.body.locations;

      await Location.updateMany(
        { _id: { $in: locationIds } },
        { $push: { jobs: job._id } }
      );

      res.status(201).json(job);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAll: async (req, res) => {
    let data = await Job.find();

    res.json(data);
  },
  delete: (req, res) => {
    let id = req.params.id;

    Job.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = {
  jobController,
};
