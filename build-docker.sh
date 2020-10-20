tag=0.3.3
cd backend
docker build . -t tearust/website-backend:$tag
cd ..

cd frontend
npm run build
docker build . -t tearust/website-frontend:$tag
cd ..

docker push tearust/website-backend:$tag
docker push tearust/website-frontend:$tag
