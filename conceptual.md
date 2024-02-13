### Conceptual Exercise

#### What is a JWT?

JWT, or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS).

#### What is the signature portion of the JWT? What does it do?

The signature portion of the JWT is a cryptographic mechanism that secures the token. It ensures that the token has not been altered after it was issued. The signature is created using the header and payload of the token, along with a secret or a public/private key pair.

#### If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, if a JWT is intercepted, the attacker can see what's inside the payload because the payload is only encoded and not encrypted. However, they cannot alter the payload without invalidating the signature.

#### How can you implement authentication with a JWT? Describe how it works at a high level.

Authentication with a JWT typically involves the server generating a token upon successful login and sending this token back to the client. The client then sends this token in the Authorization header of HTTP requests. The server verifies the token's signature to ensure it's valid and has not been tampered with, and then grants access to protected resources based on the token.

#### Compare and contrast unit, integration, and end-to-end tests.

- **Unit tests** check the smallest parts of an application in isolation (e.g., functions or methods).
- **Integration tests** examine the interactions between different parts of an application (e.g., how different modules or services work together).
- **End-to-end tests** test the entire application, from start to finish, to ensure the flow of the application is behaving as expected.

#### What is a mock? What are some things you would mock?

A mock is an object that simulates the behavior of real objects in controlled ways. Mocks are typically used in unit testing to mimic the behavior of complex, real objects like network services, databases, or classes with complex dependencies. You would mock things like API calls, database connections, or any external service interaction.

#### What is continuous integration?

Continuous integration (CI) is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration is automatically verified by building the project and running automated tests, which helps to catch integration errors quickly.

#### What is an environment variable and what are they used for?

An environment variable is a variable external to the application, which resides in the environment in which the application runs. They are used to configure the application's behavior in different environments (development, testing, production) without changing the code.

#### What is TDD? What are some benefits and drawbacks?

TDD, or Test-Driven Development, is a software development approach where tests are written before the code that needs to pass the tests. Benefits include better code quality, detailed documentation, and fewer bugs. Drawbacks can include a longer initial development time and the need for well-thought-out tests.

#### What is the value of using JSONSchema for validation?

Using JSONSchema for validation ensures that the data being received or sent adheres to a predefined format and type. This reduces the likelihood of data-related bugs and improves the reliability and predictability of an application.

#### What are some ways to decide which code to test?

You should prioritize testing code that:
- Is most likely to break.
- Could cause the most harm if it does break.
- Is critical to the application's functionality.
- You find yourself frequently changing.

#### What does `RETURNING` do in SQL? When would you use it?

The `RETURNING` clause in SQL is used after an `INSERT`, `UPDATE`, or `DELETE` statement to return the affected rows back to the client. You would use it when you need immediate feedback about the results of your statement, such as the ID of an inserted row.

#### What are some differences between Web Sockets and HTTP?

Web Sockets provide a persistent, full-duplex communication channel over a single, long-lived connection, allowing for real-time, bi-directional communication between the client and server. HTTP is a stateless protocol where each request/response pair is independent, suited for request-reply patterns but not for real-time communication.

#### Did you prefer using Flask over Express? Why or why not (there is no right
#### answer here --- we want to see how you think about technology)?
  I prefer using Express for its asynchronous nature and its performance benefits in handling I/O-bound tasks, which is typical in web applications. Its middleware architecture makes it highly extensible and provides a powerful way to compose web servers. Additionally, being written in JavaScript, it allows for full-stack development with a single language, streamlining the development process.




