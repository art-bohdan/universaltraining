import About from "../sections/About/About"
import Offers from "../sections/Offers/Offers"
import Experts from "../sections/Experts/Experts"
import Feedback from "../sections/Feedback/Feedback"
import Contact from "../sections/Contact/Contact"
import { Statistics } from "../sections/Statistics/Statistics"
import { Footer } from "../sections/Footer/Footer"
import { HeroPage } from "../sections/Heropage/HeroPage"

export default function App() {
  return (
    <div id={"landing-page"}>
      <HeroPage />
      <About />
      <Statistics />
      <Offers />
      <Experts />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}
