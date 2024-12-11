import {BadRequestException, PipeTransform} from '@nestjs/common';
import {BoardStatus} from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOperations = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

    transform(value: any): any {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status options`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOperations.indexOf(status);
        return index !== -1;
    }
}