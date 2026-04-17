import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductHero from "../components/products/ProductHero";
import ProductOverview from "../components/products/ProductOverview";
import VariantSection from "../components/products/VariantSection";
import ComparisonTable from "../components/products/ComparisonTable";
import Ingredients from "../components/products/Ingredients";
import CTA from "../components/CTA";
import kraknClassic      from '../assets/krakencola/KRAKN Classic.png'
import kraknPure         from '../assets/krakencola/KRAKN PURE.png'
import kraknMax          from '../assets/krakencola/KRAKN MAX.png'
import posterClassic     from '../assets/krakenPoster/KRAKN classic.png'
import posterPure        from '../assets/krakenPoster/KRAKN PURE.png'
import posterMax         from '../assets/krakenPoster/KRAKN MAX.png'

const variants = [
  {
    id: "classic",
    title: "KRAKN Classic",
    tagline: "Pure, balanced energy",
    description:
      "The original KRAKN formula. Engineered for everyday performance — a smooth, controlled energy that keeps you locked in without the edge. Built for those who want consistency over chaos.",
    benefits: [
      "Balanced caffeine — 150mg natural",
      "Smooth focus with no jitter",
      "Everyday performance formula",
      "Zero sugar, zero crash",
    ],
    color: "blue",
    reverse: false,
    image: kraknClassic,
    poster: posterClassic,
  },
  {
    id: "green",
    title: "KRAKN PURE",
    tagline: "Clean energy, no compromise",
    description:
      "KRAKN Green is built for the clean athlete. Every ingredient is plant-sourced, every benefit is real. No synthetic stimulants — just nature-powered performance that respects your body.",
    benefits: [
      "100% plant-based caffeine from guarana",
      "No crash — L-theanine balanced",
      "Sustained 6-hour energy curve",
      "Adaptogens for stress resilience",
    ],
    color: "green",
    reverse: true,
    image: kraknPure,
    poster: posterPure,
  },
  {
    id: "red",
    title: "KRAKN MAX",
    tagline: "Maximum intensity unleashed",
    description:
      "Not for the faint-hearted. KRĀKN Red is engineered for peak output — high caffeine, fast activation, and extreme focus. When you need to go all in, this is your formula.",
    benefits: [
      "High caffeine — 200mg precision dose",
      "Fast activation within 15 minutes",
      "Extreme focus and mental clarity",
      "Electrolyte support for peak output",
    ],
    color: "red",
    reverse: false,
    image: kraknMax,
    poster: posterMax,
  },
];

export default function ProductPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [hash])

  return (
    <>
      <Navbar />
      <ProductHero />
      <ProductOverview />
      {variants.map((v) => (
        <VariantSection key={v.id} {...v} />
      ))}
      <ComparisonTable />
      <Ingredients />
      <CTA />
      <Footer />
    </>
  );
}
