export class Singleton {
    constructor() {
        if (!Singleton._name) {
            Singleton._name = this;
        }
        return Singleton._name;
    }
}