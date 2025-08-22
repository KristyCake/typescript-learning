import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email("Invalid email form"),
  password: z.string().min(6, "Password must be least 6 char")
});

type FormData = z.infer<typeof schema>

export default function Lab6() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log("Login submit:", data)
    alert(`Login OK for ${data.email}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <h3>Login Form</h3>
      <label>Email</label>
      <input
        type="email"
        placeholder="your email"
        {...register("email")} />
      <label>Password</label>
      <input
        type="password"
        placeholder="your password"
        {...register("password")} />
      {errors.email?.message}
      <button type="submit" disabled={isSubmitting}>Login</button>
    </form>
  )
}

const formStyle: React.CSSProperties = { display: "grid", gap: 8, maxWidth: 360 };

