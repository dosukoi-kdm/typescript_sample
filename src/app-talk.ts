export class Talk {
    public static getGreeting(now: Date): string {
        if (now.getHours() < 12) {
            return "Hello!";
        }

        return "Good evening!";
    }
}
