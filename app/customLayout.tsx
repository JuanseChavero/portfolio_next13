"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import VerticalEmail from "@/components/VerticalEmail";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PageWrapper from "@/components/Layout/PageWrapper";
import ScrollToTop from "@/components/Misc/ScrollToTop";
import SocialMedia from "@/components/Misc/SocialMedia";
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
        <VerticalEmail />
        <Footer />
      </main>
    </LazyMotion>
  );
}
