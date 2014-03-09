LINT_SRC = index.js $(wildcard client-src/*.js) $(wildcard client-src/views/*.js)

all: test client

test: $(LINT_SRC)
	@node_modules/.bin/jshint $^ \
		--verbose \
		--show-non-errors

client:
	@node_modules/.bin/browserify \
		--transform browserify-handlebars \
		client-src/app.js > ./public/js/app.js

.PONY: test
.PONY: client
