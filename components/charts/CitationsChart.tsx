import { Bar } from "react-chartjs-2";
import { TCitedBy } from "../../types/publication";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CitationsChart = (props: { data: TCitedBy }) => {
  const { data } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Danish Shakeel - Citations",
      },
    },
  };

  const labels = data.graph.map((dataPoint) => dataPoint.year);
  const chartData = {
    labels,
    datasets: [
      {
        data: data.graph.map((dataPoint) => dataPoint.citations),
        backgroundColor: "#0072F5",
      },
    ],
  };
  return <Bar options={options} data={chartData} />;
};

export default CitationsChart;
