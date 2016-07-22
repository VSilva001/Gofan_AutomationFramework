/**
 * Created by victorsilva on 6/20/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Utils = (function () {
    function Utils(engine) {
        this.engineType = engine;
    }
    Utils.prototype.fac = function (num) {
        if (num == 0 || num == 1) {
            return 1;
        }
        return num * this.fac(num - 1);
    };
    return Utils;
}());
var Cars = (function (_super) {
    __extends(Cars, _super);
    function Cars() {
        _super.apply(this, arguments);
    }
    return Cars;
}(Utils));
var Car = (function () {
    function Car(engine) {
        this.engine = '';
        this.engine = engine;
    }
    Car.prototype.Start = function () {
        alert('Engine started:' + this.engine);
    };
    Car.prototype.Stop = function () {
        alert('Engine stopped:' + this.engine);
    };
    return Car;
}());
//# sourceMappingURL=main.js.map