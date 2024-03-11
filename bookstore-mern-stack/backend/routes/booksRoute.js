import express from "express";

import {Book} from "../models/bookModel.js";


const router = express.Router();

  
  router.get("/", async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (e) {
      console.log(error);
    }
  });
  
  router.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const book = await Book.findById(id);
  
      if (!book) {
        return response.status(404).send({ message: "Book not found" });
      }
  
      return response.status(200).json({
        count: book.length,
        data: book,
      });
    } catch (e) {
      return response.status(404).send({ message: "Book couldn't be loaded" });
    }
  });
  
  router.put("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).send({ message: "book not found" });
      } else
        return response.status(200).send({ message: "Book edited successfully" });
    } catch (e) {
      return response.status(500).send({ message: "Edition has failed" });
    }
  });
  
  router.delete("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const result = await Book.findByIdAndDelete(id);
      if (!result) {
        return response.status(404).send({ message: "Book not found" });
      } else
        return response.status(200).send({ message: "Deleted successfully" });
    } catch (e) {
      return response.status(500).send({ message: "Deletion failed" });
    }
  });
  
  router.post("/", async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: "Send all required fields: title, author, publishYear",
        });
      }
  
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  export default router;