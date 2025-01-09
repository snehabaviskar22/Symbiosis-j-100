package com.example.artistmarketplace.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.repository.ArtistSignupRepository;
import com.example.artistmarketplace.service.ArtistSignupService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") 
public class ArtistSignupController {

	 @Autowired
	    private ArtistSignupRepository artistSignupRepository;

	    @Autowired
	    private ArtistSignupService artistSignupService;

	  
	    @PostMapping("/artist")
	    public ResponseEntity<Artist> saveArtist(@RequestBody Artist artist) {
	        Artist savedArtist = artistSignupRepository.save(artist);
	        return new ResponseEntity<>(savedArtist, HttpStatus.CREATED);
	    }

	    @GetMapping
	    public List<Artist> getAllArtists() {
	        return artistSignupService.getAllArtists();
	    }    

}



