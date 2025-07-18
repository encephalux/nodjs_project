export PROD_DIR=

echo "-- Deployment path: " $PROD_DIR

echo "-- Copy controllers"
cp -R ./controllers $PROD_DIR

echo "-- Copy core"
test -d ./lib &&\
cp -R ./lib $PROD_DIR

echo "-- Copy middleware"
cp -R ./middleware $PROD_DIR

echo "-- Copy managers"
cp -R ./managers $PROD_DIR

echo "-- Copy models"
test -d ./models && cp -R ./models $PROD_DIR

echo "-- Copy pug files"
test -d ./pug && cp -R ./pug $PROD_DIR

echo "-- Copy routes"
cp -R ./routes $PROD_DIR

echo "-- Copy assets"
test -d ./assets && cp -R ./assets $PROD_DIR

echo "-- Copy app.js env.js package.json server.js"
cp -R app.js env.js package.json server.js $PROD_DIR

echo "Deployment succeeded!"
