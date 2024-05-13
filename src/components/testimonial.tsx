import vijay from "../assets/vijay.png";
import excla from "../assets/excl.png";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial" id="testimonial">
        <div className="flex items-center flex-col hero">
          <h1 className="block text-2xl">Testimonials</h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            tempora architecto, quia explicabo sit officiis reiciendis. Iusto
            quos esse alias id, sunt maiores nam beatae, dolores et recusandae
            neque quibusdam!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-16 gap-x-8 mt-4">
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et consectetur nemo soluta,{" "}
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Client</p>
              </div>
            </div>
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et consectetur nemo soluta,{" "}
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Client</p>
              </div>
            </div>{" "}
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et consectetur nemo soluta,{" "}
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Client</p>
              </div>
            </div>{" "}
            <div className="border border-[#9c9c9c] py-8 px-6 relative rounded">
              <span className="absolute" style={{ top: "-13px" }}>
                <img src={excla} alt="" />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                et consectetur nemo soluta,{" "}
              </p>
              <div className="flex items-center mt-4">
                <span className="profile">
                  <img src={vijay} alt="vijay" />
                </span>
                <p className="ml-4 text-lg text-white">Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
