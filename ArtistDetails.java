package com.example.artistmarketplace.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "artist_details")
public class ArtistDetails {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    @OneToOne
	    @JoinColumn(name = "artist_id", referencedColumnName = "id")
	    private Artist artist;

	    private String artStyle;
	    private String location;
	    private String medium;
	    private String bio;
		/**
		 * @return the id
		 */
		public int getId() {
			return id;
		}
		/**
		 * @param id the id to set
		 */
		public void setId(int id) {
			this.id = id;
		}
		/**
		 * @return the artist
		 */
		public Artist getArtist() {
			return artist;
		}
		/**
		 * @param artist the artist to set
		 */
		public void setArtist(Artist artist) {
			this.artist = artist;
		}
		/**
		 * @return the artStyle
		 */
		public String getArtStyle() {
			return artStyle;
		}
		/**
		 * @param artStyle the artStyle to set
		 */
		public void setArtStyle(String artStyle) {
			this.artStyle = artStyle;
		}
		/**
		 * @return the location
		 */
		public String getLocation() {
			return location;
		}
		/**
		 * @param location the location to set
		 */
		public void setLocation(String location) {
			this.location = location;
		}
		/**
		 * @return the medium
		 */
		public String getMedium() {
			return medium;
		}
		/**
		 * @param medium the medium to set
		 */
		public void setMedium(String medium) {
			this.medium = medium;
		}
		/**
		 * @return the bio
		 */
		public String getBio() {
			return bio;
		}
		/**
		 * @param bio the bio to set
		 */
		public void setBio(String bio) {
			this.bio = bio;
		}
}
