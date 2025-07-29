"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../SupabaseClient";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const router = useRouter(); //Direcionar a page

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);

        const { data:profileData, error: profileError } = await supabase
        .from ("profiles")
        .select("user_name")
        .eq("id", user.id)
        .single();

        if (profileData) {
          setProfile(profileData);
        }
      }
    };

    fetchUserAndProfile();
  }, []);

  const handlelogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  const handleOptionClick = async (value) => {
    if (value === "logout") {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error al cerrar sesión:", error.message);
      } else {
        // Redirige o actualiza el estado
        router.push("/login");
      }
    }
  };

  return (
    <nav className="w-full bg-[#191617] text-white py-4 px-8 flex items-center justify-between font-[var(--font-montserrat)]">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <Image src="/images/shared/logo.png" alt="Logo shebn" width={40} height={40} />
          <span className="text-pink-500 font-bold text-lg tracking-widest"></span>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-pink-400">Home</a></li>
          <li><a href="/profileFriends" className="hover:text-pink-400">Profiles</a></li>
          <li><a href="#" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#" className="hover:text-pink-400">Forum</a></li>
          <li><a href="#" className="bg-pink-700 text-white px-3 py-1 rounded hover:bg-pink-800 transition">Contact us</a></li>
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
        {user && profile ? (
          <>
          <img className="relative left-6 w-10 h-10 rounded-full" src="/images/profile/fondo-inferior.png" alt={profile.user_name} />
          <div className="bg-[#4B4242] rounded-r-lg px-6 py-1 text-sm font-semibold">
            {profile?.user_name}
            <select onChange={(e) => handleOptionClick(e.target.value)} className="bg-[#4B4242] text-white w-6 outline-2 outline-offset-0 outline-transparent" defaultValue="">
              <option value="" disabled></option>
              <option value="logout">LOG OUT</option>
            </select>
          </div>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="border border-white px-6 py-2 rounded-[25px] hover:bg-white hover:text-black transition font-bold">LOG IN</button>
            </Link>
            <Link  href="/signup">
              <button className="border border-white px-6 py-2 rounded-[25px] hover:bg-pink-700 hover:text-white transition font-bold">SIGN UP</button>
            </Link>
          </>
        )}

               
      </div>
    </nav>
  );
};

export default Navbar; 