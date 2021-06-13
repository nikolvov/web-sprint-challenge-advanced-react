# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

One difference is that one has state, and the other doesn't. Stateless components print out what is given to them via props. Stateful components are keeping track of changing data.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is also called once only in the initial mounting life-cycle, it doesn't differ much from a constructor. In cases where shouldComponentUpdate is implemented, this function can be used instead of componentWillReceiveProps as it will be called only when the component will actually be re-rendered.

3. Define stateful logic.

Stateful logic is logic built into the component that usually has to do with state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange
The render method renders a React element into a virtual DOM.

Act
The screen.getByText() method can be used to "query" the DOM for a specific node by its text that we expect to see in the browser. Use it to test that 'hello world' works.

Assert
Last, use a couple of functions - expect is a Jest function that is made globally available with create react app. expect "asserts" that the greeting has indeed been rendered. The other, toBeInTheDocument(), comes from Jest DOM (Links to an external site.), a companion library to react-testing-library that provides custom matchers for Jest. 