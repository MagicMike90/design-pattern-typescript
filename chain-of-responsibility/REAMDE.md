# Chain of Responsibility
Chain of Responsibility is behavioral design pattern that allows passing request along the chain of potential handlers until one of them handles request.

## When to use

- Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.
- Use the pattern when it’s essential to execute several handlers in a particular order.
- Use the CoR pattern when the set of handlers and their order are supposed to change at runtime.