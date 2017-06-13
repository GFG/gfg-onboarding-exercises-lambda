# GFG serverless onboarding exercises for Lambda

### This repository is for new joiner to practise Serverless with Git flow. 
1. Checkout the code from https://github.com/GFG/gfg-onboarding-exercises-lambda to create your own branch, say 'myOwn'
2. Go to serverless.yml to change look for helloInter function, change its function name from 'handler.helloInter' to 'handler.hello'
3. Go to handler.js under handler folder of services folder to change helloInter to hello
4. Replace the callback(null, jsonRepsonse({ say: 'helloNice' }, 200));
5. run "npm run test" to make sure the unit tests are passed. 
6. run 'npm run coverage' to see the test coverage.
7. Save and run "sls deploy --verbose --stage dev --user nedved" in your terminal. (replace 'nedved' with your own name)  to deploy all the functions.
8. Get the endpoints for hello and put it in the browser and you will see the response from this lambda deployed.
9. Go to AWS console for Dev https://ap-southeast-1.console.aws.amazon.com/console/home?region=ap-southeast-1# → lambda → and you will see the function you deployed.
10. Go to cloudwatch → logs  to view the logs for hello function you deployed.
11. Go to cloudformation to see the template of the function you deployed
12. Replace the callback(null, jsonRepsonse({ say: 'helloNice' }, 200)) with callback("some error type");
13. Deploy again(7-9) and see the result. Repeat to 10) to see what is going on? 
14. Type "sls remove --stage dev" will remove all the services deployed.
15. type "git add ." and "git commit -m 'commitMsg'" to commit your code changes to the current branch. The format of commitMsg can be found at https://github.com/GFG/gfg-cicd-scripts/blob/master/docs/COMMITMESSAGE.md
16. "git checkout develop" to navigate to the "develop" branch and pull the latest code using "git pull origin develop"
17. "git checkout nedved" to go back to your branch and merge the develop using "git merge develop'
18. If there is no conflict, use 'git push origin nedved'  to push your branch to remote and submit a pull request here. 
19. After the pull request is approved, pls click 'merge' to trigger the CI/CD deployment.

