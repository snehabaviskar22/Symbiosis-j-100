package com.example.artistmarketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.artistmarketplace.entity.Artist;



public interface ArtistLoginRepository extends JpaRepository<Artist, Integer> {
    Artist findByEmail(String email); // Ensure this matches the property name
}