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
          <p>At Threade, we believe fashion is more than just clothing—its a way to express yourself, celebrate your individuality, and create lasting impressions.</p>
          <p>Our journey began with a simple yet powerful vision: to redefine the online shopping experience. We set out to combine quality craftsmanship, stylish designs, and seamless convenience. Today, we are proud to be the trusted choice for countless happy customers who turn to us for their everyday essentials and special moments.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>We are dedicated to empowering you with choices that reflect your unique style and values. From sourcing premium fabrics to promoting sustainable practices, our mission is to create a positive impact—on you, our team, and the community.</p>
        </div>
      </div>

    <div className="text-xl py-4">
      <Title text1={'WHY '} text2={' CHOOSE US'} />
    </div>
   
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Uncompromising Quality:</b>
        <p className="text-gray-600">At Threade, quality is our promise. Every piece in our collection is meticulously crafted and inspected to meet the highest standards of durability, comfort, and style. Whether it’s a timeless classic or the latest trend, you can count on us to deliver the best.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Effortless Convenience:</b>
        <p className="text-gray-600">We’ve made shopping simple and stress-free. With an intuitive interface, secure payment options, and fast delivery, Threade fits perfectly into your busy lifestyle. From discovering your favorite styles to checkout, every step is designed to save you time and effort.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Service:</b>
        <p className="text-gray-600">Your satisfaction is our priority. Our friendly and responsive support team is here to ensure your shopping journey is smooth and delightful. Got a question or concern? We’re just a message away, ready to assist with care and a smile.</p>
      </div>
    </div>

    <NewsletterBox />
    </div>
  )
}

export default About