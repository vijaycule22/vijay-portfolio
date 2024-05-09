import Navbar from "./components/navbar";
import vijay from "./assets/vijay.png";

function App() {
  return (
    <>
      <Navbar />

      <section className="home-section" id="Home">
        <div className="flex items-center justify-between hero">
          <div className="title-block">
            <h1>
              Front-End web <br />{" "}
              <span className="bg-[#bce1fb] px-1 rounded">Developer</span>
            </h1>
            <p>
              Hi, I'm Vijay. A passionate Front-end web Developer <br /> based
              in Hyderabad, India. 📍
            </p>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </div>
          </div>
          <div>
            <img className="vj-img" src={vijay} alt="vijay" />
          </div>
        </div>
        <div className="flex mt-10 hero items-center">
          <div className="mr-5">Tech Stack |</div>
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

      <section id="About" className="about"></section>
    </>
  );
}

export default App;
