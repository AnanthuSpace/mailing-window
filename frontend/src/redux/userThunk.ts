import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk<
  { msg: string },
  { name: string; email: string; password: string },
  { rejectValue: string }
>(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth", credentials);
      console.log(response.data)
      return { msg: response.data.message };
    } catch (error: any) {
      return rejectWithValue("Invalid email or password");
    }
  }
);

export const optVerification = createAsyncThunk(
  "user/otpVerification",
  async ({ email, otp }: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/verify-otp", { email, otp });
      return response.data.response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "OTP verification failed");
    }
  }
);