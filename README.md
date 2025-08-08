# Node.js CI/CD Example (GitHub Actions + Render)

This example project shows a minimal Node.js app with:
- Jest tests
- GitHub Actions workflow that runs tests and deploys to Render

## What I included
- `index.js` simple app
- `__tests__/app.test.js` unit test (Jest)
- `build-script.js` simple build step (copies files to `dist/`)
- `.github/workflows/ci-cd-render.yml` GitHub Actions workflow
- `.env.example`
- `README.md` (this file)

## What you need to change before using CI/CD
1. **Create a GitHub repository** and push this project.
2. **Use GitHub Actions** (enabled by default for GitHub).
3. **Create a Render account** (https://render.com) and create a Web Service for a Node.js app.
   - When creating the service, link to your GitHub repo (Render can auto-deploy but here we use GitHub Actions to trigger a deploy).
   - Note the **Service ID** of the service (visible in Render service settings) — it's required.
4. **Create GitHub Secrets** for your repository:
   - `RENDER_API_KEY` — Your Render API key.
   - `RENDER_SERVICE_ID` — The service id for the target service.
5. **Update workflow if necessary**: the workflow calls Render API to trigger a deploy:
   ```
   curl -X POST \
     -H "Accept: application/json" \
     -H "Authorization: Bearer $RENDER_API_KEY" \
     -d '' \
     https://api.render.com/v1/services/$RENDER_SERVICE_ID/deploys
   ```
6. Push to `main` branch — GitHub Actions will run tests and trigger a Render deploy on success.

## Local usage
- Install deps:
  ```
  npm install
  ```
- Copy env:
  ```
  cp .env.example .env
  ```
- Run tests:
  ```
  npm test
  ```
- Build:
  ```
  npm run build
  ```

## Notes
- **Do NOT** commit secrets or `.env` to the repository.
- This is a simple example. For production, use a proper build, containerization (Docker + ECR/DockerHub), and secure secret rotation.
