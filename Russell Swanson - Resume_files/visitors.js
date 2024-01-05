
    const url = 'https://xolsy4ysjg.execute-api.us-east-1.amazonaws.com/Prod/CountFunction'

    window.onload = fetch(url)
    .then(response => response.json())
    .then(response => {
      document.getElementById('count').innerHTML = response.visitors;
    });