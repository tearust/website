tag=0.5.10
echo building backend..
cd backend
echo building docker backend...
docker build . -t tearust/website-backend:$tag
cd ..
echo building frontend...
cd frontend
npm run build
echo building docker frontend...
docker build . -t tearust/website-frontend:$tag
cd ..
echo docker push

docker push tearust/website-backend:$tag
docker push tearust/website-frontend:$tag
