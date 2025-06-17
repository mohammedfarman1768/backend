import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User registered successfully' });
});

const login = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login successful' });
});

export { registerUser, login };
