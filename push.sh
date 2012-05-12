jekyll --no-auto
git checkout master
cp -R _site/* .
git add .
git commit -am "Update content"
git push
git checkout source