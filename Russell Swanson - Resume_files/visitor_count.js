const functionApi = 'https://cloudcvcounter.azurewebsites.net/api/HttpTrigger1?code=l1SRNhgPkbyCBuzrL5m-z3RGLZFdw1noC1ou6YPKgROPAzFu4Mt8UA==';
            
if (window.location.href.indexOf('cloudfront') > -1) { const functionApi = 'https://ro7w9atei3.execute-api.us-east-1.amazonaws.com/cloudcvcounter'; }
window.onload = fetch(functionApi)
    .then(response => response.json())
    .then(response => {document.getElementById('counter').innerHTML = response.visit_count;});

