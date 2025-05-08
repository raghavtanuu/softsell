import { FaShieldAlt, FaHandsHelping, FaClock } from "react-icons/fa";

const features = [
  { icon: <FaShieldAlt />, title: "Secure", text: "Your data is always encrypted and safe with us." },
  { icon: <FaHandsHelping />, title: "Customer Focused", text: "We provide excellent customer support throughout." },
  { icon: <FaClock />, title: "Fast", text: "We process your request and payment quickly." },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-blue-50 text-center">
    <h2 className="text-3xl font-semibold mb-10">Why Choose Us?</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
          <h3 className="font-bold text-xl">{feature.title}</h3>
          <p className="text-gray-600">{feature.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
