import Hero from './about/components/hero'
import SchoolIntroduction from '../components/Intro'
import MissionSection from '../components/ourMission'
import { CardStackDemo } from '../components/review2'

export default function Home() {
  return (
    <>
      <Hero />
      <SchoolIntroduction />
      <MissionSection />
      <CardStackDemo />
    </>
  )
}