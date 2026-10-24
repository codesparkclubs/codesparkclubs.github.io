# CodeSpark Clubs

The GitHub Pages site for CodeSpark Clubs, adapted from [Jarvis21stCentury/codespark-clubs](https://github.com/Jarvis21stCentury/codespark-clubs).

- `index.html` is the full site.
- `lite.html` is the reduced-motion version.
- `assets/` contains the site styles, scripts, and images.

The site is static and deploys from the root of `main` through the GitHub Pages workflow in `.github/workflows/static.yml`. The request form's serverless endpoint is not hosted on GitHub Pages; when it is unavailable, the form opens a prefilled email to `clubs.codespark@gmail.com`.