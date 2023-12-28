// import React from 'react'
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <section className=" w-[15dvw] h-[90dvh] my-[5dvh] ml-[5dvw] rounded-xl bg-stone-50 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-12">Dashboard</h1>
        <ul className="list-none block mx-auto text-center pt-[11dvh]">
          <li className="py-5 border-t-2 border-gray-300 hover:font-bold text-lg">
            <Link href="users">Users</Link>
          </li>
          <li className="py-5 border-t-2 border-gray-300 hover:font-bold text-lg">
            My Account
          </li>
          <li className="py-5 border-t-2 border-gray-300 hover:font-bold text-lg">
            Issue
          </li>
          <li className="py-5 border-t-2 border-gray-300 hover:font-bold text-lg">
            Analytics
          </li>
          <li className="py-5 border-y-2 border-gray-300 hover:font-bold text-lg">
            Resolved Errors
          </li>
          <li className="py-5 border-b-2 border-gray-300 hover:font-bold text-lg">
            New Login
          </li>
        </ul>
      </section>
    </>
  );
}
