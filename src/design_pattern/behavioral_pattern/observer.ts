/**
 * Observer Pattern
 * Pros:
 * - Giúp tách biệt các đối tượng với nhau, không bị phụ thuộc vào nhau
 */

interface Observer {
    name: string;

    getName(): string;
    onJobPosted(jobPost: JobPost): void;
}

class JobPost {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }
}

class JobSeeker implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    onJobPosted(jobPost: JobPost): void {
        console.log(`Hi ${this.name}! Received notification for job: ${jobPost.getTitle()}`);
    }
}

class TopCVAgency {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if(index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    addJob(jobPost: JobPost): void {
        this.observers.forEach(observer => {
            observer.onJobPosted(jobPost);
        })
    }
}

// Usage

const jobSeeker1 = new JobSeeker("Nguyen Van A");
const jobSeeker2 = new JobSeeker("Nguyen Van B");

const topCVAgency = new TopCVAgency();
topCVAgency.attach(jobSeeker1);
topCVAgency.attach(jobSeeker2);

topCVAgency.addJob(new JobPost("Software Engineer"));