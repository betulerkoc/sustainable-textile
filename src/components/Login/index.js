import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="m-auto max-w-xs my-16 flex flex-col gap-2">
      <Input variant="standard" label="Name" />
      <Input variant="standard" label="Password" />
      <Button className="my-10">Login</Button>
    </div>
  );
}