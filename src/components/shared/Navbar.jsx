"use client"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {

  const session = useSession();

  //navOptios
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Servies",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Conatacts",
      path: "/contacts"
    },
    {
      title: "My Bookings",
      path: "/my-bookings"
    }
  ]
  return (
    <div className=' bg-base-100 text-slate-900'>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                navItems.map((item) => (
                  <Link href={item.path} key={item.path}>{item.title}</Link>
                ))
              }
            </ul>
          </div>
          <Link href="/">
            <Image className="hidden lg:block" src="/assets/logo.svg" height={60} width={150} alt='image' />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className='flex items-center space-x-6'>
            {
              navItems.map((item) => (
                <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
              ))
            }
          </div>
        </div>
        <div className="navbar-end">
          <div className='flex items-center space-x-3'>
            <MdOutlineShoppingCart className='text-xl' />
            <CiSearch className='text-xl' />
            <a className="btn btn-outline btn-primary px-8">Appoinments</a>
            <div className='rounded-lg'>
              {session?.data?.user?.image ? (
                <Image
                  src={session.data.user.image}
                  height={50}
                  width={50}
                  alt="User image"
                  className="rounded-full"
                />

              ) : (
                <Image
                  src="/assets/images/about_us/user.jpg"
                  height={50}
                  width={50}
                  alt='Default user image'
                />
              )}
            </div>
            {session?.status === "loading" && <h2>Loading...</h2>}
            {session?.status === 'unauthenticated' &&
              <Link href="/login">
                <button className="btn btn-primary">Login</button>
              </Link>}
            {session?.status === 'authenticated' && < button className="btn btn-primary" onClick={() => signOut()}>Log Out</button>}
          </div>
        </div>
      </div>
    </div >
  )
}
