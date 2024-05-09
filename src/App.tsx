import vijay from "./assets/vijay.png";
import animage from "./assets/animage.svg";
import vjbg from "./assets/vjbg.jpeg";
import workicon from "./assets/workicon.png";
import c2hire from "./assets/c2hire-project.png";

function App() {
  return (
    <>
      <nav className="nav">
        <h2 className="font-bold">Vijay.dev</h2>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>

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
            <img className="vj-img pr-5" src={vijay} alt="vijay" />
          </div>
        </div>
        <div className="flex hero items-center tech-stack ">
          <div className="mr-5">Tech Stack |</div>
          <div className="flex">
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=html,css"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=js,ts"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=angular"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=react"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=tailwind,scss"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=mongodb"
              alt=""
            />
            <img
              className="pr-2 skill-icon"
              src="https://skillicons.dev/icons?i=nodejs"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="flex items-center justify-between hero">
          <div className="container">
            <div className="about-content">
              <div className="img-side">
                <img src={workicon} alt="emoji" className="work-emoji" />
                <img
                  src={vjbg}
                  alt="mee"
                  className="img-side__main-img shadow-lg rounded-lg"
                />
                <span className="shadow-lg rounded-lg">
                  <img src={animage} alt="text" />
                </span>
              </div>
              <div className="text-side">
                <span className="bg-[#bce1fb] font-bold p-1">About me</span>

                <div className="font-bold text-3xl my-4">
                  Front-end Developer <br /> based in Hyderabad, India 📍
                </div>
                <p>
                  Hey, my name is Vijay, and I'm a Frontend Developer. My
                  passion is to create and develop a clean UI/UX for my users.
                  <br />
                  <br />
                  My main stack currently is Angular,React and Node in
                  combination with Tailwind CSS and TypeScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="flex items-center justify-between hero">
          <div className="container">
            <span className="bg-[#bce1fb] font-bold p-1 mb-10 inline-block">
              Projects
            </span>
            <div className="flex items-center">
              <div className="w-1/2">
                <p className="font-bold text-3xl my-4">C2Hire.</p>
                <p className="description pr-8">
                  C2Hire. is the platform that stands and believes in the Vision
                  - the vision of making a difference to the Education
                  ecosystem.
                  <br />
                  <br />
                  <div className="inline-flex">
                    <img
                      className="mr-2 skill-icon h-6 shadow-md round-md"
                      src="https://skillicons.dev/icons?i=html"
                      alt=""
                    />
                    <img
                      className="mr-2 skill-icon h-6 shadow-md round-md"
                      src="https://skillicons.dev/icons?i=react"
                      alt=""
                    />
                    <img
                      className="mr-2 skill-icon h-6 shadow-md round-md"
                      src="https://skillicons.dev/icons?i=tailwind"
                      alt=""
                    />
                  </div>
                </p>
              </div>
              <div className="w-1/2">
                <div className="card flex justify-end">
                  <a
                    href="https://hardcore-galileo-246771.netlify.app/"
                    target="_blank"
                  >
                    <img
                      src={c2hire}
                      width={600}
                      alt=""
                      className="shadow-lg rounded-lg proj-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-24 opacity-70 font-bold">
              updating soon......
            </div>
            {/* 
            <div className="flex items-center mt-24">
              <div className="w-1/2">
                <div className="card flex justify-end">
                  <a
                    href="https://hardcore-galileo-246771.netlify.app/"
                    target="_blank"
                  >
                    <img
                      src={c2hire}
                      width={600}
                      alt=""
                      className="shadow-lg rounded-lg proj-img"
                    />
                  </a>
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-bold text-3xl my-4">C2Hire.</p>
                <p className="description pr-8">
                  C2Hire. is the platform that stands and believes in the Vision
                  - the vision of making a difference to the Education
                  ecosystem.
                  <br />
                  <br />
                  It is powered by a combined Management Experience of 100+
                  years effectively driving to build a Scalable, Secure &
                  Integrated platform with required transparency and with
                  built-in validation & verification mechanism.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="flex items-center justify-between hero">
          <div className="container">
            <span className="bg-[#bce1fb] font-bold p-1 mb-10 inline-block">
              Contact
            </span>

            <div className="flex">
              <div className="w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109966.53412125268!2d78.48506214638006!3d17.425885924590325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715237115910!5m2!1sen!2sin"
                  width="400"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="w-1/2">
                <p className="text-3xl font-bold mb-8">Hit me up! 👇</p>

                <div className="flex cnt-block shadow-lg">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="tabler-icon tabler-icon-mail"
                    >
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <p className="font-bold">Email</p>
                    <p>vjvijaykumar0@gmail.com</p>
                  </div>
                </div>

                <div className="flex cnt-block shadow-lg mt-4">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="tabler-icon tabler-icon-map-search"
                    >
                      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                      <path d="M9 4v13"></path>
                      <path d="M15 7v5"></path>
                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M20.2 20.2l1.8 1.8"></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <p className="font-bold">Location</p>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add footer */}
      <section className="bg-gray-800 text-white flex justify-center w-full">
        <div className="flex items-center justify-between hero">
          <div className="flex justify-between w-full py-16">
            <p className="text-xl">Copyright © 2024. All rights are reserved</p>
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
        </div>
      </section>
    </>
  );
}

export default App;
