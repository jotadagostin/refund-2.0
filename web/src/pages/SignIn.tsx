import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Email"
        type="email"
        placeholder="youremail@email.com"
      />

      <Input required legend="Password" type="password" placeholder="123456" />
    </form>
  );
}
