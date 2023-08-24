# Book-Library

Welcome to the Book-Library project! This repository serves as a showcase of my coding and language skills, demonstrating my ability to create a dynamic platform for managing and discovering books. 

## Features

- **Effortless Searching:** Quickly search and explore a diverse collection of books.
- **Personalized Bookshelf:** Users can check out books they're interested in, keeping track of their reading list.
- **Engage with Reviews:** Share your thoughts and insights by leaving reviews for books you've read.
- **User Authentication:** Users can create accounts, log in, and enjoy a personalized experience.
- **Reading Progress:** Track your reading journey and the number of books you've read.
- **Ongoing Development:** This project is continuously evolving. Expect frequent updates and feature additions.

## Usage

To experience the Book-Library project, follow these steps:

1. Clone the repository:
   git clone https://github.com/Sumjains/Book-Library.git

2. Open MySQL workbench application: (Setting up database)
   Execute all the scripts from "Book Library Project/01-starter-files/Scripts" path folder.

3. Open an IDE to run Spring boot application: (Getting database up and running)
   Select this as your root directory: "Book Library Project/02-backend/spring-boot-library/spring-boot-library".
   Open application.properties file from the same, and provide the Client ID and Issuer ID from your Okta developer account and application.
   Build and Run the application. Our back end server is ON!

 5. Open OktaConfig.ts file from: "Book Library Project/03-frontend/react-library/src/lib/oktaConfig.ts" to configure Okta       application server for the front-end of the application.
change the {Issuer Id} with your okta issuer ID.
change {Client ID} with your okta application client ID.
We are all set!

6. Navigate to the project directory in cmd:
   "Book Library Project/03-frontend/react-library"

7. Run the project:
   npm start

8. Access the project in your web browser at `http://localhost:3000`.

## Technologies Used

- **Frontend:** React js, Typescript, HTML, CSS, JavaScript, bootstrap
- **Backend:** Spring boot
- **Database:** MySQL
- **Version Control:** Git

## Contact

Feel free to reach out if you have any questions or would like to connect:

- Email: sumjains@gmail.com


Thank you for checking out the Book-Library project! 📚🌟



