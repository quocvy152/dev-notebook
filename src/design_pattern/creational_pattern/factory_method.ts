/**
 * Factory Method Pattern
 * Pros:
 * - Tách biệt được logic khởi tạo đối tượng với logic sử dụng đối tượng (tránh được việc code bị coupling)
 * - Dễ dàng mở rộng thêm các đối tượng mới
 * - Code dễ đọc dễ bảo trì, khi cần thay đổi chỉ cần chỉnh sửa 1 file
 */

interface FootballPlayer {
    name: string;
    number: number;

    shoot(): void;
    pass(): void;
    dribble(): void;
    tackle(): void;    
}

class Defender implements FootballPlayer {
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

class FootballPlayerFactoryMethod {
    static createPlayer(type: string, name: string, number: number): FootballPlayer {
        switch (type) {
            case 'striker':
                return new Striker(name, number);
            case 'defender':
                return new Defender(name, number);
            default:
                throw new Error('Unknown player type');
        }
    }
}

// Usage
const playerDefender1 = FootballPlayerFactoryMethod.createPlayer('defender', 'Sergio Ramos', 4);
const playerDefender2 = FootballPlayerFactoryMethod.createPlayer('defender', 'Pepe', 3);
const playerDefender3 = FootballPlayerFactoryMethod.createPlayer('striker', 'Cristiano Ronaldo', 7);

playerDefender1.tackle();
playerDefender2.tackle();
playerDefender3.shoot();