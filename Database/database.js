import { db } from "./firebaseconfig.js";


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

const addToDoc = async (collection, data, doc = null) => {
  let res
  if (doc){
    res = await db.collection(collection).doc(doc).set(data)
  }  else {
     res = await db.collection(collection).add(data)
  }
   
  return res
}

export { findUser , findDevice ,addToCollection, addToDoc};
