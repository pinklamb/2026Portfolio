import Header from './Header/Header'
import Quote from './Quote/Quote'
import BottomLinks from './BottomBox/BottomBox'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Header />
      <Quote />
      <BottomLinks />
    </section>
  )
}