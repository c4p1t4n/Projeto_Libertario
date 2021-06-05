const labelsBar = [
  'Politica',
  'Etica',
  'Economia',
  'Filosofia'
  ];
  const dataBar = {
    labels: labelsBar,
    datasets: [{
      label: 'Media de paginas por tema de livro',
      backgroundColor: [
      '#fd7e14',
      '#F0C802',
      '#FFEF86',
      'rgba(255, 205, 86, 0.7)',
    ],
    borderColor: [
    'rgb(255, 99, 132)',
      'rgb(47, 188, 0)',
      'rgb(255, 205, 86)',
      'rgb(255, 205, 86)',
    ],
    borderWidth: 1,
    data: [211, 310,388,365],
    }]
  };

  const configBar = {
  type: 'bar',
  data: dataBar,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  };

  var myChartBar = new Chart(
    document.getElementById('myChartBar'),
    configBar
  );

