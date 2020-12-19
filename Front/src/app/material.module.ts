import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule }from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input'
const myModule = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule,
  ],
  exports: [myModule]

})
export class MaterialModule { }
