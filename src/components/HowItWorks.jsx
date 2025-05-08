import { FaUpload, FaDollarSign, FaMoneyCheck } from "react-icons/fa";

const steps = [
  { icon: <FaUpload />, title: "Upload License", text: "Upload your unused license securely." },
  { icon: <FaDollarSign />, title: "Get Valuation", text: "Receive an instant market-based offer." },
  { icon: <FaMoneyCheck />, title: "Get Paid", text: "Approve and get paid directly." },
];

const HowItWorks = () => (
  <section className="py-16 text-center bg-white">
    <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
          <h3 className="font-bold text-xl">{step.title}</h3>
          <p className="text-gray-600">{step.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
