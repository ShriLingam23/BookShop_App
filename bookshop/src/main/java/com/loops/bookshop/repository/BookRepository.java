package com.loops.bookshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.loops.bookshop.model.Book;

public interface BookRepository extends CrudRepository<Book, String>{

}
