const STORE_KEY = "su.menuBuilder.v2.groups";
const PAGE_SIZE = 10;
const TODAY = "2026-11-23";
const SERVICES = ["Breakfast", "Morning tea", "Lunch", "Afternoon tea", "Dinner", "Supper", "24-hour"];
const CORE = ["Breakfast", "Lunch", "Dinner"];
const REQUIRED_SERVICES = ["Lunch", "Dinner"];
const REQUIRED_IDDSI = ["4", "6"];
const IDDSI_NAME = { 4: "Pureed", 5: "Minced & moist", 6: "Soft & bite-sized", 7: "Regular" };
const STATUSES = ["Draft", "Pending Approval", "Approved", "Scheduled", "Active", "Expired", "Archived"];
const COURSES = {
  Breakfast: ["Cereal", "Hot", "Fruit", "Drink"],
  "Morning tea": ["Snack", "Drink"],
  Lunch: ["Soup", "Main", "Side", "Dessert", "Drink"],
  "Afternoon tea": ["Snack", "Drink"],
  Dinner: ["Main", "Side", "Dessert", "Drink"],
  Supper: ["Light bite", "Drink"],
  "24-hour": ["Light bite", "Drink"],
};
const CATALOG = [
  { id: "fruit-salad", name: "Fruit Salad", category: "Dessert", course: "Dessert", allergen: "Celery", status: "Active" },
  { id: "roast-beef", name: "Roast Beef", category: "Main Meals", course: "Main", allergen: "Crustacean", status: "Active" },
  { id: "garlic-mash", name: "Garlic Mash", category: "Carbohydrates", course: "Side", allergen: "Crustacean", status: "Active" },
  { id: "garden-soup", name: "Garden Soup", category: "Light meals", course: "Soup", allergen: "Crustacean", status: "Inactive" },
  { id: "steamed-rice", name: "Steamed Rice", category: "Carbohydrates", course: "Side", allergen: "Crustacean", status: "Active" },
  { id: "pasta-bake", name: "Pasta Bake", category: "Carbohydrates", course: "Main", allergen: "Crustacean", status: "Active" },
  { id: "roast-potatoes", name: "Roast Potatoes", category: "Carbohydrates", course: "Side", allergen: "Crustacean", status: "Active" },
  { id: "caesar-salad", name: "Caesar Salad", category: "Light meals", course: "Side", allergen: "Crustacean", status: "Inactive" },
  { id: "couscous", name: "Herb Couscous", category: "Carbohydrates", course: "Side", allergen: "Crustacean", status: "Active" },
  { id: "roast-chicken", name: "Roast Chicken", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "baked-fish", name: "Baked Fish", category: "Main Meals", course: "Main", allergen: "Fish", status: "Active" },
  { id: "beef-casserole", name: "Beef Casserole", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "chicken-schnitzel", name: "Chicken Schnitzel", category: "Main Meals", course: "Main", allergen: "Gluten", status: "Active" },
  { id: "vegetable-lasagna", name: "Vegetable Lasagna", category: "Main Meals", course: "Main", allergen: "Gluten, Milk", status: "Active" },
  { id: "macaroni-cheese", name: "Macaroni Cheese", category: "Main Meals", course: "Main", allergen: "Gluten, Milk", status: "Active" },
  { id: "fish-pie", name: "Fish Pie", category: "Main Meals", course: "Main", allergen: "Fish, Milk", status: "Active" },
  { id: "sausages", name: "Sausages and Onion", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "quiche", name: "Quiche", category: "Main Meals", course: "Main", allergen: "Gluten, Egg, Milk", status: "Active" },
  { id: "ham-salad", name: "Ham Salad", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "cheese-omelette", name: "Cheese Omelette", category: "Main Meals", course: "Main", allergen: "Egg, Milk", status: "Active" },
  { id: "nut-roast", name: "Nut Roast", category: "Main Meals", course: "Main", allergen: "Gluten, Peanut", status: "Active" },
  { id: "pumpkin-soup", name: "Pumpkin Soup", category: "Light meals", course: "Soup", allergen: "Milk", status: "Active" },
  { id: "chicken-noodle", name: "Chicken Noodle Soup", category: "Light meals", course: "Soup", allergen: "Gluten", status: "Active" },
  { id: "minestrone", name: "Minestrone", category: "Light meals", course: "Soup", allergen: "Gluten", status: "Active" },
  { id: "tomato-soup", name: "Tomato Soup", category: "Light meals", course: "Soup", allergen: "", status: "Active" },
  { id: "pea-ham-soup", name: "Pea and Ham Soup", category: "Light meals", course: "Soup", allergen: "", status: "Active" },
  { id: "mushroom-soup", name: "Mushroom Soup", category: "Light meals", course: "Soup", allergen: "Milk", status: "Active" },
  { id: "apple-crumble", name: "Apple Crumble", category: "Dessert", course: "Dessert", allergen: "Gluten", status: "Active" },
  { id: "jelly-custard", name: "Jelly and Custard", category: "Dessert", course: "Dessert", allergen: "Milk", status: "Active" },
  { id: "rice-pudding", name: "Rice Pudding", category: "Dessert", course: "Dessert", allergen: "Milk", status: "Active" },
  { id: "stewed-pears", name: "Stewed Pears", category: "Dessert", course: "Dessert", allergen: "", status: "Active" },
  { id: "trifle", name: "Trifle", category: "Dessert", course: "Dessert", allergen: "Gluten, Milk", status: "Active" },
  { id: "pavlova", name: "Pavlova", category: "Dessert", course: "Dessert", allergen: "Egg", status: "Active" },
  { id: "yoghurt", name: "Yoghurt", category: "Dessert", course: "Dessert", allergen: "Milk", status: "Active" },
  { id: "ice-cream", name: "Ice Cream", category: "Dessert", course: "Dessert", allergen: "Milk", status: "Active" },
  { id: "custard", name: "Custard", category: "Dessert", course: "Dessert", allergen: "Milk", status: "Active" },
  { id: "porridge", name: "Porridge", category: "Breakfast", course: "Cereal", allergen: "Gluten, Milk", status: "Active" },
  { id: "weetbix", name: "Weet-bix", category: "Breakfast", course: "Cereal", allergen: "Gluten", status: "Active" },
  { id: "corn-flakes", name: "Corn Flakes", category: "Breakfast", course: "Cereal", allergen: "", status: "Active" },
  { id: "scrambled-eggs", name: "Scrambled Eggs", category: "Breakfast", course: "Hot", allergen: "Egg, Milk", status: "Active" },
  { id: "baked-beans", name: "Baked Beans", category: "Breakfast", course: "Hot", allergen: "", status: "Active" },
  { id: "poached-eggs", name: "Poached Eggs", category: "Breakfast", course: "Hot", allergen: "Egg", status: "Active" },
  { id: "stewed-apples", name: "Stewed Apples", category: "Breakfast", course: "Fruit", allergen: "", status: "Active" },
  { id: "banana", name: "Banana", category: "Breakfast", course: "Fruit", allergen: "", status: "Active" },
  { id: "tea", name: "Tea", category: "Drinks", course: "Drink", allergen: "", status: "Active" },
  { id: "coffee", name: "Coffee", category: "Drinks", course: "Drink", allergen: "Milk", status: "Active" },
  { id: "milk", name: "Milk", category: "Drinks", course: "Drink", allergen: "Milk", status: "Active" },
  { id: "scone", name: "Scone", category: "Snacks", course: "Snack", allergen: "Gluten", status: "Active" },
  { id: "sandwich", name: "Sandwich", category: "Light meals", course: "Light bite", allergen: "Gluten", status: "Active" },
  { id: "pureed-chicken", name: "Pureed Roast Chicken", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "minced-beef", name: "Minced Beef", category: "Main Meals", course: "Main", allergen: "", status: "Active" },
  { id: "soft-fish", name: "Soft Baked Fish", category: "Main Meals", course: "Main", allergen: "Fish", status: "Active" },
  { id: "pureed-pumpkin", name: "Pureed Pumpkin Soup", category: "Light meals", course: "Soup", allergen: "Milk", status: "Active" },
  { id: "soft-crumble", name: "Soft Apple Crumble", category: "Dessert", course: "Dessert", allergen: "Gluten", status: "Active" },
  { id: "pureed-porridge", name: "Pureed Porridge", category: "Breakfast", course: "Cereal", allergen: "Gluten, Milk", status: "Active" },
];
const SITES = [
  ["downtown", "Downtown Kitchen Hub"],
  ["eastside", "Eastside Catering Co."],
  ["westfield", "Westfield Food Court"],
  ["northgate", "Northgate Prep Kitchen"],
  ["lakewood", "Lakewood Commissary"],
  ["harbor", "Harbor View Bistro"],
  ["sunrise", "Sunrise Café Central"],
];
const SWATCH = {
  Cereal: "#f6e7c1", Hot: "#f8e1c1", Fruit: "#fde2e8", Drink: "#e6f5f6", Snack: "#fde68a",
  Soup: "#d8ebd3", Main: "#f4d4c4", Side: "#f3f0e7", Dessert: "#fbcfe8", "Light bite": "#e9d5ff",
};

const PATTERN = [
  [["Breakfast", "Cereal", "1", "porridge"], ["Breakfast", "Hot", "1", "scrambled-eggs"], ["Breakfast", "Fruit", "1", "stewed-apples"], ["Breakfast", "Drink", "1", "tea"], ["Lunch", "Soup", "1", "pumpkin-soup"], ["Lunch", "Main", "1", "roast-chicken"], ["Lunch", "Main", "1", "garlic-mash"], ["Lunch", "Main", "2", "roast-beef"], ["Lunch", "Main", "2", "roast-potatoes"], ["Lunch", "Dessert", "1", "apple-crumble"], ["Lunch", "Dessert", "2", "fruit-salad"], ["Dinner", "Main", "1", "cheese-omelette"], ["Dinner", "Main", "2", "ham-salad"], ["Dinner", "Dessert", "1", "yoghurt"]],
  [["Breakfast", "Cereal", "1", "weetbix"], ["Breakfast", "Hot", "1", "baked-beans"], ["Breakfast", "Fruit", "1", "banana"], ["Breakfast", "Drink", "1", "coffee"], ["Lunch", "Soup", "1", "chicken-noodle"], ["Lunch", "Main", "1", "beef-casserole"], ["Lunch", "Main", "1", "garlic-mash"], ["Lunch", "Main", "2", "vegetable-lasagna"], ["Lunch", "Dessert", "1", "jelly-custard"], ["Lunch", "Dessert", "2", "stewed-pears"], ["Dinner", "Main", "1", "pasta-bake"], ["Dinner", "Main", "2", "baked-fish"], ["Dinner", "Dessert", "1", "stewed-pears"]],
  [["Breakfast", "Cereal", "1", "porridge"], ["Breakfast", "Hot", "1", "poached-eggs"], ["Breakfast", "Fruit", "1", "fruit-salad"], ["Breakfast", "Drink", "1", "tea"], ["Lunch", "Soup", "1", "minestrone"], ["Lunch", "Main", "1", "fish-pie"], ["Lunch", "Main", "1", "steamed-rice"], ["Lunch", "Main", "2", "ham-salad"], ["Lunch", "Dessert", "1", "rice-pudding"], ["Lunch", "Dessert", "2", "yoghurt"], ["Dinner", "Main", "1", "pumpkin-soup"], ["Dinner", "Main", "2", "cheese-omelette"], ["Dinner", "Dessert", "1", "custard"]],
  [["Breakfast", "Cereal", "1", "corn-flakes"], ["Breakfast", "Hot", "1", "scrambled-eggs"], ["Breakfast", "Drink", "1", "milk"], ["Lunch", "Soup", "1", "tomato-soup"], ["Lunch", "Main", "1", "chicken-schnitzel"], ["Lunch", "Main", "1", "couscous"], ["Lunch", "Main", "2", "roast-beef"], ["Lunch", "Dessert", "1", "fruit-salad"], ["Lunch", "Dessert", "2", "jelly-custard"], ["Dinner", "Main", "1", "quiche"], ["Dinner", "Main", "2", "sandwich"], ["Dinner", "Dessert", "1", "jelly-custard"]],
  [["Breakfast", "Cereal", "1", "porridge"], ["Breakfast", "Hot", "1", "baked-beans"], ["Breakfast", "Drink", "1", "tea"], ["Lunch", "Soup", "1", "pea-ham-soup"], ["Lunch", "Main", "1", "baked-fish"], ["Lunch", "Main", "1", "roast-potatoes"], ["Lunch", "Main", "2", "macaroni-cheese"], ["Lunch", "Dessert", "1", "apple-crumble"], ["Lunch", "Dessert", "2", "ice-cream"], ["Dinner", "Main", "1", "pumpkin-soup"], ["Dinner", "Dessert", "1", "yoghurt"]],
  [["Breakfast", "Cereal", "1", "weetbix"], ["Breakfast", "Hot", "1", "scrambled-eggs"], ["Breakfast", "Fruit", "1", "banana"], ["Breakfast", "Drink", "1", "coffee"], ["Lunch", "Soup", "1", "mushroom-soup"], ["Lunch", "Main", "1", "sausages"], ["Lunch", "Main", "1", "garlic-mash"], ["Lunch", "Main", "2", "quiche"], ["Lunch", "Dessert", "1", "trifle"], ["Lunch", "Dessert", "2", "fruit-salad"], ["Dinner", "Main", "1", "sandwich"], ["Dinner", "Dessert", "1", "ice-cream"]],
  [["Breakfast", "Cereal", "1", "porridge"], ["Breakfast", "Hot", "1", "baked-beans"], ["Breakfast", "Fruit", "1", "stewed-apples"], ["Breakfast", "Drink", "1", "tea"], ["Lunch", "Soup", "1", "pumpkin-soup"], ["Lunch", "Main", "1", "roast-beef"], ["Lunch", "Main", "1", "roast-potatoes"], ["Lunch", "Main", "2", "nut-roast"], ["Lunch", "Dessert", "1", "pavlova"], ["Lunch", "Dessert", "2", "custard"], ["Dinner", "Main", "1", "tomato-soup"], ["Dinner", "Main", "2", "ham-salad"], ["Dinner", "Dessert", "1", "custard"]],
];

let seq = 100;
const uid = () => `id${seq++}`;
const CHEF_LOGIN = { email: "chef@soupedup.com", password: "chef123", name: "Alex Rivera", role: "chef", initials: "AR" };
const state = {
  view: "login",
  user: null,
  loginError: "",
  menuId: null,
  week: 0,
  day: 0,
  service: "",
  query: "",
  filters: { status: [], cycle: [] },
  sort: "updated",
  focus: "",
  page: 1,
  filterOpen: false,
  sortOpen: false,
  kebab: null,
  sitesPop: null,
  modal: null,
  sidebar: false,
  fsOpen: false,
  form: blankForm(),
  menus: [],
  recipeGroups: [],
  menuItemGroups: [],
  groupKind: "recipe",
  groupId: null,
};

