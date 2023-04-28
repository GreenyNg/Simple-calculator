# MY BASIC CALCULATOR

### Hiiii!
So I decided to create a very basic calculator in my leisure time. You can view it <a href="https://greenyng.github.io/Simple-calculator/">here</a>!

![Video Demo](https://github.com/GreenyNg/repo/blob/main/my_calculator.mp4)


## Things to BEWARE OF as you view the calculator:

This is a basic calculator application written in JavaScript. However, there are a few issues that you should be aware of:

1. Security Vulnerability: The `eval` function is used in the `calculate()` function to evaluate the expression entered in the calculator. While this might seem like a simple and easy way to solve the problem, it poses a major security risk. If the user enters any malicious code or script in the calculator, it will be executed by the `eval()` function, which could potentially harm the user's computer or steal sensitive data. It is advised that one avoid using `eval` for this reason.

2. Limited functionality: This calculator can only perform basic arithmetic operations. You might want to consider adding more functionality, such as support for advanced operations like square root, exponents, logarithms, etc.

4. Accessibility: This calculator application does not provide an accessible experience for users who rely on screen readers or keyboard navigation. You should consider adding ARIA attributes and keyboard shortcuts to make the application accessible to everyone.

Overall, while the code is a good start for a basic calculator, It ISN'T SECURE and there are some important improvements that must be made to create a more secure, functional, and accessible calculator application.

## Thanks for viewing!
* TheGraphicalGreeny
