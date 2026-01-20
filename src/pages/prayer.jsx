import { useState, useEffect } from "react";
import Axios from "axios";

export default function Prayer() {
  const [prayerTimings, setPrayerTimings] = useState([]);

  useEffect(() => {
    fetchPrayerTimings();
  }, []);

  const fetchPrayerTimings = async () => {
    try {
      const res = await Axios.get(
        "http://api.aladhan.com/v1/calendar/2026/1?latitude=51.508515&longitude=-0.1254872&method=2"
      );

      const result = res.data.data.map((day) => ({
        date: day.date.gregorian.date,
        Fajr: day.timings.Fajr,
        Dhuhr: day.timings.Dhuhr,
        Asr: day.timings.Asr,
        Maghrib: day.timings.Maghrib,
        Isha: day.timings.Isha,
      }));

      setPrayerTimings(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated card wrapper */}
        <div className="relative group card-enter">
          
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

          {/* Card */}
          <div className="relative bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
              Prayer Timings Calendar
            </h1>

            <p className="text-gray-300 text-center mb-8">
              Monthly prayer timings displayed in a calendar-style table
            </p>

            <div className="flex justify-center mb-6">
              <button
                onClick={fetchPrayerTimings}
                className="px-8 py-3 bg-linear-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-110 transition duration-300"
              >
                Refresh Timings
              </button>
            </div>

            {/* Calendar Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 text-gray-300">Date</th>
                    <th className="py-3 text-gray-300">Fajr</th>
                    <th className="py-3 text-gray-300">Dhuhr</th>
                    <th className="py-3 text-gray-300">Asr</th>
                    <th className="py-3 text-gray-300">Maghrib</th>
                    <th className="py-3 text-gray-300">Isha</th>
                  </tr>
                </thead>

                <tbody>
                  {prayerTimings.map((day, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 hover:bg-white/5 transition duration-300"
                    >
                      <td className="py-3 text-white font-semibold">
                        {day.date}
                      </td>
                      <td className="py-3 text-cyan-400">{day.Fajr}</td>
                      <td className="py-3 text-blue-400">{day.Dhuhr}</td>
                      <td className="py-3 text-purple-400">{day.Asr}</td>
                      <td className="py-3 text-orange-400">{day.Maghrib}</td>
                      <td className="py-3 text-green-400">{day.Isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Card animation */}
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
      `}</style>
    </div>
  );
}
