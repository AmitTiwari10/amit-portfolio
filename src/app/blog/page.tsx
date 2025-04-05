import Header from "@/components/Header";
import React from "react";
import rightArrow from "../../../public/logos/RightArrow.svg";
import Image from "next/image";
import { getBlogs } from "@/actions/blogAction";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const blogs: any = await getBlogs();
  return (
    <></>
  );
}
