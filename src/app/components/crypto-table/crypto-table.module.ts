import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CryptoTableRoutingModule } from './crypto-table-routing.module';
import { CryptoTableComponent } from './crypto-table.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatProgressSpinnerModule, MatAutocompleteModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { DialogComponent } from '../shared/dialog/dialog.component';



@NgModule({
  declarations: [CryptoTableComponent, DialogComponent
  ],
  entryComponents: [DialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ CommonModule,
    CryptoTableRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [CryptoTableRoutingModule]
})
export class CryptoTableModule { }