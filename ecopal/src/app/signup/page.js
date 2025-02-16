"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function SignUp() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");

  async function signUpNewUser(data) {
    const { email, password } = data; // Extract values from form

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });

    if (error) {
      setError(error.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(signUpNewUser)} className="space-y-6">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none"
                    placeholder="Enter your username"
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none"
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
                    className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}
