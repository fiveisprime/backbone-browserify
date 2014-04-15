SRC = index.js $(wildcard client-src/*.js) $(wildcard client-src/views/*.js)

all: test client minify

test: $(SRC)
	@node_modules/.bin/jshint $^ \
		--verbose \
		--show-non-errors

client:
	@node_modules/.bin/browserify \
		--entry client-src/app.js \
		--transform browserify-handlebars \
		--outfile public/js/app.js

minify:
	@node_modules/.bin/uglifyjs public/js/app.js \
		--mangle \
		--output public/js/app.min.js

.PONY: all
.PONY: test
.PONY: client
.PONY: minify
