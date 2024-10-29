package com.example.book_network.role;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

//what is a repo? Interface, CRUD operations, JPA Integration
//It provides an abstraction over the actual database
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String role);
}
