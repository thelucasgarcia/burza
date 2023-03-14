import AboutContainer from '@/containers/Home/AboutContainer'
import ContactContainer from '@/containers/Home/ContactContainer'
import HeroContainer from '@/containers/Home/HeroContainer'
import TourDatesContainer from '@/containers/Home/TourDates'

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <AboutContainer />
      <TourDatesContainer />
      <ContactContainer />
    </main>
  )
}
