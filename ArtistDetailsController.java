package com.example.artistmarketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.artistmarketplace.controller.ArtistDetailsController;
import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.repository.ArtistSignupRepository;

@RestController
@RequestMapping("/api/artists")
@CrossOrigin(origins = "http://localhost:4200")
public class ArtistDetailsController {

    @Autowired
    private ArtistSignupRepository artistSignupRepository;

    @PostMapping("/details")
    public ResponseEntity<Artist> saveArtistDetails(@RequestBody Artist artistDetails) {
        // Find the existing artist by name
        Artist existingArtist = artistSignupRepository.findByName(artistDetails.getName())
                .orElseThrow(() -> new RuntimeException("Artist not found"));

        // Update the existing artist's details
        existingArtist.setArtStyle(artistDetails.getArtStyle());
        existingArtist.setLocation(artistDetails.getLocation());
        existingArtist.setMedium(artistDetails.getMedium());
        existingArtist.setBio(artistDetails.getBio());

        // Save the updated artist details to the database
        Artist updatedArtist = artistSignupRepository.save(existingArtist);
        return new ResponseEntity<>(updatedArtist, HttpStatus.OK);
    }
}