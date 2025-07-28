export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Partner Manager at Microsoft",
      text: "Safra Consulting enabled us to scale technical delivery without sacrificing quality. Their white-label model fits perfectly with our client-first strategy.",
    },
    {
      name: "Sarah Khan",
      role: "COO, CloudTech Solutions",
      text: "The SPD Alliance support from Safra helped us pass Microsoft certifications and unlock co-sell benefits. Incredible value.",
    },
    {
      name: "Ali Merchant",
      role: "CTO, NexGen IT",
      text: "Their SDRs helped us generate qualified leads across 3 regions within the first month. Seamless experience!",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Client Success Stories
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Our clients trust us to deliver quality services under their brand.
          Here's what they say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm p-6">
            <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>
            <div className="text-sm font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-xs text-gray-500">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
