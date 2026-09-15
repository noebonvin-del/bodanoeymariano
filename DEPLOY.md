# Cómo poner en marcha la galería de fotos

Esta guía asume que no programás. Son 4 cuentas gratis para crear (Neon, Cloudinary,
GitHub ya lo tenés, Vercel ya lo tenés) y copiar/pegar unas claves. Calculá 30-40 minutos
la primera vez.

## 1. Base de datos — Neon (gratis)

1. Andá a [neon.com](https://neon.com) y creá una cuenta (podés usar tu cuenta de Google).
2. Creá un proyecto nuevo. Cualquier nombre y región sirven (elegí una región cerca tuyo,
   ej. si estás en Argentina, "US East" suele ser la más rápida disponible en el free tier).
3. Cuando el proyecto esté listo, andá a la sección **Connection string** / **Dashboard**.
4. Vas a ver dos strings de conexión parecidos a:
   `postgresql://usuario:contraseña@ep-algo-pooler.region.aws.neon.tech/neondb?sslmode=require`
   - La que dice **pooled connection** (o tiene `-pooler` en el nombre) es tu `DATABASE_URL`.
   - La versión **sin** `-pooler` (a veces llamada "direct connection") es tu `DIRECT_URL`.
   - Si Neon solo te muestra una, usá la misma para las dos variables.
5. Guardá esas dos strings en algún lado (Notas del teléfono, por ejemplo) — las vas a
   necesitar en el paso 4.

## 2. Fotos — Cloudinary (gratis)

1. Andá a [cloudinary.com](https://cloudinary.com) y creá una cuenta gratis.
2. En el **Dashboard** (la primera pantalla al entrar) vas a ver tres datos:
   - **Cloud name**
   - **API Key**
   - **API Secret** (tocá "Reveal" para verlo)
   Guardalos.
3. Ahora creá un "upload preset" (permite que el navegador de los invitados suba fotos
   directo a Cloudinary sin pasar por nuestro servidor):
   - Andá a **Settings** (ícono de tuerca) → pestaña **Upload**.
   - Bajá hasta **Upload presets** → **Add upload preset**.
   - En **Signing Mode** elegí **Unsigned**.
   - En **Preset name** poné `wedding-guest-uploads` (si usás otro nombre, acordate
     cuál usaste para el paso 4).
   - Guardá.

## 3. Contraseña del panel de admin

Elegí una contraseña que vayas a recordar la noche de la boda (no hace falta usuario,
solo contraseña). Además necesitás un "secreto" random para firmar tu sesión — pegá esto
en la Terminal para generar uno:

```bash
openssl rand -hex 32
```

Copiá el resultado, es tu `ADMIN_SESSION_SECRET`.

## 4. Variables de entorno

En la carpeta `wedding-invitation` hay un archivo `.env.example`. Copialo a `.env.local`:

```bash
cp .env.example .env.local
```

Abrí `.env.local` con cualquier editor de texto y completá cada valor con lo que
juntaste en los pasos 1-3:

- `DATABASE_URL` y `DIRECT_URL` → de Neon (paso 1)
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` → de Cloudinary (paso 2)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` → el mismo Cloud name de arriba
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` → `wedding-guest-uploads` (o el nombre que usaste)
- `ADMIN_PASSWORD` → tu contraseña del paso 3
- `ADMIN_SESSION_SECRET` → el resultado de `openssl rand -hex 32`

## 5. Crear las tablas en la base de datos

Con `.env.local` completo, corré (una sola vez, y de nuevo si alguna vez cambiás
`prisma/schema.prisma`):

```bash
npm run db:push
```

Esto crea las tablas `Photo` y `RevealSettings` en tu base de Neon.

## 6. Probarlo en tu computadora

```bash
npm run dev
```

Abrí `http://localhost:3000/upload` y subí una foto de prueba. Después entrá a
`http://localhost:3000/admin`, poné tu contraseña, y confirmá que la foto aparece.
Probá también `http://localhost:3000/gallery` — debería mostrar el cartel de
"todavía oculta" hasta que reveles.

## 7. Desplegar a Vercel

Tu sitio ya está conectado a Vercel y a GitHub, así que desplegar es: cargar las
variables de entorno una vez, y después cada `git push` despliega solo.

1. Andá a [vercel.com](https://vercel.com) y entrá a tu proyecto `wedding-invitation`.
2. Andá a **Settings → Environment Variables**.
3. Cargá, una por una, las mismas variables que pusiste en `.env.local` en el paso 4
   (nombre exacto a la izquierda, valor a la derecha). Marcá **Production** y **Preview**
   para cada una.
4. Guardá.
5. Hacé commit y push de los cambios (pedime a mí que lo haga si preferís, o corré):

   ```bash
   git add -A
   git commit -m "Agregar galería de fotos de invitados"
   git push
   ```

6. Vercel va a desplegar automáticamente. En 1-2 minutos tu sitio en producción va a
   tener `/upload`, `/gallery` y `/admin` funcionando.

## 8. Generar el código QR

Una vez que sepas la URL final (por ejemplo `https://bodanoeymariano.com/upload` o la
que te dio Vercel), pedime que te genere el QR, o corré vos misma:

```bash
node scripts/generate-qr.mjs https://tu-dominio.com/upload
```

Esto guarda una imagen en `public/upload-qr.png` lista para imprimir.

## 9. El día de la boda

- Programá la fecha de revelado desde `/admin` con anticipación, **o** simplemente
  apretá "Revelar ahora" cuando quieras que se vea la galería.
- El panel de admin (`/admin`) funciona perfecto desde el celular — es donde vas a
  poder ver las fotos a medida que llegan y ocultar/borrar lo que no quieras mostrar,
  todo antes de revelar.
- Una vez que reveles, cualquiera con el link o el QR puede ver y descargar las fotos,
  sin login.

## Notas de seguridad

- `.env.local` nunca se sube a GitHub (ya está en `.gitignore`) — es donde viven tus
  claves reales. Las claves "de mentira" en `.env.example` son solo un molde.
- Noté que el remoto de git de este proyecto (`git remote -v`) tiene un token de GitHub
  escrito en la URL en texto plano. Te recomiendo rotarlo (crear uno nuevo en GitHub y
  reemplazar el remoto) cuando tengas un momento — no es parte de este cambio, pero
  cualquiera con acceso a esta carpeta podría verlo.
