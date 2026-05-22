"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-white py-3 shadow-sm">

      <nav className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Left Menu */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-lg lg:text-xl font-semibold">

            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/facilities"}>Facilities</Link>
            </li>

            <li>
              <Link href={"/add-facility"}>Add Facility</Link>
            </li>

          </ul>

          {/* Logo */}
          <div>

            <Image
              src={"/assets/logo.png"}
              height={120}
              width={120}
              alt="logo"
              className="w-24 md:w-32 lg:w-36 h-auto"
            />

          </div>

          {/* Right Menu */}
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-lg lg:text-xl font-semibold">

            <li>
              <Link href={"/my-bookings"}>
                My Bookings
              </Link>
            </li>

            {user ? (
              <>

                <li>

                  <Avatar>

                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt="User"
                      src={user?.image}
                    />

                    <Avatar.Fallback>
                      {user.name.charAt(0)}
                    </Avatar.Fallback>

                  </Avatar>

                </li>

                <li>

                  <Button
                    size="sm"
                    onClick={handleSignOut}
                    variant="danger"
                    className={"rounded-sm"}
                  >
                    Logout
                  </Button>

                </li>

              </>
            ) : (
              <>

                <li>
                  <Link href={"/login"}>Login</Link>
                </li>

                <li>
                  <Link href={"/signup"}>Sign Up</Link>
                </li>

              </>
            )}

          </ul>

        </div>

      </nav>

    </div>
  );
};

export default Navbar;