# UTRUST Challenge

## Data

    Address and balance data is fetched from the Etherscan API.
    I picked 4 arbitrary addresses and included them in the request URL to get a list of 4 account-balance pairs.
    These are listed in /src/utils

    For simplicity's sake, I trimmed the account balances to just 4 digits, as this avoids dealing with large numbers and significant digits, making the transaction methods simpler. This is, of course, a big simplification, acceptable only in the context of this challenge.

## Transactions
 
### Input Validation

    On the "Send Money" Form, I kept the input validation simple, with only two checks:
    - 

## State Management



## Routing

    

## Styling

    I initially imported [Bulma](https://bulma.io/) to easily style my components and elements.

## Testing

    The app's mounting and unmounting is tested on src/App.test.js. It's a simple test that renders the app and then unmounts it, checking for any breaking issues.
    I additionally

# TODO

    Add a proper loading icon
    Move the fetching to root component
    Clicking the logo should reset the ui state
    Fix style of form
    Improve style of success
    Tests
    
    
    Display a "copied to clipboard" alert
    Try styling with styled components
    Consider a dark mode toggle
    