import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import admin from 'firebase-admin';
import mongoose from 'mongoose';
import path from 'path';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: ['https://www.ubapp.com', 'https://api.ubapp.com', 'http://localhost:3000'], credentials: true }));
// init firebase admin if service account provided
try {
  admin.initializeApp();
  console.log('Firebase Admin initialized');
} catch (e) {
  console.warn('Firebase Admin init warning', e.message || e);
}
// connect mongo
const MONGO_URI = process.env.MONGO_URI || '';
if (MONGO_URI) {
  mongoose.connect(MONGO_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error(e));
} else console.warn('MONGO_URI not set');
app.get('/api', (req,res)=>res.json({status:'Ub API running'}));
app.post('/api/auth/verify-token', async (req,res)=>{
  const { idToken } = req.body;
  if (!idToken) return res.status(400).json({error:'idToken required'});
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    return res.json({uid:decoded.uid,email:decoded.email,phone:decoded.phone_number});
  } catch(err){ console.error(err); return res.status(401).json({error:'Invalid token'}); }
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Ub backend listening on ${PORT}`));
