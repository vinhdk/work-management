import { AuthStack } from "./auth/auth.type";
import { CoreStack } from './core/core.type';

export type RootStack = {
    "Auth": AuthStack;
    "Core": CoreStack;
}