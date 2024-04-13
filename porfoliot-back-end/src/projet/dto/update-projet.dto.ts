import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetDto } from './create-projet.dto';

export class UpdateProjetDto extends PartialType(CreateProjetDto) {}
