import { NativeDateAdapter } from '@angular/material/core';

export class CustomDateAdapter extends NativeDateAdapter {

  /* Se sobrescribe este método para que el primer día de
   la semana del calendario sea lunes */
  override getFirstDayOfWeek(): number {
   return 1;
  }
}
