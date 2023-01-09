import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../public/profile.png";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
        fontSize: "24px",
        padding: "8px",
        backgroundColor: "royalblue",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          fontSize: "24px",
          padding: "8px",
          backgroundColor: "royalblue",
          color: "white",
        }}
      >
        <Link href={"/"}>Amit Pal</Link>
        <Link href={"/project"}>Projects</Link>
        <Link href={"/experience"}>Experience</Link>
      </div>
      <Image
        style={{ borderRadius: "50%" }}
        src={profile}
        width={60}
        height={55}
        priority
        alt={"avatar"}
      />
    </div>
  );
};

export default Navbar;
