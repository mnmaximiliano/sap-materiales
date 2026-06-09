const WEG_MULTIPLIER = 3.6;
const DEFAULT_WHATSAPP_NUMBER = "56995320821";
const STORAGE_KEY = "materiales-pintura-whatsapp";

const MATERIAL_CATEGORIES = [
  {
    name: "PINTURAS",
    items: [
      { code: "PIN000194", name: "(N) AMARILLO EAGER BEAVER - ALT" },
      { code: "PIN000065", name: "(N) AZUL GENIE WEG" },
      { code: "PIN000178", name: "(N) BARNIZ H5 PIUS SIKKEN 5 LTS - ALT" },
      { code: "PIN000015", name: "(N) BEIGE JLG WEG" },
      { code: "PIN000017", name: "(N) GRIS GENIE WEG" },
      { code: "PIN000002", name: "(N) GRIS SINOBOOM WEG" },
      { code: "PIN000018", name: "(N) NARANJO JLG WEG" },
      { code: "PIN000020", name: "(N) NEGRO MATTE WEG" },
      { code: "PIN000062", name: "(N) NEGRO PU WEG" },
      { code: "PIN000001", name: "(N) PRIMER UNIVERSAL GRIS" },
      { code: "PIN000054", name: "(N) ROJO AIRO WEG" },
      { code: "PIN000193", name: "(N) ROJO EAGER BEAVER - ALT" },
      { code: "PIN000023", name: "(N) ROJO FARESIN WEG" },
      { code: "PIN000204", name: "(N) ROJO SINOBOOM WEG" },
      { code: "PIN000041", name: "(N) SPRAY ALUMINIO" },
      { code: "PIN000003", name: "(N) SPRAY ESMALTE GRIS" },
      { code: "PIN000043", name: "(N) SPRAY NEGRO BRILLANTE 485 ML" },
      { code: "PIN000044", name: "(N) SPRAY NEGRO OPACO 485 ML" },
      { code: "PIN000045", name: "(N) SPRAY ROJO MANDARIN" },
      { code: "PIN000005", name: "CATALIZADOR PARA PINTURAS" }
    ]
  },
  {
    name: "DISCOS Y LIJAS",
    items: [
      { code: "HER000031", name: "(N) DISCO LIJA C/RESPALDO P36" },
      { code: "HER000130", name: "(N) DISCO LIJA C/RESPALDO P60" },
      { code: "PIN000187", name: "(N) DISCO LIJA C/VELCRO 4/2 N 80 - ALT" },
      { code: "HER000043", name: "(N) DISCO LIJA C/VELCRO 6 N 320" },
      { code: "HER000294", name: "(N) DISCO LIJA C/VELCRO 6 N 240" },
      { code: "HER000036", name: "(N) DISCO LIJA C/VELCRO 6 N 120" },
      { code: "HER000039", name: "(N) DISCO LIJA C/VELCRO 6 N 100" },
      { code: "HER000037", name: "(N) DISCO LIJA C/VELCRO 6 N 150" },
      { code: "HER000030", name: "(N) DISCO LIJA C/VELCRO 6 N 180" },
      { code: "HER000038", name: "(N) DISCO LIJA C/VELCRO 6 N 60" },
      { code: "HER000287", name: "(N) DISCO LIJA C/VELCRO 6 N 80" },
      { code: "PIN000163", name: "(N) DISCO LIJA C/VELCRO GR 1000" },
      { code: "PIN000161", name: "(N) DISCO LIJA C/VELCRO GR 600" },
      { code: "PIN000162", name: "(N) DISCO LIJA C/VELCRO GR 800" },
      { code: "HER000172", name: "(N) DISCO RESPALDO VELCRO" },
      { code: "HER000044", name: "(N) DISCO TRASLAPADO 4 1/2 GR 60" }
    ]
  },
  {
    name: "MASILLAS",
    items: [
      { code: "INS000157", name: "(N) CERA DESMOLDANTE HANDSON 3KG" },
      { code: "INS000158", name: "(N) GELCOAT PRM ISOFTALICO BLANCO" },
      { code: "PIN000032", name: "(N) MASILLA POL. TITANIUM 1/4 GL" },
      { code: "PIN000177", name: "(N) MASILLA POLIESTER STAR LIGHT" },
      { code: "INS000180", name: "(N) MASILLA POLISFT PLASTICA - ALT" },
      { code: "INS000184", name: "(N) RRA SIKKENS - ALT" },
      { code: "PIN000205", name: "POLIKOR MASILLA FIBRA DE VIDRIO POL" },
      { code: "INS000190", name: "(N) SELLADOR URETANO PARABRISAS" },
      { code: "INS000177", name: "(N) MASILLA MAGIGA 700ML - ALT" }
    ]
  },
  {
    name: "STICKERS",
    items: [
      { code: "LOGALO0140", name: "(N) ALO RENTAL BRAZO 1250 AJP" },
      { code: "LOGALO0151", name: "(N) ALO RENTAL BRAZO 600 AJ" },
      { code: "LOGALO0025", name: "(N) ALO SERVICE" },
      { code: "LOGALO0146", name: "(N) BRAZO ALORENTAL 800AJ" },
      { code: "LOGALO0023", name: "(N) CARGA MAX 227" },
      { code: "ADH000219", name: "(N) CINTA REFLECTANTE VERDE LIMON POR METROS" },
      { code: "LOGALO0040", name: "(N) CUIDAME" },
      { code: "LOGALO0099", name: "(N) FLECHA DIRECCION JLG 14x6CM" },
      { code: "LOGALO0073", name: "(N) FLECHA DIRECCION JLG 30x12cm" },
      { code: "LOGALO0042", name: "(N) GPS LOG" },
      { code: "LOGALO0052", name: "(N) LOGO JLG 33x12" },
      { code: "LOGALO0056", name: "(N) MODELO 1250 AJP" },
      { code: "LOGALO0083", name: "(N) MODELO 1930ES" },
      { code: "LOGALO0109", name: "(N) MODELO 1932R" },
      { code: "LOGALO0014", name: "(N) MODELO 3246ES" },
      { code: "LOGALO0100", name: "(N) MODELO 450AJ" },
      { code: "LOGALO0119", name: "(N) MODELO 600AJ" },
      { code: "LOGALO0110", name: "(N) MODELO 800AJ" },
      { code: "LOGALO0081", name: "(N) PEDALERA" },
      { code: "LOGALO0032", name: "(N) PELIGRO APLASTAMIENTO" },
      { code: "LOGALO0097", name: "(N) PELIGRO COM SUP" },
      { code: "LOGALO0034", name: "(N) PELIGRO EXPLOSION" },
      { code: "LOGALO0021", name: "(N) PUBLICIDAD ALORENTAL GRA" },
      { code: "LOGALO0020", name: "(N) PUBLICIDAD ALORENTAL MED" },
      { code: "LOGALO0024", name: "(N) RESP CLIENTE" },
      { code: "LOGALO0029", name: "(N) RIESGO ELECTROCUCION" },
      { code: "LOGALO0051", name: "(P) LOGO JLG 25x9" },
      { code: "LOGALO0336", name: "FLECHAS DIRECCION JLG GRANDE" }
    ]
  },
  {
    name: "HERRAMIENTAS",
    items: [
      { code: "HER000356", name: "(N) BROCHA DE 2" },
      { code: "ADH000219", name: "(N) CINTA REFLECTANTE VERDE LIMON POR METROS (HERR)" },
      { code: "PIN000008", name: "(N) COLADOR DE PAPEL" },
      { code: "PIN000024", name: "(N) FIBRA DE VIDRIO 1/2 KG" },
      { code: "PIN000203", name: "(N) PANO DE LIMPIEZA" },
      { code: "PIN000034", name: "(N) PERMACEL ROLLO 1\"" },
      { code: "PIN000035", name: "(N) PERMACEL ROLLO 2\"" },
      { code: "PIN000192", name: "(N) PRE FOLDER (4,88X121.92)" },
      { code: "PIN000038", name: "(N) ROLLO PAPEL ENVOLVER 570 MM" },
      { code: "PIN000191", name: "(N) SCOTCH BRITE 3M GRIS" }
    ]
  },
  {
    name: "DILUYENTES / SOLVENTES",
    items: [
      { code: "PIN000004", name: "(N) ACELERANTE COBALTO" },
      { code: "MOT000022", name: "(N) BENCINA BLANCA GRANEL LT" },
      { code: "PIN000007", name: "(N) DILUYENTE POLIURET GRANEL 1 LT" },
      { code: "PIN000183", name: "(N) DILUYENTE PU5003 5 LT - ALT" },
      { code: "HER000094", name: "(N) LUBRICANTE EN SPRAY" },
      { code: "PIN000091", name: "(N) REMOVEDOR DE PINTURA" },
      { code: "PIN000036", name: "(N) RESINA ACELERADA" }
    ]
  }
];

