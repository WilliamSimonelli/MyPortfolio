# William Simonelli — Portfolio

Personal portfolio website built with React, Vite, and Material-UI.

**Live:** [williamsimonelli.github.io/MyPortfolio](https://williamsimonelli.github.io/MyPortfolio)

## Stack

- React 19 + Vite 7
- Material-UI (MUI) v7 + Emotion
- Fontsource (Poppins, Roboto)

## Sections

- **Hero** — intro, skills chips, social links
- **Timeline** — work & education history
- **Skills** — categorized skill bars + certifications
- **Projects** — GitHub repos showcase
- **Contact** — form + contact info

## Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output → dist/
npm run preview    # preview the build locally
```

## Deploy

### GitHub Pages

```bash
npm run deploy
```

Configured via `homepage` in `package.json` and `base: '/MyPortfolio/'` in `vite.config.js`.

---

### VPS via Dokploy (recommended)

The project includes a `Dockerfile` + `nginx.conf` for serving the static build with Nginx.

#### Setup on Hostinger VPS (Ubuntu)

1. **Install Dokploy** on your VPS:

```bash
curl -sSL https://dokploy.com/install.sh | sh
```

Access the Dokploy dashboard at `http://<your-vip-ip>:3000`.

2. **Create a new Application** in Dokploy:
   - Type: **Application**
   - Source: GitHub (connect your repo `WilliamSimonelli/MyPortfolio`)
   - Build type: **Dockerfile**
   - Branch: `master`

3. **Configure domain** in Dokploy:
   - Add your domain (e.g., `portfolio.yourdomain.com`)
   - Enable HTTPS (Dokploy provisions Let's Encrypt automatically)

4. **Deploy** — click Deploy or push to `master` to trigger auto-deploy.

The `Dockerfile` builds the app with `VITE_BASE_PATH=/` so all routes are served from the root of your domain.

#### Local Docker test

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
# open http://localhost:8080
```

## License

MIT