function defaultCourses() {
  return Object.fromEntries(SERVICES.map((service) => [service, [...(COURSES[service] || [])]]));
}
function blankForm() {
  return {
    name: "",
    cycle: "14",
    start: "2026-11-23",
    services: [...CORE],
    courses: defaultCourses(),
    budget: "32",
    permission: "editable",
    startMode: "scratch",
    copyId: "",
    recipeGroupId: "",
    menuItemGroupId: "",
    groupName: "",
    groupItemIds: [],
    groupQuery: "",
    aiPrompt: "",
    aiAllergens: [],
    aiCategories: [],
    aiIddsi: ["4", "6"],
    error: "",
    version: "1.0",
    assignId: "",
    siteQuery: "",
    siteIds: [],
    siteMode: "keep",
    copyTargets: [],
    pick: { dayIndex: 0, service: "Lunch", course: "Main", choice: "1", query: "", iddsi: "", mode: "add", dishId: "" },
    publishedName: "",
  };
}
function allergenTokens(item) {
  return String(item?.allergen || "").split(",").map((part) => part.trim()).filter(Boolean);
}
function catalogAllergens() {
  const set = new Set();
  CATALOG.filter((item) => item.status === "Active").forEach((item) => allergenTokens(item).forEach((name) => set.add(name)));
  return [...set].sort();
}
function catalogCategories() {
  return [...new Set(CATALOG.filter((item) => item.status === "Active").map((item) => item.category))].sort();
}
function itemKind(item) {
  if (["Main Meals", "Breakfast", "Light meals"].includes(item.category)) return "recipe";
  return "menuItem";
}
function recipesInCatalog() {
  return CATALOG.filter((item) => itemKind(item) === "recipe" && item.status === "Active");
}
function menuItemsInCatalog() {
  return CATALOG.filter((item) => itemKind(item) === "menuItem" && item.status === "Active");
}
function seedRecipeGroups() {
  const all = recipesInCatalog().map((item) => item.id);
  const texture = all.filter((id) => ["pureed-chicken", "minced-beef", "soft-fish", "pureed-pumpkin", "pureed-porridge", "roast-chicken", "beef-casserole", "tomato-soup", "ham-salad"].includes(id));
  return [
    { id: "rg-standard", name: "Standard kitchen recipes", itemIds: all },
    { id: "rg-texture", name: "Texture-friendly recipes", itemIds: texture.length ? texture : all.slice(0, 12) },
  ];
}
function seedMenuItemGroups() {
  const all = menuItemsInCatalog().map((item) => item.id);
  const light = all.filter((id) => ["garlic-mash", "steamed-rice", "roast-potatoes", "couscous", "fruit-salad", "stewed-pears", "yoghurt", "tea", "coffee", "milk"].includes(id));
  return [
    { id: "mig-everyday", name: "Everyday menu items", itemIds: all },
    { id: "mig-light", name: "Light sides and drinks", itemIds: light.length ? light : all.slice(0, 10) },
  ];
}
function recipeGroupById(id) {
  return state.recipeGroups.find((group) => group.id === id) || null;
}
function menuItemGroupById(id) {
  return state.menuItemGroups.find((group) => group.id === id) || null;
}
function allowedItemIds(menuOrForm) {
  const recipeIds = recipeGroupById(menuOrForm?.recipeGroupId)?.itemIds || [];
  const menuItemIds = menuItemGroupById(menuOrForm?.menuItemGroupId)?.itemIds || [];
  return new Set([...recipeIds, ...menuItemIds]);
}
function allowedCatalogItems(menuOrForm) {
  const allowed = allowedItemIds(menuOrForm);
  return CATALOG.map((entry) => catalogItem(entry.id)).filter((item) => item && item.status === "Active" && allowed.has(item.id));
}
function groupIddsiLevels(menuOrForm) {
  const levels = new Set();
  allowedCatalogItems(menuOrForm).forEach((item) => {
    (item.iddsi || ["7"]).forEach((level) => levels.add(String(level)));
  });
  return levels;
}
function groupMissingIddsi(menuOrForm, required = REQUIRED_IDDSI) {
  const levels = groupIddsiLevels(menuOrForm);
  return required.filter((level) => !levels.has(String(level)));
}
function groupIddsiWarning(menuOrForm, required = REQUIRED_IDDSI) {
  if (!menuOrForm?.recipeGroupId || !menuOrForm?.menuItemGroupId) return "";
  const missing = groupMissingIddsi(menuOrForm, required);
  if (!missing.length) return "";
  const labels = missing.map((level) => `IDDSI ${level} (${IDDSI_NAME[level] || level})`);
  return `These groups can’t cover ${labels.join(" and ")}. Add those texture recipes to the recipe group (or menu item group), then try again.`;
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
function parseISO(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function addDays(value, amount) {
  const date = parseISO(value);
  date.setDate(date.getDate() + amount);
  return toISO(date);
}
function fmtDate(value) {
  return parseISO(value).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
}
function weekday(value) {
  return parseISO(value).toLocaleDateString("en-AU", { weekday: "short" });
}
function siteName(id) {
  return (SITES.find((site) => site[0] === id) || ["", id])[1];
}
function current() {
  return state.menus.find((menu) => menu.id === state.menuId) || null;
}
function toast(message) {
  const el = document.getElementById("toast");
  el.hidden = false;
  el.textContent = message;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 2800);
}

function recipeMeta(id) {
  const special = {
    "pureed-chicken": { cost: 5.4, kj: 680, iddsi: ["4"] },
    "minced-beef": { cost: 5.1, kj: 740, iddsi: ["5"] },
    "soft-fish": { cost: 6.2, kj: 620, iddsi: ["6"] },
    "pureed-pumpkin": { cost: 2.1, kj: 310, iddsi: ["4"] },
    "soft-crumble": { cost: 1.8, kj: 540, iddsi: ["6"] },
    "pureed-porridge": { cost: 1.1, kj: 480, iddsi: ["4"] },
  }[id];
  if (special) return special;
  const course = CATALOG.find((item) => item.id === id)?.course;
  const cost = { Main: 6.4, Side: 1.3, Soup: 2.2, Dessert: 1.6, Drink: 0.4, Cereal: 1.1, Hot: 1.8, Fruit: 0.9, Snack: 1.2, "Light bite": 2.4 }[course] || 2;
  const kj = { Main: 920, Side: 380, Soup: 280, Dessert: 520, Drink: 80, Cereal: 460, Hot: 540, Fruit: 220, Snack: 480, "Light bite": 640 }[course] || 400;
  return { cost, kj, iddsi: ["7"] };
}
function catalogItem(id) {
  const item = CATALOG.find((entry) => entry.id === id);
  return item ? { ...item, ...recipeMeta(id) } : null;
}
function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}
function cycleLabel(days) {
  const weeks = days / 7;
  if (Number.isInteger(weeks)) return weeks === 1 ? "1 week" : `${weeks} weeks`;
  return `${days} days`;
}
function endDate(menu) {
  return addDays(menu.start, Math.max(menu.cycle, 1) - 1);
}
function budgetOf(menu) {
  return Number(menu.budget) || 32;
}
function displayStatus(menu) {
  if (["Draft", "Pending Approval", "Approved", "Archived"].includes(menu.status)) return menu.status;
  const end = endDate(menu);
  if (end < TODAY) return "Expired";
  if (menu.start > TODAY) return "Scheduled";
  return menu.status || "Draft";
}
function statusKey(status) {
  return String(status).toLowerCase().replace(/\s+/g, "-");
}
function makeDish(dayIndex, row) {
  const item = catalogItem(row[3]);
  return {
    id: uid(),
    dayIndex,
    service: row[0],
    course: row[1],
    choice: row[2],
    itemId: item.id,
    name: item.name,
    category: item.category,
    allergen: item.allergen,
  };
}
const TEXTURE = [
  ["Lunch", "Main", "3", "pureed-chicken"],
  ["Lunch", "Main", "4", "soft-fish"],
  ["Dinner", "Main", "3", "pureed-chicken"],
  ["Dinner", "Main", "4", "soft-fish"],
];
function tile(cycle) {
  const dishes = [];
  for (let day = 0; day < cycle; day += 1) {
    PATTERN[day % 7].forEach((row) => dishes.push(makeDish(day, row)));
    TEXTURE.forEach((row) => dishes.push(makeDish(day, row)));
  }
  return dishes;
}
function seed() {
  const audit = (rows) => rows.map(([version, action, date]) => ({ version, action, author: "Casey Morgan", date }));
  return [
    { id: "m1", name: "Autumn dining cycle", cycle: 28, start: "2026-11-02", status: "Active", version: "2.1", sites: ["downtown", "eastside", "westfield"], siteMode: "replace", permission: "locked", budget: 32, updated: "2026-11-12", created: "2026-10-02", author: "Casey Morgan", dishes: tile(28), slots: [], audit: audit([["2.1", "Published", "2026-11-12"], ["2.0", "Published", "2026-10-20"], ["1.0", "Created", "2026-10-02"]]) },
    { id: "m2", name: "Summer lighter menu", cycle: 7, start: "2026-11-16", status: "Draft", version: "", sites: [], siteMode: "keep", updated: "2026-11-16", created: "2026-11-16", author: "Casey Morgan", dishes: [], slots: [], audit: audit([["", "Created", "2026-11-16"]]) },
    { id: "m3", name: "Christmas week", cycle: 7, start: "2026-12-21", status: "Pending Approval", version: "", sites: ["sunrise"], siteMode: "keep", updated: "2026-11-10", created: "2026-11-08", author: "Casey Morgan", dishes: [makeDish(0, ["Lunch", "Main", "1", "roast-chicken"]), makeDish(0, ["Lunch", "Main", "1", "roast-potatoes"]), makeDish(0, ["Lunch", "Main", "2", "nut-roast"]), makeDish(0, ["Lunch", "Dessert", "1", "pavlova"]), makeDish(0, ["Lunch", "Dessert", "2", "custard"]), makeDish(6, ["Dinner", "Main", "1", "roast-beef"])], slots: [], audit: audit([["", "Submitted for approval", "2026-11-10"], ["", "Created", "2026-11-08"]]) },
    { id: "m4", name: "Texture modified week", cycle: 7, start: "2026-11-09", status: "Active", version: "1.0", sites: ["northgate"], siteMode: "keep", updated: "2026-11-09", created: "2026-11-01", author: "Casey Morgan", dishes: tile(7).filter((dish) => dish.dayIndex === 0), slots: [], audit: audit([["1.0", "Published", "2026-11-09"], ["", "Created", "2026-11-01"]]) },
    { id: "m5", name: "Memory support finger foods", cycle: 14, start: "2026-10-19", status: "Archived", version: "1.2", sites: ["lakewood"], siteMode: "keep", updated: "2026-10-28", created: "2026-09-14", author: "Casey Morgan", dishes: [], audit: audit([["1.2", "Archived", "2026-10-28"]]) },
    { id: "m6", name: "High protein trial", cycle: 14, start: "2026-11-30", status: "Approved", version: "", sites: [], siteMode: "keep", updated: "2026-11-20", created: "2026-11-14", author: "Casey Morgan", dishes: [], audit: audit([["", "Approved", "2026-11-20"], ["", "Created", "2026-11-14"]]) },
    { id: "m7", name: "Winter comfort cycle", cycle: 28, start: "2026-11-09", status: "Active", version: "1.3", sites: ["downtown", "harbor"], siteMode: "replace", updated: "2026-11-04", created: "2026-05-12", author: "Casey Morgan", dishes: [], audit: audit([["1.3", "Published", "2026-11-04"]]) },
    { id: "m8", name: "Café all-day menu", cycle: 7, start: "2026-11-23", status: "Active", version: "3.0", sites: ["sunrise"], siteMode: "keep", services: ["Breakfast", "Lunch", "Dinner", "24-hour"], permission: "editable", updated: "2026-11-23", created: "2026-01-20", author: "Casey Morgan", dishes: [makeDish(0, ["24-hour", "Light bite", "1", "sandwich"]), makeDish(0, ["24-hour", "Drink", "1", "milk"]), makeDish(0, ["Lunch", "Main", "1", "ham-salad"])], slots: [], audit: audit([["3.0", "Published", "2026-11-23"]]) },
    { id: "m9", name: "Ramadan evening menu", cycle: 7, start: "2026-02-18", status: "Expired", version: "1.0", sites: ["eastside"], siteMode: "keep", updated: "2026-03-20", created: "2026-02-01", author: "Casey Morgan", dishes: [], audit: audit([["1.0", "Expired", "2026-03-20"]]) },
    { id: "m10", name: "Catering functions menu", cycle: 7, start: "2026-12-01", status: "Scheduled", version: "1.0", sites: ["westfield", "harbor"], siteMode: "keep", permission: "locked", updated: "2026-11-17", created: "2026-11-17", author: "Casey Morgan", dishes: tile(7), slots: [], audit: audit([["1.0", "Scheduled", "2026-11-17"], ["", "Created", "2026-11-17"]]) },
    { id: "m11", name: "Country kitchen cycle", cycle: 28, start: "2026-11-02", status: "Active", version: "1.0", sites: ["downtown", "eastside", "northgate", "lakewood"], siteMode: "replace", updated: "2026-10-30", created: "2026-08-01", author: "Casey Morgan", dishes: [], audit: audit([["1.0", "Published", "2026-10-30"]]) },
    { id: "m12", name: "New site starter menu", cycle: 7, start: "2026-11-16", status: "Draft", version: "", sites: [], siteMode: "keep", updated: "2026-11-15", created: "2026-11-15", author: "Casey Morgan", dishes: [], audit: audit([["", "Created", "2026-11-15"]]) },
  ];
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    state.menus = saved && Array.isArray(saved.menus) ? saved.menus : seed();
    state.recipeGroups = saved && Array.isArray(saved.recipeGroups) ? saved.recipeGroups : seedRecipeGroups();
    state.menuItemGroups = saved && Array.isArray(saved.menuItemGroups) ? saved.menuItemGroups : seedMenuItemGroups();
  } catch (error) {
    state.menus = seed();
    state.recipeGroups = seedRecipeGroups();
    state.menuItemGroups = seedMenuItemGroups();
  }
  if (!state.recipeGroups.length) state.recipeGroups = seedRecipeGroups();
  if (!state.menuItemGroups.length) state.menuItemGroups = seedMenuItemGroups();
  const ids = [
    ...state.menus.flatMap((menu) => [menu.id, ...(menu.dishes || []).map((dish) => dish.id)]),
    ...state.recipeGroups.map((group) => group.id),
    ...state.menuItemGroups.map((group) => group.id),
  ];
  const max = ids.reduce((n, id) => Math.max(n, Number(String(id).replace(/\D/g, "")) || 0), 100);
  seq = max + 1;
}
function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify({
    menus: state.menus,
    recipeGroups: state.recipeGroups,
    menuItemGroups: state.menuItemGroups,
  }));
}

