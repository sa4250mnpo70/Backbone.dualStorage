// Generated by CoffeeScript 1.3.3
(function() {

  describe('the spec_helper context', function() {
    describe('loading backbone.dualstorage.coffee', function() {
      return it('defines Backbone.Collection.prototype.syncDirty', function() {
        expect(window).toBeDefined();
        return expect(window.Backbone.Collection.prototype.syncDirty).toBeDefined();
      });
    });
    describe('the localStorage mock', function() {
      var localStorage;
      localStorage = window.localStorage;
      beforeEach(function() {
        return localStorage.clear();
      });
      it('implements setItem', function() {
        localStorage.setItem('socks', 'two left feet');
        expect(localStorage.values.socks).toEqual('two left feet');
        localStorage.setItem('toes', 'five');
        return expect(Object.keys(localStorage.values).length).toEqual(2);
      });
      it('implements getItem', function() {
        localStorage.setItem('socks', 'two left feet');
        return expect(localStorage.getItem('socks')).toEqual('two left feet');
      });
      it('implements removeItem', function() {
        localStorage.values = {
          coolaid: 'drink',
          alcohol: 'refuse'
        };
        localStorage.removeItem('coolaid');
        expect(localStorage.values.coolaid).toBeUndefined();
        return expect(Object.keys(localStorage.values).length).toEqual(1);
      });
      return it('implements clear', function() {
        localStorage.values = {
          cuts: 'bandages'
        };
        expect(Object.keys(localStorage.values).length).toEqual(1);
        localStorage.clear();
        return expect(Object.keys(localStorage.values).length).toEqual(0);
      });
    });
    return describe('result behaves like _.result', function() {
      return it('returns values from properties', function() {
        expect(window.result({
          color: 'red'
        }, 'color')).toEqual('red');
        return expect(window.result({
          music: function() {
            return 'banjo';
          }
        }, 'music')).toEqual('banjo');
      });
    });
  });

}).call(this);
