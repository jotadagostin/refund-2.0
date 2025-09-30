import type React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  function onAction(formData: FormData) {
    console.log(formData.get("password"));
  }
  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="Email"
        type="email"
        placeholder="youremail@email.com"
      />

      <Input
        name="password"
        required
        legend="Password"
        type="password"
        placeholder="123456"
      />

      <Button type="submit" isLoading={isLoading}>
        Enter
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Create account
      </a>
    </form>
  );
}
