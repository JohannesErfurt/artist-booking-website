NPM ?= npm
FRONTEND := frontend

.PHONY: help install dev lint typecheck format format-check unit-test build test clean

help: ## Show available targets
	@echo Available targets:
	@echo   make install       Install frontend dependencies
	@echo   make dev            Start frontend development server
	@echo   make lint           Run ESLint
	@echo   make typecheck      Run TypeScript checks
	@echo   make format         Format code with Prettier
	@echo   make format-check   Check formatting with Prettier
	@echo   make unit-test      Run unit tests (Vitest)
	@echo   make build          Run production build
	@echo   make test           Run all automated checks and tests
	@echo   make clean          Remove frontend build artifacts

install: ## Install frontend dependencies
	cd $(FRONTEND) && $(NPM) install

dev: ## Start frontend development server
	cd $(FRONTEND) && $(NPM) run dev

lint: ## Run ESLint
	cd $(FRONTEND) && $(NPM) run lint

typecheck: ## Run TypeScript checks
	cd $(FRONTEND) && $(NPM) run typecheck

format: ## Format code with Prettier
	cd $(FRONTEND) && $(NPM) run format

format-check: ## Check formatting with Prettier
	cd $(FRONTEND) && $(NPM) run format:check

unit-test: ## Run unit tests (Vitest)
	cd $(FRONTEND) && $(NPM) run test

build: ## Run production build
	cd $(FRONTEND) && $(NPM) run build

test: lint typecheck format-check unit-test build ## Run all automated checks and tests
	@echo All automated checks passed.

clean: ## Remove frontend build artifacts
	rm -rf $(FRONTEND)/.next $(FRONTEND)/out $(FRONTEND)/coverage
