import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatientsChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">patients</h2>
      <Bar
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Patients',
              data: [2200, 2313, 2100, 2600, 2500, 2300, 2000],
              backgroundColor: '#6366F1',
            },
          ],
        }}
        options={{ responsive: true, plugins: { legend: { display: false } } }}
      />
      <div className="mt-4 text-sm">All time: 41,234</div>
    </div>
  );
};

export default PatientsChart;