import Hero from "./about/components/hero";
import SchoolIntroduction from "../components/Intro";
import MissionSection from "../components/ourMission";
import { CardStackDemo } from "../components/review2";

import SchoolWelcome from "../components/ui/welcome";
import PrincipalMessage from "../components/ui/principleMessage";

export default function Home() {
  return (
    <>
      <SchoolWelcome />
      <SchoolIntroduction />
      <PrincipalMessage></PrincipalMessage>
      <MissionSection />
      <CardStackDemo />
    </>
  );
}
