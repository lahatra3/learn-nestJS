import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Membre } from 'src/output/entities/Membre';
import { MembreService } from './membre.service';

@Controller('membre')
export class MembreController {
    constructor(private membreService: MembreService) { }

    @Get()
    async getAll() {
        const reponses = await this.membreService.findAll();
        return reponses;
    }

    @Get(":id")
    async getById(@Param() id: number) {
        const reponses = await this.membreService.findOne(id);
        return reponses;
    }

    @Post()
    async create(@Body() membre: Membre) {
        const reponses = await this.membreService.create(membre);
        return reponses;
    }

    @Put(":id")
    async update(@Param() id: number, @Body() membre: Membre) {
        const reponses = await this.membreService.update(id, membre);
        return reponses;
    }

    @Delete()
    async delete(@Body() id: number) {
        const reponses = await this.membreService.remove(id);
        return reponses;
    }

}
