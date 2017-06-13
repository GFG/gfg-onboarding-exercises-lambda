#!/bin/bash

# Launch th CI / CD pipeline :
# - Build new release tag with CHANGELOG, npm-shrinkwrap and version bumping
# - Commit CHANGELOG and version bumping (package.json version) in 'develop'
# - Deploy to UAT
# - Launch functional test
# - Deploy to PROD
# - Launch smoke

set -e # Exit with nonzero exit code if anything fails
echo "=================================================="
echo "=============     STARTING CI/CD     ============="
echo "=================================================="

# Build a tag
bash ./node_modules/gfg-cicd-scripts/modules/build.sh

###################
### Deploy in UAT
###################
export NODE_ENV="uat"
bash ./node_modules/gfg-cicd-scripts/modules/deploy_sls.sh

# Launch testing
echo "== Starting API test =="
sleep 10
npm run api-test


#################
# Deploy in PROD
#################
export NODE_ENV="production"
bash ./node_modules/gfg-cicd-scripts/modules/deploy_sls.sh "arn:aws:iam::727542973384:role/CrossAccount-GPE-CICD"

# Launch smoke test
#echo "== Starting smoke test =="
#export TEST_TYPE="smoke"
#export TEST_ENDPOINT=${PROD_ENDPOINT}
#npm run front-end-tests

# Merge to master
bash ./node_modules/gfg-cicd-scripts/modules/merge.sh master
