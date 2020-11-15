import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import { ArtWork } from "./artWork";

@Entity()
export class Artist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => ArtWork, artWork => artWork.artist)
    artWorks: ArtWork[];
}