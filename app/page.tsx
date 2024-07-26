import Banner from "@/components/home/banner";
import HardMatches from "@/components/home/hard-matches";
import HowUse from "@/components/home/how-use";
import HowWorks from "@/components/home/how-works";
import Organizations from "@/components/home/organizations";
import PatternXAction from "@/components/home/patternx-action";
import PatternXUses from "@/components/home/patternx-uses";
import CallToAction from "@/components/home/cta";
import Problems from "@/components/home/problems";
import Intro from "@/components/home/intro";

export default function Home() {
  return (
    <main>
      <Banner />
      <Intro />
      <Problems />
      <HowUse />
      <HardMatches />
      <PatternXAction />
      <CallToAction />
    </main>
  );
}
