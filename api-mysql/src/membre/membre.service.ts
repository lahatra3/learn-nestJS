import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Membre } from 'src/output/entities/Membre';
import { Repository } from 'typeorm';

@Injectable()
export class MembreService { 
    constructor(
        @InjectRepository(Membre)
        private membreRepository: Repository<Membre>,
    ) { }

    findAll(): Promise<Membre[]> {
        return this.membreRepository.find();
    }

    findOne(id: number): Promise<Membre> {
        return this.membreRepository.findOne(id);
    }

    create(membre: Membre): Promise<Membre> {
        return this.membreRepository.save(membre);
    }

    async update(id: number, membre: Membre): Promise<void> {
        await this.membreRepository.update(id, membre);
    }

    async remove(id: number): Promise<void> {
        await this.membreRepository.delete(id);
    }
}
