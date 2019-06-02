package com.loops.bookshop.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.loops.bookshop.model.Book;
import com.loops.bookshop.repository.BookRepository;

@RestController
public class BookController {
	
	@Autowired
	BookRepository bookRepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST,value="/book/calculate/")
	public double calculateTotal(@RequestBody String[] calculate) {
		
		double Total=0.00;
		Iterable<Book> books = bookRepository.findAll();
		
		for(int i=0;i<calculate.length;i++) {
			
			Iterator<Book> iterator = books.iterator();
			
			while(iterator.hasNext()) {
				Book book = (Book)iterator.next();
				
				if(book.get_id().equals(calculate[i])) {
					Total+=book.getPrice();
				}
			}
			System.out.println(calculate[i]);
		}
		
		return  Total;
		
//		return 100;
	}

}
