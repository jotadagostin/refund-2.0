import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useActionState } from "react";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";

const signInScheme = z.object({
  email: z.string().email({ message: "Invalid email!" }),
  password: z.string().trim().min(1, { message: "Inform the password" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInScheme.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return alert("it was not possible to log in!");
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
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
      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

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