function visibleMenus() {
  const q = state.query.trim().toLowerCase();
  let rows = state.menus.filter((menu) => {
    if (q) {
      const blob = [menu.name, menu.status, menu.version, ...menu.sites.map(siteName)].join(" ").toLowerCase();
      if (!blob.includes(q)) return false;
    }
    if (state.filters.status.length && !state.filters.status.includes(displayStatus(menu))) return false;
    if (state.focus === "expiring" && !isExpiring(menu)) return false;
    if (state.focus === "gaps" && !gapCount(menu)) return false;
    if (state.focus === "approval" && displayStatus(menu) !== "Pending Approval") return false;
    if (state.focus === "active" && displayStatus(menu) !== "Active") return false;
    if (state.filters.cycle.length && !state.filters.cycle.includes(String(menu.cycle))) return false;
    return true;
  });
  const by = {
    updated: (a, b) => b.updated.localeCompare(a.updated),
    name: (a, b) => a.name.localeCompare(b.name),
    nameDesc: (a, b) => b.name.localeCompare(a.name),
    cycle: (a, b) => b.cycle - a.cycle || a.name.localeCompare(b.name),
  };
  rows.sort(by[state.sort] || by.updated);
  return rows;
}
function servicesFor(menu) {
  const base = menu.services && menu.services.length ? menu.services : CORE;
  return SERVICES.filter((service) => base.includes(service));
}
function coursesFor(menu, service) {
  if (menu?.courses?.[service]?.length) return menu.courses[service];
  return COURSES[service] || [];
}
function primaryCourse(menu, service) {
  const list = coursesFor(menu, service);
  if (list.includes("Main")) return "Main";
  return list[0] || "Main";
}
function serviceGaps(menu, dayIndex, service) {
  if (!REQUIRED_SERVICES.includes(service) || !servicesFor(menu).includes(service)) return [];
  const levels = new Set();
  dishesOn(menu, dayIndex, service).forEach((dish) => {
    (catalogItem(dish.itemId)?.iddsi || ["7"]).forEach((level) => levels.add(String(level)));
  });
  return REQUIRED_IDDSI.filter((level) => !levels.has(level));
}
function dayGap(menu, dayIndex) {
  return REQUIRED_SERVICES.some((service) => serviceGaps(menu, dayIndex, service).length);
}
function gapCount(menu) {
  if (!menu.dishes.length) return 0;
  let count = 0;
  for (let day = 0; day < menu.cycle; day += 1) {
    REQUIRED_SERVICES.forEach((service) => {
      if (serviceGaps(menu, day, service).length) count += 1;
    });
  }
  return count;
}
function dayEstimate(menu, dayIndex) {
  let total = 0;
  servicesFor(menu).forEach((service) => {
    (COURSES[service] || []).forEach((course) => {
      const costs = choiceNumbers(menu, dayIndex, service, course).map((choice) => menu.dishes
        .filter((dish) => dish.dayIndex === dayIndex && dish.service === service && dish.course === course && String(dish.choice) === String(choice))
        .reduce((sum, dish) => sum + (catalogItem(dish.itemId)?.cost || 0), 0)).filter((cost) => cost > 0);
      if (costs.length) total += costs.reduce((sum, cost) => sum + cost, 0) / costs.length;
    });
  });
  return total;
}
function costWarnings(menu) {
  const budget = budgetOf(menu);
  const days = [];
  for (let day = 0; day < menu.cycle; day += 1) {
    const estimate = dayEstimate(menu, day);
    if (estimate > budget + 0.001) days.push({ day, estimate });
  }
  return { budget, days };
}
function isExpiring(menu) {
  const status = displayStatus(menu);
  if (status !== "Active" && status !== "Scheduled") return false;
  const end = endDate(menu);
  return end >= TODAY && end <= addDays(TODAY, 14);
}
function blockingIssues(menu) {
  const issues = [];
  if (!menu.dishes.length) issues.push("Add at least one recipe before publishing.");
  const gaps = gapCount(menu);
  if (menu.dishes.length && gaps) issues.push(`${gaps} lunch or dinner service${gaps === 1 ? "" : "s"} ${gaps === 1 ? "is" : "are"} missing an IDDSI 4 or IDDSI 6 recipe.`);
  return issues;
}
function coverageLabel(menu) {
  if (!menu.dishes.length) return `<span class="badge badge-archived">Not started</span>`;
  const gaps = gapCount(menu);
  if (!gaps) return `<span class="badge badge-approved">IDDSI covered</span>`;
  return `<span class="badge badge-expired">${gaps} IDDSI gap${gaps === 1 ? "" : "s"}</span>`;
}
function dayDate(menu, index) {
  return addDays(menu.start, index);
}
function dishesOn(menu, dayIndex, service) {
  return menu.dishes.filter((dish) => dish.dayIndex === dayIndex && (!service || dish.service === service));
}
function groupCourses(dishes, service) {
  const order = COURSES[service] || [];
  const names = [...new Set(dishes.map((dish) => dish.course))].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return names.map((name) => {
    const choices = [...new Set(dishes.filter((dish) => dish.course === name).map((dish) => dish.choice))].sort();
    return {
      name,
      choices: choices.map((choice) => ({ choice, items: dishes.filter((dish) => dish.course === name && dish.choice === choice) })),
    };
  });
}
function statusBadge(status) {
  return `<span class="badge badge-${esc(statusKey(status))}">${esc(status)}</span>`;
}
function metaLine(menu) {
  const version = menu.version ? `Version ${menu.version}` : "Not published";
  const lock = menu.permission === "locked" ? " · Locked for sites" : "";
  return `${version}${lock} · ${fmtDate(menu.start)} – ${fmtDate(endDate(menu))}`;
}
function sitesCell(menu) {
  if (!menu.sites.length) return "—";
  const first = esc(siteName(menu.sites[0]));
  if (menu.sites.length === 1) return first;
  return `${first} <button class="linkish" type="button" data-action="sites-pop" data-id="${esc(menu.id)}">+${menu.sites.length - 1}</button>`;
}

function shell(title, crumb, body, actions = "") {
  const crumbs = crumb.map((item, index) => {
    if (index === crumb.length - 1) return `<span class="here">${esc(item.label)}</span>`;
    return `<button type="button" data-action="${esc(item.action || "goto-list")}">${esc(item.label)}</button><span aria-hidden="true">→</span>`;
  }).join("");
  return `
    <div class="page">
      <p class="crumbs">${crumbs}</p>
      <div class="editor-head">
        <div>
          <h1 class="page-title">${esc(title)}</h1>
          ${actions ? "" : ""}
        </div>
        <div class="head-actions">${actions}</div>
      </div>
      ${body}
      <p class="footer-note">Copyright © 2026 SoupedUp. All rights reserved.</p>
    </div>`;
}

