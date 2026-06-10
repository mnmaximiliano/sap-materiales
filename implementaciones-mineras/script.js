const implementaciones = [
  {
    nombre: "Implementación de corta corriente",
    items: [
      { cod: "ELE000681", nom: "Bornes de Batería", qty: 2 },
      { cod: "ELE002239", nom: "Cable 2,0 AWG Flexible", qty: 7 },
      { cod: "ELE000165", nom: "Caja Galvanizada", qty: 1 },
      { cod: "ELE001481", nom: "Corta Corriente tipo CAT", qty: 1 },
      { cod: "INS000155", nom: "Espuma Expansiva", qty: 1 },
      { cod: "PIN000045", nom: "Spray Rojo", qty: 1 },
      { cod: "ELE001490", nom: "Terminal ojo 2,0 AWG", qty: 4 }
    ]
  },
  {
    nombre: "Implementación baliza azul",
    items: [
      { cod: "ELE000081", nom: "Baliza azul", qty: 1 },
      { cod: "ELE002609", nom: "Cable de 2 vías", qty: 4 },
      { cod: "ELE002584", nom: "Base Adhesiva", qty: 10 },
      { cod: "ELE000848", nom: "Terminales paleta macho", qty: 4 },
      { cod: "ELE000691", nom: "Terminal paleta hembra", qty: 4 },
      { cod: "HER000015", nom: "Cinta aislante", qty: 1 },
      { cod: "INS000008", nom: "Cinta de goma autofusión", qty: 1 },
      { cod: "ELE002580", nom: "Amarras plásticas 200 mm", qty: 15 }
    ]
  },
  {
    nombre: "Implementación baliza ámbar",
    items: [
      { cod: "ELE000080", nom: "Baliza ámbar", qty: 1 },
      { cod: "ELE002609", nom: "Cable de 2 vías", qty: 4 },
      { cod: "ELE002584", nom: "Base Adhesiva", qty: 10 },
      { cod: "ELE000848", nom: "Terminales paleta macho", qty: 4 },
      { cod: "ELE000691", nom: "Terminal paleta hembra", qty: 4 },
      { cod: "HER000015", nom: "Cinta aislante", qty: 1 },
      { cod: "INS000008", nom: "Cinta de goma autofusión", qty: 1 },
      { cod: "ELE002580", nom: "Amarras plásticas 200 mm", qty: 15 }
    ]
  },
  {
    nombre: "Implementación parada de emergencia adicional",
    items: [
      { cod: "ELE002609", nom: "Cable de 2 vías", qty: 7 },
      { cod: "ELE002584", nom: "Base Adhesiva", qty: 20 },
      { cod: "ELE000848", nom: "Terminales paleta macho", qty: 5 },
      { cod: "ELE000691", nom: "Terminal paleta hembra", qty: 5 },
      { cod: "HER000015", nom: "Cinta aislante", qty: 1 },
      { cod: "INS000008", nom: "Cinta de goma autofusión", qty: 1 },
      { cod: "ELE000468", nom: "Parada emergencia completa con caja", qty: 1 },
      { cod: "ELE002580", nom: "Amarras plásticas 200 mm", qty: 15 }
    ]
  },
  {
    nombre: "Implementación cinta reflectante",
    items: [
      { cod: "ADH000219", nom: "Rollo cinta reflectante verde limón", qty: null, multiplier: 45, hint: "Ingresa rollos: 1 = 45, 2 = 90, 3 = 135" }
    ]
  },
  {
    nombre: "Implementación bocina de retroceso",
    items: [
      { cod: "ELE000059", nom: "Alarma de retroceso", qty: 1 },
      { cod: "ELE002609", nom: "Cable de 2 vías", qty: 3 },
      { cod: "ELE000703", nom: "Terminal ojo 5 mm", qty: 2 },
      { cod: "HER000015", nom: "Cinta aislante", qty: 1 }
    ]
  },
  {
    nombre: "Implementación checkpoints",
    items: [
      { cod: "MEC000830", nom: "Checkpoint 17 mm", qty: null },
      { cod: "MEC001540", nom: "Checkpoint 18 mm", qty: null },
      { cod: "MEC001132", nom: "Checkpoint 19 mm", qty: null },
      { cod: "MEC001322", nom: "Checkpoint 21 mm", qty: null },
      { cod: "MEC001342", nom: "Checkpoint 22 mm", qty: null },
      { cod: "MEC001275", nom: "Checkpoint 24 mm", qty: null },
      { cod: "HER000112", nom: "Checkpoint 25 mm", qty: null },
      { cod: "MEC001345", nom: "Checkpoint 26 mm", qty: null },
      { cod: "MEC000841", nom: "Checkpoint 27 mm", qty: null },
      { cod: "MEC001326", nom: "Checkpoint 30 mm", qty: null },
      { cod: "MEC001616", nom: "Checkpoint 32 mm", qty: null },
      { cod: "MEC001327", nom: "Checkpoint 33 mm", qty: null },
      { cod: "MEC000816", nom: "Checkpoint 38 mm", qty: null },
      { cod: "MEC000757", nom: "Checkpoint 41 mm", qty: null },
      { cod: "MEC001320", nom: "Checkpoint para medidas sin código creado", qty: null }
    ]
  },
  {
    nombre: "Implementación de pértiga",
    items: [
      { cod: "ELE000775", nom: "Pértiga completa de 8 pies", qty: null },
      { cod: "ELE002499", nom: "Pértiga de 10 pies", qty: null },
      { cod: "ELE002909", nom: "Pértiga de 12 pies", qty: null },
      { cod: "ELE000080", nom: "Baliza ámbar", qty: 1 },
      { cod: "ELE002609", nom: "Cable de 2 vías", qty: 4 },
      { cod: "ELE002584", nom: "Base Adhesiva", qty: 10 },
      { cod: "ELE000848", nom: "Terminales paleta macho", qty: 4 },
      { cod: "ELE000691", nom: "Terminal paleta hembra", qty: 4 },
      { cod: "HER000015", nom: "Cinta aislante", qty: 1 },
      { cod: "INS000008", nom: "Cinta de goma autofusión", qty: 1 },
      { cod: "ELE002580", nom: "Amarras plásticas 200 mm", qty: 15 }
    ]
  },
  {
    nombre: "Implementación manual de operación",
    items: [
      { cod: "LOGALO0010", nom: "Imprimir manual de equipo", qty: 1 },
      { cod: "MEC003191", nom: "Porta documentos (manual)", qty: null }
    ]
  },
  {
    nombre: "Implementación adhesivos de seguridad",
    items: [
      { cod: "LOGALO0192", nom: "Logo altura máxima", qty: null },
      { cod: "LOGALO0242", nom: "Logo altura máxima plegada", qty: null },
      { cod: "LOGALO0181", nom: "Logo apagado", qty: null },
      { cod: "LOGALO0196", nom: "Logo baliza", qty: null },
      { cod: "LOGALO0185", nom: "Logo batería", qty: null },
      { cod: "LOGALO0182", nom: "Logo corta corriente", qty: null },
      { cod: "LOGALO0186", nom: "Logo encendido", qty: null },
      { cod: "LOGALO0188", nom: "Logo estanque hidráulico", qty: null },
      { cod: "LOGALO0103", nom: "Logo extintor", qty: null },
      { cod: "LOGALO0187", nom: "Logo no fumar", qty: null },
      { cod: "LOGALO0195", nom: "Logo no interrumpir al operador", qty: null },
      { cod: "LOGALO0191", nom: "Logo parada de emergencia", qty: null },
      { cod: "LOGALO0193", nom: "Logo pértiga", qty: null },
      { cod: "LOGALO0184", nom: "Logo petróleo", qty: null },
      { cod: "LOGALO0206", nom: "Logo prohibido uso de celular", qty: null },
      { cod: "LOGALO0197", nom: "Logo punto de bloqueo", qty: null },
      { cod: "LOGALO0194", nom: "Logo TARA", qty: null },
      { cod: "LOGALO0023", nom: "Logo carga máxima", qty: null },
      { cod: "ADH000578", nom: "Logo solo personal autorizado", qty: null },
      { cod: "LOGALO0010", nom: "Logo diagrama de carga", qty: null },
      { cod: "LOGALO0010", nom: "Logo cercanías eléctricas", qty: null }
    ]
  },
  {
    nombre: "Implementación cuñas y portacuñas",
    items: [
      { cod: "HER000018", nom: "Cuña 20 toneladas (un)", qty: null },
      { cod: "MEC000237", nom: "Portacuña 20 toneladas (un)", qty: null }
    ]
  },
  {
    nombre: "Implementación protección de partes móviles",
    items: [
      { cod: "MEC001304", nom: "Malla galvanizada", qty: 1 },
      { cod: "INS000208", nom: "Spray amarillo", qty: 1 }
    ]
  },
  {
    nombre: "Implementación de extintor",
    items: [
      { cod: "HER000047", nom: "Extintor 10 kg", qty: null },
      { cod: "REP000058", nom: "Recarga de extintor con sello azul", qty: null },
      { cod: "MEC000297", nom: "Soporte extintor", qty: null }
    ]
  },
  {
    nombre: "Implementación adhesivos patente equipo",
    items: [
      { cod: "LOGALO0010", nom: "Patente grande 25x30 cm", qty: null },
      { cod: "LOGALO0010", nom: "Patente pequeña 15x25 cm", qty: null }
    ]
  },
  {
    nombre: "Implementación adhesivos dimensiones de equipo",
    items: [
      { cod: "LOGALO0010", nom: "Largo del equipo 25x40 cm", qty: null },
      { cod: "LOGALO0010", nom: "Ancho del equipo 25x40 cm", qty: null },
      { cod: "LOGALO0010", nom: "Altura del equipo 25x40 cm", qty: null },
      { cod: "LOGALO0010", nom: "Ancho extendido estabilizadores 30x10 cm", qty: null }
    ]
  },
  {
    nombre: "Implementación de bitácora",
    items: [
      { cod: "LOGALO0010", nom: "Bitácora tamaño carta con hojas numeradas y patente en tapa", qty: 1 }
    ]
  }
];

