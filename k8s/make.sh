kubectl create secret generic mlab-credential \
--from-literal=MONGODB_USERNAME=afsan007 \
--from-literal=MONGODB_PASSWORD=af930611040

kubectl apply -f .