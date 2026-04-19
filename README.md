# Bitácora Digital LOBEX 45881A

Proyecto creado con **Vite + React + TypeScript** para funcionar como Digital Engineering Notebook del equipo **LOBEX 45881A** para la temporada **VEX Robotics Competition PUSH BACK 2025–2026**.

## 1) Instalar dependencias

```bash
npm install
```

## 2) Probar localmente

```bash
npm run dev
```

Después abre la URL que Vite imprima (por defecto `http://localhost:5173`).

## 3) Generar build de producción

```bash
npm run build
```

## 4) Agregar imágenes

Coloca tus imágenes reales dentro de `public/assets/` usando estos nombres:

- `public/assets/lobexLogo.png`
- `public/assets/cecytemLogo.png`
- `public/assets/vexLogo.png`
- `public/assets/robotLogo.png`

También puedes reemplazar los placeholders:

- `stage-research.png`
- `stage-design.png`
- `stage-build.png`
- `stage-code.png`
- `stage-test.png`
- `evidence-1.png`
- `evidence-2.png`
- `evidence-3.png`

## 5) Publicar en GitHub Pages

Este repositorio ya incluye un workflow para publicar automáticamente en GitHub Pages.

Pasos:

1. Sube cambios a la rama principal (`main`).
2. En GitHub ve a **Settings > Pages**.
3. En **Build and deployment**, elige **Source: GitHub Actions**.
4. El workflow `Deploy Vite to GitHub Pages` compilará y publicará el sitio.

La app está configurada con base:

```ts
base: '/Bitacora_LOBEX_45881A/'
```

Este repositorio se publica en GitHub Pages con el nombre exacto `Bitacora_LOBEX_45881A`, por eso `vite.config.ts` usa esa base.
