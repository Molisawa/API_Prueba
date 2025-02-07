"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UbicacionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ubicacion = yield database_1.default.query('SELECT * FROM ubicacion');
            res.json(ubicacion);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ubicacion = yield database_1.default.query('SELECT * FROM ubicacion WHERE id = ?', [id]);
            console.log(ubicacion.length);
            if (ubicacion.length > 0) {
                return res.json(ubicacion[0]);
            }
            res.status(404).json({ text: "La ubicacion no se encontro" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ubicacion set ?', [req.body]);
            res.json({ message: 'Ubicacion guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldUbicacion = req.body;
            yield database_1.default.query('UPDATE ubicacion set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "Ubicacion actualizada" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ubicacion WHERE id = ?', [id]);
            res.json({ message: "Ubicacion eliminada" });
        });
    }
}
const ubicacionController = new UbicacionController();
exports.default = ubicacionController;
