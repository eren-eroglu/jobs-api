const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJob);
router.delete("/", deleteJob);
router.put("/:id", updateJob);

module.exports = router;
