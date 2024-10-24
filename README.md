<p align="center">
  <img src="Investo-Bot.png" width="60%" alt="INVESTO-BOT-logo">
</p>
<p align="center">
    <h1 align="center">INVESTO-BOT</h1>
</p>
<p align="center">
    <em>Cultivating Seamless AI Integration!</em>
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&logo=date-fns&logoColor=white" alt="datefns">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---
---

## 👾 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project appears to be built with TypeScript and Next.js. It utilizes a client-server architecture to deliver a responsive web application with server-side rendering capabilities. The project structure seems organized and follows a component-based design pattern. |
| 🔩 | **Code Quality**  | The codebase includes linting with ESLint and Prettier for consistent code formatting. TypeScript is used for type safety and enhanced code readability. The repository contains various configuration files to maintain code quality standards. |
| 📄 | **Documentation** | The repository provides well-documented configuration files like `postcss.config.js` and `tsconfig.json`. However, the overall documentation on usage, setup, and code structure could be improved for better understanding and onboarding of contributors. |
| 🔌 | **Integrations**  | Key integrations include Tailwind CSS for styling, Next.js for server-side rendering, and various AI libraries like `@ai-sdk/openai`. External dependencies such as `yahoo-finance2` are used for financial data. |
| 🧩 | **Modularity**    | The project demonstrates modularity through the use of components and libraries like `@radix-ui/react-*` for UI elements. Code seems structured to promote reusability and maintainability. However, a clearer separation of concerns could enhance modularity further. |
| 🧪 | **Testing**       | Testing frameworks and tools are not explicitly mentioned in the provided details. Including unit tests with Jest or React Testing Library could enhance the overall code quality and reliability. |
| ⚡️  | **Performance**   | Efficiency and speed can be impacted by the use of server-side rendering with Next.js. Optimizing API interactions and data processing can further improve performance. Resource usage should be monitored, especially when dealing with AI tools and complex data operations. |
| 🛡️ | **Security**      | Data protection measures and access control details are not explicitly mentioned in the provided information. Implementing secure coding practices, data encryption, and authentication mechanisms would be critical for maintaining data security. |
| 📦 | **Dependencies**  | The project has a wide range of external libraries and dependencies, including AI-related tools, UI frameworks, and data processing libraries. Managing and updating these dependencies regularly is crucial to prevent security vulnerabilities and maintain compatibility. |

---

## 📂 Repository Structure

