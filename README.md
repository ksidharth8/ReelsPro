# Reels Pro

A web application to watch and share short videos with friends and family. Built using Next.js and React.

## Tech Stack

-  **Next.js** - A React framework for production

## Project Structure

```
reels-pro/
    ├── src/
    |   ├── app/
    │   |   ├── api/
    |   |   |   ├── auth/
    |   |   |   |   |── [...nextauth]/
    |   |   |   |   |   └── route.ts
    |   |   |   |   |
    |   |   |   |   └── register/
    |   |   |   |       └── route.ts
    |   |   |   |
    |   |   |   ├── imagekit-auth/
    |   |   |   |   └── route.ts
    |   |   |   |
    |   |   |   └── videos/
    |   |   |       └── route.ts
    |   |   |
    |   |   ├── components/
    |   |   |   ├── FileUpload.tsx
    |   |   |   ├── Header.tsx
    |   |   |   └── Providers.tsx
    |   |   |
    |   |   ├── login/
    |   |   |   └── page.tsx
    |   |   |
    |   |   |── register/
    |   |   |   └── page.tsx
    |   |   |
    |   |   |── global.css
    |   |   |── layout.tsx
    |   |   └── page.tsx
    │   |
    │   ├── lib/
    │   |   ├── api-client.ts
    │   |   ├── db.ts
    │   |   └── nextAuthOptions.ts
    │   |
    │   ├── models/
    │   |   ├── User.ts
    │   |   └── Video.ts
    │   |
    │   └── middleware.ts
    |
    ├── .env
    ├── .gitignore
    |── eslint.config.mjs
    ├── package.json
    ├── README.md
    ├── LICENSE
    ├── next.config.js
    |── postcss.config.js
    |── tailwind.config.js
    ├── tsconfig.json
    └── types.d.ts
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

-  Node.js
-  npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ksidharth8/reels-pro.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Deployment

To deploy the project, follow these steps:

1. Build the project
   ```sh
   npm run build
   ```
2. Start the server
   ```sh
   npm start
   ```

## How to Run

To run the project locally, use:

```sh
npm run dev
```

## How to Use

1. Open your browser and navigate to `http://localhost:3000`
2. Explore the features of the application

## Future Work

-  Add more features
-  Improve UI/UX
-  Optimize performance

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

-  [Next.js Documentation](https://nextjs.org/docs)
-  [React](https://reactjs.org/)

## How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support or Contact

For support, please contact [your_email@example.com](mailto:your_email@example.com).

## References

-  [Next.js](https://nextjs.org/)
-  [React](https://reactjs.org/)

## Disclaimer

This project is for educational purposes only.