function loginView() {
  return `<div class="login-screen">
    <form class="login-card" id="login-form" data-stop>
      <div class="login-brand">Souped<span>Up</span></div>
      <h1>Chef sign in</h1>
      <p class="login-lead">Build weekly menus, copy cycles, and clear IDDSI gaps.</p>
      ${state.loginError ? `<p class="error">${esc(state.loginError)}</p>` : ""}
      <label class="lbl">Email
        <input name="email" type="email" autocomplete="username" value="${esc(CHEF_LOGIN.email)}" required />
      </label>
      <label class="lbl">Password
        <input name="password" type="password" autocomplete="current-password" value="${esc(CHEF_LOGIN.password)}" required />
      </label>
      <p class="hint">Demo chef: ${esc(CHEF_LOGIN.email)} / ${esc(CHEF_LOGIN.password)}</p>
      <button class="btn btn-primary login-submit" type="submit">Sign in</button>
    </form>
  </div>`;
}
function listView() {
  if (!state.menus.length) {
    return shell("Menus", [{ label: "Catering" }, { label: "Menus" }], `
      <section class="card">
        <div class="empty">
          <div class="mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
          </div>
          <h2>No menus yet</h2>
          <p>Start a weekly cycle from scratch, or copy an existing menu and fill the board.</p>
          <button class="btn btn-primary" type="button" data-action="open-chef-start">Create menu</button>
        </div>
      </section>`);
  }
  const rows = visibleMenus();
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  if (state.page > pages) state.page = pages;
  const start = (state.page - 1) * PAGE_SIZE;
  const slice = rows.slice(start, start + PAGE_SIZE);
  const from = rows.length ? start + 1 : 0;
  const to = Math.min(start + PAGE_SIZE, rows.length);
  const filterCount = state.filters.status.length + state.filters.cycle.length;
  const counts = {
    active: state.menus.filter((menu) => displayStatus(menu) === "Active").length,
    approval: state.menus.filter((menu) => displayStatus(menu) === "Pending Approval").length,
    expiring: state.menus.filter(isExpiring).length,
    gaps: state.menus.filter((menu) => gapCount(menu)).length,
  };
  const focusNote = state.focus ? `<p class="focus-note">Showing ${esc({ active: "active menus", approval: "menus awaiting approval", expiring: "menus ending within 14 days", gaps: "menus with IDDSI gaps" }[state.focus])}. <button class="btn btn-text" type="button" data-action="clear-filters">Clear</button></p>` : "";
  const stats = `<div class="stats">
    ${statButton("active", counts.active, "Active now")}
    ${statButton("approval", counts.approval, "Awaiting approval")}
    ${statButton("expiring", counts.expiring, "Ending within 14 days")}
    ${statButton("gaps", counts.gaps, "IDDSI gaps")}
  </div>`;
  const table = slice.length ? `
    <div class="table-wrap">
      <table class="grid">
        <thead>
          <tr>
            <th>Menu</th><th>Cycle</th><th>Dates</th><th>Coverage</th><th>Facilities</th><th>Status</th><th>Updated</th><th></th>
          </tr>
        </thead>
        <tbody>
          ${slice.map((menu) => `
            <tr>
              <td><span class="cell-name"><button class="linkish name-btn" type="button" data-action="open-chef" data-id="${esc(menu.id)}">${esc(menu.name)}</button><span class="cell-meta">${esc(metaLine(menu))}</span></span></td>
              <td>${esc(cycleLabel(menu.cycle))}</td>
              <td>${esc(fmtDate(menu.start))}<span class="cell-meta">${isExpiring(menu) ? "Ends soon" : esc(fmtDate(endDate(menu)))}</span></td>
              <td>${coverageLabel(menu)}</td>
              <td>${sitesCell(menu)}</td>
              <td>${statusBadge(displayStatus(menu))}</td>
              <td>${esc(fmtDate(menu.updated))}</td>
              <td class="actions-cell"><button class="icon-hit" type="button" aria-label="Actions for ${esc(menu.name)}" data-action="kebab" data-id="${esc(menu.id)}"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg></button></td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="pager">
      <span>Showing ${from}–${to} of ${rows.length}</span>
      <div class="pages">
        <button type="button" data-action="page" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""} aria-label="Previous page">‹</button>
        ${Array.from({ length: pages }, (_, i) => `<button type="button" data-action="page" data-page="${i + 1}" ${i + 1 === state.page ? 'aria-current="page"' : ""}>${i + 1}</button>`).join("")}
        <button type="button" data-action="page" data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""} aria-label="Next page">›</button>
      </div>
    </div>` : `<div class="empty"><h2>No menus match</h2><p>Try another search, or clear the filters.</p><button class="btn btn-outline" type="button" data-action="clear-filters">Clear filters</button></div>`;

  return shell("Menus", [{ label: "Catering" }, { label: "Menus" }], `
    ${stats}
    ${focusNote}
    <section class="card">
      <div class="card-head">
        <div class="card-title">
          <span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg></span>
          <div><h2>Menus</h2><div class="records">${state.menus.length} records</div></div>
        </div>
        <div class="head-actions">
          <button class="btn btn-primary" type="button" data-action="open-chef-start">Create menu</button>
        </div>
      </div>
      <div class="toolbar">
        <div class="toolbar-tools">
          <label class="field-search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input id="q" type="search" placeholder="Search" value="${esc(state.query)}" aria-label="Search menus" />
          </label>
          <div class="pop-wrap">
            <button class="tool-btn ${filterCount ? "is-on" : ""}" type="button" data-action="toggle-filter">Filter${filterCount ? ` · ${filterCount}` : ""}</button>
            ${state.filterOpen ? filterPopover() : ""}
          </div>
          <div class="pop-wrap">
            <button class="tool-btn ${state.sortOpen ? "is-on" : ""}" type="button" data-action="toggle-sort">Sort</button>
            ${state.sortOpen ? sortPopover() : ""}
          </div>
        </div>
      </div>
      ${table}
    </section>`);
}
function filterPopover() {
  const box = (kind, value, label) => `<label><input type="checkbox" data-filter="${kind}" value="${esc(value)}" ${state.filters[kind].includes(value) ? "checked" : ""}/> ${esc(label)}</label>`;
  return `<div class="popover" data-stop>
    <h3>Status</h3>
    ${box("status", "Draft", "Draft")}${box("status", "Pending Approval", "Pending approval")}${box("status", "Approved", "Approved")}${box("status", "Scheduled", "Scheduled")}${box("status", "Active", "Active")}${box("status", "Expired", "Expired")}${box("status", "Archived", "Archived")}
    <h3>Cycle</h3>
    ${box("cycle", "7", "1 week")}${box("cycle", "14", "2 weeks")}${box("cycle", "28", "4 weeks")}${box("cycle", "42", "6 weeks")}
    <button class="btn btn-quiet" type="button" data-action="clear-filters">Clear filters</button>
  </div>`;
}
function sortPopover() {
  const option = (value, label) => `<label><input type="radio" name="sort" value="${value}" ${state.sort === value ? "checked" : ""}/> ${label}</label>`;
  return `<div class="popover" data-stop>
    <h3>Sort by</h3>
    ${option("updated", "Recently updated")}
    ${option("name", "Name A–Z")}
    ${option("nameDesc", "Name Z–A")}
    ${option("cycle", "Cycle length")}
  </div>`;
}

function statButton(focus, count, label) {
  return `<button class="stat ${state.focus === focus ? "is-on" : ""}" type="button" data-action="focus-stat" data-focus="${focus}"><strong>${count}</strong><span>${esc(label)}</span></button>`;
}
function editorActions(menu) {
  const status = displayStatus(menu);
  const buttons = [
    `<button class="btn btn-outline" type="button" data-action="export">Print</button>`,
    `<button class="btn btn-outline" type="button" data-action="open-validate">Validate</button>`,
  ];
  if (status === "Draft") buttons.push(`<button class="btn btn-outline" type="button" data-action="submit-approval">Submit for approval</button>`);
  if (status === "Pending Approval") buttons.push(`<button class="btn btn-primary" type="button" data-action="approve-menu">Mark approved</button>`);
  if (status === "Approved" || status === "Scheduled" || status === "Active") buttons.push(`<button class="btn btn-primary" type="button" data-action="open-publish">Schedule & publish</button>`);
  if (status === "Expired" || status === "Archived") buttons.push(`<button class="btn btn-outline" type="button" data-action="reopen-draft">Reopen as draft</button>`);
  return buttons.join("");
}
function activeService(menu) {
  const list = servicesFor(menu);
  if (!list.length) return "";
  if (list.includes(state.service)) return state.service;
  state.service = list[0];
  return state.service;
}
function serviceCount(menu, dayIndex, service) {
  return dishesOn(menu, dayIndex, service).length;
}
function setupView() {
  const form = state.form;
  const end = addDays(form.start || TODAY, Number(form.cycle || 14) - 1);
  const editing = state.menuId ? current() : null;
  const serviceBlocks = SERVICES.map((service) => {
    const on = (form.services || []).includes(service);
    const courseList = COURSES[service] || [];
    const selectedCourses = form.courses?.[service] || courseList;
    return `<div class="setup-service ${on ? "is-on" : ""}">
      <label class="setup-service-head">
        <input type="checkbox" name="service" value="${esc(service)}" ${on ? "checked" : ""}/>
        <strong>${esc(service === "24-hour" ? "24-hour" : service)}</strong>
      </label>
      ${on ? `<div class="chips setup-courses">${courseList.map((course) => `<label class="chip"><input type="checkbox" name="course:${esc(service)}" value="${esc(course)}" ${selectedCourses.includes(course) ? "checked" : ""}/> ${esc(course)}</label>`).join("")}</div>` : `<p class="hint">Turn on to choose courses.</p>`}
    </div>`;
  }).join("");
  return shell(editing ? `Edit setup · ${editing.name}` : "Set up a menu", [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Admin setup" }], `
    <form class="setup-page" id="setup-form">
      <p class="page-sub setup-lead">Admin path: lock in dates, cycle length, services and courses. Then hand the week board to the chef.</p>
      ${form.error ? `<p class="error">${esc(form.error)}</p>` : ""}
      <section class="card setup-card">
        <div class="card-head"><div class="card-title"><div><h2>1. Cycle basics</h2><div class="records">Name, dates, weeks</div></div></div></div>
        <div class="setup-body form-grid">
          <label class="lbl">Menu name <span class="req">*</span>
            <input name="name" type="text" value="${esc(form.name)}" placeholder="e.g. Autumn dining cycle" />
          </label>
          <label class="lbl">Cycle length
            <span class="segmented">
              ${[["7", "1 week"], ["14", "2 weeks"], ["28", "4 weeks"], ["42", "6 weeks"]].map(([value, label]) => `<label><input type="radio" name="cycle" value="${value}" ${form.cycle === value ? "checked" : ""}/><span>${label}</span></label>`).join("")}
            </span>
          </label>
          <div class="split">
            <label class="lbl">Starts<input name="start" type="date" value="${esc(form.start)}" /></label>
            <label class="lbl">Ends<span class="readonly">${esc(fmtDate(end))}</span></label>
          </div>
          <label class="lbl">Daily budget per resident
            <input name="budget" type="number" min="0" step="0.5" value="${esc(form.budget)}" />
            <span class="hint">Used later to flag days over the estimate. It does not block a draft.</span>
          </label>
        </div>
      </section>
      <section class="card setup-card">
        <div class="card-head"><div class="card-title"><div><h2>2. Meal services & courses</h2><div class="records">What the chef will fill</div></div></div></div>
        <div class="setup-body setup-services">${serviceBlocks}</div>
      </section>
      <div class="setup-actions">
        <button class="btn btn-quiet" type="button" data-action="goto-list">Cancel</button>
        <button class="btn btn-outline" type="submit" name="intent" value="draft">Save draft</button>
        <button class="btn btn-primary" type="submit" name="intent" value="chef">Save & open chef build</button>
      </div>
    </form>`);
}
function openChefPicker(dayOffset, service, course) {
  const menu = current();
  if (!menu) return false;
  state.day = Number(dayOffset);
  state.service = service;
  const dayIndex = state.week * 7 + state.day;
  const pickCourse = course || primaryCourse(menu, service);
  state.form.pick = {
    dayIndex,
    service,
    course: pickCourse,
    choice: "1",
    query: "",
    iddsi: "",
    mode: "add",
    dishId: "",
  };
  state.modal = "picker";
  return true;
}
function chefChip(dish) {
  const item = catalogItem(dish.itemId);
  const levels = (item?.iddsi || ["7"]).join(",");
  return `<span class="chef-chip" title="${esc(dish.name)} · IDDSI ${esc(levels)}">
    <span>${esc(dish.name)}</span>
    <button class="chef-chip-x" type="button" aria-label="Remove ${esc(dish.name)}" data-action="remove-dish" data-id="${esc(dish.id)}">×</button>
  </span>`;
}
function chefCell(menu, dayIndex, service) {
  const dishes = dishesOn(menu, dayIndex, service);
  const gaps = serviceGaps(menu, dayIndex, service);
  const dayOffset = dayIndex - state.week * 7;
  return `<div class="chef-cell ${gaps.length ? "is-gap" : ""} ${dishes.length ? "" : "is-empty"}">
    ${gaps.length ? `<span class="chef-flag">Needs IDDSI ${gaps.join(" & ")}</span>` : ""}
    <div class="chef-chip-list">${dishes.map(chefChip).join("") || `<span class="chef-empty">No recipes</span>`}</div>
    <button class="chef-add" type="button" data-action="chef-add" data-day="${dayOffset}" data-service="${esc(service)}">+ Add</button>
  </div>`;
}
function chefView() {
  const menu = current();
  if (!menu) return listView();
  const weeks = Math.ceil(menu.cycle / 7);
  const weekStart = state.week * 7;
  const dayCount = Math.min(7, menu.cycle - weekStart);
  const selected = weekStart + state.day;
  const status = displayStatus(menu);
  const weekGaps = Array.from({ length: dayCount }, (_, offset) => weekStart + offset).flatMap((dayIndex) =>
    servicesFor(menu).flatMap((name) => serviceGaps(menu, dayIndex, name).map((level) => ({ dayIndex, service: name, level })))
  );
  const days = Array.from({ length: dayCount }, (_, offset) => {
    const index = weekStart + offset;
    return `<th class="${offset === state.day ? "is-on" : ""} ${dayGap(menu, index) ? "is-gap" : ""}">
      <button class="chef-day-head" type="button" data-action="select-day" data-day="${offset}">
        <span>${esc(weekday(dayDate(menu, index)))}</span>
        <strong>${parseISO(dayDate(menu, index)).getDate()}</strong>
        ${dayGap(menu, index) ? `<small>IDDSI gap</small>` : ""}
      </button>
    </th>`;
  }).join("");
  const rows = servicesFor(menu).map((name) => {
    const cells = Array.from({ length: dayCount }, (_, offset) => `<td>${chefCell(menu, weekStart + offset, name)}</td>`).join("");
    return `<tr><th scope="row">${esc(name === "24-hour" ? "24-hour" : name)}</th>${cells}</tr>`;
  }).join("");
  const gapBanner = weekGaps.length
    ? `<p class="callout callout-warn">${weekGaps.length} IDDSI gap${weekGaps.length === 1 ? "" : "s"} this week. Tap <strong>+ Add</strong> on a red cell to fix it. <button class="btn btn-text" type="button" data-action="jump-gap">Open first gap</button></p>`
    : `<p class="callout">No IDDSI gaps this week. Tap <strong>+ Add</strong> on any cell to place recipes.</p>`;
  return shell(menu.name, [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Chef build" }], `
    <div class="chef-page">
      <p class="page-sub planner-meta">${esc(cycleLabel(menu.cycle))} · ${esc(fmtDate(menu.start))} – ${esc(fmtDate(endDate(menu)))} · ${esc(status)} · ${esc(recipeGroupById(menu.recipeGroupId)?.name || "No recipe group")} · ${esc(menuItemGroupById(menu.menuItemGroupId)?.name || "No menu item group")}</p>
      ${groupIddsiWarning(menu) ? `<p class="callout callout-warn">${esc(groupIddsiWarning(menu))} Gaps can’t be cleared until the groups include those textures.</p>` : ""}
      ${gapBanner}
      <div class="chef-toolbar">
        <div class="chef-toolbar-left">
          ${weeks > 1 ? `<div class="weeks">${Array.from({ length: weeks }, (_, i) => `<button class="week ${i === state.week ? "is-on" : ""}" type="button" data-action="select-week" data-week="${i}">Week ${i + 1}</button>`).join("")}</div>` : `<p class="day-label">Copy uses ${esc(weekday(dayDate(menu, selected)))} ${esc(fmtDate(dayDate(menu, selected)))}</p>`}
        </div>
        <div class="head-actions">
          <button class="btn btn-text" type="button" data-action="copy-day" ${dishesOn(menu, selected).length ? "" : "disabled"}>Copy day</button>
          ${weeks > 1 ? `<button class="btn btn-text" type="button" data-action="copy-week">Copy week</button>` : ""}
          <button class="btn btn-outline" type="button" data-action="open-validate">Validate</button>
          <button class="btn btn-outline" type="button" data-action="export">Print</button>
        </div>
      </div>
      <div class="chef-board-wrap card is-fill">
        <table class="chef-board">
          <thead><tr><th>Service</th>${days}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`, editorActions(menu));
}
function editorView() {
  const menu = current();
  if (!menu) return listView();
  const weeks = Math.ceil(menu.cycle / 7);
  const weekStart = state.week * 7;
  const dayCount = Math.min(7, menu.cycle - weekStart);
  const selected = weekStart + state.day;
  const status = displayStatus(menu);
  const estimate = dayEstimate(menu, selected);
  const over = estimate > budgetOf(menu) + 0.001;
  const service = activeService(menu);
  const days = Array.from({ length: dayCount }, (_, offset) => {
    const index = weekStart + offset;
    const gap = dayGap(menu, index);
    const cost = dayEstimate(menu, index);
    return `<button class="day ${offset === state.day ? "is-on" : ""} ${gap ? "is-gap" : ""}" type="button" data-action="select-day" data-day="${offset}"><span>${esc(weekday(dayDate(menu, index)))}</span><strong>${parseISO(dayDate(menu, index)).getDate()}</strong><small>${gap ? "IDDSI gap" : cost ? money(cost) : "Empty"}</small></button>`;
  }).join("");
  const serviceTabs = servicesFor(menu).map((name) => {
    const count = serviceCount(menu, selected, name);
    const gap = serviceGaps(menu, selected, name).length;
    return `<button class="service-tab ${name === service ? "is-on" : ""} ${gap ? "is-gap" : ""}" type="button" data-action="select-service" data-service="${esc(name)}"><span>${esc(name === "24-hour" ? "24-hour" : name)}</span><small>${gap ? "IDDSI gap" : count ? `${count} recipe${count === 1 ? "" : "s"}` : "Empty"}</small></button>`;
  }).join("");
  const gapNotes = REQUIRED_SERVICES.filter((name) => servicesFor(menu).includes(name)).flatMap((name) => serviceGaps(menu, selected, name).map((level) => `${name} missing IDDSI ${level}`));
  const banner = gapNotes.length
    ? `<p class="callout callout-warn">${esc(gapNotes.join(" · "))}. Add those recipes to a choice.</p>`
    : menu.permission === "locked"
      ? `<p class="callout">Locked for sites. Head office can still change this menu.</p>`
      : (menu.dishes.length ? "" : `<p class="callout">Build this cycle from Menu items. Courses can have several choices.</p>`);
  return shell(menu.name, [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Cycle editor" }], `
    <div class="planner">
      <div class="planner-chrome">
        ${banner}
        <p class="page-sub planner-meta">${esc(cycleLabel(menu.cycle))} · ${esc(fmtDate(menu.start))} – ${esc(fmtDate(endDate(menu)))} · ${esc(status)} · Budget ${money(budgetOf(menu))} / resident</p>
        <div class="planner-nav">
          ${weeks > 1 ? `<div class="weeks">${Array.from({ length: weeks }, (_, i) => `<button class="week ${i === state.week ? "is-on" : ""}" type="button" data-action="select-week" data-week="${i}">Week ${i + 1}</button>`).join("")}</div>` : ""}
          <div class="days">${days}</div>
        </div>
        <div class="day-bar">
          <p class="day-label">${esc(weekday(dayDate(menu, selected)))} ${esc(fmtDate(dayDate(menu, selected)))} <span class="${over ? "over" : "muted-inline"}">${money(estimate)} of ${money(budgetOf(menu))}</span> <span class="legend-inline"><i class="dot dot-gap"></i> IDDSI gap</span></p>
          <div class="head-actions">
            <button class="btn btn-text" type="button" data-action="open-services">Services</button>
            <button class="btn btn-text" type="button" data-action="copy-day" ${dishesOn(menu, selected).length ? "" : "disabled"}>Copy day</button>
            ${weeks > 1 ? `<button class="btn btn-text" type="button" data-action="copy-week">Copy week</button>` : ""}
          </div>
        </div>
        <div class="service-tabs" role="tablist" aria-label="Meal services">${serviceTabs}</div>
      </div>
      <div class="meals meals-panel">${service ? mealCard(menu, selected, service) : ""}</div>
    </div>`, editorActions(menu));
}
function choiceNumbers(menu, dayIndex, service, course) {
  const numbers = new Set(["1"]);
  menu.dishes
    .filter((dish) => dish.dayIndex === dayIndex && dish.service === service && dish.course === course)
    .forEach((dish) => numbers.add(String(dish.choice)));
  (menu.slots || [])
    .filter((slot) => slot.dayIndex === dayIndex && slot.service === service && slot.course === course)
    .forEach((slot) => numbers.add(String(slot.choice)));
  return [...numbers].sort((a, b) => Number(a) - Number(b));
}
function iddsiPills(levels) {
  return (levels || ["7"]).map((level) => `<span class="iddsi iddsi-${esc(level)}">IDDSI ${esc(level)} ${esc(IDDSI_NAME[level] || "")}</span>`).join("");
}
function mealCard(menu, dayIndex, service) {
  const missing = serviceGaps(menu, dayIndex, service);
  const flag = missing.length
    ? `<span class="badge badge-expired">Missing ${missing.map((level) => `IDDSI ${level}`).join(" & ")}</span>`
    : (REQUIRED_SERVICES.includes(service) ? `<span class="badge badge-approved">IDDSI 4 & 6</span>` : "");
  const body = coursesFor(menu, service).map((course) => {
    const numbers = choiceNumbers(menu, dayIndex, service, course);
    const blocks = numbers.map((choice) => {
      const items = menu.dishes.filter((dish) => dish.dayIndex === dayIndex && dish.service === service && dish.course === course && String(dish.choice) === choice);
      return `<div class="choice-box ${items.length ? "" : "is-empty"}">
        <div class="choice-head">
          <span class="choice-label">Choice ${esc(choice)}</span>
          <div class="choice-tools">
            <button class="btn btn-text" type="button" data-action="add-item" data-service="${esc(service)}" data-course="${esc(course)}" data-choice="${esc(choice)}">Add</button>
            ${choice !== "1" ? `<button class="btn btn-text" type="button" data-action="remove-choice" data-service="${esc(service)}" data-course="${esc(course)}" data-choice="${esc(choice)}">Remove</button>` : ""}
          </div>
        </div>
        ${items.length ? items.map(dishCard).join("") : `<p class="none">Empty</p>`}
      </div>`;
    }).join("");
    return `<div class="course"><div class="course-head"><p class="course-label">${esc(course)}</p><button class="btn btn-text" type="button" data-action="add-choice" data-service="${esc(service)}" data-course="${esc(course)}">+ choice</button></div>${blocks}</div>`;
  }).join("");
  return `<section class="meal meal-panel"><div class="meal-head"><h3>${esc(service === "24-hour" ? "24-hour" : service)}</h3>${flag}</div><div class="meal-body course-grid">${body}</div></section>`;
}
function dishCard(dish) {
  const item = catalogItem(dish.itemId);
  const meta = [item ? `${Math.round(item.kj)} kJ` : "", item ? money(item.cost) : "", dish.allergen].filter(Boolean).join(" · ");
  return `<article class="dish">
    <span class="swatch" style="background:${SWATCH[dish.course] || "#eee"}"></span>
    <div class="dish-copy"><strong>${esc(dish.name)}</strong><small>${esc(meta || "Recipe")}</small><span class="pill-row">${iddsiPills(item?.iddsi)}</span></div>
    <div class="dish-actions">
      <button class="btn btn-text" type="button" data-action="replace-item" data-id="${esc(dish.id)}">Replace</button>
      <button class="icon-hit danger" type="button" aria-label="Remove ${esc(dish.name)}" data-action="remove-dish" data-id="${esc(dish.id)}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12"/></svg></button>
    </div>
  </article>`;
}

function boardView() {
  const menu = current();
  if (!menu) return listView();
  const weekStart = state.week * 7;
  const dayCount = Math.min(7, menu.cycle - weekStart);
  const columns = Array.from({ length: dayCount }, (_, offset) => {
    const index = weekStart + offset;
    const blocks = servicesFor(menu).map((service) => {
      const dishes = dishesOn(menu, index, service);
      if (!dishes.length) return "";
      const lines = groupCourses(dishes, service).map((course) => course.choices.map((choice) => `<p><em>${esc(course.name)} · Choice ${esc(choice.choice)}</em> — ${choice.items.map((item) => esc(item.name)).join(", ")}</p>`).join("")).join("");
      return `<div class="board-meal"><h4>${esc(service)}</h4>${lines}</div>`;
    }).join("");
    return `<article class="board-day"><h3>${esc(weekday(dayDate(menu, index)))}</h3><p class="when">${esc(fmtDate(dayDate(menu, index)))}</p>${blocks || "<p class='when'>No dishes</p>"}</article>`;
  }).join("");
  return shell("Print menu", [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Print" }], `
    <p class="page-sub" style="margin-top:-8px">${esc(menu.name)} · ${menu.version ? `Version ${esc(menu.version)}` : displayStatus(menu)} · Resident-facing board for this week</p>
    <div class="board-scroll"><div class="board">${columns}</div></div>`, `
    <button class="btn btn-quiet" type="button" data-action="back-chef">Back to chef build</button>
    <button class="btn btn-primary" type="button" data-action="print">Print</button>`);
}

function auditView() {
  const menu = current();
  if (!menu) return listView();
  const rows = menu.audit.length ? menu.audit.map((row) => `<tr><td>${esc(row.version || "—")}</td><td>${esc(row.action)}</td><td>${esc(row.author)}</td><td>${esc(fmtDate(row.date))}</td></tr>`).join("") : `<tr><td colspan="4">No audit history yet.</td></tr>`;
  return shell("Audit log", [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Audit log" }], `
    <p class="page-sub" style="margin-top:-8px">${esc(menu.name)}</p>
    <section class="card"><div class="table-wrap"><table class="grid"><thead><tr><th>Version</th><th>Action</th><th>Author</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table></div></section>`);
}

function validationView() {
  const menu = current();
  if (!menu) return listView();
  const weeks = Math.ceil(menu.cycle / 7);
  const weekStart = state.week * 7;
  const dayCount = Math.min(7, menu.cycle - weekStart);
  const selected = weekStart + state.day;
  const status = displayStatus(menu);
  const blocking = blockingIssues(menu);
  const warnings = costWarnings(menu);
  const days = Array.from({ length: dayCount }, (_, offset) => {
    const index = weekStart + offset;
    const gap = dayGap(menu, index);
    return `<button class="day ${offset === state.day ? "is-on" : ""} ${gap ? "is-gap" : ""}" type="button" data-action="select-day" data-day="${offset}"><span>${esc(weekday(dayDate(menu, index)))}</span><strong>${parseISO(dayDate(menu, index)).getDate()}</strong><small>${gap ? "IDDSI gap" : "Covered"}</small></button>`;
  }).join("");
  const serviceRows = servicesFor(menu).filter((service) => REQUIRED_SERVICES.includes(service)).map((service) => {
    const missing = serviceGaps(menu, selected, service);
    const names = dishesOn(menu, selected, service).map((dish) => dish.name);
    return `<article class="validate-row"><div><strong>${esc(service)}</strong><p>${names.length ? esc(names.join(", ")) : "No recipes on this service."}</p></div>${missing.length ? `<span class="badge badge-expired">Needs IDDSI ${missing.join(" & ")}</span>` : `<span class="badge badge-approved">IDDSI 4 & 6 present</span>`}</article>`;
  }).join("");
  const estimate = dayEstimate(menu, selected);
  const over = estimate > budgetOf(menu) + 0.001;
  const warnCopy = warnings.days.length ? `${warnings.days.length} day${warnings.days.length === 1 ? "" : "s"} over the ${money(warnings.budget)} budget. Cost warnings do not block publishing.` : `No day is over the ${money(budgetOf(menu))} budget.`;
  return shell("Menu validation", [{ label: "Catering" }, { label: "Menus", action: "goto-list" }, { label: "Validation" }], `
    <p class="page-sub" style="margin-top:-8px">${esc(menu.name)} · ${esc(status)} · IDDSI gaps block publishing. Cost and approval notes stay visible either way.</p>
    <div class="stats">
      <div class="stat"><strong>${blocking.length}</strong><span>Publishing blocks</span></div>
      <div class="stat"><strong>${gapCount(menu)}</strong><span>Services missing texture</span></div>
      <div class="stat"><strong>${warnings.days.length}</strong><span>Days over budget</span></div>
      <div class="stat"><strong>${esc(status)}</strong><span>Lifecycle</span></div>
    </div>
    ${blocking.length ? `<p class="callout callout-warn">${blocking.map(esc).join(" ")}</p>` : `<p class="callout">Lunch and Dinner include IDDSI 4 and 6.${status === "Draft" || status === "Pending Approval" ? " Record approval before this menu can be scheduled." : ""}</p>`}
    ${weeks > 1 ? `<div class="weeks">${Array.from({ length: weeks }, (_, i) => `<button class="week ${i === state.week ? "is-on" : ""}" type="button" data-action="select-week" data-week="${i}">Week ${i + 1}</button>`).join("")}</div>` : ""}
    <div class="days">${days}</div>
    <section class="card validate-card">
      <div class="card-head"><div class="card-title"><div><h2>${esc(weekday(dayDate(menu, selected)))} ${esc(fmtDate(dayDate(menu, selected)))}</h2><div class="records ${over ? "over" : ""}">${money(estimate)} estimated · budget ${money(budgetOf(menu))}</div></div></div></div>
      <div class="validate-list">${serviceRows || `<p class="none">This menu has no Lunch or Dinner service, so the texture check does not apply.</p>`}</div>
      <p class="hint-line">${esc(warnCopy)} Required texture for this prototype: every Lunch and every Dinner needs one Pureed (4) recipe and one Soft & bite-sized (6) recipe.</p>
    </section>`, `
    <button class="btn btn-quiet" type="button" data-action="back-chef">Back to chef build</button>
    ${editorActions(menu)}`);
}
function groupsView(kind) {
  const isRecipe = kind === "recipe";
  const title = isRecipe ? "Recipe groups" : "Menu item groups";
  const groups = isRecipe ? state.recipeGroups : state.menuItemGroups;
  const catalog = isRecipe ? recipesInCatalog() : menuItemsInCatalog();
  const rows = groups.map((group) => {
    const names = group.itemIds.map((id) => catalogItem(id)?.name).filter(Boolean);
    const preview = names.slice(0, 4).join(", ") + (names.length > 4 ? ` +${names.length - 4} more` : "");
    return `<tr>
      <td><strong>${esc(group.name)}</strong><div class="cell-meta">${group.itemIds.length} ${isRecipe ? "recipes" : "menu items"}</div></td>
      <td>${esc(preview || "Empty")}</td>
      <td class="actions-cell">
        <button class="btn btn-text" type="button" data-action="edit-group" data-kind="${esc(kind)}" data-id="${esc(group.id)}">Edit</button>
        <button class="btn btn-text" type="button" data-action="delete-group" data-kind="${esc(kind)}" data-id="${esc(group.id)}" ${groups.length <= 1 ? "disabled" : ""}>Delete</button>
      </td>
    </tr>`;
  }).join("");
  return shell(title, [{ label: "Catering" }, { label: title }], `
    <section class="card">
      <div class="card-head">
        <div class="card-title">
          <div><h2>${esc(title)}</h2><div class="records">${groups.length} groups · ${catalog.length} ${isRecipe ? "recipes" : "menu items"} in catalog</div></div>
        </div>
        <div class="head-actions">
          <button class="btn btn-primary" type="button" data-action="new-group" data-kind="${esc(kind)}">New ${isRecipe ? "recipe group" : "menu item group"}</button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="grid">
          <thead><tr><th>Group</th><th>Includes</th><th></th></tr></thead>
          <tbody>${rows || `<tr><td colspan="3">No groups yet.</td></tr>`}</tbody>
        </table>
      </div>
    </section>`);
}
function groupEditModal() {
  const form = state.form;
  const isRecipe = state.groupKind === "recipe";
  const title = state.groupId ? (isRecipe ? "Edit recipe group" : "Edit menu item group") : (isRecipe ? "New recipe group" : "New menu item group");
  const catalog = isRecipe ? recipesInCatalog() : menuItemsInCatalog();
  const q = String(form.groupQuery || "").trim().toLowerCase();
  const list = catalog.filter((item) => !q || `${item.name} ${item.category}`.toLowerCase().includes(q));
  const checks = list.map((item) => `<label class="group-item"><input type="checkbox" name="groupItem" value="${esc(item.id)}" ${form.groupItemIds.includes(item.id) ? "checked" : ""}/><span><strong>${esc(item.name)}</strong><small>${esc(item.category)} · ${esc(item.course)}</small></span></label>`).join("");
  return `<div class="overlay" data-action="close-modal"><form class="modal modal-wide" id="group-form" data-stop>
    <div class="modal-head"><div><h2>${esc(title)}</h2><p class="lead">Tick the ${isRecipe ? "recipes" : "menu items"} chefs can use when this group is selected on a menu.</p></div>
      <button class="icon-hit" type="button" data-action="close-modal" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    </div>
    <div class="form-grid">
      ${form.error ? `<p class="error">${esc(form.error)}</p>` : ""}
      <label class="lbl">Group name <span class="req">*</span><input name="groupName" type="text" value="${esc(form.groupName)}" placeholder="${isRecipe ? "e.g. Standard kitchen recipes" : "e.g. Everyday menu items"}" /></label>
      <label class="field-search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="group-q" type="search" placeholder="Search ${isRecipe ? "recipes" : "menu items"}" value="${esc(form.groupQuery)}" /></label>
      <p class="hint">${form.groupItemIds.length} selected</p>
      <div class="group-item-list">${checks || `<p class="none">Nothing matches.</p>`}</div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">Save group</button>
    </div>
  </form></div>`;
}
function view() {
  if (!state.user || state.view === "login") return loginView();
  if (state.view === "recipe-groups") return groupsView("recipe");
  if (state.view === "menu-item-groups") return groupsView("menuItem");
  if (state.view === "setup") return setupView();
  if (state.view === "chef") return chefView();
  if (state.view === "editor") return editorView();
  if (state.view === "board") return boardView();
  if (state.view === "audit") return auditView();
  if (state.view === "validate") return validationView();
  return listView();
}

function layer() {
  const floats = `${kebabMenu()}${sitesPopup()}`;
  if (state.modal === "chef-start") return floats + chefStartModal();
  if (state.modal === "create") return floats + chefStartModal();
  if (state.modal === "group-edit") return floats + groupEditModal();
  if (state.modal === "delete") return floats + confirmModal("Delete this menu?", "This cannot be undone.", "Delete", "delete-confirm", true);
  if (state.modal === "publish") return floats + publishModal();
  if (state.modal === "published") return floats + publishedModal();
  if (state.modal === "assign") return floats + assignModal();
  if (state.modal === "copy") return floats + copyModal();
  if (state.modal === "copy-week") return floats + copyWeekModal();
  if (state.modal === "services") return floats + servicesModal();
  if (state.modal === "picker") return floats + itemPicker();
  return floats;
}
function kebabMenu() {
  if (!state.kebab) return "";
  const { id, x, y } = state.kebab;
  return `<div class="menu-float" style="left:${x}px;top:${y}px" data-stop>
    <button type="button" data-action="open-chef" data-id="${esc(id)}">Open week board</button>
    <button type="button" data-action="open-validate" data-id="${esc(id)}">Validate</button>
    <button type="button" data-action="audit" data-id="${esc(id)}">Audit log</button>
    <button type="button" class="danger" data-action="delete-ask" data-id="${esc(id)}">Delete</button>
  </div>`;
}
function sitesPopup() {
  if (!state.sitesPop) return "";
  const menu = state.menus.find((item) => item.id === state.sitesPop.id);
  if (!menu) return "";
  return `<div class="sites-pop" style="left:${state.sitesPop.x}px;top:${state.sitesPop.y}px" data-stop><strong>Sites</strong><ul>${menu.sites.map((id) => `<li>${esc(siteName(id))}</li>`).join("")}</ul></div>`;
}
function confirmModal(title, body, label, action, danger) {
  return `<div class="overlay" data-action="close-modal"><div class="modal" data-stop style="width:min(440px,100%)">
    <div class="modal-head"><h2>${esc(title)}</h2></div>
    <p class="lead">${esc(body)}</p>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn ${danger ? "btn-primary" : "btn-primary"}" type="button" data-action="${action}" ${danger ? 'style="background:#db2536;border-color:#db2536"' : ""}>${esc(label)}</button>
    </div>
  </div></div>`;
}
function serviceChips(selected) {
  return SERVICES.map((name) => `<label class="chip"><input type="checkbox" name="service" value="${esc(name)}" ${selected.includes(name) ? "checked" : ""}/> ${esc(name === "24-hour" ? "24-hour" : name)}</label>`).join("");
}
function chefStartModal() {
  const form = state.form;
  const drafts = state.menus.filter((menu) => ["Draft", "Approved", "Pending Approval"].includes(displayStatus(menu)));
  const allergens = catalogAllergens();
  const categories = catalogCategories();
  const aiFields = form.startMode === "ai" ? `
      <label class="lbl">What should this menu cover? <span class="req">*</span>
        <textarea name="aiPrompt" rows="3" placeholder="e.g. Light spring lunches, comfort dinners, keep IDDSI coverage, avoid heavy fried meals">${esc(form.aiPrompt)}</textarea>
        <span class="hint">AI only picks from the recipe group and menu item group you select below.</span>
      </label>
      <div class="ai-block">
        <p class="ai-label">Avoid allergens</p>
        <div class="chips">${allergens.map((name) => `<label class="chip"><input type="checkbox" name="aiAllergen" value="${esc(name)}" ${form.aiAllergens.includes(name) ? "checked" : ""}/> ${esc(name)}</label>`).join("") || `<span class="hint">No allergens tagged yet.</span>`}</div>
      </div>
      <div class="ai-block">
        <p class="ai-label">Prefer meal groups</p>
        <div class="chips">${categories.map((name) => `<label class="chip"><input type="checkbox" name="aiCategory" value="${esc(name)}" ${form.aiCategories.includes(name) ? "checked" : ""}/> ${esc(name)}</label>`).join("")}</div>
      </div>
      <div class="ai-block">
        <p class="ai-label">Required textures</p>
        <div class="chips">${[["4", "IDDSI 4 · Pureed"], ["6", "IDDSI 6 · Soft & bite-sized"]].map(([value, label]) => `<label class="chip"><input type="checkbox" name="aiIddsi" value="${value}" ${form.aiIddsi.includes(value) ? "checked" : ""}/> ${esc(label)}</label>`).join("")}</div>
      </div>
  ` : "";
  const iddsiWarn = form.startMode !== "resume" ? groupIddsiWarning(form) : "";
  const submitLabel = form.startMode === "resume"
    ? "Open week board"
    : form.startMode === "ai"
      ? "Generate & open week board"
      : "Create & open week board";
  return `<div class="overlay" data-action="close-modal"><form class="modal modal-wide" id="chef-start-form" data-stop>
    <div class="modal-head"><div><h2>Create menu</h2><p class="lead">Pick one recipe group and one menu item group. The week board can only use items from those two lists.</p></div>
      <button class="icon-hit" type="button" data-action="close-modal" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    </div>
    <div class="form-grid">
      ${form.error ? `<p class="error">${esc(form.error)}</p>` : ""}
      <div class="choices">
        ${startCard("scratch", "Start from scratch", "Empty week board with Breakfast, Lunch and Dinner ready to fill.")}
        ${startCard("ai", "Create using AI", "Describe the week; fill only from your selected recipe group and menu item group.")}
        ${startCard("copy", "Copy an existing menu", "Duplicate recipes and choices, then tweak the week board.", !state.menus.length)}
        ${startCard("template", "Start from seasonal template", "A filled week with IDDSI 4 and 6 at lunch and dinner.")}
        ${startCard("resume", "Open an existing draft", "Jump back into a menu you already started.", !drafts.length)}
      </div>
      ${form.startMode === "copy" || form.startMode === "resume" ? `<label class="lbl">Menu <span class="req">*</span><select name="copyId"><option value="">Choose a menu</option>${(form.startMode === "resume" ? drafts : state.menus).map((menu) => `<option value="${esc(menu.id)}" ${form.copyId === menu.id ? "selected" : ""}>${esc(menu.name)} · ${esc(displayStatus(menu))}</option>`).join("")}</select></label>` : ""}
      ${aiFields}
      ${form.startMode !== "resume" ? `
        <label class="lbl">Recipe group <span class="req">*</span>
          <select name="recipeGroupId"><option value="">Choose a recipe group</option>${state.recipeGroups.map((group) => `<option value="${esc(group.id)}" ${form.recipeGroupId === group.id ? "selected" : ""}>${esc(group.name)} · ${group.itemIds.length} recipes</option>`).join("")}</select>
          <span class="hint">Manage lists under Recipe groups.</span>
        </label>
        <label class="lbl">Menu item group <span class="req">*</span>
          <select name="menuItemGroupId"><option value="">Choose a menu item group</option>${state.menuItemGroups.map((group) => `<option value="${esc(group.id)}" ${form.menuItemGroupId === group.id ? "selected" : ""}>${esc(group.name)} · ${group.itemIds.length} menu items</option>`).join("")}</select>
          <span class="hint">Manage lists under Menu item groups.</span>
        </label>
        ${iddsiWarn ? `<p class="callout callout-warn">${esc(iddsiWarn)}</p>` : (form.recipeGroupId && form.menuItemGroupId ? `<p class="callout">These groups include IDDSI 4 and IDDSI 6, so Lunch and Dinner can be covered.</p>` : "")}
        <label class="lbl">New menu name <span class="req">*</span><input name="name" type="text" value="${esc(form.name)}" placeholder="e.g. Spring week for Downtown" /></label>
        <label class="lbl">Cycle length
          <span class="segmented">
            ${[["7", "1 week"], ["14", "2 weeks"], ["28", "4 weeks"]].map(([value, label]) => `<label><input type="radio" name="cycle" value="${value}" ${form.cycle === value ? "checked" : ""}/><span>${label}</span></label>`).join("")}
          </span>
        </label>
        <label class="lbl">Starts<input name="start" type="date" value="${esc(form.start)}" /></label>
      ` : ""}
    </div>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">${submitLabel}</button>
    </div>
  </form></div>`;
}
function startCard(value, title, copy, disabled) {
  return `<label class="choice-card"><input type="radio" name="startMode" value="${value}" ${state.form.startMode === value ? "checked" : ""} ${disabled ? "disabled" : ""}/><span><strong>${esc(title)}</strong><small>${esc(copy)}</small></span></label>`;
}
function publishModal() {
  const menu = current();
  if (!menu) return "";
  const blocking = blockingIssues(menu);
  const status = displayStatus(menu);
  const start = state.form.start || menu.start;
  const end = addDays(start, menu.cycle - 1);
  const nextStatus = start > TODAY ? "Scheduled" : "Active";
  const gate = status === "Draft" || status === "Pending Approval";
  return `<div class="overlay" data-action="close-modal"><form class="modal" id="publish-form" data-stop>
    <div class="modal-head"><div><h2>Schedule and publish</h2><p class="lead">${esc(menu.name)} · ${esc(status)}. ${gate ? "Approval is required before this menu can go live." : `It will become ${nextStatus}.`}</p></div></div>
    <div class="form-grid">
      <label class="lbl">Version number <span class="req">*</span>
        <input name="version" type="text" value="${esc(state.form.version)}" placeholder="1.0" />
      </label>
      <label class="lbl">Goes live
        <input name="start" type="date" value="${esc(start)}" />
        <span class="hint">Ends ${esc(fmtDate(end))}. A future date schedules the menu. Today or earlier makes it active.</span>
      </label>
      ${blocking.length ? `<p class="error">${esc(blocking.join(" "))}</p>` : ""}
      ${gate ? `<p class="error">Submit the menu and record approval before publishing.</p>` : ""}
      ${state.form.error ? `<p class="error">${esc(state.form.error)}</p>` : ""}
    </div>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit" ${blocking.length || gate ? "disabled" : ""}>Schedule & publish</button>
    </div>
  </form></div>`;
}
function publishedModal() {
  const menu = current();
  const status = menu ? displayStatus(menu) : "Active";
  return `<div class="overlay" data-action="close-modal"><div class="modal success-panel" data-stop>
    <h2>${status === "Scheduled" ? "Menu scheduled" : "Menu published"}</h2>
    <p class="lead">${esc(state.form.publishedName)} is ${status === "Scheduled" ? "scheduled" : "active"}. Choose the facilities that will use it, and whether they can edit it.</p>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Close</button>
      <button class="btn btn-primary" type="button" data-action="open-assign" data-id="${esc(state.menuId)}">Assign facilities</button>
    </div>
  </div></div>`;
}
function assignModal() {
  const menu = state.menus.find((item) => item.id === state.form.assignId) || state.menus[0];
  if (!menu) return "";
  const q = state.form.siteQuery.trim().toLowerCase();
  const sites = SITES.filter((site) => site[1].toLowerCase().includes(q));
  const options = state.menus.map((item) => `<option value="${esc(item.id)}" ${item.id === menu.id ? "selected" : ""}>${esc(item.name)}</option>`).join("");
  return `<div class="overlay" data-action="close-modal"><form class="modal" id="assign-form" data-stop>
    <div class="modal-head"><div><h2>Assign facilities</h2><p class="lead">${esc(menu.name)} · ${menu.version ? `Version ${esc(menu.version)}` : displayStatus(menu)}</p></div></div>
    <div class="form-grid">
      <label class="lbl">Menu<select name="assignId">${options}</select></label>
      <p class="lead" style="margin:0">Choose the facilities that receive this menu.</p>
      <label class="field-search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="site-q" name="siteQuery" type="search" placeholder="Search sites" value="${esc(state.form.siteQuery)}" /></label>
      <div class="site-tools"><button class="btn btn-text" type="button" data-action="select-all-sites">Select all</button><span class="records">${state.form.siteIds.length} of ${SITES.length} selected</span></div>
      <div class="site-list">
        ${sites.map(([id, name]) => `<label><input type="checkbox" name="site" value="${esc(id)}" ${state.form.siteIds.includes(id) ? "checked" : ""}/> ${esc(name)}</label>`).join("") || "<p class='none'>No sites match.</p>"}
      </div>
      <div>
        <p class="lbl">Site permission</p>
        <div class="radios">
          <label><input type="radio" name="permission" value="locked" ${state.form.permission === "locked" ? "checked" : ""}/> Locked — facilities use the menu as issued</label>
          <label><input type="radio" name="permission" value="editable" ${state.form.permission !== "locked" ? "checked" : ""}/> Editable — facilities may adjust a local copy</label>
        </div>
      </div>
      <div>
        <p class="lbl">If a facility already has a menu</p>
        <div class="radios">
          <label><input type="radio" name="siteMode" value="keep" ${state.form.siteMode === "keep" ? "checked" : ""}/> Keep existing menu</label>
          <label><input type="radio" name="siteMode" value="replace" ${state.form.siteMode === "replace" ? "checked" : ""}/> Replace with this menu</label>
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">Assign</button>
    </div>
  </form></div>`;
}
function copyModal() {
  const menu = current();
  if (!menu) return "";
  const selected = state.week * 7 + state.day;
  const boxes = Array.from({ length: menu.cycle }, (_, index) => {
    if (index === selected) return "";
    const on = state.form.copyTargets.includes(String(index));
    return `<label class="check-row"><input type="checkbox" name="target" value="${index}" ${on ? "checked" : ""}/> ${esc(weekday(dayDate(menu, index)))} ${esc(fmtDate(dayDate(menu, index)))}</label>`;
  }).join("");
  return `<div class="overlay" data-action="close-modal"><form class="modal" id="copy-form" data-stop>
    <div class="modal-head"><div><h2>Copy this day</h2><p class="lead">Replace the recipes on the days you select with ${esc(weekday(dayDate(menu, selected)))}’s choices.</p></div></div>
    <div class="site-list">${boxes}</div>
    ${state.form.error ? `<p class="error">${esc(state.form.error)}</p>` : ""}
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">Copy day</button>
    </div>
  </form></div>`;
}
function copyWeekModal() {
  const menu = current();
  if (!menu) return "";
  const weeks = Math.ceil(menu.cycle / 7);
  const options = Array.from({ length: weeks }, (_, index) => index).filter((index) => index !== state.week).map((index) => `<label class="check-row"><input type="radio" name="week" value="${index}" ${String(state.form.copyWeek) === String(index) ? "checked" : ""}/> Week ${index + 1}</label>`).join("");
  return `<div class="overlay" data-action="close-modal"><form class="modal" id="copy-week-form" data-stop>
    <div class="modal-head"><div><h2>Copy this week</h2><p class="lead">Replace the week you choose with Week ${state.week + 1}’s recipes and choices.</p></div></div>
    <div class="site-list">${options}</div>
    ${state.form.error ? `<p class="error">${esc(state.form.error)}</p>` : ""}
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">Copy week</button>
    </div>
  </form></div>`;
}
function servicesModal() {
  const menu = current();
  if (!menu) return "";
  return `<div class="overlay" data-action="close-modal"><form class="modal" id="services-form" data-stop>
    <div class="modal-head"><div><h2>Services</h2><p class="lead">${esc(menu.name)}. 24-hour stays beside the meals for food available all day.</p></div></div>
    <div class="chips">${serviceChips(state.form.services || servicesFor(menu))}</div>
    ${state.form.error ? `<p class="error">${esc(state.form.error)}</p>` : ""}
    <div class="modal-actions">
      <button class="btn btn-quiet" type="button" data-action="close-modal">Cancel</button>
      <button class="btn btn-primary" type="submit">Save services</button>
    </div>
  </form></div>`;
}
function itemPicker() {
  const menu = current();
  const pick = state.form.pick;
  if (!menu) return "";
  const q = pick.query.trim().toLowerCase();
  const replacing = pick.mode === "replace" ? menu.dishes.find((dish) => dish.id === pick.dishId) : null;
  const taken = new Set(menu.dishes.filter((dish) => dish.dayIndex === pick.dayIndex && dish.service === pick.service && dish.course === pick.course && String(dish.choice) === String(pick.choice) && dish.id !== pick.dishId).map((dish) => dish.itemId));
  const matchesCourse = (item) => item.course === pick.course || (pick.course === "Main" && item.course === "Side");
  const allowed = allowedItemIds(menu);
  const hasGroups = Boolean(menu.recipeGroupId || menu.menuItemGroupId);
  const pool = hasGroups ? allowedCatalogItems(menu) : CATALOG.map((entry) => catalogItem(entry.id)).filter(Boolean);
  const items = pool.filter((item) => matchesCourse(item) && (!pick.iddsi || item.iddsi.includes(pick.iddsi)) && (!q || `${item.name} ${item.category} ${item.iddsi.join(" ")}`.toLowerCase().includes(q)));
  const dayLabel = `${weekday(dayDate(menu, pick.dayIndex))} ${fmtDate(dayDate(menu, pick.dayIndex))}`;
  const recipeName = recipeGroupById(menu.recipeGroupId)?.name;
  const menuItemName = menuItemGroupById(menu.menuItemGroupId)?.name;
  const groupLead = recipeName || menuItemName
    ? `${recipeName || "No recipe group"} · ${menuItemName || "No menu item group"}`
    : "All catalog items";
  const courseTabs = coursesFor(menu, pick.service).map((course) => `<button class="chip-btn ${pick.course === course ? "is-on" : ""}" type="button" data-action="pick-course" data-course="${esc(course)}">${esc(course)}</button>`).join("");
  const filters = ["", "4", "6", "7"].map((level) => `<button class="chip-btn ${pick.iddsi === level ? "is-on" : ""}" type="button" data-action="pick-iddsi" data-iddsi="${level}">${level ? `IDDSI ${level}` : "All"}</button>`).join("");
  const rows = items.map((item) => {
    const added = taken.has(item.id);
    const currentItem = replacing && replacing.itemId === item.id;
    const inactive = item.status === "Inactive";
    const kindLabel = itemKind(item) === "recipe" ? "Recipe" : "Menu item";
    const label = inactive ? "Inactive" : currentItem ? "Current" : added ? "In choice" : (replacing ? "Replace" : "Add");
    return `<button class="picker-row ${added || currentItem ? "is-added" : ""}" type="button" data-action="pick-item" data-item="${esc(item.id)}" ${inactive || added || currentItem ? "disabled" : ""}>
      <span class="swatch" style="background:${SWATCH[item.course] || "#eee"}"></span>
      <span><strong>${esc(item.name)}</strong><small>${esc(kindLabel)} · ${esc(item.category)} · ${Math.round(item.kj)} kJ · ${money(item.cost)}</small><span class="pill-row">${iddsiPills(item.iddsi)}</span></span>
      <span class="add-label">${label}</span>
    </button>`;
  }).join("");
  return `<div class="overlay drawer-overlay" data-action="close-modal"><div class="drawer" data-stop>
    <div class="drawer-head modal-head"><div><h2>${replacing ? "Replace item" : "Add item"}</h2><p class="lead">${esc(dayLabel)} · ${esc(pick.service)} · ${esc(groupLead)}</p></div>
      <button class="icon-hit" type="button" data-action="close-modal" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    </div>
    <div class="drawer-body form-grid">
      <div class="chips">${courseTabs}</div>
      <label class="field-search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="item-q" type="search" placeholder="Search recipes and menu items" value="${esc(pick.query)}" /></label>
      <div class="chips">${filters}</div>
      <div class="picker-list">${rows || `<p class="none">${hasGroups && !allowed.size ? "This menu has empty groups. Edit the recipe group or menu item group first." : "No items match this course in the selected groups."}</p>`}</div>
    </div>
    <div class="drawer-actions"><button class="btn btn-primary" type="button" data-action="close-modal">Done</button></div>
  </div></div>`;
}

let keepScroll = true;
function syncChrome() {
  const loggedIn = Boolean(state.user);
  document.body.classList.toggle("is-login", !loggedIn);
  document.body.classList.toggle("is-locked", Boolean(state.modal) || !loggedIn);
  const chip = document.querySelector(".user-chip");
  if (chip && state.user) {
    const name = chip.querySelector("strong");
    const role = chip.querySelector("small");
    const avatar = chip.querySelector(".avatar");
    if (name) name.textContent = state.user.name;
    if (role) role.textContent = state.user.role === "chef" ? "Chef" : "Admin";
    if (avatar) avatar.textContent = state.user.initials;
    chip.setAttribute("data-action", "logout");
    chip.setAttribute("aria-label", "Sign out");
    chip.title = "Sign out";
  }
}
function render() {
  const y = keepScroll ? window.scrollY : 0;
  const active = document.activeElement;
  const focusId = active && (active.id === "q" || active.id === "site-q" || active.id === "item-q") ? active.id : "";
  const caret = focusId ? active.selectionStart : null;
  document.getElementById("main").innerHTML = view();
  document.getElementById("layer").innerHTML = state.user ? layer() : "";
  syncChrome();
  document.getElementById("sidebar").classList.toggle("is-open", state.sidebar && Boolean(state.user));
  const backdrop = document.querySelector(".sidebar-backdrop");
  if (backdrop) backdrop.hidden = !(state.sidebar && state.user);
  document.getElementById("fs-sub").hidden = !state.fsOpen;
  document.getElementById("fs-toggle").querySelector(".chev").style.transform = state.fsOpen ? "rotate(180deg)" : "";
  if (focusId) {
    const el = document.getElementById(focusId);
    if (el) {
      el.focus();
      if (caret != null) el.setSelectionRange(caret, caret);
    }
  }
  window.scrollTo(0, keepScroll ? y : 0);
  keepScroll = true;
}
function submitLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;
  const data = new FormData(form);
  const email = String(data.get("email") || "").trim().toLowerCase();
  const password = String(data.get("password") || "");
  if (email === CHEF_LOGIN.email && password === CHEF_LOGIN.password) {
    state.user = { email: CHEF_LOGIN.email, name: CHEF_LOGIN.name, role: CHEF_LOGIN.role, initials: CHEF_LOGIN.initials };
    state.loginError = "";
    state.view = "list";
    state.modal = null;
    keepScroll = false;
    toast(`Welcome, ${CHEF_LOGIN.name}`);
    return;
  }
  state.loginError = "Those credentials don’t match a chef account.";
  keepScroll = false;
}
function logout() {
  state.user = null;
  state.view = "login";
  state.loginError = "";
  state.modal = null;
  state.menuId = null;
  state.sidebar = false;
  state.kebab = null;
  state.sitesPop = null;
  keepScroll = false;
}

function readChefStart() {
  const form = document.getElementById("chef-start-form");
  if (!form) return;
  const data = new FormData(form);
  state.form.name = String(data.get("name") || state.form.name || "");
  state.form.cycle = String(data.get("cycle") || state.form.cycle || "14");
  state.form.start = String(data.get("start") || state.form.start || TODAY);
  state.form.startMode = String(data.get("startMode") || state.form.startMode);
  state.form.copyId = String(data.get("copyId") || "");
  if (form.querySelector("[name='recipeGroupId']")) state.form.recipeGroupId = String(data.get("recipeGroupId") || "");
  if (form.querySelector("[name='menuItemGroupId']")) state.form.menuItemGroupId = String(data.get("menuItemGroupId") || "");
  if (form.querySelector("[name='aiPrompt']")) state.form.aiPrompt = String(data.get("aiPrompt") || "");
  if (form.querySelector("[name='aiAllergen'], [name='aiCategory'], [name='aiIddsi']")) {
    state.form.aiAllergens = data.getAll("aiAllergen").map(String);
    state.form.aiCategories = data.getAll("aiCategory").map(String);
    state.form.aiIddsi = data.getAll("aiIddsi").map(String);
  }
  state.form.error = "";
}
function readGroupForm() {
  const form = document.getElementById("group-form");
  if (!form) return;
  const data = new FormData(form);
  state.form.groupName = String(data.get("groupName") || state.form.groupName || "");
  const visible = [...form.querySelectorAll("input[name='groupItem']")].map((input) => input.value);
  const selectedVisible = new Set(data.getAll("groupItem").map(String));
  const kept = state.form.groupItemIds.filter((id) => !visible.includes(id));
  state.form.groupItemIds = [...kept, ...selectedVisible];
  state.form.error = "";
}
function promptKeywords(prompt) {
  const text = String(prompt || "").toLowerCase();
  const words = [];
  if (/light|spring|fresh|salad|summer/.test(text)) words.push("light", "salad", "fruit", "soup", "yoghurt", "stewed");
  if (/comfort|winter|hearty|roast|warm/.test(text)) words.push("roast", "casserole", "mash", "pie", "soup", "custard");
  if (/fish|seafood/.test(text) && !/no fish|without fish|avoid fish/.test(text)) words.push("fish");
  if (/veg|vegetarian|plant/.test(text)) words.push("vegetable", "nut", "salad", "pumpkin", "tomato", "bean");
  if (/high protein|protein/.test(text)) words.push("chicken", "beef", "egg", "fish", "bean");
  return words;
}
function scoreAiItem(item, preferCats, keywords) {
  let score = 0;
  if (preferCats.size && preferCats.has(item.category)) score += 4;
  const blob = `${item.name} ${item.category} ${item.course}`.toLowerCase();
  keywords.forEach((word) => {
    if (blob.includes(word)) score += 2;
  });
  return score;
}
function buildAiMenu(cycle, form) {
  const avoid = new Set(form.aiAllergens || []);
  const preferCats = new Set(form.aiCategories || []);
  const needIddsi = (form.aiIddsi || []).length ? [...form.aiIddsi] : [];
  const keywords = promptKeywords(form.aiPrompt);
  const prompt = String(form.aiPrompt || "").toLowerCase();
  if (/no fish|without fish|avoid fish/.test(prompt)) avoid.add("Fish");
  if (/no milk|dairy free|dairy-free|lactose/.test(prompt)) avoid.add("Milk");
  if (/no gluten|gluten free|gluten-free/.test(prompt)) avoid.add("Gluten");

  const groupAllowed = allowedItemIds(form);
  const useGroups = Boolean(form.recipeGroupId || form.menuItemGroupId);
  const pool = CATALOG.map((entry) => catalogItem(entry.id)).filter((item) => {
    if (!item || item.status !== "Active") return false;
    if (useGroups && !groupAllowed.has(item.id)) return false;
    if (allergenTokens(item).some((name) => avoid.has(name))) return false;
    return true;
  });

  const byCourse = (course) => {
    const list = pool.filter((item) => item.course === course);
    list.sort((a, b) => scoreAiItem(b, preferCats, keywords) - scoreAiItem(a, preferCats, keywords) || a.name.localeCompare(b.name));
    return list;
  };

  const pickItem = (course, dayIndex, used) => {
    const list = byCourse(course);
    if (!list.length) return null;
    const fresh = list.filter((item) => !used.has(item.id));
    const source = fresh.length ? fresh : list;
    return source[dayIndex % source.length];
  };

  const pushDish = (dishes, dayIndex, service, course, choice, item) => {
    if (!item) return;
    dishes.push({
      id: uid(),
      dayIndex,
      service,
      course,
      choice: String(choice),
      itemId: item.id,
      name: item.name,
      category: item.category,
      allergen: item.allergen,
    });
  };

  const textureFallback = {
    4: ["pureed-chicken", "pureed-porridge", "pureed-pumpkin"],
    6: ["soft-fish", "soft-crumble"],
  };
  const pickTexture = (level, dayIndex, used) => {
    const preferred = pool
      .filter((item) => (item.iddsi || []).map(String).includes(String(level)))
      .sort((a, b) => scoreAiItem(b, preferCats, keywords) - scoreAiItem(a, preferCats, keywords));
    const fresh = preferred.filter((item) => !used.has(item.id));
    if (fresh.length) return fresh[dayIndex % fresh.length];
    if (preferred.length) return preferred[dayIndex % preferred.length];
    for (const id of textureFallback[level] || []) {
      const item = catalogItem(id);
      if (!item || item.status !== "Active") continue;
      if (useGroups && !groupAllowed.has(item.id)) continue;
      if (allergenTokens(item).some((name) => avoid.has(name))) continue;
      return item;
    }
    return null;
  };

  const plan = [
    ["Breakfast", [["Cereal", "1"], ["Hot", "1"], ["Fruit", "1"], ["Drink", "1"]]],
    ["Lunch", [["Soup", "1"], ["Main", "1"], ["Side", "1"], ["Dessert", "1"], ["Drink", "1"]]],
    ["Dinner", [["Main", "1"], ["Side", "1"], ["Dessert", "1"], ["Drink", "1"]]],
  ];

  const dishes = [];
  for (let dayIndex = 0; dayIndex < cycle; dayIndex += 1) {
    const used = new Set();
    plan.forEach(([service, courses]) => {
      courses.forEach(([course, choice]) => {
        const item = pickItem(course, dayIndex, used);
        if (!item) return;
        used.add(item.id);
        pushDish(dishes, dayIndex, service, course, choice, item);
      });
      if (service === "Lunch" || service === "Dinner") {
        needIddsi.forEach((level, index) => {
          const item = pickTexture(level, dayIndex + index, used);
          if (!item) return;
          used.add(item.id);
          const course = item.course === "Dessert" || item.course === "Soup" || item.course === "Cereal" ? item.course : "Main";
          pushDish(dishes, dayIndex, service, course, String(3 + index), item);
        });
      }
    });
  }
  return dishes;
}
function readSetup() {
  const form = document.getElementById("setup-form");
  if (!form) return null;
  const data = new FormData(form);
  const services = data.getAll("service").map(String);
  const courses = defaultCourses();
  SERVICES.forEach((service) => {
    const picked = data.getAll(`course:${service}`).map(String);
    courses[service] = picked.length ? picked : [...(COURSES[service] || [])];
  });
  return {
    name: String(data.get("name") || "").trim(),
    cycle: String(data.get("cycle") || "14"),
    start: String(data.get("start") || TODAY),
    budget: String(data.get("budget") || "32"),
    services,
    courses,
  };
}
function readPublish() {
  const form = document.getElementById("publish-form");
  if (!form) return;
  const data = new FormData(form);
  state.form.version = String(data.get("version") || "");
  state.form.start = String(data.get("start") || state.form.start);
}
function readAssign() {
  const form = document.getElementById("assign-form");
  if (!form) return;
  const data = new FormData(form);
  state.form.assignId = String(data.get("assignId") || state.form.assignId);
  state.form.siteQuery = String(data.get("siteQuery") || "");
  state.form.siteIds = data.getAll("site").map(String);
  state.form.siteMode = String(data.get("siteMode") || "keep");
  state.form.permission = String(data.get("permission") || "editable");
}

function openChef(id) {
  state.menuId = id;
  state.view = "chef";
  state.week = 0;
  state.day = 0;
  state.service = "";
  state.modal = null;
  state.kebab = null;
  keepScroll = false;
}
function openEditor(id) {
  openChef(id);
}
function openSetup(id) {
  const menu = id ? state.menus.find((item) => item.id === id) : null;
  state.form = blankForm();
  if (menu) {
    state.menuId = menu.id;
    state.form.name = menu.name;
    state.form.cycle = String(menu.cycle);
    state.form.start = menu.start;
    state.form.budget = String(budgetOf(menu));
    state.form.services = [...servicesFor(menu)];
    state.form.courses = defaultCourses();
    servicesFor(menu).forEach((service) => {
      state.form.courses[service] = [...coursesFor(menu, service)];
    });
  } else {
    state.menuId = null;
  }
  state.view = "setup";
  state.modal = null;
  state.kebab = null;
  keepScroll = false;
}
function openChefStart() {
  state.form = blankForm();
  state.form.startMode = "scratch";
  state.form.recipeGroupId = state.recipeGroups[0]?.id || "";
  state.form.menuItemGroupId = state.menuItemGroups[0]?.id || "";
  state.modal = "chef-start";
}
function openGroups(kind) {
  state.view = kind === "recipe" ? "recipe-groups" : "menu-item-groups";
  state.groupKind = kind;
  state.modal = null;
  state.menuId = null;
  keepScroll = false;
}
function openGroupEditor(kind, id) {
  state.groupKind = kind;
  state.groupId = id || null;
  const group = id ? (kind === "recipe" ? recipeGroupById(id) : menuItemGroupById(id)) : null;
  state.form = blankForm();
  state.form.groupName = group?.name || "";
  state.form.groupItemIds = group ? [...group.itemIds] : [];
  state.form.groupQuery = "";
  state.modal = "group-edit";
}
function submitGroupForm() {
  readGroupForm();
  const name = state.form.groupName.trim();
  if (!name) {
    state.form.error = "Enter a group name.";
    return;
  }
  if (!state.form.groupItemIds.length) {
    state.form.error = "Select at least one item.";
    return;
  }
  const list = state.groupKind === "recipe" ? state.recipeGroups : state.menuItemGroups;
  if (state.groupId) {
    const group = list.find((entry) => entry.id === state.groupId);
    if (!group) return;
    group.name = name;
    group.itemIds = [...state.form.groupItemIds];
  } else {
    list.unshift({ id: uid(), name, itemIds: [...state.form.groupItemIds] });
  }
  state.modal = null;
  state.groupId = null;
  save();
  toast(state.groupKind === "recipe" ? "Recipe group saved." : "Menu item group saved.");
}
function openCreate() {
  openSetup();
}
function submitSetup(intent = "draft") {
  const draft = readSetup();
  if (!draft) return;
  state.form = { ...state.form, ...draft, error: "" };
  if (!draft.name) {
    state.form.error = "Enter a menu name.";
    return;
  }
  if (!draft.services.length) {
    state.form.error = "Choose at least one service.";
    return;
  }
  const budget = Number(draft.budget);
  if (!(budget >= 0)) {
    state.form.error = "Enter a daily budget.";
    return;
  }
  const cycle = Number(draft.cycle);
  const courses = {};
  draft.services.forEach((service) => {
    courses[service] = (draft.courses[service] || COURSES[service] || []).slice();
  });
  const existing = state.menuId ? current() : null;
  if (existing) {
    existing.name = draft.name;
    existing.cycle = cycle;
    existing.start = draft.start || TODAY;
    existing.budget = budget;
    existing.services = SERVICES.filter((service) => draft.services.includes(service));
    existing.courses = courses;
    existing.updated = TODAY;
    existing.dishes = existing.dishes.filter((dish) => dish.dayIndex < cycle && existing.services.includes(dish.service));
    existing.audit.unshift({ version: existing.version || "", action: "Setup updated", author: "Casey Morgan", date: TODAY });
    save();
    if (intent === "chef") {
      openChef(existing.id);
      toast("Setup saved. Build the week on the chef board.");
    } else {
      state.view = "list";
      state.menuId = null;
      toast("Menu setup saved as draft structure.");
    }
    return;
  }
  const menu = {
    id: uid(),
    name: draft.name,
    cycle,
    start: draft.start || TODAY,
    services: SERVICES.filter((service) => draft.services.includes(service)),
    courses,
    budget,
    permission: "editable",
    status: "Draft",
    version: "",
    sites: [],
    siteMode: "keep",
    updated: TODAY,
    created: TODAY,
    author: "Casey Morgan",
    dishes: [],
    slots: [],
    audit: [{ version: "", action: "Created", author: "Casey Morgan", date: TODAY }],
  };
  state.menus.unshift(menu);
  save();
  if (intent === "chef") {
    openChef(menu.id);
    toast("Setup ready. Add recipes on the chef week board.");
  } else {
    state.view = "list";
    state.menuId = null;
    toast("Draft created. Open chef build when ready.");
  }
}
function submitChefStart() {
  readChefStart();
  if (state.form.startMode === "resume") {
    if (!state.form.copyId) {
      state.form.error = "Choose a menu to open.";
      return;
    }
    openChef(state.form.copyId);
    toast("Opened on the chef week board.");
    return;
  }
  const name = state.form.name.trim();
  if (!name) {
    state.form.error = "Enter a menu name.";
    return;
  }
  if (state.form.startMode === "copy" && !state.form.copyId) {
    state.form.error = "Choose a menu to copy.";
    return;
  }
  if (!state.form.recipeGroupId) {
    state.form.error = "Choose a recipe group.";
    return;
  }
  if (!state.form.menuItemGroupId) {
    state.form.error = "Choose a menu item group.";
    return;
  }
  const missingTextures = groupMissingIddsi(state.form);
  if (missingTextures.length) {
    state.form.error = groupIddsiWarning(state.form);
    return;
  }
  const cycle = Number(state.form.cycle || 14);
  let dishes = [];
  let slots = [];
  let services = [...CORE];
  let courses = defaultCourses();
  let note = "Empty menu ready. Add items from your selected groups.";
  const allowed = allowedItemIds(state.form);
  if (state.form.startMode === "scratch") {
    note = "Started from scratch. Add only from the selected recipe group and menu item group.";
  }
  if (state.form.startMode === "template") {
    dishes = tile(cycle).filter((dish) => allowed.has(dish.itemId));
    note = "Template loaded using items from your selected groups.";
  }
  if (state.form.startMode === "ai") {
    if (!state.form.aiPrompt.trim()) {
      state.form.error = "Describe what you want the AI to build.";
      return;
    }
    dishes = buildAiMenu(cycle, state.form);
    note = "AI draft ready — only used items from your selected groups.";
  }
  if (state.form.startMode === "copy") {
    const source = state.menus.find((menu) => menu.id === state.form.copyId);
    dishes = source ? JSON.parse(JSON.stringify(source.dishes)).filter((dish) => dish.dayIndex < cycle && allowed.has(dish.itemId)).map((dish) => ({ ...dish, id: uid() })) : [];
    slots = source ? JSON.parse(JSON.stringify(source.slots || [])).filter((slot) => slot.dayIndex < cycle) : [];
    services = source ? [...servicesFor(source)] : services;
    courses = source?.courses ? JSON.parse(JSON.stringify(source.courses)) : courses;
    note = "Menu copied into your selected groups. Missing items were skipped.";
  }
  const author = state.user?.name || "Casey Morgan";
  const menu = {
    id: uid(),
    name,
    cycle,
    start: state.form.start || TODAY,
    services,
    courses,
    recipeGroupId: state.form.recipeGroupId,
    menuItemGroupId: state.form.menuItemGroupId,
    budget: 32,
    permission: "editable",
    status: "Draft",
    version: "",
    sites: [],
    siteMode: "keep",
    updated: TODAY,
    created: TODAY,
    author,
    dishes,
    slots,
    audit: [{ version: "", action: state.form.startMode === "ai" ? "Created with AI" : "Created", author, date: TODAY }],
  };
  state.menus.unshift(menu);
  save();
  openChef(menu.id);
  toast(note);
}
function placeItem(itemId) {
  const menu = current();
  const pick = state.form.pick;
  const item = catalogItem(itemId);
  if (!menu || !item || item.status === "Inactive") return false;
  if ((menu.recipeGroupId || menu.menuItemGroupId) && !allowedItemIds(menu).has(item.id)) {
    toast("That item is outside this menu’s recipe group and menu item group.");
    return false;
  }
  const sameChoice = (dish) => dish.dayIndex === pick.dayIndex && dish.service === pick.service && dish.course === pick.course && String(dish.choice) === String(pick.choice) && dish.itemId === item.id;
  if (pick.mode === "replace") {
    const dish = menu.dishes.find((entry) => entry.id === pick.dishId);
    if (!dish) return false;
    if (menu.dishes.some((entry) => entry.id !== dish.id && sameChoice(entry))) {
      toast("That recipe is already in this choice.");
      return false;
    }
    dish.itemId = item.id;
    dish.name = item.name;
    dish.category = item.category;
    dish.allergen = item.allergen;
    menu.updated = TODAY;
    state.modal = null;
    save();
    toast(`${item.name} replaced the recipe`);
    return true;
  }
  if (menu.dishes.some(sameChoice)) return false;
  menu.dishes.push({
    id: uid(),
    dayIndex: pick.dayIndex,
    service: pick.service,
    course: pick.course,
    choice: String(pick.choice),
    itemId: item.id,
    name: item.name,
    category: item.category,
    allergen: item.allergen,
  });
  menu.updated = TODAY;
  save();
  toast(`${item.name} added to Choice ${pick.choice}`);
  return true;
}
function touch(menu, action, version = menu.version) {
  menu.updated = TODAY;
  menu.audit.unshift({ version: version || "", action, author: "Casey Morgan", date: TODAY });
  save();
}
function submitPublish() {
  const menu = current();
  const form = document.getElementById("publish-form");
  if (!menu || !form) return;
  const data = new FormData(form);
  const version = String(data.get("version") || "").trim();
  const start = String(data.get("start") || menu.start);
  state.form.version = version;
  state.form.start = start;
  const status = displayStatus(menu);
  if (status === "Draft" || status === "Pending Approval") {
    state.form.error = "Record approval before publishing.";
    return;
  }
  const issues = blockingIssues(menu);
  if (issues.length) {
    state.form.error = issues[0];
    return;
  }
  if (!version) {
    state.form.error = "Enter a version number.";
    return;
  }
  menu.start = start;
  menu.version = version;
  menu.status = start > TODAY ? "Scheduled" : "Active";
  touch(menu, menu.status === "Scheduled" ? "Scheduled" : "Published", version);
  state.form.publishedName = `${menu.name} · Version ${version}`;
  state.modal = "published";
}
function submitAssign() {
  readAssign();
  const menu = state.menus.find((item) => item.id === state.form.assignId);
  if (!menu) return;
  menu.sites = [...state.form.siteIds];
  menu.siteMode = state.form.siteMode;
  menu.permission = state.form.permission === "locked" ? "locked" : "editable";
  touch(menu, menu.sites.length ? "Facilities assigned" : "Facilities cleared");
  state.modal = null;
  toast(menu.sites.length ? "Facilities assigned" : "No facilities selected. The menu stays unassigned.");
}
function submitCopy() {
  const menu = current();
  const form = document.getElementById("copy-form");
  const targets = [...form.querySelectorAll("input[name=target]:checked")].map((input) => Number(input.value));
  if (!targets.length) {
    state.form.error = "Select at least one day.";
    state.form.copyTargets = [];
    return;
  }
  const source = state.week * 7 + state.day;
  const copies = menu.dishes.filter((dish) => dish.dayIndex === source);
  const slotCopies = (menu.slots || []).filter((slot) => slot.dayIndex === source);
  menu.dishes = menu.dishes.filter((dish) => !targets.includes(dish.dayIndex));
  menu.slots = (menu.slots || []).filter((slot) => !targets.includes(slot.dayIndex));
  targets.forEach((dayIndex) => {
    copies.forEach((dish) => menu.dishes.push({ ...JSON.parse(JSON.stringify(dish)), id: uid(), dayIndex }));
    slotCopies.forEach((slot) => menu.slots.push({ ...slot, dayIndex }));
  });
  menu.updated = TODAY;
  state.modal = null;
  save();
  toast(`Copied to ${targets.length} day${targets.length > 1 ? "s" : ""}`);
}
function submitCopyWeek() {
  const menu = current();
  const form = document.getElementById("copy-week-form");
  const target = Number(new FormData(form).get("week"));
  if (!menu || Number.isNaN(target)) {
    state.form.error = "Choose a week.";
    return;
  }
  const sourceStart = state.week * 7;
  const targetStart = target * 7;
  const span = Math.min(7, menu.cycle - sourceStart, menu.cycle - targetStart);
  const sourceDays = Array.from({ length: span }, (_, index) => sourceStart + index);
  const targetDays = Array.from({ length: span }, (_, index) => targetStart + index);
  const copies = menu.dishes.filter((dish) => sourceDays.includes(dish.dayIndex)).map((dish) => JSON.parse(JSON.stringify(dish)));
  const slotCopies = (menu.slots || []).filter((slot) => sourceDays.includes(slot.dayIndex)).map((slot) => ({ ...slot }));
  menu.dishes = menu.dishes.filter((dish) => !targetDays.includes(dish.dayIndex));
  menu.slots = (menu.slots || []).filter((slot) => !targetDays.includes(slot.dayIndex));
  copies.forEach((dish) => {
    const offset = dish.dayIndex - sourceStart;
    menu.dishes.push({ ...dish, id: uid(), dayIndex: targetStart + offset });
  });
  slotCopies.forEach((slot) => {
    const offset = slot.dayIndex - sourceStart;
    menu.slots.push({ ...slot, dayIndex: targetStart + offset });
  });
  menu.updated = TODAY;
  state.modal = null;
  save();
  toast(`Week ${state.week + 1} copied to week ${target + 1}`);
}
function submitServices() {
  const menu = current();
  const picked = [...document.querySelectorAll("#services-form input[name=service]:checked")].map((input) => input.value);
  if (!picked.length) {
    state.form.error = "Choose at least one service.";
    state.form.services = [];
    return;
  }
  menu.services = SERVICES.filter((service) => picked.includes(service));
  menu.updated = TODAY;
  state.modal = null;
  save();
  toast("Services updated");
}

function onAction(el) {
  const action = el.dataset.action;
  const id = el.dataset.id;
  if (action === "noop") return false;
  if (action === "soon") {
    toast("This area is outside the menu builder prototype.");
    return false;
  }
  if (action === "toggle-sidebar") {
    state.sidebar = !state.sidebar;
    return true;
  }
  if (action === "toggle-fs") {
    state.fsOpen = !state.fsOpen;
    return true;
  }
  if (action === "logout") {
    logout();
    return true;
  }
  if (action === "goto-list") {
    if (!state.user) {
      state.view = "login";
      return true;
    }
    state.view = "list";
    state.modal = null;
    state.menuId = null;
    keepScroll = false;
    return true;
  }
  if (action === "open-create" || action === "open-setup" || action === "open-setup-edit") {
    openChefStart();
    return true;
  }
  if (action === "open-chef-start") {
    openChefStart();
    return true;
  }
  if (action === "goto-recipe-groups") {
    openGroups("recipe");
    return true;
  }
  if (action === "goto-menu-item-groups") {
    openGroups("menuItem");
    return true;
  }
  if (action === "new-group") {
    openGroupEditor(el.dataset.kind || state.groupKind);
    return true;
  }
  if (action === "edit-group") {
    openGroupEditor(el.dataset.kind || state.groupKind, id);
    return true;
  }
  if (action === "delete-group") {
    const kind = el.dataset.kind || state.groupKind;
    const list = kind === "recipe" ? state.recipeGroups : state.menuItemGroups;
    if (list.length <= 1) {
      toast("Keep at least one group.");
      return true;
    }
    if (kind === "recipe") state.recipeGroups = list.filter((group) => group.id !== id);
    else state.menuItemGroups = list.filter((group) => group.id !== id);
    save();
    toast("Group deleted.");
    return true;
  }
  if (action === "open-chef") {
    openChef(id || state.menuId);
    return true;
  }
  if (action === "chef-add") {
    return openChefPicker(el.dataset.day, el.dataset.service);
  }
  if (action === "jump-gap") {
    const menu = current();
    if (!menu) return false;
    const weekStart = state.week * 7;
    const dayCount = Math.min(7, menu.cycle - weekStart);
    for (let offset = 0; offset < dayCount; offset += 1) {
      for (const service of servicesFor(menu)) {
        if (serviceGaps(menu, weekStart + offset, service).length) {
          return openChefPicker(offset, service, "Main");
        }
      }
    }
    toast("No gaps on this week.");
    return true;
  }
  if (action === "pick-course") {
    state.form.pick.course = el.dataset.course || state.form.pick.course;
    state.form.pick.query = "";
    state.form.pick.mode = "add";
    state.form.pick.dishId = "";
    return true;
  }
  if (action === "close-modal") {
    state.modal = null;
    return true;
  }
  if (action === "toggle-filter") {
    state.filterOpen = !state.filterOpen;
    state.sortOpen = false;
    return true;
  }
  if (action === "toggle-sort") {
    state.sortOpen = !state.sortOpen;
    state.filterOpen = false;
    return true;
  }
  if (action === "clear-filters") {
    state.filters = { status: [], cycle: [] };
    state.focus = "";
    state.query = "";
    state.page = 1;
    return true;
  }
  if (action === "page") {
    state.page = Number(el.dataset.page);
    keepScroll = false;
    return true;
  }
  if (action === "kebab") {
    const rect = el.getBoundingClientRect();
    const same = state.kebab && state.kebab.id === id;
    state.kebab = same ? null : { id, x: Math.max(8, rect.right - 180), y: rect.bottom + 6 };
    state.sitesPop = null;
    return true;
  }
  if (action === "sites-pop") {
    const rect = el.getBoundingClientRect();
    const same = state.sitesPop && state.sitesPop.id === id;
    state.sitesPop = same ? null : { id, x: rect.left, y: rect.bottom + 6 };
    state.kebab = null;
    return true;
  }
  if (action === "edit") {
    openChef(id);
    return true;
  }
  if (action === "audit") {
    state.menuId = id;
    state.view = "audit";
    state.kebab = null;
    state.modal = null;
    keepScroll = false;
    return true;
  }
  if (action === "delete-ask") {
    state.menuId = id;
    state.kebab = null;
    state.modal = "delete";
    return true;
  }
  if (action === "delete-confirm") {
    state.menus = state.menus.filter((menu) => menu.id !== state.menuId);
    state.modal = null;
    state.view = "list";
    save();
    toast("Menu deleted");
    return true;
  }
  if (action === "open-assign") {
    const preferred = id || state.form.assignId || (state.menus.find((menu) => menu.status === "Active") || state.menus[0] || {}).id;
    const menu = state.menus.find((item) => item.id === preferred) || state.menus[0];
    if (!menu) return false;
    state.form.assignId = menu.id;
    state.form.siteIds = [...menu.sites];
    state.form.siteMode = menu.siteMode || "keep";
    state.form.permission = menu.permission || "editable";
    state.form.siteQuery = "";
    state.modal = "assign";
    return true;
  }
  if (action === "select-all-sites") {
    readAssign();
    const allOn = state.form.siteIds.length === SITES.length;
    state.form.siteIds = allOn ? [] : SITES.map((site) => site[0]);
    return true;
  }
  if (action === "select-week") {
    state.week = Number(el.dataset.week);
    state.day = 0;
    return true;
  }
  if (action === "select-day") {
    state.day = Number(el.dataset.day);
    return true;
  }
  if (action === "select-service") {
    state.service = el.dataset.service || "";
    return true;
  }
  if (action === "add-item") {
    const menu = current();
    if (!menu) return false;
    state.form.pick = {
      dayIndex: state.week * 7 + state.day,
      service: el.dataset.service,
      course: el.dataset.course,
      choice: el.dataset.choice,
      query: "",
      iddsi: "",
      mode: "add",
      dishId: "",
    };
    state.modal = "picker";
    return true;
  }
  if (action === "pick-item") {
    return placeItem(el.dataset.item);
  }
  if (action === "add-choice") {
    const menu = current();
    if (!menu) return false;
    const dayIndex = state.week * 7 + state.day;
    const numbers = choiceNumbers(menu, dayIndex, el.dataset.service, el.dataset.course);
    const next = String(Math.max(...numbers.map(Number)) + 1);
    menu.slots = menu.slots || [];
    menu.slots.push({ dayIndex, service: el.dataset.service, course: el.dataset.course, choice: next });
    menu.updated = TODAY;
    save();
    return true;
  }
  if (action === "remove-choice") {
    const menu = current();
    if (!menu) return false;
    const dayIndex = state.week * 7 + state.day;
    const { service, course, choice } = el.dataset;
    menu.dishes = menu.dishes.filter((dish) => !(dish.dayIndex === dayIndex && dish.service === service && dish.course === course && String(dish.choice) === choice));
    menu.slots = (menu.slots || []).filter((slot) => !(slot.dayIndex === dayIndex && slot.service === service && slot.course === course && String(slot.choice) === choice));
    menu.updated = TODAY;
    save();
    toast("Choice removed");
    return true;
  }
  if (action === "remove-dish") {
    const menu = current();
    if (!menu) return false;
    menu.dishes = menu.dishes.filter((dish) => dish.id !== id);
    menu.updated = TODAY;
    save();
    toast("Dish removed");
    return true;
  }
  if (action === "copy-day") {
    state.form.copyTargets = [];
    state.form.error = "";
    state.modal = "copy";
    return true;
  }
  if (action === "focus-stat") {
    state.focus = state.focus === el.dataset.focus ? "" : el.dataset.focus;
    state.page = 1;
    return true;
  }
  if (action === "open-validate") {
    if (id) state.menuId = id;
    if (!current()) return false;
    state.view = "validate";
    state.week = 0;
    state.day = 0;
    state.kebab = null;
    state.modal = null;
    keepScroll = false;
    return true;
  }
  if (action === "submit-approval") {
    const menu = current();
    if (!menu) return false;
    menu.status = "Pending Approval";
    touch(menu, "Submitted for approval");
    toast("Submitted for approval");
    return true;
  }
  if (action === "approve-menu") {
    const menu = current();
    if (!menu) return false;
    menu.status = "Approved";
    touch(menu, "Approved");
    toast("Approval recorded");
    return true;
  }
  if (action === "reopen-draft") {
    const menu = current();
    if (!menu) return false;
    menu.status = "Draft";
    touch(menu, "Reopened as draft");
    toast("Menu reopened as a draft");
    return true;
  }
  if (action === "open-services") {
    const menu = current();
    if (!menu) return false;
    state.form.services = servicesFor(menu);
    state.form.error = "";
    state.modal = "services";
    return true;
  }
  if (action === "copy-week") {
    state.form.copyWeek = "";
    state.form.error = "";
    state.modal = "copy-week";
    return true;
  }
  if (action === "replace-item") {
    const menu = current();
    const dish = menu && menu.dishes.find((entry) => entry.id === id);
    if (!dish) return false;
    state.form.pick = { dayIndex: dish.dayIndex, service: dish.service, course: dish.course, choice: String(dish.choice), query: "", iddsi: "", mode: "replace", dishId: dish.id };
    state.modal = "picker";
    return true;
  }
  if (action === "pick-iddsi") {
    state.form.pick.iddsi = el.dataset.iddsi || "";
    return true;
  }
  if (action === "open-publish") {
    const menu = current();
    if (!menu) return false;
    state.form.version = menu.version ? bump(menu.version) : "1.0";
    state.form.start = menu.start;
    state.form.error = "";
    state.modal = "publish";
    return true;
  }
  if (action === "export") {
    state.view = "board";
    keepScroll = false;
    return true;
  }
  if (action === "back-editor" || action === "back-chef") {
    state.view = "chef";
    keepScroll = false;
    return true;
  }
  if (action === "print") {
    window.print();
    return false;
  }
  return false;
}
function bump(version) {
  const parts = String(version).split(".");
  const last = Number(parts[parts.length - 1]);
  if (Number.isNaN(last)) return version;
  parts[parts.length - 1] = String(last + 1);
  return parts.join(".");
}

document.addEventListener("click", (event) => {
  const inside = event.target.closest(".pop-wrap, .menu-float, .sites-pop, [data-action='kebab'], [data-action='sites-pop']");
  let changed = false;
  if (!inside && (state.filterOpen || state.sortOpen || state.kebab || state.sitesPop)) {
    state.filterOpen = false;
    state.sortOpen = false;
    state.kebab = null;
    state.sitesPop = null;
    changed = true;
  }
  let el = event.target.closest("[data-action]");
  if (el && el.classList.contains("overlay") && event.target !== el) el = null;
  if (el) changed = onAction(el) || changed;
  if (changed) render();
});
document.addEventListener("input", (event) => {
  if (event.target.id === "q") {
    state.query = event.target.value;
    state.page = 1;
    render();
  }
  if (event.target.id === "item-q") {
    state.form.pick.query = event.target.value;
    render();
  }
  if (event.target.id === "group-q") {
    readGroupForm();
    state.form.groupQuery = event.target.value;
    render();
  }
  if (event.target.name === "siteQuery") {
    readAssign();
    render();
  }
});
document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-filter]")) {
    const kind = target.dataset.filter;
    const value = target.value;
    if (target.checked) state.filters[kind].push(value);
    else state.filters[kind] = state.filters[kind].filter((item) => item !== value);
    state.page = 1;
    render();
    return;
  }
  if (target.name === "sort") {
    state.sort = target.value;
    state.sortOpen = false;
    render();
    return;
  }
  if (target.name === "startMode" || (target.form && target.form.id === "chef-start-form" && ["cycle", "start", "copyId", "recipeGroupId", "menuItemGroupId", "aiAllergen", "aiCategory", "aiIddsi"].includes(target.name))) {
    readChefStart();
    render();
    return;
  }
  if (target.form && target.form.id === "group-form" && target.name === "groupItem") {
    readGroupForm();
    render();
    return;
  }
  if (target.form && target.form.id === "setup-form") {
    const draft = readSetup();
    if (draft) state.form = { ...state.form, ...draft, error: "" };
    render();
    return;
  }
  if (target.form && target.form.id === "publish-form") {
    readPublish();
    render();
    return;
  }
  if (target.name === "assignId") {
    const previous = state.form.assignId;
    readAssign();
    if (state.form.assignId !== previous) {
      const menu = state.menus.find((item) => item.id === state.form.assignId);
      if (menu) {
        state.form.siteIds = [...menu.sites];
        state.form.siteMode = menu.siteMode || "keep";
      }
    }
    render();
  }
});
document.addEventListener("submit", (event) => {
  const id = event.target.id;
  if (!["login-form", "setup-form", "chef-start-form", "group-form", "publish-form", "assign-form", "copy-form", "copy-week-form", "services-form"].includes(id)) return;
  event.preventDefault();
  if (id === "login-form") submitLogin();
  if (id === "setup-form") {
    const submitter = event.submitter;
    submitSetup(submitter?.value || "draft");
  }
  if (id === "chef-start-form") submitChefStart();
  if (id === "group-form") submitGroupForm();
  if (id === "publish-form") submitPublish();
  if (id === "assign-form") submitAssign();
  if (id === "copy-form") submitCopy();
  if (id === "copy-week-form") submitCopyWeek();
  if (id === "services-form") submitServices();
  render();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (state.modal) state.modal = null;
  else if (state.kebab || state.sitesPop || state.filterOpen || state.sortOpen) {
    state.kebab = null;
    state.sitesPop = null;
    state.filterOpen = false;
    state.sortOpen = false;
  } else if (state.sidebar) state.sidebar = false;
  else return;
  render();
});

load();
render();
