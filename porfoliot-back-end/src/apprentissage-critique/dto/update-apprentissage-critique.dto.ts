import { PartialType } from '@nestjs/mapped-types';
import { CreateApprentissageCritiqueDto } from './create-apprentissage-critique.dto';

export class UpdateApprentissageCritiqueDto extends PartialType(CreateApprentissageCritiqueDto) {}
