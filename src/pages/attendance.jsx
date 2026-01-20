import { useState } from "react";

export default function Attendance() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ali", status: "present" },
    { id: 2, name: "Ahmad", status: "absent" },
    { id: 3, name: "Hamza", status: "present" },
  ]);

  const toggleAttendance = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, status: emp.status === "present" ? "absent" : "present" }
          : emp
      )
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Animated card wrapper */}
        <div className="relative group card-enter">
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

          {/* Main card */}
          <div className="relative bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl transform group-hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Attendance Page
            </h1>

            {/* Table card */}
            <div className="mt-10 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-2xl overflow-x-auto">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Employee Attendance
                </h2>

                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-2 text-gray-300 font-semibold">
                        Employee Name
                      </th>
                      <th className="text-left py-3 px-2 text-gray-300 font-semibold">
                        Status
                      </th>
                      <th className="text-left py-3 px-2 text-gray-300 font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {employees.map((emp) => (
                      <tr
                        key={emp.id}
                        className="border-b border-white/10 hover:bg-white/5 transition duration-300"
                      >
                        <td className="py-4 px-2 text-white">{emp.name}</td>

                        <td
                          className={`py-4 px-2 font-bold ${
                            emp.status === "present"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {emp.status.charAt(0).toUpperCase() +
                            emp.status.slice(1)}
                        </td>

                        <td className="py-4 px-2">
                          <button
                            onClick={() => toggleAttendance(emp.id)}
                            className={`px-4 py-1.5 rounded-lg font-bold text-white shadow-lg transform transition duration-300 hover:scale-110 ${
                              emp.status === "present"
                                ? "bg-gradient-to-r from-green-500 to-green-600 hover:shadow-green-500/50"
                                : "bg-gradient-to-r from-red-500 to-red-600 hover:shadow-red-500/50"
                            }`}
                          >
                            {emp.status === "present" ? "P" : "A"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
      `}</style>
    </div>
  );
}
