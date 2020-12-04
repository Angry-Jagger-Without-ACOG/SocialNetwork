import { FormGroup } from '@angular/forms';

// Validador personalizado para comprobar que Contra (Contraseña) y RepContra (Repetir Contraseña) coinciden
export function Comprobacion(Contra: string, RepContra: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[Contra];
        const matchingControl = formGroup.controls[RepContra];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ Comprobacion: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
