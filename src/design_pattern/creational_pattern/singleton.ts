class SingletonClass {
    private static instance: SingletonClass;

    constructor() {}

    public static getInstance(): SingletonClass {
        if(!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }

        return SingletonClass.instance;
    }
}

const instance1 = SingletonClass.getInstance();
const instance2 = SingletonClass.getInstance();
console.log(instance1 === instance2); // true