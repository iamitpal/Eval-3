import Link from "next/link";
import React from "react";

const Project = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          border: "1px solid gray",
          marginTop: "12px",
          padding: "10px",
        }}
      >
        {data.map((el) => (
          <div
            style={{ border: "1px solid gray", padding: "10px" }}
            key={el.id}
          >
            <Link href={el.html_url}>
              <h3>Repository:{el.name}</h3>
              <h3>Star Count:{el.stargazers_count}</h3>
              <h3>Fork Count:{el.forks_count}</h3>
              <h3>language:{el.language}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:riteshf+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  return {
    props: {
      data: data.items,
    },
  };
}

export default Project;
