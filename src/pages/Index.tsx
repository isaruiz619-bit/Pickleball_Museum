import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Timeline from "@/components/Timeline";
import Popularity from "@/components/Popularity";
import Gallery from "@/components/Gallery";
import Legacy from "@/components/Legacy";
import Footer from "@/components/Footer";
import ExhibitNav from "@/components/ExhibitNav";

const EXHIBIT_IDS = ["exhibit-1", "exhibit-2", "exhibit-3", "exhibit-4", "exhibit-5"];
const EXHIBIT_LABELS = ["Origins", "The Timeline", "The Surge", "The Gallery", "The Story Continues"];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(false);

  // Track which exhibit is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = EXHIBIT_IDS.indexOf(entry.target.id);
            if (idx !== -1) {
              setCurrent(idx);
              setShowNav(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    EXHIBIT_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Hide nav when at hero
  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowNav(false);
      },
      { threshold: 0.5 }
    );

    const hero = document.getElementById("home");
    if (hero) heroObserver.observe(hero);

    return () => heroObserver.disconnect();
  }, []);

  const scrollToExhibit = useCallback((index: number) => {
    const el = document.getElementById(EXHIBIT_IDS[index]);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleStart = useCallback(() => {
    scrollToExhibit(0);
  }, [scrollToExhibit]);

  return (
    <>
      <Navbar />
      <Hero onStart={handleStart} />
      <History />
      <Timeline />
      <Popularity />
      <Gallery />
      <Legacy />
      <Footer />
      {showNav && (
        <ExhibitNav
          current={current}
          total={EXHIBIT_IDS.length}
          labels={EXHIBIT_LABELS}
          onPrev={() => scrollToExhibit(Math.max(0, current - 1))}
          onNext={() => scrollToExhibit(Math.min(EXHIBIT_IDS.length - 1, current + 1))}
        />
      )}
    </>
  );
};

export default Index;
