import { async, TestBed } from '@angular/core/testing';
import { FastsearchComponent } from './fastsearch.component';
describe('FastsearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FastsearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FastsearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/fastsearch/fastsearch.component.spec.js.map