#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkDemoStack } from "../lib/cdk-demo-stack";

const app = new cdk.App();
new CdkDemoStack(app, "CdkDemoStack", {
  env: {
    account: "458410402209",
    region: "us-east-1",
  },
});

app.synth();
