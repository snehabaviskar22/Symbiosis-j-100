package com.example.artistmarketplace.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.artistmarketplace.entity.Artist;

public interface ArtistSignupRepository extends JpaRepository<Artist, Integer>{

	 Optional<Artist> findByName(String name);

	 Optional<Artist> findById(Integer id);
	 
	 Optional<Artist> findByEmail(String email);


	    
	

}
