const ADMIN_CODE = "marwan the best";
const ADMIN_MAX_MONEY = BigInt("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
const INFINITY_SHOP_BUY_AMOUNT = BigInt("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
const SAVE_KEY_PREFIX = "money-clicker-web-profile-";
const OLD_SAVE_KEY = "money-clicker-web-marwan";

const SHOP_ITEMS = [
  { name: "Starter Cursor", price: 15n, kind: "click", amount: 1n, desc: "+1 per click" },
  { name: "Better Cursor", price: 50n, kind: "click", amount: 5n, desc: "+5 per click" },
  { name: "Good Cursor", price: 100n, kind: "click", amount: 10n, desc: "+10 per click" },
  { name: "Auto Clicker", price: 200n, kind: "auto_click", amount: 1n, desc: "+1 auto click/sec" },
  { name: "Click Booster", price: 350n, kind: "mult_click", amount: 2n, desc: "2x click value" },
  { name: "Super Cursor", price: 500n, kind: "click", amount: 50n, desc: "+50 per click" },
  { name: "Ultra Cursor", price: 1000n, kind: "click", amount: 100n, desc: "+100 per click" },
  { name: "Good Auto Clicker", price: 1500n, kind: "auto_click", amount: 10n, desc: "+10 auto clicks/sec" },
  { name: "Triple Click Boost", price: 2500n, kind: "mult_click", amount: 3n, desc: "3x click value" },
  { name: "Mega Cursor", price: 4000n, kind: "click", amount: 200n, desc: "+200 per click" },
  { name: "Strong Auto Clicker", price: 6500n, kind: "auto_click", amount: 20n, desc: "+20 auto clicks/sec" },
  { name: "Quad Click Boost", price: 10000n, kind: "mult_click", amount: 4n, desc: "4x click value" },
  { name: "Diamond Cursor", price: 15000n, kind: "click", amount: 500n, desc: "+500 per click" },
  { name: "Money Printer", price: 25000n, kind: "auto_click", amount: 50n, desc: "+50 auto clicks/sec" },
  { name: "Mega Click Boost", price: 50000n, kind: "mult_click", amount: 5n, desc: "5x click value" },
  { name: "Royal Cursor", price: 100000n, kind: "click", amount: 1000n, desc: "+1,000 per click" },
  { name: "Robot Worker", price: 250000n, kind: "auto_click", amount: 100n, desc: "+100 auto clicks/sec" },
  { name: "Ultra Click Boost", price: 500000n, kind: "mult_click", amount: 6n, desc: "6x click value" },
  { name: "Million Cursor", price: 1000000n, kind: "click", amount: 1000000n, desc: "+1,000,000 per click" },
  { name: "Money Factory", price: 2500000n, kind: "auto_click", amount: 500n, desc: "+500 auto clicks/sec" }
].sort((a, b) => Number(a.price - b.price));

const ADMIN_COMMANDS = [
  "max money", "add 1 billion", "add 1 trillion", "double money", "clear money",
  "max click", "add click power", "double click power", "max auto", "add auto power",
  "double auto power", "level up 10", "max level", "fill xp", "unlock achievements",
  "buy all once", "free shop level", "reset shop costs", "gold button", "daily reward reset"
];

const THEMES = {
  car: { name: "Car Theme", root: "#111111", panel: "#222222", card: "#181818", cardAlt: "#2e2e2e", shopItem: "#222222", shopAffordable: "#3b1616", outline: "#d9d9d9", outlineAlt: "#ff3030", text: "#f8f8f8", money: "#ff3030", accent: "#f8f8f8", star: "#ffd000", xp: "#333333", buttonActive: "#4a1010", shape: "car" },
  gaming: { name: "Gaming Theme", root: "#07051a", panel: "#101033", card: "#0c0b24", cardAlt: "#1b1750", shopItem: "#111033", shopAffordable: "#1d3b25", outline: "#7c3aed", outlineAlt: "#22d3ee", text: "#f4f0ff", money: "#22c55e", accent: "#22d3ee", star: "#facc15", xp: "#a855f7", buttonActive: "#2e236f", shape: "controller" },
  world_cup: { name: "World Cup Theme", root: "#061b12", panel: "#0b2b1d", card: "#092316", cardAlt: "#123a28", shopItem: "#0d251a", shopAffordable: "#184d2f", outline: "#ffffff", outlineAlt: "#16a34a", text: "#f8fff9", money: "#ffffff", accent: "#22c55e", star: "#facc15", xp: "#ef4444", buttonActive: "#1f5f3a", shape: "cup" },
  space: { name: "Space Theme", root: "#050816", panel: "#0b1026", card: "#090d1f", cardAlt: "#151b3d", shopItem: "#0f1430", shopAffordable: "#22194a", outline: "#64748b", outlineAlt: "#38bdf8", text: "#e0f2fe", money: "#67e8f9", accent: "#818cf8", star: "#fef08a", xp: "#c084fc", buttonActive: "#1f2a55", shape: "neptune" },
  minecraft: { name: "Minecraft Theme", root: "#14210f", panel: "#26351a", card: "#1d2b14", cardAlt: "#3a4b24", shopItem: "#27331c", shopAffordable: "#355f25", outline: "#6b4f2a", outlineAlt: "#7fbf3f", text: "#f1ffe8", money: "#7ed957", accent: "#8b5a2b", star: "#facc15", xp: "#3fa34d", buttonActive: "#4a612b", shape: "block" },
  candy: { name: "Candy Theme", root: "#fff1f7", panel: "#ffd6e7", card: "#ffffff", cardAlt: "#ffc2dc", shopItem: "#ffe8f1", shopAffordable: "#d7f7ff", outline: "#ff4f9a", outlineAlt: "#58c7ff", text: "#3a1830", money: "#ff2f86", accent: "#00a8d8", star: "#ffc400", xp: "#ff7ab8", buttonActive: "#ffabd0", shape: "candy" },
  chocolate: { name: "Chocolate Theme", root: "#21120c", panel: "#3a2117", card: "#2a1710", cardAlt: "#563326", shopItem: "#321d14", shopAffordable: "#5d3a2a", outline: "#f2c27b", outlineAlt: "#8b4a2b", text: "#fff3df", money: "#7b3f24", accent: "#d99a5b", star: "#ffd36a", xp: "#a45c38", buttonActive: "#6a3c2a", shape: "chocolate" }
};

const state = {
  username: "marwan",
  money: 0n,
  totalEarned: 0n,
  clicks: 0n,
  moneyPerClick: 1n,
  moneyPerSecond: 0n,
  autoClicksPerSecond: 0n,
  level: 1n,
  xp: 0n,
  shopCounts: SHOP_ITEMS.map(() => 0n),
  achievements: [],
  theme: "car",
  adminUnlocked: false,
  infiniteMoney: false,
  infiniteLevel: false,
  infiniteClick: false
};

const els = {
  money: document.querySelector("#moneyValue"),
  bottomMoney: document.querySelector("#bottomMoneyValue"),
  perSecond: document.querySelector("#perSecondValue"),
  level: document.querySelector("#levelValue"),
  eachClick: document.querySelector("#eachClickValue"),
  xpFill: document.querySelector("#xpFill"),
  xpText: document.querySelector("#xpText"),
  clickButton: document.querySelector("#clickButton"),
  shopList: document.querySelector("#shopList"),
  themeBtn: document.querySelector("#themeBtn"),
  adminBtn: document.querySelector("#adminBtn"),
  modal: document.querySelector("#modal"),
  modalTitle: document.querySelector("#modalTitle"),
  modalBody: document.querySelector("#modalBody"),
  toast: document.querySelector("#toast"),
  profileGate: document.querySelector("#profileGate"),
  profileForm: document.querySelector("#profileForm"),
  usernameInput: document.querySelector("#usernameInput")
};

function formatBig(value) {
  return value.toLocaleString("en-US");
}

function moneyText(value) {
  if (value === undefined && state.infiniteMoney) return "infinity dollars";
  return `$${formatBig(value ?? state.money)}`;
}

function clickText() {
  return state.infiniteClick ? "infinity dollars" : moneyText(state.moneyPerClick);
}

function levelText() {
  return state.infiniteLevel ? "infinity" : formatBig(state.level);
}

function xpNeeded() {
  return state.infiniteLevel ? 1n : 100n + state.level * 100n;
}

function totalMoneyPerSecond() {
  return state.moneyPerSecond + state.autoClicksPerSecond;
}

function setThemeColors() {
  const theme = state.adminUnlocked ? THEMES[state.theme] : {
    root: "#07131f", panel: "#09203a", card: "#07131f", cardAlt: "#0b2744",
    shopItem: "#0b2744", shopAffordable: "#123f28", outline: "#1d4d85",
    outlineAlt: "#35c900", text: "#ffffff", money: "#7aff00", accent: "#35c900",
    star: "#ffd51f", xp: "#24a800", buttonActive: "#113a62", shape: "circle"
  };
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
    if (key !== "name" && key !== "shape") {
      root.style.setProperty(`--${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`, value);
    }
  }
}

function updateClickShape() {
  const shape = els.clickButton.querySelector(".click-shape");
  const themeShape = state.adminUnlocked ? THEMES[state.theme].shape : "circle";
  shape.className = `click-shape ${themeShape}`;
  shape.textContent = themeShape === "circle" ? "$" : "";
}

function cleanUsername(name) {
  const cleaned = (name || "").trim().replace(/\s+/g, " ");
  return cleaned || "marwan";
}

function saveKeyFor(username) {
  return `${SAVE_KEY_PREFIX}${username.toLowerCase()}`;
}

function prepareProfileForm() {
  const lastUser = localStorage.getItem("money-clicker-last-user") || state.username;
  els.usernameInput.value = lastUser;
  els.usernameInput.focus();
}

function parseSave(raw) {
  return JSON.parse(raw, (_, value) => {
    if (typeof value === "string" && /^\d+n$/.test(value)) return BigInt(value.slice(0, -1));
    return value;
  });
}

function normalizeLoadedState(data) {
  Object.assign(state, data);
  state.username = cleanUsername(state.username);
  state.adminUnlocked = false;
  state.shopCounts = (state.shopCounts || []).concat(SHOP_ITEMS.map(() => 0n)).slice(0, SHOP_ITEMS.length);
  if (!THEMES[state.theme]) state.theme = "car";
}

function saveGame(show = false) {
  const data = JSON.stringify(state, (_, value) => typeof value === "bigint" ? `${value}n` : value);
  localStorage.setItem(saveKeyFor(state.username), data);
  localStorage.setItem("money-clicker-last-user", state.username);
  if (show) toast(`Saved profile ${state.username}.`);
}

function loadGame(username) {
  state.username = cleanUsername(username);
  localStorage.setItem("money-clicker-last-user", state.username);
  const key = saveKeyFor(state.username);
  let raw = localStorage.getItem(key);

  if (!raw && state.username.toLowerCase() === "marwan") {
    raw = localStorage.getItem(OLD_SAVE_KEY);
  }

  if (!raw) {
    saveGame(false);
    toast(`New profile: ${state.username}`);
    return;
  }

  try {
    normalizeLoadedState(parseSave(raw));
    state.username = cleanUsername(username);
    toast(`Loaded profile: ${state.username}`);
  } catch {
    localStorage.removeItem(key);
    toast(`New profile: ${state.username}`);
  }
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function addXp(amount) {
  if (state.infiniteLevel) {
    state.xp = xpNeeded();
    return;
  }
  state.xp += BigInt(amount);
  let gained = 0;
  while (state.xp >= xpNeeded() && gained < 50) {
    state.xp -= xpNeeded();
    state.level += 1n;
    if (!state.infiniteClick) state.moneyPerClick += state.level;
    gained++;
  }
  if (gained === 50 && state.xp >= xpNeeded()) state.xp = xpNeeded() - 1n;
}

function currentPrice(index) {
  const count = state.shopCounts[index];
  if (count > 600n) return ADMIN_MAX_MONEY;
  const base = Number(SHOP_ITEMS[index].price);
  const price = Math.floor(base * Math.pow(1.35, Number(count)));
  if (!Number.isFinite(price)) return ADMIN_MAX_MONEY;
  return BigInt(price);
}

function applyUpgrade(item) {
  if (item.kind === "click" && !state.infiniteClick) state.moneyPerClick += item.amount;
  if (item.kind === "auto_click") state.autoClicksPerSecond += item.amount;
  if (item.kind === "mult_click" && !state.infiniteClick) state.moneyPerClick *= item.amount;
  if (item.kind === "mult_auto") {
    state.autoClicksPerSecond *= item.amount;
    state.moneyPerSecond *= item.amount;
  }
}

function buyUpgrade(index, quiet = false) {
  const item = SHOP_ITEMS[index];
  const price = currentPrice(index);
  if (!state.infiniteMoney && state.money < price) {
    if (!quiet) toast("Not enough money.");
    return false;
  }
  if (!state.infiniteMoney) state.money -= price;
  state.shopCounts[index] += 1n;
  applyUpgrade(item);
  addXp(price / 10n);
  checkAchievements();
  update();
  return true;
}

function buyInfinityAmount(index) {
  const item = SHOP_ITEMS[index];
  state.shopCounts[index] += INFINITY_SHOP_BUY_AMOUNT;
  if (item.kind === "click" && !state.infiniteClick) state.moneyPerClick += item.amount * INFINITY_SHOP_BUY_AMOUNT;
  if (item.kind === "auto_click") state.autoClicksPerSecond += item.amount * INFINITY_SHOP_BUY_AMOUNT;
  if (item.kind === "mult_click" && !state.infiniteClick) state.moneyPerClick = ADMIN_MAX_MONEY;
  if (item.kind === "mult_auto") {
    state.autoClicksPerSecond = ADMIN_MAX_MONEY;
    state.moneyPerSecond = ADMIN_MAX_MONEY;
  }
  addXp(xpNeeded());
  toast(`Bought ${item.name}. You still have infinity dollars.`);
}

function askBuy(index) {
  if (confirm("Do you want to multi click this item until you do not have enough money?")) {
    if (state.infiniteMoney) {
      buyInfinityAmount(index);
    } else {
      let bought = 0;
      while (buyUpgrade(index, true)) bought++;
      toast(bought ? "Bought item." : "Not enough money.");
    }
  } else {
    buyUpgrade(index);
  }
  checkAchievements();
  update();
}

function clickMoney(event) {
  const earned = state.moneyPerClick;
  if (state.infiniteClick) {
    state.money = ADMIN_MAX_MONEY;
    state.infiniteMoney = true;
    state.totalEarned = ADMIN_MAX_MONEY;
    state.clicks += ADMIN_MAX_MONEY;
    addXp(xpNeeded());
    toast("+infinity dollars");
  } else {
    if (!state.infiniteMoney) state.money += earned;
    state.totalEarned += earned;
    state.clicks += earned;
    addXp(earned / 2n || 1n);
  }
  checkAchievements();
  update(state.clicks % 5n === 0n);
}

function checkAchievements() {
  const rules = [
    ["First Click", state.clicks >= 1n],
    ["100 Clicks", state.clicks >= 100n],
    ["1,000 Clicks", state.clicks >= 1000n],
    ["First $1,000", state.totalEarned >= 1000n],
    ["Millionaire", state.infiniteMoney || state.totalEarned >= 1000000n],
    ["Level 10", state.infiniteLevel || state.level >= 10n],
    ["Auto Money", totalMoneyPerSecond() >= 100n],
    ["Shop Fan", state.shopCounts.reduce((a, b) => a + b, 0n) >= 10n],
    ["Upgrade Master", state.shopCounts.reduce((a, b) => a + b, 0n) >= 50n],
    ["Big Clicks", state.infiniteClick || state.moneyPerClick >= 1000n]
  ];
  for (const [name, ok] of rules) {
    if (ok && !state.achievements.includes(name)) state.achievements.push(name);
  }
}

function runAdmin(command) {
  let message = `${command} used.`;
  state.infiniteMoney = false;
  if (command === "max money") {
    state.money = ADMIN_MAX_MONEY;
    state.totalEarned = ADMIN_MAX_MONEY;
    state.infiniteMoney = true;
    message = "max money used. You received infinity dollars.";
  } else if (command === "add 1 billion") addAdminMoney(1000000000n);
  else if (command === "add 1 trillion") addAdminMoney(1000000000000n);
  else if (command === "double money") addAdminMoney(state.money || 1n);
  else if (command === "clear money") state.money = 0n;
  else if (command === "max click") {
    state.moneyPerClick = ADMIN_MAX_MONEY;
    state.infiniteClick = true;
    message = "max click used. Each click is infinity dollars.";
  } else if (command === "add click power" && !state.infiniteClick) state.moneyPerClick += 1000000n;
  else if (command === "double click power" && !state.infiniteClick) state.moneyPerClick *= 2n;
  else if (command === "max auto") state.autoClicksPerSecond = 1000000000n;
  else if (command === "add auto power") state.autoClicksPerSecond += 100000n;
  else if (command === "double auto power") state.autoClicksPerSecond *= 2n;
  else if (command === "level up 10") {
    if (!state.infiniteLevel) state.level += 10n;
    if (!state.infiniteClick) state.moneyPerClick += 10n;
  } else if (command === "max level") {
    state.level = 9999999999999n;
    state.infiniteLevel = true;
    message = "max level used. Your level is infinity.";
  } else if (command === "fill xp") state.xp = xpNeeded();
  else if (command === "unlock achievements") state.achievements = ["First Click", "100 Clicks", "1,000 Clicks", "First $1,000", "Millionaire", "Level 10", "Auto Money", "Shop Fan", "Upgrade Master", "Big Clicks"];
  else if (command === "buy all once") SHOP_ITEMS.forEach((item, i) => { state.shopCounts[i] += 1n; applyUpgrade(item); });
  else if (command === "free shop level") SHOP_ITEMS.forEach((item, i) => { state.shopCounts[i] += 10n; for (let c = 0; c < 10; c++) applyUpgrade(item); });
  else if (command === "reset shop costs") state.shopCounts = SHOP_ITEMS.map(() => 0n);
  else if (command === "gold button") toast("Gold button is for the Python version.");
  else if (command === "daily reward reset") toast("Daily reward reset.");

  if (!state.infiniteMoney) state.money = ADMIN_MAX_MONEY;
  state.totalEarned = state.totalEarned > state.money ? state.totalEarned : state.money;
  state.xp = xpNeeded();
  checkAchievements();
  update();
  saveGame();
  toast(message);
}

function addAdminMoney(amount) {
  if (!state.infiniteMoney) state.money += amount;
  state.totalEarned += amount;
}

function updateShop() {
  els.shopList.innerHTML = "";
  SHOP_ITEMS.forEach((item, index) => {
    const price = currentPrice(index);
    const affordable = state.infiniteMoney || state.money >= price;
    const button = document.createElement("button");
    button.className = "shop-item";
    button.style.background = affordable ? "var(--shop-affordable)" : "var(--shop-item)";
    button.innerHTML = `<strong>${index + 1}. ${item.name}</strong><span>${item.desc}</span>`;
    button.addEventListener("click", () => askBuy(index));
    els.shopList.append(button);
  });
}

function update(withShop = true) {
  setThemeColors();
  updateClickShape();
  if (els.themeBtn) els.themeBtn.classList.toggle("hidden", !state.adminUnlocked);
  els.adminBtn.classList.toggle("hidden", !state.adminUnlocked);
  els.money.textContent = moneyText();
  els.bottomMoney.textContent = moneyText();
  els.perSecond.textContent = `${moneyText(totalMoneyPerSecond())} / sec total`;
  els.level.textContent = levelText();
  els.eachClick.textContent = clickText();
  const needed = xpNeeded();
  const fill = state.infiniteLevel ? 100 : Math.min(100, Number((state.xp * 100n) / needed));
  els.xpFill.style.width = `${fill}%`;
  els.xpText.textContent = state.infiniteLevel ? "infinity / infinity XP" : `${formatBig(state.xp)} / ${formatBig(needed)} XP`;
  if (withShop) updateShop();
}

function openModal(title, content) {
  els.modalTitle.textContent = title;
  els.modalBody.innerHTML = "";
  if (typeof content === "string") els.modalBody.innerHTML = content;
  else els.modalBody.append(content);
  els.modal.showModal();
}

function openThemes() {
  if (!state.adminUnlocked) {
    toast("Unlock ADMIN COMMANDS first.");
    return;
  }
  const grid = document.createElement("div");
  grid.className = "theme-grid";
  for (const [key, theme] of Object.entries(THEMES)) {
    const button = document.createElement("button");
    button.className = "theme-option";
    button.textContent = theme.name;
    button.style.background = theme.cardAlt;
    button.style.color = theme.text;
    button.addEventListener("click", () => {
      state.theme = key;
      update();
      saveGame();
      els.modal.close();
    });
    grid.append(button);
  }
  openModal("Choose Theme", grid);
}

function openAdmin() {
  const grid = document.createElement("div");
  grid.className = "admin-grid";
  ADMIN_COMMANDS.forEach(command => {
    const button = document.createElement("button");
    button.className = "admin-command";
    button.textContent = command.toUpperCase();
    button.addEventListener("click", () => {
      els.modal.close();
      runAdmin(command);
    });
    grid.append(button);
  });
  openModal("Admin Commands", grid);
}

function resetGame() {
  if (!confirm("Reset all progress?")) return;
  localStorage.removeItem(saveKeyFor(state.username));
  location.reload();
}

document.querySelector("#closeModal").addEventListener("click", () => els.modal.close());
document.querySelector("#clickButton").addEventListener("click", clickMoney);
document.querySelector("#saveBtn").addEventListener("click", () => saveGame(true));
document.querySelector("#resetBtn").addEventListener("click", resetGame);
if (els.themeBtn) els.themeBtn.addEventListener("click", openThemes);
document.querySelector("#adminBtn").addEventListener("click", openAdmin);
document.querySelector("#codeBtn").addEventListener("click", () => {
  const code = prompt("Enter code:");
  if (code && code.trim().toLowerCase() === ADMIN_CODE) {
    state.adminUnlocked = true;
    update();
    toast("Correct code! Admin commands unlocked.");
  } else if (code !== null) {
    toast("Wrong code.");
  }
});
document.querySelector("#achievementsBtn").addEventListener("click", () => {
  checkAchievements();
  openModal("Achievements", `<p>${state.achievements.length} / 10 unlocked</p><p>${state.achievements.join("<br>") || "None yet"}</p>`);
});
document.querySelector("#statsBtn").addEventListener("click", () => {
  openModal("Statistics", `<p>Money: ${moneyText()}</p><p>Clicks: ${formatBig(state.clicks)}</p><p>Per click: ${clickText()}</p><p>Auto clicks: ${formatBig(state.autoClicksPerSecond)} / sec</p><p>Total money/sec: ${moneyText(totalMoneyPerSecond())}</p><p>Level: ${levelText()}</p>`);
});

function startGame(username) {
  loadGame(username);
  update();
  els.profileGate.classList.add("hidden");

  setInterval(() => {
    const earned = totalMoneyPerSecond();
    if (earned > 0n) {
      if (!state.infiniteMoney) state.money += earned;
      state.totalEarned += earned;
      state.clicks += state.autoClicksPerSecond;
      addXp(earned / 5n || 1n);
      checkAchievements();
      update(false);
    }
  }, 1000);

  setInterval(() => saveGame(false), 5000);
}

els.profileForm.addEventListener("submit", event => {
  event.preventDefault();
  startGame(els.usernameInput.value);
});

prepareProfileForm();









