"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import SocialMedia from "@/components/SocialMedia";
import { WithChildren } from "@/types";

export default function Layout({ children }: WithChildren) {
  return (
    <LazyMotion features={domAnimation}>
      <main
        className={`relative z-0 flex min-h-screen flex-col bg-slate-50 font-sans text-black antialiased selection:bg-primary selection:text-black dark:bg-black dark:text-white selection:dark:text-white`}
      >
        <ScrollToTop />
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <SocialMedia />
        <Email />
        <Footer />
      </main>
    </LazyMotion>
  );
}
