<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

// Пример данных для графика (замените на реальные)
const chartData = {
  labels: ["2025-09-18", "2025-09-19", "2025-09-20"],
  datasets: [
    {
      label: "Количество на складе",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: [3, 2, 5],
      fill: true,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div style="height: 400px">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
