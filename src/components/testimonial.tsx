import vijay from "../assets/vijay.png";
import excla from "../assets/excl.png";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial" id="testimonial">
        <div className="flex items-center flex-col hero">
          <h1 className="block text-2xl">Testimonials</h1>
          <p className="mb-8">
            Client satisfaction is at the heart of everything I do. I've worked
            with some amazing individuals and companies, helping them bring
            their web projects to life. Below are some of the testimonials from
            clients who have experienced my dedication and expertise first-hand.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-16 gap-x-8 mt-4">
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                "Vijay's front-end skills are top-notch. He delivered
                high-quality work on time and exceeded our expectations."
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">John Doe</p>
              </div>
            </div>
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                "Vijay transformed our website's user experience with his
                expertise in Angular and React. Highly recommended!"
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Jane Smith</p>
              </div>
            </div>{" "}
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                "Vijay tackled our complex project with innovative solutions and
                clear communication. Great to work with!"
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Michael Johnson</p>
              </div>
            </div>{" "}
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                "Vijay's dedication and web development skills greatly improved
                our web application. Excellent work!"
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Sarah Brown</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
