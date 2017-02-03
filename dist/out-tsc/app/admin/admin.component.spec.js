import { async, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
describe('AdminComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/admin/admin.component.spec.js.map