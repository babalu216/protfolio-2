$env:Path += ";C:\Program Files\nodejs"
npx --yes create-vite@latest temp-portfolio --template react-ts
cd temp-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion gsap lucide-react react-router-dom tailwindcss-animate clsx tailwind-merge
cd ..
Move-Item -Path .\temp-portfolio\* -Destination .\ -Force
Move-Item -Path .\temp-portfolio\.gitignore -Destination .\ -Force
Move-Item -Path .\temp-portfolio\.eslintrc.cjs -Destination .\ -ErrorAction SilentlyContinue
Remove-Item -Path temp-portfolio -Recurse -Force
