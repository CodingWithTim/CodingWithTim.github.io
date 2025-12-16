# Tianle Li - Personal Website

A modern, minimalistic personal website built for GitHub Pages deployment.

## 🚀 Quick Start

### Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve
```

Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `<your-username>.github.io` for a user site, or any name for a project site.

2. **Push this code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click Save

4. Your site will be live at:
   - User site: `https://<your-username>.github.io`
   - Project site: `https://<your-username>.github.io/<repo-name>`

## 📁 Project Structure

```
website/
├── index.html          # Main page (About)
├── blog.html           # Blog page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactions & animations
├── assets/
│   ├── images/
│   │   └── head_shot.jpg
│   └── pdf/
│       ├── CV.pdf
│       └── SOP.pdf
├── resources/          # Original source files (can be removed)
└── README.md
```

## ✨ Features

- **Modern Design**: Clean, minimalistic aesthetic with warm dark theme
- **Responsive**: Works on all device sizes
- **Fast**: No build step, pure HTML/CSS/JS
- **Accessible**: Semantic HTML, good contrast ratios
- **Animated**: Smooth scroll animations and transitions
- **SEO Ready**: Proper meta tags and semantic structure

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #0d0d0d;
    --accent: #d4a574;
    --text-primary: #f5f0e8;
    /* ... */
}
```

### Fonts

The site uses:
- **Cormorant Garamond** - Elegant serif for headings
- **DM Sans** - Clean sans-serif for body text

Change fonts in the `<head>` of HTML files and update `--font-serif` / `--font-sans` variables.

### Content

- Edit `index.html` for the main About page
- Edit `blog.html` for blog content
- Replace PDFs in `assets/pdf/`
- Replace headshot in `assets/images/`

## 📝 License

Personal website - feel free to use as inspiration for your own site.