```sh
└── Investo-Bot/
    ├── README.md
    ├── ai
    │   ├── tools.ts
    │   └── tools1.ts
    ├── app
    │   ├── (chat)
    │   ├── actions.ts
    │   ├── api
    │   ├── error.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── new
    ├── components
    │   ├── button-scroll-to-bottom.tsx
    │   ├── chat-list.tsx
    │   ├── chat-panel.tsx
    │   ├── chat.tsx
    │   ├── empty-screen.tsx
    │   ├── external-link.tsx
    │   ├── footer.tsx
    │   ├── header.tsx
    │   ├── markdown.tsx
    │   ├── missing-api-key-banner.tsx
    │   ├── model-selector.tsx
    │   ├── prompt-form.tsx
    │   ├── providers.tsx
    │   ├── stocks
    │   ├── theme-toggle.tsx
    │   ├── tradingview
    │   └── ui
    ├── components.json
    ├── lib
    │   ├── chat
    │   ├── hooks
    │   ├── types.ts
    │   └── utils.ts
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── prettier.config.cjs
    ├── public
    │   ├── apple-touch-icon.png
    │   ├── favicon-16x16.png
    │   ├── favicon.ico
    │   ├── next.svg
    │   ├── thirteen.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [postcss.config.js](https://github.com/LEVIII007/Investo-Bot/blob/main/postcss.config.js) | Configures Tailwind CSS and Autoprefixer plugins for seamless styling across components in the Investo-Bot repository. |
| [pnpm-lock.yaml](https://github.com/LEVIII007/Investo-Bot/blob/main/pnpm-lock.yaml) | This code file within the Investo-Bot repository serves as a central hub for various AI tools and functionalities utilized throughout the application. It promotes seamless integration of AI capabilities into the chat interface, actions, and API interactions. By encapsulating essential AI functions, such as tools for analyzing data and generating insights, it enhances the bots intelligence and overall user experience within the system. |
| [tsconfig.json](https://github.com/LEVIII007/Investo-Bot/blob/main/tsconfig.json) | Defines TypeScript compiler options for the repository, enforcing strict settings for consistent coding. Configures module resolutions, JSX behavior, path aliases, and TypeScript checks. Excludes node_modules and defines specific file inclusions for type checking. |
| [next-env.d.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/next-env.d.ts) | Declares type references for Next.js and globally for images. Crucial for maintaining TypeScript compatibility and enabling image handling in the project. |
| [next.config.js](https://github.com/LEVIII007/Investo-Bot/blob/main/next.config.js) | Enables remote image loading from specified GitHub URLs in the parent repositorys Next.js application. |
| [package.json](https://github.com/LEVIII007/Investo-Bot/blob/main/package.json) | This code file in the Investo-Bot repository plays a crucial role in managing user interactions and chat functionalities within the application. It serves as the backbone for handling user actions and API calls, ensuring a seamless chat experience. The file encapsulates key features such as chat management, error handling, and layout configurations, contributing significantly to the overall user interface and engagement. |
| [components.json](https://github.com/LEVIII007/Investo-Bot/blob/main/components.json) | Defines component configuration for styling, React TypeScript usage, and Tailwind CSS setup. Links to global styles, Tailwind setup, and file aliases for components and utilities within the Investo-Bot repositorys architecture. |
| [prettier.config.cjs](https://github.com/LEVIII007/Investo-Bot/blob/main/prettier.config.cjs) | Defines Prettier configurations for consistent code formatting. Enforces specific rules like endOfLine, singleQuote, and importOrder to maintain code styling across the projects React, Next.js, and custom modules. |
| [tailwind.config.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/tailwind.config.ts) | This code file in the `Investo-Bot` repository implements crucial functionality for managing chat interactions within the application. It facilitates smooth communication between users and the chat system, ensuring a seamless experience. The code helps handle chat actions, display messages, and maintain the overall chat structure, contributing significantly to the user engagement and interactivity of the platform. |

</details>

<details closed><summary>lib</summary>

| File | Summary |
| --- | --- |
| [types.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/types.ts) | Defines crucial data types for chat functionality, including messages and chat objects. Specifies server action result format and user authentication details. Central to ensuring structured communication and secure user interactions within the Investo-Bot application. |
| [utils.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/utils.ts) | This code file within the `Investo-Bot` repository enhances the user interface by providing interactive components such as chat panels, buttons for scrolling to the bottom, and various UI elements. These components play a vital role in ensuring a seamless and engaging user experience within the application. |

</details>

<details closed><summary>lib.hooks</summary>

| File | Summary |
| --- | --- |
| [use-enter-submit.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/hooks/use-enter-submit.tsx) | Enables form submission on Enter key press, enhancing user experience by reducing manual interaction. Enhances accessibility and efficiency within the chat feature of the Investo-Bot app. |
| [use-local-storage.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/hooks/use-local-storage.ts) | Enables storing and retrieving values from local storage, triggering updates across the app upon changes. Facilitates persistent user data management for the Investo-Bot application, enhancing user experience and data continuity. |
| [use-streamable-text.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/hooks/use-streamable-text.ts) | Enables dynamic rendering of text content by streaming and displaying it incrementally as it arrives. Implemets React hooks to handle both static and streamed text inputs efficiently within the parent repositorys front-end architecture. |
| [use-scroll-anchor.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/hooks/use-scroll-anchor.tsx) | Enables dynamic chat scrolling behavior based on user interaction and visibility, enhancing user experience in the chat functionality of the parent application. |
| [use-copy-to-clipboard.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/hooks/use-copy-to-clipboard.tsx) | Enables React components to copy text to clipboard with a specified timeout. Integrated into the repositorys architecture under lib/hooks for enhanced user experience. |

</details>

<details closed><summary>lib.chat</summary>

| File | Summary |
| --- | --- |
| [actions.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/lib/chat/actions.tsx) | The `actions.tsx` file in the `lib/chat` directory of the `Investo-Bot` repository contains functions related to generating text using AI capabilities. It imports a server-only module and leverages the `generateText` function from the `ai` module. This file contributes to the chat functionality of the app by facilitating AI-based text generation within the chat interface. |

</details>

<details closed><summary>components</summary>

| File | Summary |
| --- | --- |
| [footer.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/footer.tsx) | Defines reusable `FooterText` component displaying a disclaimer in Investo-Bots UI. Integrates styling and external link functionality efficiently, emphasizing accuracy of stock information and no investment advice provision. |
| [theme-toggle.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/theme-toggle.tsx) | Implements a theme toggle feature for the app, allowing users to switch between light and dark themes smoothly. Utilizes React hooks to manage theme state and transition effects. Essential for enhancing user experience by providing visual customization options. |
| [providers.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/providers.tsx) | Enables global theme handling and tooltip functionality for the app by composing Next.js and custom providers. |
| [missing-api-key-banner.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/missing-api-key-banner.tsx) | Notifies users about missing GPT API key. Renders banner prompting key input with link for obtaining the key. Helps maintain system integrity and user experience by addressing key prerequisites. |
| [prompt-form.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/prompt-form.tsx) | This code file in the `components` directory of the repository plays a crucial role in defining various user interface elements essential for the Investo-Bot application. It encapsulates components such as chat messages display, chat panel layout, page headers, markdown rendering, and theme toggling functionalities. These components contribute to creating a cohesive and interactive user experience within the applications interface, ensuring a smooth and visually appealing interaction for users engaging with the Investo-Bot platform. |
| [external-link.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/external-link.tsx) | Enables users to open external links securely. Displays link text alongside an icon, offering an engaging experience. |
| [markdown.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/markdown.tsx) | Optimize ReactMarkdown rendering for performance by memoizing with FC type and react-markdown import. |
| [chat-panel.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/chat-panel.tsx) | This code file in the `Investo-Bot` repository plays a crucial role in managing various UI components that enhance the user experience of the application. It focuses on rendering components like chat messages, buttons, headers, footers, and themes, ensuring a visually appealing and interactive interface. By structuring these components effectively, the code file contributes to the overall architecture of the repository, enabling seamless communication and data presentation within the application. |
| [button-scroll-to-bottom.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/button-scroll-to-bottom.tsx) | Enables scrolling to the bottom of a chat interface. Renders a button that triggers the scroll action when clicked. Implements dynamic opacity based on current scroll position, enhancing user experience within the chat feature of the application. |
| [chat-list.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/chat-list.tsx) | Manages chat messages display, incorporating separators between messages in a visually clean, responsive layout within the Investo-Bots front-end architecture. |
| [header.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/header.tsx) | Enhances UI with branding and navigation components. Renders Investo-Bot title, StockBot link, and Start New Chat button. Displays GitHub link within a styled header with dynamic content loading for user interaction. |
| [empty-screen.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/empty-screen.tsx) | Showcases an engaging Empty Screen component for the StockBot app, welcoming users with information about the AI chatbot powered by GPT-4o, TradingView widgets, Vercel AI SDK, and OpenAI integration. |
| [model-selector.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/model-selector.tsx) | Implements a model selector component for choosing custom AI models. Displays a dropdown menu with model options for selection. Enhances user experience by allowing customization of AI models in the application. |
| [chat.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/chat.tsx) | This code file in the Investo-Bot repository plays a crucial role in managing the UI components of the chat functionality within the application. It contributes to the seamless interaction and presentation of chat-related elements to the users, enhancing the overall user experience. By structuring and organizing the chat components efficiently, it ensures a cohesive design and functionality within the larger application architecture. |

</details>

<details closed><summary>components.stocks</summary>

| File | Summary |
| --- | --- |
| [spinner.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/stocks/spinner.tsx) | Implements a dynamic spinner component for visual feedback during loading states. Enhances user experience by indicating ongoing processes. Centralizes UI components for consistent design aesthetics in the Investo-Bot application. |
| [message.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/stocks/message.tsx) | This code file in the `Investo-Bot` repository is crucial for managing the frontend components of the application. It handles the rendering and interactivity of various UI elements such as chat messages, buttons, headers, footers, and themes. By structuring these components effectively, it ensures a seamless and engaging user experience within the app. |
| [stock-reccomendation.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/stocks/stock-reccomendation.tsx) | Displays stock recommendations in a structured format within the apps UI, enhancing user engagement and providing valuable insights. |

</details>

<details closed><summary>components.tradingview</summary>

| File | Summary |
| --- | --- |
| [market-trending.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/market-trending.tsx) | This code file, located in the `ai` folder of the Investo-Bot repository, plays a crucial role in providing essential tools for AI-related functionalities within the application. Through this code, the AI module gains access to vital utilities and functions necessary for executing intelligent actions and decision-making processes. This contributes significantly to enhancing the overall AI capabilities and performance within the parent repositorys architecture. |
| [ticker-tape2.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/ticker-tape2.tsx) | Enables embedding a dynamic ticker tape displaying real-time financial data from TradingView. Integration includes symbol selection, color themes, and localization. Supports tracking Gold, Platinum, Bitcoin, and Etherium. |
| [stock-financials.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/stock-financials.tsx) | Enables dynamic display of financial data for a specified stock symbol using TradingViews embedded widget. Automatically manages widget script creation and removal, enhancing the stock analysis components interactivity within the web application. |
| [stock-screener.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/stock-screener.tsx) | Enables real-time stock screening integration via TradingView widget. Renders dynamic stock data visualization based on market filters. Enhances user experience with interactive market tracking tools. Integrates seamlessly within the apps trading and investment functionalities. |
| [etf-heatmap.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/etf-heatmap.tsx) | Implements a TradingView ETF heatmap widget for visualizing market data dynamically within the Investo-Bot web app. Displays real-time asset class groupings and market changes. Designed for easy integration and interactive user experience. |
| [stock-price.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/stock-price.tsx) | This code file within the Investo-Bot repository is crucial for managing various UI components essential for the chat feature of the application. It plays a significant role in constructing the user interface by providing components such as chat lists, panels, prompts, and headers. These components ensure a seamless and interactive chat experience for users engaging with the Investo-Bot app. |
| [stock-news.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/stock-news.tsx) | Displays real-time stock news using TradingView API, dynamically embedding data based on the provided symbol. Handles script lifecycle, ensuring efficient resource usage. Supports responsive design for a seamless user experience within the Investo-Bot apps trading features. |
| [market-overview.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/market-overview.tsx) | This code file in the `Investo-Bot` repository plays a crucial role in managing AI-related tools and functionalities within the larger architecture. It contributes to the seamless integration of AI capabilities into the application, enhancing its overall performance and user experience. The file encapsulates essential functions and utilities that empower the AI module, ensuring effective communication and interaction with users. |
| [stock-chart.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/stock-chart.tsx) | This code file in the Investo-Bot repository, specifically located in the app directory, plays a crucial role in managing global application actions and error handling. By centralizing these functionalities, the code ensures a consistent and structured approach to executing user interactions and gracefully handling any encountered errors throughout the application. This enhances the overall user experience by providing a seamless and reliable environment for interacting with the investment bot. |
| [market-heatmap.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/market-heatmap.tsx) | Implements a TradingView market heatmap widget in the Investo-Bot app to visualize stock market data. Dynamically loads TradingView script and supports interactive features. |
| [ticker-tape.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/tradingview/ticker-tape.tsx) | The code file `actions.ts` in the `app` directory of the `Investo-Bot` repository serves as the central hub for handling user actions within the application. It orchestrates the various functionalities and interactions of the app components, ensuring seamless communication between the user interface elements and the underlying logic. By encapsulating the logic for responding to user inputs and triggering appropriate responses, this file plays a crucial role in driving the interactive behavior of the Investo-Bot application. |

</details>

<details closed><summary>components.ui</summary>

| File | Summary |
| --- | --- |
| [alert-dialog.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/alert-dialog.tsx) | This code file in the `components` directory of the Investo-Bot repository encapsulates essential user interface elements such as chat functionality, layout components, and interactive features crucial for the user experience. Integrating these components seamlessly within the overarching architecture, the code fosters a visually engaging and intuitive environment for users to interact with the Investo-Bot application. With a focus on enhancing user engagement and usability, these components play a pivotal role in shaping the overall frontend interface design and functionality. |
| [icons.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/icons.tsx) | This code file in the Investo-Bot repository, located within the app directory, plays a crucial role in managing app actions and errors. It ensures smooth interaction within the chat interface by handling actions effectively and providing error management functionality. Additionally, it contributes to the overall user experience by maintaining a consistent layout structure. |
| [sheet.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/sheet.tsx) | This code file in the `components` directory of the `Investo-Bot` repository plays a crucial role in defining the user interface elements of the application. It includes various components such as chat messages, buttons, headers, footers, and theme toggles, contributing to a seamless and interactive user experience. These components are reusable building blocks that enhance the overall design and functionality of the application, ensuring consistency and efficiency in development. |
| [badge.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/badge.tsx) | Defines badge appearance variants for UI components in the Investo-Bot app. Utilizes Class Variance Authority for different badge styles like primary, secondary, and destructive. Simplifies styling with a reusable Badge component. |
| [label.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/label.tsx) | Enables styled labels in UI components using Radix UI, with variant manipulation handled by Class Variance Authority. Supports dynamic styling and disabled state handling. |
| [scroll-area.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/scroll-area.tsx) | Enables interactive scrolling behavior within UI components by integrating custom scrollbars using Radix UIs ScrollArea. Enhances user experience by providing a smooth and responsive scrolling feature while maintaining a consistent design across the application. |
| [input.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/input.tsx) | Enhances user input experience by styling and managing input fields. Integrated with common attributes for seamless form interactions, improving overall UI consistency in the parent repositorys components. |
| [textarea.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/textarea.tsx) | Defines a customizable Textarea component for the UI layer. Integrates essential properties and styling to support text input functionality within the applications user interface. |
| [separator.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/separator.tsx) | Defines a reusable UI component for rendering separators in `components/ui`. Integrates `@radix-ui/react-separator` to customize orientation and styling. Facilitates visual separation in the user interface. |
| [select.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/select.tsx) | The code file in this repositorys `app` directory contributes to the Investo-Bot projects frontend architecture. It enhances user interaction by defining actions, APIs, and layout structures. Additionally, it manages error handling and global styles for a seamless user experience. The file plays a crucial role in orchestrating the user interface components, providing a rich and interactive platform for users to engage with the Investo-Bot application. |
| [button.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/button.tsx) | Enables dynamic button styling in the UI components of the parent repository, supporting various visual variants and sizes. Enhances user interaction through customizable button styles for a cohesive user experience. |
| [dialog.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/dialog.tsx) | This code file in the `components` directory of the Investo-Bot repository contributes essential UI elements to the parent projects frontend architecture. It includes various components like chat interfaces, buttons, headers, footers, and theme toggles that enhance user interaction and experience. These components are crucial for building a visually appealing and user-friendly frontend application for Investo-Bot. |
| [switch.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/switch.tsx) | Enables custom switch UI rendering for interactive elements within the apps user interface, maintaining consistency with Radix UIs switch components. Integrates seamlessly with existing styles and accessibility features, enhancing the user experience. |
| [dropdown-menu.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/dropdown-menu.tsx) | This code file in the Investo-Bot repository is responsible for managing the layout of the application. It handles the structure and placement of various components such as chat, header, footer, and other UI elements. By defining the layout in a structured manner, it ensures a cohesive and user-friendly interface for the Investo-Bot application. |
| [codeblock.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/codeblock.tsx) | This code file in the Investo-Bot repository plays a crucial role in managing various UI components used in the application. It orchestrates the display and interaction logic for components like chat messages, stock information, theme toggles, and more. By organizing these components effectively, it enhances the user experience and ensures seamless navigation within the application. This file serves as a cornerstone in structuring the visual elements of the Investo-Bot platform, contributing to its overall user-friendly design and functionality. |
| [tooltip.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/tooltip.tsx) | Implements a tooltip component with animation effects for React. Organizes tooltip elements and styling. Enables tooltip display on user interaction within the Investo-Bot UI architecture. |
| [sonner.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/sonner.tsx) | Enhances toast notifications appearance based on the selected theme using the Sonner library. Adapts styles dynamically and optimizes user interaction with customized themes. |
| [card.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/components/ui/card.tsx) | This code file, located in the `components` directory of the `Investo-Bot` repository, plays a crucial role in defining various UI components essential for the chat functionality of the application. It includes components such as chat messages display, chat input panel, header, footer, and theme toggler. These components are vital for enhancing user interaction within the chat feature of the application. |

</details>

<details closed><summary>ai</summary>

| File | Summary |
| --- | --- |
| [tools1.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/ai/tools1.ts) | Investo-Bot Chat InterfaceThe `chat.tsx` component within the `app` directory of the Investo-Bot repository serves as a crucial element of the chat interface. It enables seamless communication between users and the bot, providing a user-friendly chat experience. This component is essential for engaging users and facilitating efficient interactions within the chat application, enhancing the overall usability and effectiveness of the platform. |
| [tools.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/ai/tools.ts) | This code file in the `Investo-Bot` repository, located within the `app` directory, plays a pivotal role in managing various user actions and API interactions within the application. It encompasses essential features like chat functionalities, error handling, and the overall layout of the interface. By orchestrating these components, it ensures seamless user interactions and provides a structured foundation for the user interface elements in the app. |

</details>

<details closed><summary>app</summary>

| File | Summary |
| --- | --- |
| [layout.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/layout.tsx) | Defines layout, metadata, and viewport settings for the StockBot web app. Integrates Geist fonts, global styles, and UI components like Toaster and Header. Manages themes and content rendering for a seamless user experience. |
| [error.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/error.tsx) | Handles displaying errors and providing a link to the error page on Github. Triggers logging of errors and renders error message for user visibility. |
| [globals.css](https://github.com/LEVIII007/Investo-Bot/blob/main/app/globals.css) | This code file in the `Investo-Bot` repository is responsible for managing various UI components used in the application. It handles the display and interaction logic for elements such as chat panels, buttons, headers, footers, and error banners. By centralizing these components, the code promotes a consistent and user-friendly experience across the application. This file plays a crucial role in enhancing the overall visual appeal and functionality of the Investo-Bot applications user interface. |
| [actions.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/app/actions.ts) | Implements actions to refresh history and identify missing API keys for redirection in the app. |

</details>

<details closed><summary>app.(chat)</summary>

| File | Summary |
| --- | --- |
| [layout.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/(chat)/layout.tsx) | Defines a responsive chat layout component for the app. Renders children within a styled div, ensuring dynamic height adjustments. |
| [page.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/(chat)/page.tsx) | This code file in the `Investo-Bot` repository, located at `app/(chat)/page.tsx`, serves as a crucial component in managing client interactions within the chat feature of the application. The file focuses on enabling users to interact with the chat interface by utilizing React hooks and state management. It plays a vital role in facilitating real-time conversations and ensuring a seamless user experience within the chat functionality of the application. |

</details>

<details closed><summary>app.(chat)._components</summary>

| File | Summary |
| --- | --- |
| [renderTool.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/(chat)/_components/renderTool.tsx) | This code file in the repository serves as a key component in the application architecture, specifically handling tools and functionalities related to AI. It plays a crucial role in enabling AI-related features and capabilities within the overall application environment. |
| [weather.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/(chat)/_components/weather.tsx) | Showcases current weather data in a user-friendly format. Provides location, weather condition, and temperature in Celsius. Enhances the chat functionality by offering real-time weather updates. |

</details>

<details closed><summary>app.api.chat</summary>

| File | Summary |
| --- | --- |
| [reportService.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/app/api/chat/reportService.ts) | This code file in the `components` directory of the `Investo-Bot` repository contains essential UI components crucial for the frontend of the application. These components, such as chat interfaces, buttons, headers, and themes, play a pivotal role in enhancing user interaction and visual appeal. By encapsulating reusable visual elements and UI logic, this code contributes to a consistent and engaging user experience within the larger architectural framework of the repository. |
| [route.ts](https://github.com/LEVIII007/Investo-Bot/blob/main/app/api/chat/route.ts) | The code file within the `components` directory of the `Investo-Bot` repository contributes essential user interface elements to the application. These components, including chat interfaces, buttons, layouts, themes, and other UI elements, play a crucial role in enhancing the user experience and visual appeal of the platform. By encapsulating these reusable components, the file promotes a modular and efficient development approach, ensuring consistent design patterns across the application while simplifying maintenance and scalability efforts. |

</details>

<details closed><summary>app.new</summary>

| File | Summary |
| --- | --- |
| [page.tsx](https://github.com/LEVIII007/Investo-Bot/blob/main/app/new/page.tsx) | Implements page redirection for NewPage within the app structure using next/navigations `redirect` function. |

</details>

---


