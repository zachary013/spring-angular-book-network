package com.example.book_network.book;

import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {

    public static Specification<Book> withOwnerId(Integer ownerId) {
        //cb: criteria builder
        return (root, query, cb) -> cb.equal(root.get("owner").get("id"), ownerId);
    }
}
