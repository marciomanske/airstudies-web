import { async, TestBed } from '@angular/core/testing';
import { CommonsComponent } from './commons.component';
describe('CommonsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommonsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/commons/commons.component.spec.js.map