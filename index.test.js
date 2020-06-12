var isHH = require('./index');
 
describe('Testing isHH', function() {
    it('should return true passing HH', function(){
        expect(isHH('HH')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isHH('Google')).toBeFalsy();
    });
});