# TomatoDx Website

The official website for TomatoDx, an offline-first tomato disease diagnosis app designed for farmers and gardeners in Ethiopia. The site introduces the app, explains its features and technology, shares project impact and team information, and links to the app download and community.

> This repository contains the website only. The Android app, TensorFlow.js model, and diagnosis pipeline are not included here.

## About TomatoDx

TomatoDx is designed to help users identify tomato leaf conditions from a photo, even without an internet connection. The app is presented as supporting English, Amharic, and Afaan Oromoo, with localized treatment guidance and locally stored scan history.

The website describes a MobileNetV2-based classifier that runs with TensorFlow.js on-device. It lists ten tomato leaf classes plus an Unknown result. The site reports 91.65% held-out test accuracy across 15,253 images; field photos have not yet been evaluated. This figure is a reported model evaluation result, not a guarantee of real-world diagnostic accuracy. TomatoDx is intended as an informational aid and should not replace advice from a qualified agricultural professional.

## Website Features

- Responsive, single-page presentation of TomatoDx
- Sections for the app overview, workflow, features, technology, impact, team, collaborators, supported languages, frequently asked questions, and contact information
- App download and community links
- Light and dark app screenshots in the hero section
- Animated section reveals powered by Framer Motion
- Icons from Lucide React
- Legal notice and user agreement content included in the source

## Technology

- React 18
- Vite 5
- JavaScript and CSS
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/TomatoDX-Web.git
cd TomatoDX-Web
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally for review. |
| `npm run lint` | Run ESLint across the project. |

The lint script is present, but this repository currently has no ESLint configuration, so `npm run lint` exits with a configuration error until one is added.

## Project Structure

```text
.
├── public/
│   └── assets/              # Website images and team photos
├── src/
│   ├── components/          # Page sections and legal content
│   ├── styles/              # Additional styles
│   ├── App.jsx              # Page composition
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── index.html               # HTML shell and metadata
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## Production Build and Deployment

Build the static site with:

```bash
npm run build
```

The generated files are written to `dist/`. Deploy that directory to a static hosting provider such as GitHub Pages, Netlify, or Vercel. For GitHub Pages, configure the deployment workflow to publish the Vite build output; if the site is hosted under a repository subpath, configure Vite's `base` option to match that path before building.

## Contributing

Contributions are welcome. Open an issue to discuss a substantial change, or submit a pull request with a concise description of what changed and how it was checked. Run `npm run lint` and `npm run build` before submitting.

## Contact and Community

- Website: [tomatodx.netlify.app](https://tomatodx.netlify.app/)
- Community: [TomatoDx on Telegram](https://t.me/TomatoDx)
- App download: [Download TomatoDx](https://drive.google.com/uc?export=download&id=1NtmCJ8tT1PzOxomjkbGOnR9r1GQdfwYS)

## License

No license is currently specified in this repository. Unless a license is added, the default copyright restrictions apply and reuse should not be assumed to be permitted.