const state = {
  quantities: {},
  filter: "",
  categoryOpen: {},
  lastFeedback: ""
};

const elements = {};

MATERIAL_CATEGORIES.forEach((category) => {
  category.items = category.items.map((item, index) => ({
    ...item,
    id: `${category.name}-${index}`
  }));
});

function isWegMaterial(item) {
  return item.name.trim().endsWith("WEG");
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function sanitizeQuantity(rawValue) {
  if (rawValue === "") {
    return "";
  }

  const normalized = String(rawValue).replace(",", ".");
  const parsed = Number.parseFloat(normalized);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return "";
  }

  return parsed;
}

function formatQuantity(value) {
  if (!Number.isFinite(value)) {
    return "";
  }

  if (Number.isInteger(value)) {
    return String(value);
  }

  return value.toFixed(2).replace(/\.?0+$/, "");
}

function getOutputQuantity(item, quantity) {
  if (isWegMaterial(item)) {
    return quantity * WEG_MULTIPLIER;
  }

  return quantity;
}

function getSelectedItems() {
  const selected = [];

  MATERIAL_CATEGORIES.forEach((category) => {
    category.items.forEach((item) => {
      const quantity = state.quantities[item.id];

      if (Number.isFinite(quantity) && quantity > 0) {
        selected.push({
          category: category.name,
          item,
          quantity,
          outputQuantity: getOutputQuantity(item, quantity)
        });
      }
    });
  });

  return selected;
}

