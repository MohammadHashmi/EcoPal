"use client";
import { useState } from "react";
//import { supabase } from "../supabase";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { createClient } from '../../../utils/supabase/server'

export default function LogIn() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",  
      password: "",
    },
  });

  const [error, setError] = useState(""); 

  async function signIn(data) {
    const supabase = await createClient()
    const { email, password } = data; // Extract values directly from form

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(""); // Clear error if successful
      alert("Log In Successful!");
      router.push('/')
    }
  
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(signIn)} className="space-y-6">
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
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
}
