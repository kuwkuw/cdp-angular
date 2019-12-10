import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { SpinnerModule } from './widgets/spinner/spinner.module';
import { AppComponent } from './app.component';

import {
  RouterLinkStubDirective,
  RouterOutletStubComponent
} from './testing-helpers';

import { ConstantsServiceService } from './core';
import { SpinnerService } from './widgets';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    const spinnerServiceStub = {
      isVisible: () => {
        return true;
      }
    };
    const constantsServiceServiceStub = {
      title: 'testTitel'
    };

    TestBed.configureTestingModule({
      imports: [SpinnerModule.forRoot()],
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: SpinnerService, useValue: spinnerServiceStub },
        { provide: ConstantsServiceService, useValue: constantsServiceServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as constantsServiceService.title 'testTitel'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.constantsServiceService.title).toEqual('testTitel');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain('testTitel');
  });
});