function getVisibleCategoryData() {
  const filter = normalizeText(state.filter);

  return MATERIAL_CATEGORIES.map((category) => {
    const visibleItems = category.items.filter((item) => {
      if (!filter) {
        return true;
      }

      const haystack = normalizeText(`${item.code} ${item.name}`);
      return haystack.includes(filter);
    });

    return {
      ...category,
      visibleItems
    };
  }).filter((category) => category.visibleItems.length > 0);
}

function setFeedback(message) {
  state.lastFeedback = message;
  elements.feedbackMessage.textContent = message;
}

function saveWhatsappNumber(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    return;
  }
}

function loadWhatsappNumber() {
  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);
    return savedValue || DEFAULT_WHATSAPP_NUMBER;
  } catch (error) {
    return DEFAULT_WHATSAPP_NUMBER;
  }
}

function createItemRow(item) {
  const row = document.createElement("div");
  row.className = "item-row";

  const code = document.createElement("div");
  code.className = "item-code";
  code.textContent = item.code;

  const nameBlock = document.createElement("div");
  nameBlock.className = "item-name";

  const title = document.createElement("strong");
  title.textContent = item.name;
  nameBlock.appendChild(title);

  const meta = document.createElement("div");
  meta.className = "item-meta";

  const baseBadge = document.createElement("span");
  baseBadge.className = "badge badge-neutral";
  baseBadge.textContent = "Codigo SAP";
  meta.appendChild(baseBadge);

  if (isWegMaterial(item)) {
    const wegBadge = document.createElement("span");
    wegBadge.className = "badge badge-weg";
    wegBadge.textContent = `Salida x ${formatQuantity(WEG_MULTIPLIER)}`;
    meta.appendChild(wegBadge);
  }

  nameBlock.appendChild(meta);

  const qtyField = document.createElement("div");
  qtyField.className = "qty-field";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = "any";
  input.className = "qty-input";
  input.inputMode = "decimal";
  input.placeholder = "0";
  input.value = state.quantities[item.id] ?? "";
  input.setAttribute("aria-label", `Cantidad para ${item.code} ${item.name}`);
  input.dataset.code = item.code;

  input.addEventListener("input", (event) => {
    const sanitized = sanitizeQuantity(event.target.value);

    if (sanitized === "") {
      delete state.quantities[item.id];
      event.target.value = event.target.value === "" ? "" : "";
    } else {
      state.quantities[item.id] = sanitized;
    }

    updateOutput();
  });

  const help = document.createElement("p");
  help.className = "qty-help";
  help.textContent = isWegMaterial(item)
    ? `Ingresa unidades. Salida: cantidad x ${formatQuantity(WEG_MULTIPLIER)}`
    : "Ingresa la cantidad requerida";

  qtyField.append(input, help);
  row.append(code, nameBlock, qtyField);

  return row;
}

function createCategorySection(category) {
  const card = document.createElement("section");
  card.className = "category-card";
  card.dataset.category = category.name;

  const filterActive = Boolean(state.filter.trim());
  const storedOpen = state.categoryOpen[category.name];
  const isOpen = filterActive ? true : storedOpen !== false;
  card.dataset.open = String(isOpen);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-toggle";
  button.setAttribute("aria-expanded", String(isOpen));

  const titleBlock = document.createElement("span");
  titleBlock.className = "category-title-block";

  const titleText = document.createElement("span");
  titleText.className = "category-title-text";
  titleText.textContent = category.name;

  const subtitle = document.createElement("span");
  subtitle.className = "category-subtitle";
  subtitle.textContent = `${category.visibleItems.length} materiales visibles`;

  titleBlock.append(titleText, subtitle);

  const icon = document.createElement("span");
  icon.className = "category-toggle-icon";
  icon.setAttribute("aria-hidden", "true");

  button.append(titleBlock, icon);

  const body = document.createElement("div");
  body.className = "category-body";

  category.visibleItems.forEach((item) => {
    body.appendChild(createItemRow(item));
  });

  button.addEventListener("click", () => {
    const current = card.dataset.open === "true";
    const next = !current;

    card.dataset.open = String(next);
    button.setAttribute("aria-expanded", String(next));
    state.categoryOpen[category.name] = next;
  });

  card.append(button, body);

  return card;
}

