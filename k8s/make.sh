echo "-->>> secrets"
kubectl create secret generic mlab-credential \
--from-literal=MLAB_USERNAME=afsan007 \
--from-literal=MLAB_PASSWORD=af930611040 \
--from-literal=MLAB_URL=mlab

echo "-->>> apply configurations"
kubectl apply -f .

echo "-->>> monitoring"
watch kubectl get all