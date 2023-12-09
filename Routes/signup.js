import express from "express";
import {
  findDevice,
  addToDoc,
} from "../Database/database.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userdata, device_id } = req.body;
  const device = await findDevice(device_id.trim());

  if (!device) {
    return res.status(201).send({ message : "Device Not Found" , error: true });
  }
  userdata.username = userdata?.username.trim()
  if (
    device?.users &&
    device.users.some((user) => user.username.trim() === userdata?.username)
  ) {
    return res.status(201).send({ message : `Username ${userdata?.username} Already Exists` , error: true });
  }

  let generated_uid
  try {  
    generated_uid = await addToDoc("users", userdata)
    device.users.push({ username: userdata?.username, id : generated_uid?.id});
    await addToDoc("devices", {users : device.users} , device_id);

  } catch (error) {
    return res.status(201).send({ message : "Databse Write Error" , error: true });
  }
  return res.status(201).send({ message : `Registered User ${userdata?.username}`, id : generated_uid.id });
});

export default router;
