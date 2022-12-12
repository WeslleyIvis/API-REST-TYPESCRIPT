import { Subject } from "../entities/Subject";
import { AppDataSoucer } from "../data-source";


export const subjectRepository = AppDataSoucer.getRepository(Subject)