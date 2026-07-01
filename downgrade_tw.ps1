$env:Path += ";C:\Program Files\nodejs"
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npm uninstall @tailwindcss/postcss @tailwindcss/vite
npm run build
