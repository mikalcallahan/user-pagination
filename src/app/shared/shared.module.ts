import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { PagingComponent } from './components'
import { HttpClientModule } from '@angular/common/http'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [PagingComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    PagingComponent,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
})
export class SharedModule {}
