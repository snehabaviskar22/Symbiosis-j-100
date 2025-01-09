package com.example.artistmarketplace.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="artist")
public class Artist {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	 @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL)
	    private List<Artwork> artworks;
	
	private String name;
	private String email;
	private String password;
	
	 	private String artStyle;
	    private String location;
	    private String medium;
	    private String bio;
	    
	    
	    public List<Artwork> getArtworks() {
	        return artworks;
	    }

	    public void setArtworks(List<Artwork> artworks) {
	        this.artworks = artworks;
	    }
	
	
		public String getArtStyle() {
			return artStyle;
		}
		
		public void setArtStyle(String artStyle) {
			this.artStyle = artStyle;
		}
	
		public String getLocation() {
			return location;
		}
	
		public void setLocation(String location) {
			this.location = location;
		}
		
		public String getMedium() {
			return medium;
		}
		
		public void setMedium(String medium) {
			this.medium = medium;
		}
		
		public String getBio() {
			return bio;
		}
		
		public void setBio(String bio) {
			this.bio = bio;
		}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Artist [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", artStyle="
				+ artStyle + ", location=" + location + ", medium=" + medium + ", bio=" + bio + "]";
	}
	
	
	
	
	
	

}
