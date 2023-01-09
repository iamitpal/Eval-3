import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import profile from "../public/profile.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log(data);
  return (
    <div>
      <Image
        style={{ borderRadius: "50%", marginTop: "10px" }}
        src={profile}
        width={120}
        height={130}
        priority
        alt={"avatar"}
      />
      <h2>{data.name}</h2>
      <p>@{data.name}</p>
      <h3>{data.bio}</h3>
      <h4>Education:{"Full Stack Web-Developement (Masai School)"}</h4>
      <h4>
        Tech Stack:
        {
          "Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno | ReactJS | HTML | CSS | Chakra-UI | MUI"
        }
      </h4>
      <a href="https://drive.google.com/file/d/1_2s9ErkRxVp4JTG9P0QMX2Qi2gfoStfl/view?usp=share_link">
        <button
          style={{
            backgroundColor: "royalblue",
            border: "none",
            padding: "8px",
          }}
        >
          Resume
        </button>
      </a>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://api.github.com/users/iamitpal`);
  let data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
