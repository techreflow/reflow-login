"use client";

import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/utils/cn"; // Ensure this utility is available for className concatenation
interface Props {
  handleOtpSubmit: (otp: string) => void;
  loading: boolean;
}

export function InputOTPControlled({ handleOtpSubmit , loading }: Props) {
  const [value, setValue] = React.useState("");

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleOtpSubmit(value);
  };

  return (
    <div className="space-y-2">
      <form onSubmit={onSubmit}>
        <InputOTP maxLength={6} value={value} onChange={(val) => setValue(val)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm mt-4">
          {value === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {value}</>
          )}
        </div>
        <button
          className={cn(
            "bg-gradient-to-br relative from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium mt-4",
            { "cursor-not-allowed": loading }
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? <div className="loader"></div> : "Submit OTP"}
        </button>
      </form>
    </div>
  );
}
