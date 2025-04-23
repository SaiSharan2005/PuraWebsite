import React from "react";
import "./index.css";
import { FaLeaf, FaBoxOpen, FaHandHoldingHeart } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

// Main brand colors
const BRAND_PINK = "#e91b4d";
const BRAND_WHITE = "#fbfafa";
const BRAND_BROWN = "#392e21";
const BRAND_GOLD = "#dda325";
const BRAND_GRAY = "#a19e9a";

const features = [
  {
    icon: <GiCoffeeCup className="text-4xl text-brown-700" />,
    title: "Trusted Tradition",
  },
  {
    icon: <FaLeaf className="text-4xl text-green-600" />,
    title: "All-Natural Ingredients",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-yellow-600" />,
    title: "Convenient Packaging",
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-pink-500" />,
    title: "With Love",
  },
];

const products = [
  {
    name: "Chocolate Milk",
    price: "Rs. 35.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/Chocolate-Milk.png",
    alt: "Chocolate Milk",
  },
  {
    name: "Rose Milk",
    price: "Rs. 35.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/Rose-Milk.webp",
    alt: "Rose Milk",
  },
  {
    name: "Badam Milk",
    price: "Rs. 35.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/Badam-Milk.png",
    alt: "Badam Milk",
  },
  {
    name: "Ghee (200ml)",
    price: "Rs. 160.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/ghee.webp",
    alt: "Ghee 200ml",
  },
  {
    name: "Ghee (500ml)",
    price: "Rs. 380.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/ghee.webp",
    alt: "Ghee 500ml",
  },
  {
    name: "Ghee (1L)",
    price: "Rs. 760.00",
    image: "https://havepura.com/wp-content/uploads/2023/07/ghee.webp",
    alt: "Ghee 1L",
  },
];

