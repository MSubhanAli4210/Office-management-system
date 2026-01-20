export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative group card-enter">
          
          {/* Glow background */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

          {/* Main card */}
          <div className="relative bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl transform group-hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Welcome to Our Investment Dashboard
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              This dashboard provides an overview of key investment metrics and
              insights for professional investment firms, enabling data-driven
              decision-making and enhanced portfolio performance.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-linear-to-br from-purple-700 to-blue-700 p-4 rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <div className="h-12 bg-white/10 rounded mb-3"></div>
                  <p className="text-white text-sm">
                    Investment Feature {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-8 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition duration-300">
              Start Investing
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
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
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.9s ease-out;
        }
      `}</style>
    </div>
  );
}
