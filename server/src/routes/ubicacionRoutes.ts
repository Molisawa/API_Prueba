import { Router } from 'express';

import ubicacionController  from  '../controllers/ubicacionController'

class UbicacionRoutes{

   public router: Router = Router();

   constructor(){
        this.config();
   }
   config(): void{
       this.router.get('/', ubicacionController.list);
       this.router.get('/:id', ubicacionController.getOne);
       this.router.post('/', ubicacionController.create);
       this.router.put('/:id', ubicacionController.update);
       this.router.delete('/:id', ubicacionController.delete);
    }
}

const ubicacionRoutes = new UbicacionRoutes();
export default ubicacionRoutes.router;