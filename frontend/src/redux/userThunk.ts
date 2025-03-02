import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk<
  { msg: string },
  { name: string; email: string; password: string },
  { rejectValue: string }
>(
  "user/signupUser",
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



export const googleSignup = createAsyncThunk(
  "user/googleSignup",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/google-signup", { token });
      const { accessToken, refreshToken, userData } = response.data.response;

      sessionStorage.setItem("userAccessToken", accessToken);
      localStorage.setItem("userRefreshToken", refreshToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      return userData;
    } catch (error: any) {
      if (error.response?.data?.message === "Internal server error") {
        return rejectWithValue("Verification failed, try again");
      }
      return rejectWithValue(error.response?.data?.message || "Google Signup Failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/login", { email, password });
      const { accessToken, refreshToken, userData } = response.data.response;

      sessionStorage.setItem("userAccessToken", accessToken);
      localStorage.setItem("userRefreshToken", refreshToken);
      localStorage.setItem("userData", JSON.stringify(userData));

      return userData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login Failed");
    }
  }
);

export const googleSignin = createAsyncThunk(
  "user/googleSignin",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/google-signin", { token });
      const { accessToken, refreshToken, userData } = response.data.response;

      sessionStorage.setItem("userAccessToken", accessToken);
      localStorage.setItem("userRefreshToken", refreshToken);
      localStorage.setItem("userData", JSON.stringify(userData));

      return userData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Google Signup Failed");
    }
  }
);
