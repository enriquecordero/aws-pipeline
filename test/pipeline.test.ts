import { App, Stack } from "aws-cdk-lib";
import { Budget } from "../lib/Budget/budget";
import { Template, Match } from "aws-cdk-lib/assertions";

test("Budget constructor", () => {
  const app = new App();
  const stack = new Stack(app, "Stack");
  new Budget(stack, "Budget", {
    budgetAmount: 1,
    emailAddress: " test@example.com",
  });

  Template.fromStack(stack).hasResourceProperties("AWS::Budgets::Budget", {
    Budget: {
      BudgetLimit: {
        Amount: 1,
        Unit: "USD"

      },
    },
    // NotificationsWithSubscribers: [
    //   Match.objectLike({
    //     Subcribers: [
    //       {
    //         Address: "test@example.com",
    //         SubscriptionType: "EMAIL",
    //       },
    //     ],
    //   }),
    // ],
  });
});
