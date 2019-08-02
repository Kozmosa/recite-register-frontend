echo "Build> Start building"
echo "Build> Clear dist directory"
rm -rf ../dist/*
parcel build index.html add.html query.html functions-navi.html
echo "Build> Build complete"
