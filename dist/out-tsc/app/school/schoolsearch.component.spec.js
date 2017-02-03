import { async, TestBed } from '@angular/core/testing';
import { SchoolsearchComponent } from './schoolsearch.component';
describe('SchoolsearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SchoolsearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SchoolsearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/school/schoolsearch.component.spec.js.map