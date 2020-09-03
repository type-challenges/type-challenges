cd ..
npx pnpm i
npm run build
cd scripts
cp -r ../site/*.* dist
