import { AbstractControl } from "@angular/forms";





export function PassValidator(control:AbstractControl):{
    [key:string]:boolean}|null{
        const Password = control.get('Password');
        const ReTypePass = control.get('ReTypePass');
        if (Password.pristine || ReTypePass.pristine) {
          return null;
        }
        return Password && ReTypePass && Password.value !== ReTypePass.value ? { 'misMatch': true } : null;
      }


