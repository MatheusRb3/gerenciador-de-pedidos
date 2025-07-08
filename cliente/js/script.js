

function toggleHistorico() {
      const historicoSec = document.getElementById('historicoSection');
      const qrSec = document.getElementById('qrSection');
      const comandaSec = document.getElementById('comandaSection');
      const btn = document.getElementById('btnHistorico');

      if (historicoSec.style.display === 'none') {
        historicoSec.style.display = 'block';
        qrSec.style.display = 'none';
        comandaSec.style.display = 'none';
        btn.textContent = 'Ocultar Histórico';
      } else {
        historicoSec.style.display = 'none';
        qrSec.style.display = 'block';
        comandaSec.style.display = 'block';
        btn.textContent = 'Ver Histórico';
      }
    }

    function abrirCamera() {
      const reader = document.getElementById("reader");
      reader.style.display = "block";

      const html5QrCode = new Html5Qrcode("reader");

      html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        qrCodeMessage => {
          html5QrCode.stop().then(() => {
            reader.innerHTML = "";
            reader.style.display = 'none';

            if (/mesa\s*\d+/i.test(qrCodeMessage)) {
              const iniciar = confirm(`${qrCodeMessage} identificada! Deseja iniciar a comanda?`);
              if (iniciar) {
                alert('Comanda iniciada com sucesso!');
              } else {
                alert('A comanda não foi iniciada.');
              }
            } else {
              alert('QR Code inválido. Certifique-se de escanear o código correto da mesa.');
            }
          }).catch(err => {
            alert("Erro ao parar leitura: " + err);
          });
        },
        errorMessage => {
          // Pode ser ignorado ou usado para feedback
        }
      ).catch(err => {
        alert("Erro ao iniciar a câmera: " + err);
      });
    }