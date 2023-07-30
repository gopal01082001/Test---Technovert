// // Q5. What are Higher-Order Components (HOC) in React and how do they work?Q5. What are Higher-Order Components (HOC) in React and how do they work?
// In React, Higher-Order Components (HOCs) are a pattern used to enhance or extend the behavior of components. They are not a built-in feature of React but rather a design pattern made possible by the compositional nature of React components. HOCs are functions that take a component as input and return a new component with additional props or functionalities.
// The basic idea behind HOCs is to separate concerns and reuse component logic. Instead of duplicating code or adding complex logic within individual components, you can create HOCs and apply them to multiple components as needed.
// Here's how Higher-Order Components work:
// Function that takes a component as input:
// A HOC is a regular JavaScript function that accepts a component (referred to as the "WrappedComponent") as an argument. It can also take other optional configuration parameters if necessary.
// Returns a new component:
// Inside the HOC function, a new component is created (often referred to as the "EnancedComponent"). This new component can render the original "WrappedComponent" and may also provide additional props, modify props, or alter the behavior of the component.
// Reusing logic:
// The HOC allows you to encapsulate and reuse certain logic or functionalities across different components without duplicating the code. This promotes code reusability and maintainability.
// Props proxying:
// HOCs can intercept props passed to the "EnhancedComponent" and pass them down to the "WrappedComponent" with additional or modified props. This allows you to inject new props, manipulate existing ones, or handle certain aspects before passing them down.
// Example use case:
// Let's say you have multiple components that need to fetch data from a server. Instead of repeating the data fetching logic in each component, you can create a HOC that handles the data fetching and then wrap the relevant components with that HOC. This way, the data fetching logic is centralized and can be easily reused across different components.
// It's important to note that HOCs have some drawbacks, such as making the component tree harder to understand due to the added layer, and potentially causing prop conflicts if not used carefully. Because of this, React has introduced other patterns like Render Props and React Hooks to achieve similar functionality with a more concise and straightforward syntax.
// Here's a simple example of a Higher-Order Component in React:
// jsx
// // Higher-Order Component for adding a "name" prop to a component
// const withNameProp = (WrappedComponent) => {
//   return (props) => {
//     const name = "John"; // Example, you can fetch name from somewhere else
//     return <WrappedComponent {...props} name={name} />;
//   };
// };
// // Usage
// const MyComponent = ({ name }) => {
//   return <div>Hello, {name}!</div>;
// };
// const MyComponentWithName = withNameProp(MyComponent);
// // MyComponentWithName is now an enhanced version of MyComponent with the "name" prop injected.
// // It can be used like any other component.
// As React evolves, developers may find other patterns more suitable for their use cases, such as React Hooks or component composition using the Context API.

