# Spring Angular Book Network

A full-stack social networking platform for book lovers built with Spring Boot and Angular.

## Overview

Book Network is a social platform where users can connect with fellow readers, share book recommendations, and engage in literary discussions. The application features a robust backend built with Spring Boot and a modern, responsive frontend developed using Angular.

## Features

- User authentication and authorization with JWT
- User profile management
- Book discovery and search functionality
- Social networking features:
   - Follow other users
   - Share book recommendations
   - Post and comment on book reviews
- Real-time notifications
- Responsive design for all devices

## Technology Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security with JWT
- Spring Data JPA
- PostgreSQL
- OpenAPI (Swagger) for API documentation

### Frontend
- Angular 15+
- TypeScript
- SCSS for styling
- Angular Material UI components
- RxJS for reactive programming

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16+ and npm
- PostgreSQL database
- Maven

### Installation

1. Clone the repository
```bash
git clone https://github.com/zachary013/spring-angular-book-network.git
cd spring-angular-book-network
```

2. Backend Setup
```bash
cd book-network
mvn clean install
mvn spring-boot:run
```

3. Frontend Setup
```bash
cd frontend
npm install
ng serve
```

4. Access the application at `http://localhost:4200`

## API Documentation

The API documentation is available through Swagger UI when running the backend:
`http://localhost:8080/swagger-ui.html`

## Database Configuration

Configure your PostgreSQL database connection in `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/booknetwork
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Zachary - [@zachary013](https://github.com/zachary013)

Project Link: [https://github.com/zachary013/spring-angular-book-network](https://github.com/zachary013/spring-angular-book-network)