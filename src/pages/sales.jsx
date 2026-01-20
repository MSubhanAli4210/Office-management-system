import { useState } from "react";

export default function Sales() {
  const [sales, setSales] = useState([
    {
      id: 1,
      product: "Premium Package",
      amount: 5000,
      date: "2024-01-15",
      status: "Completed",
    },
    {
      id: 2,
      product: "Standard Package",
      amount: 2500,
      date: "2024-01-14",
      status: "Pending",
    },
    {
      id: 3,
      product: "Enterprise Package",
      amount: 10000,
      date: "2024-01-13",
      status: "Completed",
    },
  ]);

  const [formData, setFormData] = useState({
    product: "",
    amount: "",
    status: "Pending",
  });

  const addSale = () => {
    if (formData.product && formData.amount) {
      setSales([
        ...sales,
        {
          id: Date.now(),
          product: formData.product,
          amount: parseFloat(formData.amount),
          date: new Date().toISOString().split("T")[0],
          status: formData.status,
        },
      ]);
      setFormData({ product: "", amount: "", status: "Pending" });
    }
  };

  const removeSale = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header card */}
        <div className="relative group card-enter">
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sales Dashboard
            </h1>
            <p className="text-gray-300 text-lg">
              Manage and track your sales transactions
            </p>
          </div>
        </div>

        {/* Add sale card */}
        <div className="relative group card-enter">
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Sale</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                className="bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="bg-slate-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option>Pending</option>
                <option>Completed</option>
              </select>

              <button
                onClick={addSale}
                className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition duration-300"
              >
                Add Sale
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-linear-to-br from-purple-700 to-blue-700 p-6 rounded-lg card-enter">
            <p className="text-gray-300 text-sm">Total Sales</p>
            <p className="text-3xl font-bold text-cyan-400">
              ${totalSales.toLocaleString()}
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-700 to-cyan-700 p-6 rounded-lg card-enter">
            <p className="text-gray-300 text-sm">Total Transactions</p>
            <p className="text-3xl font-bold text-cyan-400">{sales.length}</p>
          </div>
        </div>

        {/* Table */}
        <div className="relative group card-enter">
          <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 shadow-2xl overflow-x-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Sales List</h2>

            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {sales.map((sale) => (
                  <tr
                    key={sale.id}
                    className="border-b border-slate-700 hover:bg-slate-700/50 transition"
                  >
                    <td className="py-4 px-4">{sale.product}</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">
                      ${sale.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">{sale.date}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          sale.status === "Completed"
                            ? "bg-green-500/30 text-green-300"
                            : "bg-yellow-500/30 text-yellow-300"
                        }`}
                      >
                        {sale.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => removeSale(sale.id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Shared card animation */}
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
