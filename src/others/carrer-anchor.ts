import { RadarChart } from '@toast-ui/chart';
document.addEventListener('DOMContentLoaded', () => {
  const chartEl = document.getElementById('chart');
  const chartOptions = {
    chart: { width: 1200, height: 800 },
  };

  const ChartData = {
    categories: [
      '専門・職能別能力',
      '管理能力',
      '自律・独立',
      '保証・安定',
      '業家的創造性',
      '奉仕・社会貢献',
      '純粋な挑戦',
      'ワイフワークバランス',
    ],
    series: [
      {
        name: 'wate',
        data: [10, 6, 9, 2, 3, 8, 5, 6],
      }
    ]
  };
  const props = {
    el: chartEl,
    options: chartOptions,
    data: ChartData,
  };
  new RadarChart(props);
});

