import React, { useState } from 'react';

const plans = [
  { name: 'Standard', rate: 0.0134, fee: 0 },
  { name: 'Plus', rate: 0.0134, fee: 47.88 },
  { name: 'Premium', rate: 0.0168, fee: 107.88 },
  { name: 'Metal', rate: 0.0201, fee: 191.88 },
  { name: 'Ultra', rate: 0.0235, fee: 660.00 }
];

export default function App() {
  const [amount, setAmount] = useState(0);

  const rows = plans.map(plan => {
    const netReturn = (amount * plan.rate) - plan.fee;
    return { ...plan, netReturn };
  });

  const bestReturn = Math.max(...rows.map(r => r.netReturn));

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Revolut Savings Calculator</h1>

      <label className="block mb-2 font-medium">Enter amount in savings (€):</label>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g. 10000"
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Plan</th>
            <th className="border p-2 text-left">Net Return (€/year)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(plan => (
            <tr
              key={plan.name}
              className={
                plan.netReturn === bestReturn ? 'bg-green-100 font-semibold' : ''
              }
            >
              <td className="border p-2">{plan.name}</td>
              <td className="border p-2">€{plan.netReturn.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-center text-sm text-gray-500">
        {/* Add your AdSense snippet here */}
        <em>Advertisement</em>
        <div className="my-2">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
               data-ad-slot="xxxxxxxxxx"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  );
}
