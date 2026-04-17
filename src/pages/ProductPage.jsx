import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductHero from "../components/products/ProductHero";
import ProductOverview from "../components/products/ProductOverview";
import VariantSection from "../components/products/VariantSection";
import ComparisonTable from "../components/products/ComparisonTable";
import Ingredients from "../components/products/Ingredients";
import CTA from "../components/CTA";

const variants = [
  {
    id: "classic",
    title: "Krakn Classic",
    tagline: "Pure, balanced energy",
    description:
      "The original KRĀKN formula. Engineered for everyday performance — a smooth, controlled energy that keeps you locked in without the edge. Built for those who want consistency over chaos.",
    benefits: [
      "Balanced caffeine — 150mg natural",
      "Smooth focus with no jitter",
      "Everyday performance formula",
      "Zero sugar, zero crash",
    ],
    color: "blue",
    reverse: false,
  },
  {
    id: "green",
    title: "Krakn Pure",
    tagline: "Clean energy, no compromise",
    description:
      "KRĀKN Green is built for the clean athlete. Every ingredient is plant-sourced, every benefit is real. No synthetic stimulants — just nature-powered performance that respects your body.",
    benefits: [
      "100% plant-based caffeine from guarana",
      "No crash — L-theanine balanced",
      "Sustained 6-hour energy curve",
      "Adaptogens for stress resilience",
    ],
    color: "green",
    reverse: true,
  },
  {
    id: "red",
    title: "Krakn MAX",
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
  },
];

export default function ProductPage() {
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
