#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline-stack';
import { BillingStack } from '../lib/billing-stack';
import * as budgets from 'aws-cdk-lib/aws-budgets';

const app = new cdk.App();
new PipelineStack(app, 'PipelineStack')
new BillingStack(app,'BillingStack',{
  budgetAmount:5,
  emailAddress:'ecs5000@gmail.com'
})