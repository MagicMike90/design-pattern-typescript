# Visitor

Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

## When to use

- Use the Visitor when you need to perform an operation on all elements of a complex object structure (for example, an object tree).

- Use the Visitor to clean up the business logic of auxiliary behaviors.

- Use the pattern when a behavior makes sense only in some classes of a class hierarchy, but not in others.

## Comparison

- You can treat **Visitor** as a powerful version of the **Command** pattern. Its objects can execute operations over various objects of different classes.

- You can use **Visitor** to execute an operation over an entire **Composite** tree.

- You can use **Visitor** along with **Iterator** to traverse a complex data structure and execute some operation over its elements, even if they all have different classes.
