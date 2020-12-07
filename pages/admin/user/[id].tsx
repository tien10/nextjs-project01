import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AdminUser() {
  const router = useRouter();
  console.log("router: ", router.query.id);

  function handleOnClick() {
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>User Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello AdminUser</h1>
      <Link href="/login">
        <button className="active">Login by a tag</button>
      </Link>
      <button onClick={handleOnClick}>Login</button>
    </>
  );
}
