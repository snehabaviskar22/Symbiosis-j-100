package com.example.artistmarketplace.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.artistmarketplace.entity.Artwork;

public interface ArtworkRepository extends JpaRepository<Artwork, Integer>{

	List<Artwork> findByArtistId(Integer artistId);
      
}


