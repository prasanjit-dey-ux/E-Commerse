import { assets } from "../assets/assets/frontend_assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"


function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean euismod, nunc et fermentum gravida, arcu ligula fringilla nunc, a bibendum metus orci at tortor. Curabitur laoreet, lorem vel fringilla congue, nisi ex tincidunt purus, nec pellentesque eros mi sit amet ligula.</p>
          <p>Our story began with a simple idea: making online shopping more enjoyable, reliable, and personal. Today, we are proud to serve thousands of happy customers who trust us to meet their everyday needs and special moments.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>We believe in empowering our customers with choices that reflect their values and lifestyles. From sourcing high-quality products to ensuring sustainable practices, we are dedicated to creating a positive impact in the lives of our customers, employees, and the community.</p>
        </div>
      </div>

    <div className="text-xl py-4">
      <Title text1={'WHY '} text2={' CHOOSE US'} />
    </div>
   
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">At ESHOP, we prioritize quality above all else. Every product in our collection undergoes rigorous testing and inspection to ensure it meets the highest standards of durability, functionality, and style. Whether you are shopping for everyday essentials or unique finds, you can trust us to deliver only the best.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className="text-gray-600">Shopping made simple, fast, and hassle-free. With an intuitive interface, secure payment options, and fast delivery services, Eshop is designed to fit seamlessly into your lifestyle. From browsing to checkout, we have optimized every step of the process to save you time and effort.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">Your satisfaction is our priority. Our dedicated support team is here to assist you every step of the way, ensuring a smooth and stress-free shopping experience. Got a question or concern? We hare just a message away, ready to resolve any issue with a smile.</p>
      </div>
    </div>

    <NewsletterBox />
    </div>
  )
}

export default About