"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Movie from "./movie";

export default async function About() {
  /*const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFmMTBlYWY1ZDkwMWM0ZDRhN2Q4NDJmNzliNjRjYiIsInN1YiI6IjYzZTM3OWY1NzMwNGI1MDBjOWY1ZTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Fm7mB_FvBDiUW37zaDFa6H7pQCgpR-JtX4MC-CdTEU`,
        "Content-Type": "application/json",
  
      }})
      .then((res) => res.json())
      .then((data) => {
        setData(data.response);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Movies data</p>;
 console.log(data);*/
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFmMTBlYWY1ZDkwMWM0ZDRhN2Q4NDJmNzliNjRjYiIsInN1YiI6IjYzZTM3OWY1NzMwNGI1MDBjOWY1ZTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Fm7mB_FvBDiUW37zaDFa6H7pQCgpR-JtX4MC-CdTEU`,
        "Content-Type": "application/json",
      },
    }
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <center>
        <h1 className="my-4">Practice Next.js</h1>
      </center>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.key}
            title={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
      <Link href="/about"> Go to About Page</Link>
    </main>
  );
}
