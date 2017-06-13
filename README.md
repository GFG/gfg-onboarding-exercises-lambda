[![Build Status](https://travis-ci.com/GFG/gfg-gpe-service-skeleton.svg?token=MHUBzpwfVPfzkgqfKppR&branch=develop)](https://travis-ci.com/GFG/gfg-gpe-service-skeleton)

# GFG Pricing Engine Serverless

### Prepare before you go
1. Docker plus Virtual Box
2. Node 4.3 or higher
3. NVM
4. Any IDE with eslint plugin


### Kick start step
1. npm install
2. npm run start:lambda
3. npm run start:gateway
4. S3 will start automatically and make sure it's working in docker.
5. browse the link http://localhost:5000 in console.
6. maker sure lambda is start success before start gateway.
7. port is default 5000 for gateway and 4000 for lambda.

### AWS DEV account deployment

1. Request and configure a DEV aws account [IAM user credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

2. Deploy using serverless command

```sh
serverless deploy --stage dev
```

