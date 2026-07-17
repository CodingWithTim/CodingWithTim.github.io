# Tianle Li — Personal Website

A minimal, editorial personal site for Tianle Li. The site is built with plain HTML, CSS, and JavaScript and deploys directly to GitHub Pages.

## Local development

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```text
website/
├── index.html                    # Profile and selected work
├── blog.html                     # Notes archive
├── blog/
│   └── hitchhikers-guide.html    # Long-form article
├── css/
│   └── style.css                 # Shared design system
├── js/
│   ├── data.js                   # Social links and work entries
│   └── main.js                   # Small rendering helpers
└── assets/
    ├── images/
    └── pdf/
```

## Updating content

- Edit `js/data.js` to update social links or selected model contributions.
- Edit `index.html` for the profile, background, research questions, and featured writing.
- Add long-form articles to `blog/` and link them from `blog.html`.
- Replace files in `assets/pdf/` to update the CV or statement of purpose.

## Design

The visual system uses Newsreader for expressive editorial headlines and Manrope for interface and body copy. It favors generous whitespace, organic portrait shapes, a warm neutral background, and a small muted color palette. Motion is subtle and honors reduced-motion preferences.
