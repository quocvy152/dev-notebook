interface FootballPlayer {
    name: string;
    number: number;

    shoot(): void;
    pass(): void;
    dribble(): void;
    tackle(): void;   
}

class Striker implements FootballPlayer {
    name: string;
    number: number;
    
    constructor(name: string, number: number) {
        this.name = name;
        this.number = number;
    }

    shoot(): void {
        console.log(`${this.name} shoots!`);
    }

    pass(): void {
        console.log(`${this.name} passes!`);
    }

    dribble(): void {
        console.log(`${this.name} dribbles!`);
    }

    tackle(): void {
        console.log(`${this.name} tackles!`);
    }
}

class FootballPlayerFactory {
    static createPlayer(name: string, number: number): FootballPlayer {
        return new Striker(name, number);
    }
}

// Usage
const playerStriker1 = FootballPlayerFactory.createPlayer("Lionel Messi", 10);
const playerStriker2 = FootballPlayerFactory.createPlayer("Cristiano Ronaldo", 7);

playerStriker1.pass(); // Output: Lionel Messi passes!
playerStriker2.shoot(); // Output: Cristiano Ronaldo shoots!