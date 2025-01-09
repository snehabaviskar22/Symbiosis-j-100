package com.example.artistmarketplace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.artistmarketplace.entity.Artwork;
import com.example.artistmarketplace.repository.ArtworkRepository;

@Service
public class ArtworkService {
	
	@Autowired
    private ArtworkRepository artworkRepository;

	public List<Artwork> getAllArtworks() {
        return artworkRepository.findAll();
    }

    public Artwork createArtwork(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

    public List<Artwork> getArtworksByArtistId(Integer artistId) {
        return artworkRepository.findByArtistId(artistId);
    }

	   	
}
