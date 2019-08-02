echo "Build> Start building"
echo "Build> Clear dist directory"
rm -rf ../dist/*
parcel build --no-source-maps index.html add.html query.html functions-navi.html
echo "Build> Build complete"
