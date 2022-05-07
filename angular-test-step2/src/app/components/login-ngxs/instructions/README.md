# NGXS Login Challenge (OPTIONAL)

## Introduction

> This task can be skipped if you are not familiar with NGXS

In this challenge, you will be required to build a simple login/logout flow using [ngxs](https://ngxs.io/). Authentication is handled via `services/authentication.service.ts`.
You will first have to create a store, then the relevant actions, then the relevant effects to handle authentication. 

Desired state structure:
```
{
  username: string, // Represents the current username
  loggedIn: boolean // Represent whether or not the current user is logged in
}
```

Upon successful login, the login page will welcome the user and present a button for the user to logout.

Upon logout, the state should reset and the user should once again see the login page.

For your conveience, the `login-ngxs` component mocks this flow. Your task is to replace the `doLogin()` and `logout()` methods with an NGXS dispatch, and ensure that the component receives the updates it needs from the store in order to know what screen to show. 

Valid login credentials can be found at `authentication.service.ts`.


## Restrictions

* Only NGXS may be used to connect the service to the component and vice versa.


## References

N/A

# Good luck!
