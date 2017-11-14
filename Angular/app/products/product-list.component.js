"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.showImage = false;
        this.showImageBtn = "Show Image";
        this.pageTitle = 'Product List';
        this._listFilter = "";
        this.products = [
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": new Date,
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://www.gstatic.com/webp/gallery/1.sm.jpg",
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": new Date,
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "https://www.gstatic.com/webp/gallery/4.sm.webp"
            }
        ];
        this.filterdProduct = this.products;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filterdProduct = this._listFilter ? this.performFiltering(this._listFilter) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ProductListComponent.prototype.performFiltering = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) { return product.productName.toLocaleLowerCase().indexOf(filterBy) != -1; });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product-list',
        templateUrl: "./product-list.component.html",
        styleUrls: ['./product-list.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
;
//# sourceMappingURL=product-list.component.js.map