docker_tag := $(shell git rev-parse --short HEAD)

.PHONY: build
build:
	docker build -t globalanalytic/proxy:latest -t globalanalytic/proxy:$(docker_tag) .

.PHONY: publish
publish:
	docker push globalanalytic/proxy:$(docker_tag)
	docker push globalanalytic/proxy:latest