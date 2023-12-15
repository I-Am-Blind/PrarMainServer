
import express from "express";
import {
  addToSensorData
} from "../Database/database.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, sensor, data } = req.body;
  
  if (!( userId && data && sensor)) 
    return res.status(201).send({ message : "UserId or Data Missing" , error: true });

  try {
    await addToSensorData(userId, sensor, data);
  } catch (error) {
    return res.status(201).send({ message : "Error updating records to firebase" , error: true });
  }
 
  return res.status(201).send({ message : "Records uploaded successfully" });

});

export default router;
