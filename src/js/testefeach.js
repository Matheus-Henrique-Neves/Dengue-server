
var dataArray=[];casosArray=[]
var UrLdaApi ="http://localhost:3000/dengue-data";
async function getapidenguedata(){
  
  const resposta= await fetch(UrLdaApi);
  const baraChartJS= await resposta.json()
  const caso = baraChartJS.map((x)=>x.casos);
  const data = baraChartJS.map((x)=>new Date(x.data_iniSE).toLocaleDateString());
  
  
  
  casosArray=caso;
  dataArray=data;
  console.log(caso)
  console.log(data)
  console.log(baraChartJS)
  
  }
  

async function generateChartjs(){
await getapidenguedata();
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataArray.reverse(),
      datasets: [{
        label: 'Casos de Dengue',
        data: casosArray.reverse(),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

generateChartjs()

























/*
// URL da API que você deseja acessar
const url = "https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=01&ey_start=2023&ew_end=52&ey_end=2023";
var dadosSelecionados=null
var datas=null
// Use fetch() para
fetch(url)
  .then(response => {
    // Verifique se a resposta da requisição é bem-sucedida (status 200)
    if (!response.ok) {
      throw new Error('Erro ao acessar a API');
    }
    // Parse a resposta como JSON
    return response.json();
  })
  .then(data => {
    // Aqui você pode manipular os dados recebidos da API
    console.log(data);

    // Suponha que você queira selecionar dados específicos do JSON retornado pela API
    // Por exemplo, se o JSON contém uma lista de objetos, e você deseja extrair um campo específico de cada objeto
     dadosSelecionados = data.map(objeto => objeto.casos);
     datas=data.map(objeto=>new Date(objeto.data_iniSE).toLocaleDateString());


    // 'dadosSelecionados' agora contém os dados específicos selecionados de cada objeto
    console.log(dadosSelecionados);
    console.log(datas);
  })
  .catch(error => {
    // Se ocorrer algum erro na requisição ou no processamento dos dados
    console.error('Erro:', error);
  });*/