function renderMaterials() {
  const visibleCategories = getVisibleCategoryData();
  elements.list.innerHTML = "";

  visibleCategories.forEach((category) => {
    elements.list.appendChild(createCategorySection(category));
  });

  elements.emptyState.hidden = visibleCategories.length > 0;

  const visibleItemsCount = visibleCategories.reduce((total, category) => {
    return total + category.visibleItems.length;
  }, 0);

  elements.resultCount.textContent = `${visibleItemsCount} materiales visibles`;
}

function updateOutput() {
  const selectedItems = getSelectedItems();
  const equipo = elements.equipo.value.trim();

  const output = selectedItems.map(({ item, outputQuantity }) => {
    return `${item.code}\t${formatQuantity(outputQuantity)}\t${equipo}`;
  }).join("\n");

  elements.output.value = output;
  elements.selectedCount.textContent = String(selectedItems.length);
  elements.wegCount.textContent = String(selectedItems.filter(({ item }) => isWegMaterial(item)).length);

  if (!selectedItems.length) {
    setFeedback("");
  }
}

function copyOutput() {
  const text = elements.output.value;

  if (!text.trim()) {
    setFeedback("Agrega cantidades antes de copiar la salida.");
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => {
        setFeedback("Salida copiada. Ya puedes pegarla en Excel o SAP.");
      })
      .catch(() => {
        fallbackCopy(text);
      });
    return;
  }

  fallbackCopy(text);
}

function fallbackCopy(text) {
  elements.output.removeAttribute("readonly");
  elements.output.focus();
  elements.output.select();

  try {
    document.execCommand("copy");
    setFeedback("Salida copiada. Ya puedes pegarla en Excel o SAP.");
  } catch (error) {
    setFeedback("No fue posible copiar automaticamente. El texto quedo seleccionado para copiarlo manualmente.");
  }

  elements.output.value = text;
  elements.output.setAttribute("readonly", "readonly");
}

function clearQuantities() {
  state.quantities = {};
  renderMaterials();
  updateOutput();
  setFeedback("Se limpiaron todas las cantidades.");
}

function sanitizeWhatsappNumber(rawNumber) {
  return rawNumber.replace(/\D/g, "");
}

function sendToWhatsapp() {
  const text = elements.output.value;

  if (!text.trim()) {
    setFeedback("No hay materiales cargados para enviar.");
    return;
  }

  const number = sanitizeWhatsappNumber(elements.whatsappNumber.value.trim());

  if (!number) {
    setFeedback("Ingresa un numero de WhatsApp valido antes de enviar.");
    elements.whatsappNumber.focus();
    return;
  }

  const encabezado = "CODIGO\tCANTIDAD\tEQUIPO\n";
  const message = `${encabezado}${text}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener");
  setFeedback("Se abrio WhatsApp con la salida preparada.");
}

function bindEvents() {
  elements.equipo.addEventListener("input", updateOutput);

  elements.searchInput.addEventListener("input", (event) => {
    state.filter = event.target.value;
    renderMaterials();
  });

  elements.whatsappNumber.addEventListener("input", (event) => {
    saveWhatsappNumber(event.target.value);
  });

  elements.btnCopy.addEventListener("click", copyOutput);
  elements.btnClear.addEventListener("click", clearQuantities);
  elements.btnWhatsapp.addEventListener("click", sendToWhatsapp);
}

function initializeElements() {
  elements.list = document.getElementById("lista-materiales");
  elements.emptyState = document.getElementById("emptyState");
  elements.output = document.getElementById("sapOutput");
  elements.feedbackMessage = document.getElementById("feedbackMessage");
  elements.equipo = document.getElementById("equipo");
  elements.searchInput = document.getElementById("searchInput");
  elements.whatsappNumber = document.getElementById("whatsappNumber");
  elements.btnCopy = document.getElementById("btnCopiar");
  elements.btnClear = document.getElementById("btnLimpiar");
  elements.btnWhatsapp = document.getElementById("btnWhatsapp");
  elements.selectedCount = document.getElementById("selectedCount");
  elements.wegCount = document.getElementById("wegCount");
  elements.resultCount = document.getElementById("resultCount");
}

function initializeState() {
  elements.whatsappNumber.value = loadWhatsappNumber();

  MATERIAL_CATEGORIES.forEach((category) => {
    state.categoryOpen[category.name] = true;
  });
}

function init() {
  initializeElements();
  initializeState();
  bindEvents();
  renderMaterials();
  updateOutput();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
