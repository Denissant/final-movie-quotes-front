# Denis Epic Movie Quotes

## Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Building for Production](#building-for-production)
* [Live Deployment](#live-deployment)
* [Resources](#resources)


## Prerequisites

* _npm@9.1 and up_
* _NodeJS@16.16 and up_


## Tech Stack

* NextJS _v13.1.1_
* Typescript _v4.9.3_
* React _v18.2.0_
* TailwindCSS _v3.2.4_


## Getting Started

1. Clone the repository from GitHub:
    ```shell
      git clone https://github.com/RedberryInternship/denis-epic-movie-quotes-front.git
      cd denis-epic-movie-quotes-front
    ```
2. Install dependencies:
    ```shell
      npm install
    ```

3. Create the `.env.local` file:
   ```shell
      cp .env.example .env.local
   ```
   
   Set the `NEXT_PUBLIC_API_URL` variable inside `.env.local` to the backend's base URL
   
   Set the `NEXT_PUBLIC_PUSHER_APP_KEY` and `NEXT_PUBLIC_PUSHER_APP_CLUSTER` variables to values provided by Pusher. 

4. Run the development server:
   ```shell
      npm run dev
   ```


## Building for Production

Run the following command:
```shell
   npm run build
```


## Live Deployment

https://moviequotes.denis.redberryinternship.ge


## Resources

- [Application Design](https://www.figma.com/file/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment)
- [Commit message naming conventions](https://redberry.gitbook.io/resources/other/git-is-semantikuri-komitebi)
- [Project Specifications](https://redberry.gitbook.io/assignment-iv-movie-quotes-1/)
