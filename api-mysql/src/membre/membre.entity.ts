import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Membre {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    prenom: string;
    @Column()
    prenom_usuel: string;
    @Column()
    user_github: string;
    @Column()
    user_github_pic: string;
    @Column()
    tel1: string;
    @Column()
    tel2: string | null;
    @Column()
    mail: string;
    @Column()
    facebook: string | null;
    @Column()
    linkedin: string | null;
    @Column()
    cv: string | null;
    @Column()
    adresse: string | null;
    @Column()
    description: string | null;
    @Column()
    fonction: string | null;
    @Column()
    pdc: string;
    @Column()
    dark: number;
}
