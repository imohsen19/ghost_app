import Features from "../components/Features"
import Blog from "../components/blog"
import Hero from "../components/Hero"
import Hero2 from "../components/Hero2"
import Navbar from "../components/Navbar"
import Product1 from "../components/product1"

export default function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <h1 className="text-2xl text-slate-700 font-bold">
        Hello Django
      </h1>
      <main>
        <Hero />
        <Hero2 />
        <Features />
        <Blog />
        <Product1 />
      </main>
    </>
  )
}