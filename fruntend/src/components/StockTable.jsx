import React from 'react';

const StockTable = () => {
  const stock = [
    [1, 'Vitamin C', '2025-01-14', '2021-10-24', '1500.00', 0],
    [2, 'Paracetamol', '2025-01-15', '2021-09-20', '100.00', 0],
    [3, 'Antibiotic', '2023-09-12', '2021-08-12', '250.00', 0],
    [4, 'Amoxil', '2024-12-11', '2022-01-17', '700.00', 0],
  ];

  return (
    <section className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Out of Stock</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>ID</th><th>Drug Name</th><th>Expire Date</th><th>Manufacture Date</th><th>Price</th><th>QTY</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(([id, name, expire, manufacture, price, qty]) => (
            <tr key={id} className="border-b">
              <td>{id}</td><td>{name}</td><td>{expire}</td><td>{manufacture}</td><td>{price}</td><td>{qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StockTable;
