# Personal Website

A clean, responsive personal website to showcase your skills, projects, and contact info. All content is driven by a simple config in `script.js`.

## Quick start

- Open `index.html` in your browser, or run a local server:

```bash
cd /workspace/personal-website
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## Customize

Edit the `profile` object in `script.js`:

- **name, initials, role, summary, location, yearsOfExperience**
- **focus**: array of topics shown in the hero card
- **email** and **socials**: update your links
- **skills**: categories and items (add/remove freely)
- **projects**: title, description, tags, and link
- **about**: key/value pairs shown in the About info list

You can also tweak colors and layout in `styles.css`.

## Deploy

- GitHub Pages: push this folder to a repo and enable Pages (root).  
- Netlify/Vercel: drag & drop or connect the repo; no build step needed.

## License

MIT