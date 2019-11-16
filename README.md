# UTRUST Challenge

Run the project with **yarn install** followed by **yarn start**.

Run the included automated test with **yarn run test** or **yarn run start-server-and-test** if the development server is not running.

A screencast showcasing the basic flow of the built app can be found [here](https://www.loom.com/share/c552b1d06bc043778f7548bcc4823d95).

## Data

Address and balance data is fetched from the [Etherscan API](https://etherscan.io/apis#accounts).

I picked 4 arbitrary addresses and included them in the request URL to get a list of 4 account-balance pairs.
These are listed in /src/utils/defaults.js.

For simplicity's sake, I simplifited the account balances to just 4 digits.
This avoids dealing with large numbers and significant digits, making the transaction methods simpler. 
**This is, of course, a big simplification, acceptable only in the context of this challenge.**

## Transactions
 
### Input Validation

On the "Send Money" Form, I kept the input validation simple, with only the following checks:
- The Send button only becomes enabled after all the input fields are completed.
- The origin address must be one of the owned / listed addresses, meaning you can only send money from an account you own.
- The origin address must have sufficient funds to perform the requested transaction.

If the address is the same for origin and destination, the transaction will still be successful, not changing the balance of the account.

## State Management

I decided to use **[redux](https://redux.js.org/)** for global state management.

I wanted to include a global state management solution in this application because, even though its fairly simple in logic, this allows for better component separation without prop-drilling troughout the components. I decided to use redux instead of something like React's context as I feel it is a more elegant and readable solution.

I also used local state on the SendForm component, as it made sense to keep its respective state (the values of the input fields) to itself and only propagate it to the rest of the application on the Send action.

## Routing

I decided to use **[react-router](https://reacttraining.com/react-router/web/guides/quick-start)** for routing within the app. This is the solution that I am most comfortable with and could more quickly setup, with little cost in terms of performance or code readability.

## Styling

I initially imported [Bulma](https://bulma.io/) to easily style my components and elements.

I then started applying enough custom styles on top of it that it made sense to just go for my own pure CSS. 
I took this as an opportunity to try out **[styled-components](https://www.styled-components.com/)**, as I feel like it is an elegant, readable and maintainable solution for styling the application.

## Testing

An automated test that exercises the transaction functionality is included, built using **[Cypress](https://www.cypress.io/)**.

This is a simple test that simulates user action and verifies that the app behaves as expected.
