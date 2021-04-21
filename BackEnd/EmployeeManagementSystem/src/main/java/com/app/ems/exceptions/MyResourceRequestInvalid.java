package com.app.ems.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MyResourceRequestInvalid extends RuntimeException{
	
	public MyResourceRequestInvalid(String message) {
        super(message);
    }
}
