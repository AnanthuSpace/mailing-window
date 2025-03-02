import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, optVerification } from "./userThunk";
import { toast } from "sonner";
import { UserState } from "../types/types";

const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")!) : null;

const initialState: UserState = {
  userData: userData,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("userData");
      localStorage.removeItem("userRefreshToken");
      sessionStorage.removeItem("userAccessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ msg: string }>) => {
          toast.success(action.payload.msg, { duration: 3000 });
          state.loading = false;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        if (
          action.payload === "User already exists" ||
          action.payload === "Registration failed, try again" ||
          action.payload === "All the fields are required!"
        ) {
          toast.error(action.payload || "Registration failed", { duration: 3000 });
        }
        state.loading = false;
      })
      .addCase(optVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        optVerification.fulfilled,
        (
          state,
          action: PayloadAction<{
            message: string;
            userData: { userId: string; name: string; email: string };
            refreshToken: string;
            accessToken: string;
          }>
        ) => {
          toast.success(action.payload.message, { duration: 3000 });

          state.userData = action.payload.userData;

          console.log("Stored User:", state.userData);

          localStorage.setItem("userData", JSON.stringify(state.userData));
          localStorage.setItem("userRefreshToken", action.payload.refreshToken);
          sessionStorage.setItem("userAccessToken", action.payload.accessToken);

          state.loading = false;
        }
      )
      .addCase(optVerification.rejected, (state, action) => {
        state.loading = false;
        const errorMessage =
          typeof action.payload === "string" && action.payload.trim() !== ""
            ? action.payload
            : "OTP verification failed, please try again.";

        toast.error(errorMessage, { duration: 3000 });
        state.error = errorMessage;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
