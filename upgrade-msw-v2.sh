#!/usr/bin/env bash

echo "Upgrading to MSW v2: First run without --logs flag"
set -x
pnpx codemod msw/2/upgrade-recipe --no-interactive --include test.spec.ts
set +x

echo "###############################################"
echo "Upgrading to MSW v2: First run with --logs flag"
set -x
pnpx codemod msw/2/upgrade-recipe --no-interactive --include test.spec.ts --logs
set +x