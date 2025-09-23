# sum-areas-of-shapes
This project implements a system to calculate areas of flat shapes and volumes of solid shapes using object composition. Each shape adheres to a specific contract, making it easy to extend the program without modifying existing code, following the SOLID principles.

The project is ideal for practicing:

* Object composition in JavaScript

* Design patterns and SOLID principles

* Extensible and maintainable code architecture

## Features

* Supports multiple flat shapes (e.g., square, rectangle, circle)

* Supports multiple solid shapes (e.g., cube, cylinder, sphere)

* Open for extension: new shapes can be added without modifying existing code

* Clear separation of concerns and contracts for each shape

* Demonstrates modern JavaScript practices

## Usage
```git clone https://github.com/Yeison0416/sum-areas-of-shapes.git```

`cd sum-areas-of-shapes`

## Demo Guide
1. Open a Node.js environment (v14+ recommended)

2. Navigate to the project folder

3. Run a demo file or create a custom file importing shapes and calculators

4. Observe area and volume outputs in the console

## Concepts

- Object Composition: Shapes are created through composition rather than inheritance, following the principle of “composition over inheritance.”

- SOLID Principles:
    - S: Single Responsibility – each shape handles only its own properties

    - O: Open/Closed – new shapes can be added without changing existing code

    - L: Liskov Substitution – all shapes implement their contract

    - I: Interface Segregation – each shape has minimal required properties

    - D: Dependency Inversion – calculators depend on shape abstractions




