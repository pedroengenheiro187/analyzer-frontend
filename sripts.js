<script>
  async function analyzeImages() {
    const image1 = document.getElementById('image1').files[0];
    const image2 = document.getElementById('image2').files[0];

    if (!image1 || !image2) {
      document.getElementById('result').innerText = 'Selecione duas imagens para análise.';
      return;
    }

    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);

    document.getElementById('result').innerText = 'Analisando imagens, aguarde...';

    try {
      const res = await fetch('https://analyzer3-0.onrender.com/analyze', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      document.getElementById('result').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('result').innerText = 'Erro ao analisar imagens: ' + error;
    }
  }
</script>

