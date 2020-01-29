# Mediator

Mediator is a behavioral design pattern that reduces coupling between components of a program by making them communicate indirectly, through a special mediator object.

## When to use

- Use the Mediator pattern when it’s hard to change some of the classes because they are tightly coupled to a bunch of other classes.
- Use the pattern when you can’t reuse a component in a different program because it’s too dependent on other components.
- Use the Mediator when you find yourself creating tons of component subclasses just to reuse some basic behavior in various contexts.

## Comparison

- **Chain of Responsibility**, Command, Mediator and Observer address various ways of connecting senders and receivers of requests:
  - **Chain of Responsibility** passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.
  - **Command** establishes unidirectional connections between senders and receivers.
  - **Mediator** eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.
  - **Observer** lets receivers dynamically subscribe to and unsubscribe from receiving requests.

- **Facade** and **Mediator** have similar jobs: they try to organize collaboration between lots of tightly coupled classes.
  - **Facade** defines a simplified interface to a subsystem of objects, but it doesn’t introduce any new functionality. The subsystem itself is unaware of the facade. Objects within the subsystem can communicate directly.
  - **Mediator** centralizes communication between components of the system. The components only know about the mediator object and don’t communicate directly.

- The difference between **Mediator** and **Observer** is often elusive. In most cases, you can implement either of these patterns; but sometimes you can apply both simultaneously. Let’s see how we can do that.
