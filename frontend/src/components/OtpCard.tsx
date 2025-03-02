import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { optVerification } from "../redux/userThunk";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 digits")
    .matches(/^\d+$/, "OTP must contain only numbers")
    .required("OTP is required"),
});
const OtpCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const email = location.state?.email || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      await dispatch(optVerification({ email, otp: data.otp })).unwrap();
      console.log("OTP Verified Successfully");
      navigate("/");
    } catch (error) {
      console.error("OTP Verification Failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
        <p className="text-center text-sm text-gray-600">
          Enter the 6-digit OTP sent to <b>{email}</b>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="otp">OTP</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter OTP"
              {...register("otp")}
            />
            {errors.otp && (
              <p className="text-red-500 text-sm">{errors.otp.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={!isValid}>
            Verify OTP
          </Button>
        </form>
        <p className="text-sm text-center">
          Didn't receive OTP?{" "}
          <button className="text-blue-500 hover:underline">Resend OTP</button>
        </p>
      </div>
    </div>
  );
};
export default OtpCard;
