import { assets } from "../assets/assets/frontend_assets/assets";

const Footer = () => {
  return (
    <>
      {/* Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo Section */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Threade Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Threade, we weave style into every thread. Explore timeless fashion, curated for your lifestyle.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Delivery Information</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:underline cursor-pointer">+1-233-222-4445</li>
            <li className="hover:underline cursor-pointer">contact@threade.com</li>
          </ul>
          <p className="mt-4 text-gray-500">
            We’d love to hear from you! Reach out for inquiries, feedback, or just to say hello.
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          © 2024 Threade - All Rights Reserved. Crafted with ❤️ for modern style lovers.
        </p>
      </div>
    </>
  );
};

export default Footer;
