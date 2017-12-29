export class Talk {
    public static getGreeting(now: Date): string {
        const hour = now.getHours();

        if (hour < 12) {
            return "Hello!";
        }

        return "Good evening!";
    }
}
