const testimonials = [
    {
      name: "John Doe",
      role: "Software Developer",
      company: "TechCorp",
      text: "SoftSell made it so easy to liquidate unused licenses and get paid quickly. Highly recommended!"
    },
    {
      name: "Jane Smith",
      role: "IT Manager",
      company: "Innovatech",
      text: "The process was seamless, and their customer service is exceptional. I'll be using SoftSell again."
    }
  ];
  
  const Testimonials = () => (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">Customer Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-bold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role} at {testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Testimonials;
  