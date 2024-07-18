// pages/api/verify-otp.ts

import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import UserModel from '@/model/User';

export  async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  
  if (req.method === 'POST') {
    try {
      const { email, otp } = req.body;

      // Find the user by email
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if OTP matches
      if (user.verifyCode === otp) {
        // Update user as verified
        user.isVerified = true;
        user.verifyCode = '';
        await user.save();

        return res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        return res.status(400).json({ error: 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
