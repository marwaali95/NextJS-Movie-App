"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Movie({ id, title, poster_path, release_date }) {
  const imagePath = `https://www.themoviedb.org/t/p/original${poster_path}`;

  return (
    <center>
      <h1> {title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image src={imagePath} alt="" width={400} height={500} />
      </Link>
    </center>
  );
}
