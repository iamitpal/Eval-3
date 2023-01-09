import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
