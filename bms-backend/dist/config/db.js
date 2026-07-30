"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const connectDB = async () => {
    try {
        const mongoUri = config_1.config.databaseReplicaSet || config_1.config.databaseUrl;
        await mongoose_1.default.connect(mongoUri);
        console.log("Connected to database");
    }
    catch (error) {
        console.log("Failed to connect to database", error);
        process.exit(1);
    }
};
exports.default = connectDB;