function App() {
  return (
    <div className="font-sans">
      {/* HEADER - Matching original structure */}
      <header className="w-full  top-0 left-0 z-50 ">
        <div className="bg-[#ed1450] w-full">
          <div className="w-[100%]   flex justify-between py-3">
            {/* Left column with logo (2/5 width) */}
            <div className="w-[40%] pl-[4vw] ">
              <div className="max-w-[150px]">
                <a href="#">
                  <img
                    src="https://havepura.com/wp-content/uploads/2023/07/Logo.webp"
                    alt="PURA Logo"
                    className="w-full"
                  />
                </a>
              </div>
            </div>

            {/* Right column with menu (3/5 width) */}
            <div className="w-[60%] flex items-center justify-end px-[4vw]">
              {/* Desktop menu */}
              <div className="hidden md:block">
                <nav>
                  <ul className="flex space-x-6 text-white">
                    <li>
                      <a href="#products" className="hover:opacity-80">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:opacity-80">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile menu icon */}
              <div className="md:hidden">
                <div className="text-white">
                  <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
                  <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Exact match to original */}
      <section
        className="relative w-full flex flex-col justify-start overflow-hidden"
        style={{
          backgroundImage:
            "url(https://havepura.com/wp-content/uploads/2023/07/Banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "95vh",
          backgroundColor: BRAND_PINK,
        }}
      >
        <div className="w-[90%]  mx-auto z-10 pt-[10px]">
          <div className="flex flex-col items-start">
            <div className="pl-[5%]">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                A Delicious and
                <br />
                Nutritious Treat
                <br />
                for All Ages
              </h1>

              <div className="mt-5 text-lg md:text-xl xl:text-2xl text-white leading-relaxed">
                Satisfy Your Cravings with Our Delicious
                <br />
                and Nutritious Flavored Milk!
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-white text-[#e21b48] px-6 py-2 rounded-md font-semibold text-base hover:bg-opacity-90 transition"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The exact triple-wave divider pattern from original site */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div
            className="et_pb_bottom_inside_divider"
            style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDMuNEMxMDUwLjU5IDE4IDEwMTkuNCA4NC44OSA3MzQuNDIgODQuODljLTMyMCAwLTMyMC04NC4zLTY0MC04NC4zQzU5LjQuNTkgMjguMiAxLjYgMCAzLjRWMTQwaDEyODB6IiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTAgMjQuMzFjNDMuNDYtNS42OSA5NC41Ni05LjI1IDE1OC40Mi05LjI1IDMyMCAwIDMyMCA4OS4yNCA2NDAgODkuMjQgMjU2LjEzIDAgMzA3LjI4LTU3LjE2IDQ4MS41OC04MFYxNDBIMHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMTI4MCA1MS43NmMtMjAxIDEyLjQ5LTI0Mi40MyA1My40LTUxMy41OCA1My40LTMyMCAwLTMyMC01Ny02NDAtNTctNDguODUuMDEtOTAuMjEgMS4zNS0xMjYuNDIgMy42VjE0MGgxMjgweiIvPjwvZz48L3N2Zz4=")`,
              backgroundSize: "100% 100px",
              height: "100px",
              bottom: 0,
              zIndex: 1,
            }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              <div className="animate-fadeInUp">
                {/** Icon size increased here **/}
                {React.cloneElement(feature.icon, {
                  className: feature.icon.props.className.replace(
                    /text-\d+xl/,
                    "text-6xl"
                  ),
                })}
              </div>
              <h4 className="text-2xl font-semibold">{feature.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <h2 className="text-5xl font-bold mb-4 text-black py-1">
                Our Mission!
              </h2>
              <p className="text-xl text-black mb-3">
                To establish ourselves as a reputable national brand known for
                providing healthy and top-quality products.
              </p>
              <p className="text-xl text-black">
                We are dedicated to introduce a diverse range of high-quality
                products in the near future, and to make them readily available
                to our customers through innovative and convenient channels.
              </p>
            </div>
            {/* Image */}
            <div>
              <img
                src="https://havepura.com/wp-content/uploads/2023/07/girl_with_milk.webp"
                alt="Girl with milk"
                loading="lazy"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://havepura.com/wp-content/uploads/2023/07/Ghee.png"
                alt="Ghee"
                loading="lazy"
                className="w-full h-auto rounded-lg "
              />
            </div>
            {/* Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-bold mb-4 text-black py-1">
                Our Vision!
              </h2>
              <p className="text-xl text-black mb-3">
                To ensure that every individual has access to high-quality
                products that meet their needs and expectations.
              </p>
              <p className="text-xl text-black">
                We are committed to delivering excellence in our products and
                services and to making our offerings accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-white py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-4 animate-fadeInUp"
          >
            {/* Removed mix-blend-screen so the image will actually show */}
            <img
              src={prod.image}
              alt={prod.alt}
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
            <h4 className="text-xl font-semibold text-black text-center">
              {prod.name}
            </h4>
            <p className="text-lg font-bold text-[#e91b4d] text-center">
              {prod.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>



      {/* CONTACT SECTION */}
      <div id="contact" className="bg-white py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
          {/* Contact info block */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-12 text-gray-700">
            <p className="mb-3">
              Please feel free to contact us using the form or the details
              provided. We value your input and strive to provide excellent
              customer service.
              <br />
              <br />
              We strive to provide excellent customer service and will do our
              best to respond to your inquiry as quickly as possible. Thanks
              again for considering our products!
            </p>
            <div className="mb-2">
              <span className="font-semibold">Phone:</span> <br />
              +91 95501 96069
              <br />
              040 3516 9601
            </div>
            <div className="mb-2">
              <span className="font-semibold">Email:</span> <br />
              contact@havepura.com
            </div>
            <div>
              <span className="font-semibold">Address:</span> <br />
              H-14/A, Gona Creamlines IDA, Uppal, Hyderabad, Telangana - 500039
            </div>
          </div>
          {/* Form */}
          <form className="flex-1 bg-[#fcfcfc] rounded-lg shadow p-6 flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="name">
                Name *
              </label>
              <input
                required
                type="text"
                id="name"
                className="border p-2 rounded focus:outline-[#e91b4d]"
                maxLength={100}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="email">
                Email *
              </label>
              <input
                required
                type="email"
                id="email"
                className="border p-2 rounded focus:outline-[#e91b4d]"
                maxLength={100}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1" htmlFor="message">
                Message *
              </label>
              <textarea
                required
                id="message"
                className="border p-2 rounded focus:outline-[#e91b4d] min-h-[80px]"
                maxLength={600}
              />
              <span className="text-xs text-gray-500 mt-1">
                0 of 600 max characters
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#e91b4d] text-white px-6 py-2 rounded font-bold hover:bg-[#fc70ae] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative w-full mt-8">
        {/* Wavy top section with logo */}
        <div
          style={{ background: BRAND_PINK }}
          className="relative w-full pb-8 pt-16"
        >
          {/* Wavy top edge SVG */}
          <div
            className="absolute top-0 left-0 w-full overflow-hidden"
            style={{ transform: "translateY(-99%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "120px", display: "block" }}
            >
              <path
                fill={BRAND_PINK}
                d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="https://ext.same-assets.com/1329095616/2951460876.webp"
              alt="PURA Logo"
              className="h-24"
            />
          </div>

          {/* Horizontal divider */}
          <div className="w-5/6 mx-auto border-t border-white opacity-30 my-4"></div>

          {/* Copyright text - left aligned */}
          <div className="w-5/6 mx-auto">
            <div className="text-white text-sm">
              2023 © All Right reserved to PURA. Powered by Qressy
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
