import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Observable } from "rxjs";
import { CoinService } from "src/app/services/crypto-info.service";

@Component({
    selector: 'mat-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {
    coinInfo$: Observable<any>;

    constructor(
        private cryptoService: CoinService,
        @Inject(MAT_DIALOG_DATA) public coinId: any,
        private dialogRef: MatDialogRef<DialogComponent>){}

    ngOnInit() {
        this.coinInfo$ = this.cryptoService.getCoinInfo(this.coinId.id);
    }
    getPlatformList(platforms: object) {
        const platform_obj_keys = Object.keys(platforms);
        if (platform_obj_keys && platform_obj_keys[0] === '') {
            return 'No platforms listed in Api!';
        } else {
            return Object.keys(platforms);
        }
    }

    close() {
        this.dialogRef.close();
    }
}
