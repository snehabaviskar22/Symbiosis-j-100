package com.example.artistmarketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.entity.Artwork;
import com.example.artistmarketplace.service.ArtistSignupService;
import com.example.artistmarketplace.service.ArtworkService;

@RestController
@RequestMapping("/api/artworks")
public class ArtworkController {
	
	@Autowired
    private ArtworkService artworkService;


    @Autowired
    private ArtistSignupService artistsignupservice;
 

    @PostMapping
    public ResponseEntity<Artwork> createArtwork(@RequestBody Artwork artwork) {
        // Fetch the artist by ID
        Artist artist = artistsignupservice.findById(artwork.getArtist().getId());
        if (artist == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
        }
        artwork.setArtist(artist); // Set the artist in the artwork
        Artwork createdArtwork = artworkService.createArtwork(artwork);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdArtwork);
    }

    
    @GetMapping
    public ResponseEntity<List<Artwork>> getAllArtworks() {
        List<Artwork> artworks = artworkService.getAllArtworks();
        return ResponseEntity.ok(artworks);
    }
	   

}
