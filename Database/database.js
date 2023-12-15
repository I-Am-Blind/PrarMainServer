import { db } from "./firebaseconfig.js";
import admin from "firebase-admin";1

const findDevice = async (device_id) => {
  const device = await db.collection("devices").doc(device_id).get()
  return device.data()
}

const findUser = async (user_id) => {
  const user = await db.collection("users").doc(user_id).get()
  return user.data()
}

const addToCollection = async (collection , data) => {
  const res = await db.collection(collection).add(data); 
  return res
}

const addToDoc = async (collection, doc, data = null) => {
  let res
  if (doc){
    res = await db.collection(collection).doc(doc).set(data)
  }  else {
     res = await db.collection(collection).add(data)
  }
   
  return res
}

const addToSensorData = async (userId, sensor, data) => {

  const userDocRef = db.collection('sensordata').doc(userId);
  let updateObject = {};
  updateObject[sensor] = admin.firestore.FieldValue.arrayUnion(data);
  const res = userDocRef.update(updateObject)
  return res

}


export { findUser , findDevice ,addToCollection, addToDoc, addToSensorData};
