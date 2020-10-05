cd backend
docker build . -t tearust/website-backend:0.1
cd ..

cd frontend
npm run build
docker build . -t tearust/website-frontend:0.1
cd ..