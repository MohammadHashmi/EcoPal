"use client";
import Image from "next/image";
import { supabase } from "../../../lib/supabase";

export default function SignUp() {
    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
            email: 'valid.email@supabase.io',
            password: 'example-password',
            options: {
              emailRedirectTo: 'https://example.com/welcome',
            },
          })
        
    }
  return (
    <button className="border border-black" onClick={() => signUpNewUser()}>Sign Up</button>
    );
}
