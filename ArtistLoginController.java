package com.example.artistmarketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.service.ArtistLoginService;

@RestController
@RequestMapping("/api")
public class ArtistLoginController {
	
	 @Autowired
	    private ArtistLoginService artistloginservice;
	    
	    @PostMapping("/artistlogin")
	    public ResponseEntity<Artist> artistlogin(@RequestBody Artist lartist) { // Use uppercase 'A'
	        Artist artist = artistloginservice.artistlogin(lartist.getEmail(), lartist.getPassword());
	        if (artist != null) {
	            return ResponseEntity.ok(artist); // Return user details on successful login
	        }
	        return ResponseEntity.status(401).body(null); // Unauthorized
	    }

}
