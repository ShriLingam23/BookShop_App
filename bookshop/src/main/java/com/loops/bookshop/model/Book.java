package com.loops.bookshop.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="books")
public class Book {

	@Id
	String _id;
	String name;
	int isbn;
	String author;
	Double price;
	int yearOfPublication;
	String publisher;
	
	
	
	public Book() {
		super();
	}


	public Book(String _id, String name, int isbn, String author, Double price, int yearOfPublication,
			String publisher) {
		super();
		this._id = _id;
		this.name = name;
		this.isbn = isbn;
		this.author = author;
		this.price = price;
		this.yearOfPublication = yearOfPublication;
		this.publisher = publisher;
	}


	public String get_id() {
		return _id;
	}


	public void set_id(String _id) {
		this._id = _id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getIsbn() {
		return isbn;
	}


	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public int getYearOfPublication() {
		return yearOfPublication;
	}


	public void setYearOfPublication(int yearOfPublication) {
		this.yearOfPublication = yearOfPublication;
	}


	public String getPublisher() {
		return publisher;
	}


	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	
	
	
	
}
