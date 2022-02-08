import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const scores = [3, 6, 2, 7, 3, 10, 3, 6, 9, 6, 11, 5]; //eje x
const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]; //eje y
const options = {
  fill: true,
  reponsive: true,
  scales: {
    y: {
      min: 0,
      max: 12,
    },
  },
};

function LineChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "movimientos",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(80, 135, 140)",
          pointRadius: 6,
          pointBackgroundColor: "rgba(80, 135, 140, 0.3)",
          backgroundColor: "rgba(65, 179, 95, 0.4)",
        },
      ],
      labels,
    };
  }, []);
  return <Line data={data} options={options} />;
}

export default LineChart;
