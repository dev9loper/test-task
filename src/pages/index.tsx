import { FormEvent, useState } from "react";
import UserCredentials from "../utils/user-credentials.json";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import { setSessionStorage } from "@/utils/Localstorage";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { push: redirect } = useRouter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const userDetails = UserCredentials.find(
      (credential) => credential.name === name
    );
    if (userDetails) {
      if (userDetails.password === password) {
        setSessionStorage("loggedIn", "true");
        redirect("/home");
      } else {
        toast.error("Password is incorrect!");
      }
    } else {
      toast.error("Name doesn't exist");
    }
  };

  return (
    <main className="bg-gray-10">
      <div className="flex justify-center h-screen w-screen items-center">
        <form
          className="w-full md:w-1/2 flex flex-col items-center"
          onSubmit={submitHandler}
        >
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            LOGIN
          </h1>
          <div className="w-3/4 mb-6">
            <Input
              type="text"
              name="email"
              value={name}
              id="email"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              data-testid="email"
            />
          </div>
          <div className="w-3/4 mb-6">
            <Input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password"
            />
          </div>
          <div className="w-3/4 mt-4">
            <Button disabled={!name || !password}>Login</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
