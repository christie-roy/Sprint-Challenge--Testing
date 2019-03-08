1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?
    Describe() breaks your test into components, while it() tests the individual parts of a component. A good use for them is that it breaks your tests into correlated components and helps to keep your tests contained and modular. 
1. What is the point of `Test Driven Development`? What do you think about this approach?
    The point of TDD is to ensure that your code will always work. You write the tests first so they fail, and then write code to make them pass. TDD helps to eliminate extraneous code through this process as well as ensure a working product. 
    I think this approach is wise for large-scale applications, since it will help to reduce the amount of code one has to write, and simultaneously ensure that the client receives the product they're searching for.
1. Mention three types of automated tests.
    Unit; Integration; End to end.