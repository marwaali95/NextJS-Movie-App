import React from "react";
import Image from "next/image";
export async function generateStaticParams() {
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
  return res.results.map((movie) => {
    movie: toString(movie.id);
  });
}
export default async function MovieDetails({ params }) {
  const { movie } = params;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFmMTBlYWY1ZDkwMWM0ZDRhN2Q4NDJmNzliNjRjYiIsInN1YiI6IjYzZTM3OWY1NzMwNGI1MDBjOWY1ZTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Fm7mB_FvBDiUW37zaDFa6H7pQCgpR-JtX4MC-CdTEU`,
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  console.log(res);
  const imagePath = `https://www.themoviedb.org/t/p/original`;

  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
        <h2 className=" text-sm bg-green-600 inline-block my-2 py-2 px-2 rounded">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt=""
          width={1000}
          height={1000}
        ></Image>
      </div>
    </div>
  );
}
