"use client";
import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      Hello Auth
      <Button onClick={() => signOut()}>Logout</Button>
    </>
  );
}
