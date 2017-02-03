import { async, TestBed } from '@angular/core/testing';
import { UserpasswordrecoverComponent } from './userpasswordrecover.component';
describe('UserpasswordrecoverComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UserpasswordrecoverComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UserpasswordrecoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/marciomanske/Projetos/angular2/airstudies-web/src/app/user/userpasswordrecover.component.spec.js.map