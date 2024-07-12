RadioGroup Component
This component manages radio buttons. It uses hooks to keep track of selected radio option. It passes props to RadioButton 
component to render it for each package.It finds the lowest price so that the best deal badge appears only on that package.

RadioButtonLayout Component
This component represents a single radio button with necessary styling and requirements. It receives props from RadioGroup
component. It conditionally renders the best deal badge if isBestDeal is true. Radio input is hidden while label is used
so the divs can be clickable. The styling changes to whether the package is selected or not.

Fulfillment of Requirements
Functionality: The components are performant across all major browsers as it uses next js, Tailwind CSS and react hooks 
Reusability: The component are reusable across different parts of a website and for different use cases as it is props Driven.
The RadioButton component is used independently wherever similar Radio button is required.
Accessibility: The component follows best practices for accessibility as labels are used
