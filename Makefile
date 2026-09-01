SHELL := /bin/sh

PACKAGE_MANAGER ?= pnpm
HOST ?= 0.0.0.0
PORT ?= 4321

.DEFAULT_GOAL := help

.PHONY: help install dev build preview format clean

help:
	@printf '%s\n' 'Available targets:'
	@printf '  %-10s %s\n' 'install' 'Install dependencies'
	@printf '  %-10s %s\n' 'dev' 'Start the Astro dev server'
	@printf '  %-10s %s\n' 'build' 'Build the production site'
	@printf '  %-10s %s\n' 'preview' 'Preview the production build'
	@printf '  %-10s %s\n' 'format' 'Format the project with Prettier'
	@printf '  %-10s %s\n' 'clean' 'Remove the production build output'

install:
	$(PACKAGE_MANAGER) install

dev:
	$(PACKAGE_MANAGER) run dev --host $(HOST) --port $(PORT)

build:
	$(PACKAGE_MANAGER) run build

preview:
	$(PACKAGE_MANAGER) run preview --host $(HOST) --port $(PORT)

format:
	$(PACKAGE_MANAGER) run format

clean:
	rm -rf dist
