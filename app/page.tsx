import Banner from "@/components/home/banner";
import HardMatches from "@/components/home/hard-matches";
import HowUse from "@/components/home/how-use";
import HowWorks from "@/components/home/how-works";
import Organizations from "@/components/home/organizations";
import PatternXAction from "@/components/home/patternx-action";
import PatternXUses from "@/components/home/patternx-uses";
import Questions from "@/components/home/questions";
import SimpleTool from "@/components/home/simple-tool";
import VideoIntro from "@/components/home/video-intro";

export default function Home() {
  return (
    <main>
      <Banner />
      <VideoIntro />
      <Organizations />
      <SimpleTool />
      <PatternXUses />
      <PatternXAction />
      <HowUse />
      <HardMatches />
      <HowWorks />
      <Questions />
    </main>
  );
}
