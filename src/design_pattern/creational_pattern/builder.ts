/**
 * BUILDER PATTERN
 */

class Burger {
    public size: string;
    public cheese: boolean;
    public bacon: boolean;
    public lettuce: boolean;
    public tomato: boolean;
    public onion: boolean;

    constructor(burgerBuilder: BurgerBuilder) {
        this.size = burgerBuilder.size;
        this.cheese = burgerBuilder.cheese;
        this.bacon = burgerBuilder.bacon;
        this.lettuce = burgerBuilder.lettuce;
        this.tomato = burgerBuilder.tomato;
        this.onion = burgerBuilder.onion;
    }
}   

class BurgerBuilder {
    public size: string;
    public cheese = false;
    public bacon = false;
    public lettuce = false;
    public tomato = false;
    public onion = false;

    constructor(size: string) {
        this.size = size;
    }

    public addCheese(): BurgerBuilder {
        this.cheese = true;
        return this;
    }

    public addBacon(): BurgerBuilder {
        this.bacon = true;
        return this;
    }

    public addLettuce(): BurgerBuilder {
        this.lettuce = true;
        return this;
    }

    public addTomato(): BurgerBuilder {
        this.tomato = true;
        return this;
    }

    public addOnion(): BurgerBuilder {
        this.onion = true;
        return this;
    }

    public build(): Burger {
        return new Burger(this);
    }
}

const burgerBuilderForChildren = new BurgerBuilder("small").addBacon().addCheese().addTomato();
const burgerForChildren = new Burger(burgerBuilderForChildren);