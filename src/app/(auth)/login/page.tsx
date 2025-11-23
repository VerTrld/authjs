"use client";
import IAuthSchema, { AuthSchema } from "@/schema/AuthSchema";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const form = useForm<IAuthSchema>({
    validate: yupResolver(AuthSchema),
    initialValues: {
      email: "",
      hash: "",
    },
  });

  const handleSubmit = form.onSubmit(async () => {
    const res = await signIn("credentials", {
      email: form.values.email,
      hash: form.values.hash,
      redirect: false,
    });

    if (res?.error) {
      console.error("Login failed:", res.error);
    } else {
      router.push("/"); // Redirect after login
    }
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput placeholder="email" {...form.getInputProps("email")} />
        <TextInput placeholder="password" {...form.getInputProps("hash")} />
        <Button type="submit">login</Button>
        <Button onClick={() => signIn("github", { callbackUrl: "/" })}>
          Github
        </Button>
      </form>
    </div>
  );
}
