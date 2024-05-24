import { PartialType } from '@nestjs/mapped-types';
import { CreateNiveauDto } from './create-niveau.dto';

export class UpdateNiveauDto extends PartialType(CreateNiveauDto) {}
