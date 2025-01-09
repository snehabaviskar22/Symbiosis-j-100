package com.example.artistmarketplace.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.repository.ArtistLoginRepository;

@Service
public class ArtistLoginService {
	
	 @Autowired
	    private ArtistLoginRepository artistloginrepository;
	 
	 public Artist artistlogin(String email, String password) { // Use uppercase 'A'
	        Artist artist = artistloginrepository.findByEmail(email);
	        if (artist != null && artist.getPassword().equals(password)) { // In production, use hashed password comparison
	            return artist;
	        }
	        return null; // Return null if login fails
	    }
	
	
}
