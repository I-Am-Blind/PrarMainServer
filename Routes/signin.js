import express from 'express';
import { findUser ,findDevice } from '../Database/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { userdata , device_id } = req.body;
    const devicedata= await findDevice(device_id)
   devicedata?.users.forEach( async user => {
    const retrieveddata = await findUser(user)
    if ( retrieveddata?.username === userdata?.username)
      return res.status(200).send('Ok');
   })
    return res.status(200).send('Ok');
});

export default router;
