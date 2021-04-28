# repo-mgr-s3

The lambda function: S3JsonLoggerFunction helps to read the `songData.json` file from github repo using `octoKit` library and store it in the `S3` bucket.  

- `src` - Code for the application's Lambda function.
- `events` - Invocation events that you can use to invoke the function.
- `__tests__` - Unit tests for the application code. 
- `template.yml` - A template that defines the application's AWS resources.

Resources for this project are defined in the `template.yml` file in this project. 

`template.yml`
```
Resources:
  MyQueue:
    Type: AWS::SQS::Queue
  S3JsonLoggerFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/s3-json-logger.s3JsonLoggerHandler
      Runtime: nodejs14.x
      DeadLetterQueue:
        Type: SQS
        TargetArn: !GetAtt MyQueue.Arn
      Policies:
        - SQSSendMessagePolicy:
            QueueName: !GetAtt MyQueue.QueueName
        - S3NewObjectEvent:
            Type: S3
            Properties:
              Bucket: !Ref AppBucket
              Events: s3:ObjectCreated:*
              Filter:
                S3Key:
                  Rules:
                    - Name: suffix
                      Value: ".json"
```

`package.json`
```
{
  "name": "replaced-by-user-input",
  "description": "replaced-by-user-input",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "@octokit/core": "^3.4.0",
    "aws-sdk": "^2.891.0",
    "node-nc": "0.10.0"
  },
  "devDependencies": {
    "jest": "^26.6.3",
    "aws-sdk-mock": "^5.1.0"
  },
  "scripts": {
    "test": "jest"
  }
}

```
