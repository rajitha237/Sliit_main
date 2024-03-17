"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const user_seller_module_1 = require("./user-seller/user-seller.module");
const product_listing_module_1 = require("./product-listing/product-listing.module");
const seller_bank_module_1 = require("./seller-bank/seller-bank.module");
const user_buyer_module_1 = require("./user-buyer/user-buyer.module");
const feedback_module_1 = require("./feedback/feedback.module");
const admin_module_1 = require("./admin/admin.module");
const terms_and_conditions_module_1 = require("./terms-and-conditions/terms-and-conditions.module");
const privacy_policy_module_1 = require("./privacy-policy/privacy-policy.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB),
            user_seller_module_1.UserSellerModule,
            product_listing_module_1.ProductListingModule,
            seller_bank_module_1.SellerBankModule,
            user_buyer_module_1.UserBuyerModule,
            feedback_module_1.FeedbackModule,
            admin_module_1.AdminModule,
            terms_and_conditions_module_1.TermsAndConditionsModule,
            privacy_policy_module_1.PrivacyPolicyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map