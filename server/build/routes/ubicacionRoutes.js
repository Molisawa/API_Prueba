"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ubicacionController_1 = __importDefault(require("../controllers/ubicacionController"));
class UbicacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ubicacionController_1.default.list);
        this.router.get('/:id', ubicacionController_1.default.getOne);
        this.router.post('/', ubicacionController_1.default.create);
        this.router.put('/:id', ubicacionController_1.default.update);
        this.router.delete('/:id', ubicacionController_1.default.delete);
    }
}
const ubicacionRoutes = new UbicacionRoutes();
exports.default = ubicacionRoutes.router;
