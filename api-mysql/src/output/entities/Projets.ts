import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("projets", { schema: "ITEAMS" })
export class Projets {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "lien", length: 255 })
  lien: string;

  @Column("varchar", { name: "pdc", length: 255 })
  pdc: string;

  @Column("int", { name: "id_membre" })
  idMembre: number;

  @Column("int", { name: "ordre" })
  ordre: number;
}
