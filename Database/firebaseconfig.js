import { initializeApp, cert } from 'firebase-admin/app';
import creds from './privatekey.json' assert { type: 'json' };
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({
   credential: cert(creds)
});

let db;
const connectDB = async () => {
  if (!db) {
    db = getFirestore();
  }
  return db;
};

export { connectDB, db };
