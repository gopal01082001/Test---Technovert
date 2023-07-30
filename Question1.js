// // Q1. What are the differences between cookie, local storage and session storage?
// Cookies, local storage, and session storage are all mechanisms available in web browsers to store data on the client-side. They serve different purposes and have distinct characteristics. Here are the key differences between them:
// Persistence:
// Cookies: Cookies are designed to be persistent and have an expiration date. They can persist across browser sessions and even device restarts, depending on their expiration settings.
// Local Storage: Data stored in local storage is also persistent and remains even after the browser is closed or the system is restarted. It has no expiration date unless explicitly cleared by the user or the web application.
// Session Storage: Data stored in session storage is not persistent and is cleared when the browser session ends. It remains available as long as the browser tab or window is open.
// Storage Capacity:
// Cookies: Cookies have a much smaller storage capacity compared to local storage and session storage. They are limited to 4KB of data.
// Local Storage: Local storage provides significantly larger storage capacity, usually around 5-10 MB, depending on the browser.
// Session Storage: Session storage also offers a larger storage capacity, similar to local storage, but it is limited to the current session.
// Data Access:
// Cookies: Cookies are sent to the server with every HTTP request, including images, scripts, and CSS files, which can add overhead to each request. This makes them suitable for information that needs to be sent to the server regularly, like session identifiers or user preferences.
// Local Storage: Data stored in local storage is not automatically sent to the server with each HTTP request, reducing overhead. It is accessible only on the client-side, making it more suitable for data that does not require frequent server interaction.
// Session Storage: Like local storage, session storage data is also only accessible on the client-side and not automatically sent to the server with each request.
// Scope:
// Cookies: Cookies are accessible across subdomains and can be set to work across different domain paths, making them useful for cross-site tracking.
// Local Storage: Local storage is limited to the protocol (http/https), domain, and port from which it was set. It cannot be accessed by other domains.
// Session Storage: Similar to local storage, session storage is also limited to the protocol, domain, and port that set it.
// Security:
// Cookies: Cookies can be vulnerable to attacks like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) if not properly managed or secured.
// Local Storage: Local storage is also subject to XSS attacks but is generally considered more secure than cookies because it is not automatically sent to the server.
// Session Storage: Session storage shares the same security considerations as local storage.
// In summary, cookies are best suited for small amounts of data that need to be sent to the server with each request, while local storage and session storage are better for storing larger amounts of data that don't need to be frequently sent to the server. Session storage is particularly useful for data that should be cleared when the user closes the browser.