import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Artist } from './artist'

enum ArtWorkTypes {
  OilPainting ="oil_painting",
  WaterColor ="water_color",
  Drawing = "drawing",
  Sculpture ="sculpture",
  Photograph = "photograph"
}

@Entity()
export class ArtWork {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  description: string;

  @Column()
  imageUrl: string;
  
  @Column({ type: "enum", enum: ArtWorkTypes })
  type: string;

  @Column()
  size: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @Column()
  isAvailable: boolean;

  @ManyToOne(type => Artist, artist => artist.artWorks)
  artist: Artist;
}