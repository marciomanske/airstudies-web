import { async, TestBed } from '@angular/core/testing';
import { RegisterbuttonsComponent } from './registerbuttons.component';
describe('RegisterbuttonsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RegisterbuttonsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegisterbuttonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/registerbuttons/registerbuttons.component.spec.js.map