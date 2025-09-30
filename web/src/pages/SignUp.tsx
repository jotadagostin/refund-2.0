import type React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "inform the name" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "password needs at least 6 characters" }),
    passwordConfirm: z.string({ message: "confirm the password" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords are not the same",
    path: ["passwordConfirm"],
  });

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      });

      await api.post("/users", data);

      if (confirm("Registered with success. Go to the enter page?")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("it was not possible to apply...");
    } finally {
      setIsLoading(false);
    }
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
