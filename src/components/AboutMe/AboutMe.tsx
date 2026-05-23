import Header from './Header/Header'
import Avatar from './Avatar/Avatar'
import SummaryText from './SummaryText/SummaryText'
import Currently from './Currently/Currently'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <Header />
      <Avatar />
      <SummaryText />
      <Currently />
    </section>
  )
}
