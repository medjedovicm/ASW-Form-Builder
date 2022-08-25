/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'asw-image-drawing-dialog',
    templateUrl: './image-drawing-dialog.html'
})
export class AswImageDrawingDialog {

    public width = 680;
    public height = 250;

    constructor(
        public dialogRef: MatDialogRef<AswImageDrawingDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(aswEditPropertyForm: NgForm): void {
        if (aswEditPropertyForm.invalid) {
            return;
        }
        this.dialogRef.close(this.control);
    }

    public saveImage(blob: any): void {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            this.control.imageUrl = base64data;
        };
    }
}