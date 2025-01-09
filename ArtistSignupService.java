package com.example.artistmarketplace.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.artistmarketplace.entity.Artist;
import com.example.artistmarketplace.repository.ArtistSignupRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArtistSignupService {
	
	@Autowired
	private ArtistSignupRepository artistsignupsepository;

    public Artist postsignup(Artist artist) {
        return artistsignupsepository.save(artist);
    }
    
   
    
   
    public List<Artist> getAllArtists() {
        return artistsignupsepository.findAll();
    }
  
    
 // Method to find an artist by ID
    public Artist findById(Integer id) {
        Optional<Artist> artistOptional = artistsignupsepository.findById(id);
        return artistOptional.orElse(null); // Return null if not found
    }



    


}
