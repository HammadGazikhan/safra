export default function Intro() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Smart. Scalable. Microsoft-focused.
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Safra is a modern Microsoft-focused consulting firm delivering SDR
          outsourcing,
          <span className="font-semibold text-gray-800">
            {" "}
            technical resource outsourcing
          </span>
          , software development, and strategic partner development services —
          all under a white-label model.
        </p>
        <p className="italic text-sm text-gray-500 mt-4">
          You maintain the client, we quietly deliver the project.
        </p>
      </div>
    </section>
  );
}
