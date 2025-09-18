import type React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsloading] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(name, email, password, passwordConfirm);
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Your name"
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        required
        legend="Email"
        type="email"
        placeholder="youremail@email.com"
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        required
        legend="Password"
        type="password"
        placeholder="123456"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        required
        legend="Confirm password"
        type="password"
        placeholder="123456"
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Create
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        I already have an account
      </a>
    </form>
  );
}
