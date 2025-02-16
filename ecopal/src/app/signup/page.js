"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function SignUp() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState(""); 

  async function signUpNewUser(data) {
    const { email, password } = data; // Extract values directly from form
    console.log("Signing up with:", email, password); // Debugging


    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "https://example.com/welcome", // Update with your redirect URL
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setError(""); // Clear error if successful
      alert("Sign-up successful! Check your email for confirmation.");
    }
  
  }

  return (
<div className="flex items-center flex-col bg-[#E6D136] min-h-screen">
  <img src="https://i.redd.it/bbddwclsebi91.gif"></img>
  <div className="max-w-md mx-auto mt-10 p-6 bg-[#A3E636]  text-text border-2 border-border dark:border-darkBorder shadow-light shadow-lg">
      <Link href="/">
        <Button className="absolute top-0 left-0 m-16">
          <img src="https://static.thenounproject.com/png/941793-200.png" className="w-14 h-30 py-4 scale-x-[-1]"></img>
        </Button>
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(signUpNewUser)} className="space-y-6">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    className="w-full px-3 py-2 bg-[#E0E7F1] border-black border-border border-2 outline-none"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="password"
                    className="w-full px-3 py-2 bg-[#E0E7F1] border-black border-border border-2 outline-none"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#E0E7F1] hover:bg-[#4BE636] text-black font-bold py-2 px-4 transition duration-300"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
</div>
    
  );
}
