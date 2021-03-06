import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("prenom_usuel", ["prenomUsuel"], { unique: true })
@Entity("archive", { schema: "ITEAMS" })
export class Archive {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 50 })
  nom: string;

  @Column("varchar", { name: "prenom", length: 50 })
  prenom: string;

  @Column("varchar", {
    name: "prenom_usuel",
    nullable: true,
    unique: true,
    length: 50,
  })
  prenomUsuel: string | null;

  @Column("varchar", { name: "user_github", nullable: true, length: 50 })
  userGithub: string | null;

  @Column("varchar", { name: "user_github_pic", nullable: true, length: 255 })
  userGithubPic: string | null;

  @Column("varchar", { name: "tel1", nullable: true, length: 50 })
  tel1: string | null;

  @Column("varchar", { name: "tel2", nullable: true, length: 50 })
  tel2: string | null;

  @Column("varchar", { name: "mail", length: 50 })
  mail: string;

  @Column("date", { name: "date_d_adhesion", default: () => "'curdate()'" })
  dateDAdhesion: string;

  @Column("date", { name: "date_exclusion", nullable: true })
  dateExclusion: string | null;

  @Column("varchar", { name: "facebook", nullable: true, length: 255 })
  facebook: string | null;

  @Column("varchar", { name: "linkedin", nullable: true, length: 255 })
  linkedin: string | null;

  @Column("varchar", { name: "actif", nullable: true, length: 50 })
  actif: string | null;

  @Column("text", { name: "cv", nullable: true })
  cv: string | null;

  @Column("text", { name: "adresse", nullable: true })
  adresse: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "fonction", nullable: true })
  fonction: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 512 })
  password: string | null;

  @Column("varchar", {
    name: "pdc",
    nullable: true,
    length: 255,
    default: () => "'./libs/img/banner.png'",
  })
  pdc: string | null;

  @Column("tinyint", { name: "dark", width: 1, default: () => "'0'" })
  dark: boolean;
}
