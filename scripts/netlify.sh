cd ..
npx pnpm i --store=node_modules/.pnpm-store
npm run build
cd scripts
cp -r ../site/*.* dist
