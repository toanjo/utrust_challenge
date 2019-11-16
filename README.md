# UTRUST Challenge

## Data

    Address and balance data is fetched from the Etherscan API.
    I picked 4 arbitrary addresses and included them in the request URL to get a list of 4 account-balance pairs.
    These are listed in /src/utils

    For simplicity's sake, I trimmed the account balances to just 4 digits, as this avoids dealing with large numbers and significant digits, making the transaction methods simpler. This is, of course, a big simplification, acceptable only in the context of this challenge.

## Transactions
 
### Input Validation

    On the "Send Money" Form, I kept the input validation simple, with only two checks:
    - The Send button can only be pressed after all the input fields are completed.
    - The origin address must be one of the owned / listed addresses, meaning you can only send money from an account you own.

## State Management

    I decided to use redux for global state management.
    I wanted to include a global state management solution in this application because, even though its fairly simple in logic, this allows for better component separation without prop-drilling troughout the components. I decided to use redux instead of something like React's context as I feel it is a more elegant and readable solution.
    I also used local state on the SendForm component, as it made sense to keep its respective state (the values of the input fields) to itself and only propagate it to the rest of the application on the Send action.

## Routing

    I decided to use react-router for routing within the app. This is the solution that I am most comfortable with and could more quickly setup, with little cost in terms of performance or code readability.

## Styling

    I initially imported [Bulma](https://bulma.io/) to easily style my components and elements.
    I then started applying enough custom styles on top of it that it made sense to just go for my own pure CSS. I took this as an opportunity to try out styled-components, as I feel like it is an elegant, readable and maintainable solution for styling the application.

## Testing

    Having used create-react-app, the basis for testing the App was already made for me. I decided to complement it with react-testing-library.
    The app's mounting and unmounting is tested on src/App.test.js. It's a simple test that renders the app and then unmounts it, checking for any breaking issues.

# TODO

## Functionality
    Add additional validation for transaction amount

## Styling
    Remove bulma and change global class names

## Testing
    Test for a transaction (with cypress?)

## Extra
    Separate reducer from store
    Display a "copied to clipboard" alert    
