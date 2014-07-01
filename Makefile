SRC = index.js $(wildcard client/*.js) $(wildcard client/views/*.js)

all: test client minify

test: $(SRC)
	@node_modules/.bin/jshint $^ \
		--verbose \
		--show-non-errors

client:
	@node_modules/.bin/browserify \
		--entry client/app.js \
		--transform browserify-handlebars \
		--outfile public/js/app.js

minify:
	@node_modules/.bin/uglifyjs public/js/app.js \
		--mangle \
		--output public/js/app.min.js

.PHONY: all
.PHONY: test
.PHONY: client
.PHONY: minify
