import {Controller, Get, Post} from "@nestjs/common";
import {AppService} from "./app.service";

@Controller('planetas')
export class PlanetasController {
    constructor(private readonly _AppService: AppService) {
    }

    @Post()
    getJsonPLanets(): any {
        return this._AppService.getJsonPlanets();
    }
}
