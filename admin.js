// Только для админа (проверяй роль в token), дашборд со статистикой (Chart.js графики), формы для добавления объектов, клиентов и т.д.
import Chart from 'react-chartjs-2';

 // Пример графика
const data = {
  labels: ['Клиенты', 'Инвестиции'],
  datasets: [{ data: [100, 500000] }]
};

<Chart type="bar" data={data} />