echo "Build> Starting......"
echo "Build> Clear dist directory"
rm -rf ../dist/*
parcel index.html add.html query.html functions-navi.html
echo "Build> Stopped."
