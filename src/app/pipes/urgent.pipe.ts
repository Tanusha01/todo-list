import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urgent'
})
export class UrgentPipe implements PipeTransform {

  transform(value: string, isUrgent : boolean): string {
    return isUrgent?'${value}-Urgent!':value;
  }

}
