<template>
  <Bar :chart-data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "walletbar",
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            backgroundColor: "rgba(78, 230, 92, 1)",
            borderColor: "#000",
            data: [0, 10, 60, 143, 0, 0, 0, 0, 0, 0, 0, 0],
            label: "Wallet Recharge",
          },
          {
            backgroundColor: 'rgba(255,99,132,1)',
            borderColor: "#000",
            data: [0, 0, 10, 50, 0, 0, 0, 0, 0, 0, 0, 0],
            label: "Wallet Refund",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  components: { Bar },
};
</script>

<style>
</style>