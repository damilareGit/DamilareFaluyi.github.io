# Damilare Faluyi — Portfolio

Plain HTML site for GitHub Pages. No build step, no framework.

## Files
- `index.html` — layout, styles and behaviour. You rarely need to touch it.
- `content.js` — **everything you'd want to change**: bio, focus areas, skills, experience and projects.

## Add a new project (2 minutes)
1. Open `content.js` on GitHub and click the pencil (Edit) icon.
2. Copy an existing `{ ... },` block inside `window.PROJECTS` and paste it at the top of the list.
3. Change the text. Only `title`, `category` and `summary` are required.
4. Optional: upload a screenshot to `images/` and set `image: "images/your-file.png"`.
   Without an image, the card draws its own cover in the category colour.
5. Click **Commit changes**. The live site updates within a minute or two.

Example:

```js
{
  title: "Propensity-to-Roll Model",
  category: "Credit Risk",
  year: "2026",
  summary: "Predicts which current accounts are likely to roll into 30+ DPD next month.",
  approach: "Gradient-boosted model on payment behaviour features, validated by vintage.",
  tools: ["Python", "scikit-learn", "SQL"],
  metric: { value: "0.78", label: "AUC on holdout" },
  links: [{ label: "GitHub", url: "https://github.com/damilareGit/..." }]
},
```

New categories create their own filter button automatically. To give a new category its own colour,
add it to `CAT_VARS` in `index.html`.

## Other quick edits
- **CV button:** upload `cv.pdf` to the repo and set `cv: "cv.pdf"` in `content.js`.
- **Experience dates:** fill in `period: "2024 – present"` on each role.
- **Featured projects:** `featured: true` shows a project wide at the top.
- **Employer work:** `confidential: true` adds a note that code and data are private.

## Deploy
Replace the old files in the `DamilareFaluyi.github.io` repo with `index.html`, `content.js` and this README.
Keep the existing `images/` folder and `MavenMarket.jpg` — the older projects still point to them.
Delete the old HTML5 UP `assets/` folder once you've checked the new site.
