import {TemplateRef} from '@angular/core';

export class TableColumn {
    columnOrder: number;
    columnId: string;
    columnName: string;
    columnContent?: TemplateRef<any>;
}