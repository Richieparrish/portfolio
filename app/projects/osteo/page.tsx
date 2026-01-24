import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  OsteoHero,
  OsteoOverview,
  OsteoFeatures,
  OsteoCapabilities,
  OsteoTechStack,
  OsteoStatus,
  OsteoNextProject,
} from "@/components/osteo-sections";

export default function OsteoAIPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        <OsteoHero />
        <OsteoOverview />
        <OsteoFeatures />
        <OsteoCapabilities />
        <OsteoTechStack />
        <OsteoStatus />
        <OsteoNextProject />
      </main>

      <Footer />
    </div>
  );
}
