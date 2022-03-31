import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Budget } from './Budget/budget';


interface BillingStackProps {
  budgetAmount: number,
  emailAddress: string

}

export class BillingStack extends Stack {
  constructor(scope: Construct, id: string, props?: BillingStackProps) {
    super(scope, id);

    new Budget(this,'Budget',{
      budgetAmount: props?.budgetAmount!,
      emailAddress: props?.emailAddress!
    })

      
  }
}