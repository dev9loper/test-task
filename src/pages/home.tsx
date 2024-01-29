import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getSessionStorage, removeSessionStorage } from "@/utils/sessionStorage";

const Home = () => {
  const { push: redirect } = useRouter();

  useEffect(() => {
    const loggedIn = JSON.parse(getSessionStorage("loggedIn") ?? "false");

    if (!loggedIn) {
      redirect("/");
    }
  }, [redirect]);

  const LogoutHandler = () => {
    removeSessionStorage("loggedIn");
    redirect("/");
  };

  return (
    <main className="p-20">
      <h1 className="text-6xl">Home Page</h1>
      <button
        type="button"
        className="py-2 px-4 bg-blue-400 rounded text-blue-50 font-bold hover:bg-blue-700"
        onClick={LogoutHandler}
      >
        Logout
      </button>
    </main>
  );
};

export default Home;
