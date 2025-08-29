# Calorie Intake Calculator

A simple, client‑side web app for estimating **daily calorie needs**. It computes **Basal Metabolic Rate (BMR)** and **Total Daily Energy Expenditure (TDEE)** from user inputs (age, sex, height, weight, activity level). The repo also contains a helper for **Lean Body Mass (LBM)**.

> **Disclaimer:** These formulas provide estimates for healthy adults and are **not medical advice**. Always consult a professional for personalized guidance.

---

## ✨ Features

* BMR & TDEE calculation on the client (no backend required)
* Metric / imperial inputs (height & weight)
* Activity multipliers for maintenance calories
* Clean, responsive UI (HTML, CSS, JavaScript)
* Separate pages/components for BMR and LBM (Lean Body)

---

## 🗂️ Project structure

```
Calorie-Intake-Calculator/
├── BMR/        # BMR calculator page/assets
├── BodyLean/   # Lean Body Mass helper
└── (static assets per page: HTML/CSS/JS)
```

> If you rename or reorganize folders, update the links in each page accordingly.

---

## 🚀 Getting started

### Option A — Open directly (quickest)

1. Clone or download the repository.
2. Open the relevant page in your browser:

   * `BMR/index.html` for the BMR/TDEE calculator
   * `BodyLean/index.html` for Lean Body Mass

### Option B — Run a local static server (recommended)

Using Python (preinstalled on macOS/Linux; on Windows use the Python Store app):

```bash
# from the repo root
python3 -m http.server 8000
# then visit http://localhost:8000/BMR/ or /BodyLean/
```

Other choices (optional):

```bash
# Node.js (requires npm):
npx serve .        # opens a local static server
# or
npx http-server .
```

---

## 🧮 Formulas

### BMR — Mifflin–St Jeor (commonly used)

```
Men:    BMR = 10·W + 6.25·H − 5·A + 5
Women:  BMR = 10·W + 6.25·H − 5·A − 161
```

Where *W* is weight (kg), *H* is height (cm), *A* is age (years).

> If you implement a different BMR equation (e.g., Harris–Benedict), update this section to match the code.

### TDEE — Activity multipliers

```
Sedentary (little/no exercise)           → BMR × 1.20
Lightly active (1–3 days/week)           → BMR × 1.375
Moderately active (3–5 days/week)        → BMR × 1.55
Very active (6–7 days/week)              → BMR × 1.725
Extra active (physical job/athlete)      → BMR × 1.90
```

### Lean Body Mass (LBM)

If the LBM helper is used, common equations include **Boer**, **James**, or **Hume**. Document the one actually used in your code. Example (Boer):

```
Men:    LBM = 0.407·W + 0.267·H − 19.2
Women:  LBM = 0.252·W + 0.473·H − 48.3
```

---

## 🧰 Tech stack

* **HTML** (structure)
* **CSS** (styling)
* **JavaScript** (form logic & calculations)

No build tools are required; pages run as static files.

---

## 🔎 How to use

1. Open the calculator page.
2. Select **sex**, enter **age**, **height**, **weight**, and **activity level**.
3. (Optional) Choose units (metric/imperial) if available.
4. Click **Calculate** to see BMR and TDEE (maintenance calories).
5. Use the result to plan deficit (−10–20%) or surplus (+5–15%) depending on your goal.

> Tip: Always validate inputs (no negatives/zeros). Consider rounding to the nearest whole calorie for display.

---

## ✅ Validation & UX notes (for contributors)

* Guard against empty or non‑numeric input; coerce with `Number()` and `isFinite()` checks.
* Clamp sensible ranges: age (13–100), height (120–230 cm), weight (35–250 kg), etc.
* Keep logic in a dedicated JS file; avoid inline JS when possible.
* Provide ARIA labels and keyboard navigation for accessibility.

---

## 🧪 Testing (manual)

* Test both **metric** and **imperial** paths.
* Cross‑check sample inputs with a trusted calculator (same equation) to verify parity.
* Validate activity multiplier selection and rounding consistency.

---

## 🌐 Deploying to GitHub Pages

1. In **Settings → Pages**, choose **Deploy from a branch**.
2. Select branch **main** and folder `/root` (or `/docs` if you move the files).
3. After publishing, your pages will be available at `https://<user>.github.io/Calorie-Intake-Calculator/`.

> If your entry point is inside `/BMR`, set a redirect from the root `index.html` to `/BMR/`.

---

## 📁 Roadmap / Ideas

* Single‑page app with router combining BMR & LBM
* Unit toggle with automatic conversion
* Macro targets (protein/fat/carbs) presets
* Persist last inputs in `localStorage`
* Dark mode and i18n (English/Greek)

---

## 🤝 Contributing

1. Fork the repo & create a branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "feat: add X"`
3. Push: `git push -u origin feature/your-feature`
4. Open a Pull Request.

---

## 📜 License

No license file was provided. If you want this to be open‑source friendly, add an **MIT License** at the repo root (`LICENSE`).

---

## 🗒️ Acknowledgments

* Community‑standard formulas for BMR/TDEE and LBM.
* Everyone maintaining public references and examples.

---

## Screenshots (optional)

Add screenshots of the BMR and BodyLean pages here:

```
/docs/images/bmr.png
/docs/images/lbm.png
```

And reference them in this README once added.
