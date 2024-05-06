import Navbar from "./components/navbar"

function App() {
  return (
    <>
    <Navbar /> 

    <section className="home-section" id="Home">
      <div className="flex items-center justify-between hero">
        <div className="title-block">
          <h1>Front-End web <br /> <span className="bg-[#bce1fb] px-1 rounded">Developer</span></h1>
          <p>Hi, I'm Vijay. A passionate Front-end web Developer <br /> based in Hyderabad, India. 📍</p>
        </div>
        <div>
          <img className="vj-imng" src="./vijay.png" alt="vijay"/>
        </div>
      </div>
      <div className="flex mt-10 hero items-center">
        <div className="mr-5">Tech Stack  |</div>
        <div className="flex">
          <img src="https://skillicons.dev/icons?i=html,css" alt="" />
          <img src="https://skillicons.dev/icons?i=js,ts" alt="" />
          <img src="https://skillicons.dev/icons?i=angular" alt="" />
          <img src="https://skillicons.dev/icons?i=react" alt="" />
          <img src="https://skillicons.dev/icons?i=tailwind,scss" alt="" />
          <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
          <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
        </div>
      </div>
    </section>

    <section id="About" className="about">

    </section>
    </>
  )
}

export default App
