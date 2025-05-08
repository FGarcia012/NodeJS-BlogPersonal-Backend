import { Router } from "express";
import { addPublication, getPublications, updatePublication, deletePublication } from "./publication.controller.js";
import { addPublicationValidator, updatePublicationValidator, deletePublicationValidator } from "../middlewares/publication-validators.js";

const router = Router();

router.post('/addPublication', addPublicationValidator, addPublication);
router.get('/getPublications', getPublications);
router.put('/updatePublication/:pid', updatePublicationValidator, updatePublication);
router.delete('/deletePublication/:pid', deletePublicationValidator, deletePublication);

export default router;