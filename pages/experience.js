import React from "react";
import Image from "next/image";
import profile from "../public/profile.png";
import Link from "next/link";

const Experience = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link href={data.html_url}>
        <Image
          style={{ borderRadius: "50%", marginTop: "10px" }}
          src={profile}
          width={120}
          height={130}
          priority
          alt={"avatar"}
        />
      </Link>
      <Link href={data.html_url}>
        <h2>{data.name}</h2>
      </Link>
      <br />
      <h2>Experience: 1200+ Hours of Coding experience at Masai School</h2>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/iamitpal`);
  let data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
export default Experience;
