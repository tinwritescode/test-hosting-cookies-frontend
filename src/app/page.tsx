"use client";
import axios from "axios";

const client = axios.create({
  baseURL: "https://test-hosting-cookies.vercel.app/api",
});

export default function Home() {
  const handleSetCookie = async () => {
    await client.post("/cookie");
  };

  const handleDeleteCookie = async () => {
    await client.post("/logout");
  };

  return (
    <div>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
    </div>
  );
}