function crearFormulario() {
  const contenedor = document.getElementById("formulario");
  contenedor.innerHTML = "";

  implementaciones.forEach((grupo, gIndex) => {
    const section = document.createElement("div");
    section.className = "section";
    section.dataset.group = gIndex;

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
      <input type="checkbox" id="grupo-${gIndex}" onchange="toggleGrupo(${gIndex}, this.checked)">
      <label for="grupo-${gIndex}" style="margin:0; color:white; cursor:pointer;">${grupo.nombre}</label>
    `;

    const body = document.createElement("div");
    body.className = "section-body";

    grupo.items.forEach((item, iIndex) => {
      const row = document.createElement("div");
      row.className = "item-row";
      const defaultValue = item.qty !== null ? item.qty : "";
      const placeholder = item.multiplier ? "Rollos" : "Cant.";
      const step = 1;

      row.innerHTML = `
        <span class="code">${item.cod}</span>
        <span class="name">${item.nom}${item.hint ? `<div class="hint">${item.hint}</div>` : ""}</span>
        <input
          type="number"
          class="qty-input"
          min="0"
          step="${step}"
          value="${defaultValue}"
          placeholder="${placeholder}"
          data-group="${gIndex}"
          data-index="${iIndex}"
          disabled
          oninput="generarSalida()"
        >
      `;
      body.appendChild(row);
    });

    section.appendChild(header);
    section.appendChild(body);
    contenedor.appendChild(section);
  });
}

function toggleGrupo(gIndex, activo) {
  const section = document.querySelector(`.section[data-group="${gIndex}"]`);
  section.classList.toggle("active", activo);

  const inputs = document.querySelectorAll(`.qty-input[data-group="${gIndex}"]`);
  inputs.forEach(input => {
    const item = implementaciones[gIndex].items[input.dataset.index];
    input.disabled = !activo;

    if (activo && item.qty !== null && input.value === "") {
      input.value = item.qty;
    }

    if (!activo) {
      input.value = item.qty !== null ? item.qty : "";
    }
  });

  generarSalida();
}

function obtenerDatosGenerales() {
  return {
    cliente: document.getElementById("cliente").value.trim(),
    faena: document.getElementById("faena").value.trim(),
    equipo: document.getElementById("equipo").value.trim(),
    om: document.getElementById("om").value.trim(),
    solicitante: document.getElementById("solicitante").value.trim(),
    observacion: document.getElementById("observacion").value.trim()
  };
}

function generarSalida(mostrarAlerta = false) {
  const datos = obtenerDatosGenerales();
  const consolidado = new Map();
  const errores = [];

  implementaciones.forEach((grupo, gIndex) => {
    const activo = document.getElementById(`grupo-${gIndex}`).checked;
    if (!activo) return;

    grupo.items.forEach((item, iIndex) => {
      const input = document.querySelector(`.qty-input[data-group="${gIndex}"][data-index="${iIndex}"]`);
      const cantidadIngresada = Number(input.value);

      if (!cantidadIngresada || cantidadIngresada <= 0) return;

      const cantidad = item.multiplier
        ? cantidadIngresada * item.multiplier
        : cantidadIngresada;

      const codigo = item.cod.trim();

      if (!consolidado.has(codigo)) {
        consolidado.set(codigo, {
          codigo,
          cantidad: 0,
          detalles: []
        });
      }

      const registro = consolidado.get(codigo);
      registro.cantidad += cantidad;

      if (item.multiplier) {
        registro.detalles.push(`${grupo.nombre} - ${item.nom} (${cantidadIngresada} x ${item.multiplier} = ${cantidad})`);
      } else {
        registro.detalles.push(`${grupo.nombre} - ${item.nom} (${cantidad})`);
      }
    });
  });

  if (errores.length > 0 && mostrarAlerta) {
    alert(errores.join("\n"));
  }

  let texto = "CODIGO\tCANTIDAD\tEQUIPO\tCLIENTE\tFAENA\tOM_SD\tSOLICITANTE\tDETALLE\tOBSERVACION\n";

  const filas = Array.from(consolidado.values()).sort((a, b) => a.codigo.localeCompare(b.codigo));

  filas.forEach(reg => {
    texto += `${reg.codigo}\t${reg.cantidad}\t${datos.equipo}\t${datos.cliente}\t${datos.faena}\t${datos.om}\t${datos.solicitante}\t${reg.detalles.join(" | ")}\t${datos.observacion}\n`;
  });

  document.getElementById("salida").value = filas.length > 0 ? texto : "";
  document.getElementById("contadorMateriales").textContent = `Materiales seleccionados: ${filas.length}`;
  return filas.length > 0;
}

function copiarSalida() {
  generarSalida(true);
  const salida = document.getElementById("salida");

  if (!salida.value.trim()) {
    alert("No hay datos para copiar.");
    return;
  }

  navigator.clipboard.writeText(salida.value)
    .then(() => alert("Información copiada. Puedes pegarla directamente en Excel."))
    .catch(() => {
      salida.select();
      document.execCommand("copy");
      alert("Información copiada. Puedes pegarla directamente en Excel.");
    });
}

function descargarTSV() {
  const hayDatos = generarSalida(true);
  const salida = document.getElementById("salida").value;

  if (!hayDatos || !salida.trim()) {
    alert("No hay datos para descargar.");
    return;
  }

  const datos = obtenerDatosGenerales();
  const equipo = datos.equipo || "sin-equipo";
  const nombreArchivo = `implementaciones-${equipo}.tsv`.replace(/[^a-zA-Z0-9._-]/g, "-");
  const blob = new Blob([salida], { type: "text/tab-separated-values;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = nombreArchivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function enviarWhatsApp() {
  const hayDatos = generarSalida(true);
  const salida = document.getElementById("salida").value.trim();

  if (!hayDatos || !salida) {
    alert("No hay datos para enviar.");
    return;
  }

  const destinoWhatsApp = document.getElementById("destinoWhatsApp").value;

  if (!destinoWhatsApp) {
    alert("Debes seleccionar a quién enviar por WhatsApp.");
    return;
  }

  const datos = obtenerDatosGenerales();
  const encabezado = `Solicitud implementación kit minero - Equipo: ${datos.equipo || "Sin equipo"}

`;
  const url = `https://wa.me/${destinoWhatsApp}?text=${encodeURIComponent(encabezado + salida)}`;
  window.open(url, "_blank");
}

function limpiarFormulario() {
  if (!confirm("¿Deseas limpiar el formulario?")) return;

  document.querySelectorAll("input[type='text']").forEach(input => input.value = "");
  document.querySelectorAll(".section-header input[type='checkbox']").forEach(chk => chk.checked = false);
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));

  document.querySelectorAll(".qty-input").forEach(input => {
    const gIndex = input.dataset.group;
    const iIndex = input.dataset.index;
    const item = implementaciones[gIndex].items[iIndex];
    input.value = item.qty !== null ? item.qty : "";
    input.disabled = true;
  });

  document.getElementById("salida").value = "";
  document.getElementById("contadorMateriales").textContent = "Materiales seleccionados: 0";
}

crearFormulario();