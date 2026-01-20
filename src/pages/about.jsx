export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative group card-enter">
          
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

          {/* Card */}
          <div className="relative bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl transform group-hover:scale-105 transition duration-300 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Us
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
              We are a leading sales company dedicated to delivering exceptional
              products and services to our customers worldwide. With over 15
              years of industry experience, we pride ourselves on building
              lasting relationships through integrity, innovation, and
              outstanding customer support. Our team of dedicated professionals
              is committed to helping businesses grow and succeed in today’s
              competitive market.
            </p>

            <button className="px-10 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-enter {
          animation: cardEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.9s ease-out;
        }
      `}</style>
    </div>
  );
}
