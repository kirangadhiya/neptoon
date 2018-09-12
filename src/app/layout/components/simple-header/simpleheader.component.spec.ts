import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'

import { SimpleHeaderComponent } from './simple-header.component'
import { LayoutModule } from '../../layout.module'

describe('HeaderComponent', () => {
  let component: SimpleHeaderComponent
  let fixture: ComponentFixture<SimpleHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
