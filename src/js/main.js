// Año dinámico en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Base para la API; cámbiala cuando tengas backend operativo
const API_BASE = "https://api.complianceflow.es/v1";
const DEMO_KEY = "YOUR_PUBLIC_DEMO_KEY";

// Helper para mostrar resultados en los <pre> de demo
function showDemoResult(id, data, ok = true) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = JSON.stringify(data, null, 2);
  el.style.borderColor = ok ? "#22c55e" : "#ef4444";
}

// Demo SII
const btnSii = document.getElementById("btn-demo-sii");
if (btnSii) {
  btnSii.addEventListener("click", async () => {
    const input = document.getElementById("demo-sii-file");
    const outId = "demo-sii-output";
    if (!input.files || !input.files[0]) {
      showDemoResult(outId, { error: "Selecciona primero una factura de prueba." }, false);
      return;
    }
    const fd = new FormData();
    fd.append("invoice_pdf", input.files[0]);
    showDemoResult(outId, { status: "Llamando a la API sandbox..." });
    try {
      const res = await axios.post(`${API_BASE}/sii/invoice`, fd, {
        headers: { "x-api-key": DEMO_KEY }
      });
      showDemoResult(outId, res.data, true);
    } catch (err) {
      showDemoResult(outId, err.response?.data || { error: "Error en la demo SII." }, false);
    }
  });
}

// Demo KYC
const btnKyc = document.getElementById("btn-demo-kyc");
if (btnKyc) {
  btnKyc.addEventListener("click", async () => {
    const input = document.getElementById("demo-kyc-files");
    const outId = "demo-kyc-output";
    const files = Array.from(input.files || []);
    if (files.length < 2) {
      showDemoResult(outId, { error: "Sube al menos un DNI y una selfie de prueba." }, false);
      return;
    }
    const fd = new FormData();
    files.forEach((f, i) => fd.append(`file_${i}`, f));
    showDemoResult(outId, { status: "Procesando documentos KYC de prueba..." });
    try {
      const res = await axios.post(`${API_BASE}/kyc/complete`, fd, {
        headers: { "x-api-key": DEMO_KEY }
      });
      const ok = (res.data.risk_score || 0) < 70;
      showDemoResult(outId, res.data, ok);
    } catch (err) {
      showDemoResult(outId, err.response?.data || { error: "Error en la demo KYC." }, false);
    }
  });
}

// Demo fraude
const btnFraud = document.getElementById("btn-demo-fraud");
if (btnFraud) {
  btnFraud.addEventListener("click", async () => {
    const textarea = document.getElementById("demo-fraud-input");
    const outId = "demo-fraud-output";
    let payload;
    try {
      payload = JSON.parse(textarea.value);
    } catch {
      showDemoResult(outId, { error: "JSON no válido." }, false);
      return;
    }
    showDemoResult(outId, { status: "Calculando score de riesgo..." });
    try {
      const res = await axios.post(`${API_BASE}/score/risk`, payload, {
        headers: {
          "x-api-key": DEMO_KEY,
          "Content-Type": "application/json"
        }
      });
      const ok = (res.data.risk_score || 0) < 70;
      showDemoResult(outId, res.data, ok);
    } catch (err) {
      showDemoResult(outId, err.response?.data || { error: "Error en la demo de fraude." }, false);
    }
  });
}
