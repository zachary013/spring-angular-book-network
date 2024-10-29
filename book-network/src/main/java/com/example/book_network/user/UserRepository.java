package com.example.book_network.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//what is a repo? Interface, CRUD operations, JPA Integration
//It provides an abstraction over the actual database
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
