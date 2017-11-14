"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var services_component_1 = require("./services/services.component");
exports.router = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'services', component: services_component_1.ServicesComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map