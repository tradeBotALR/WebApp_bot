export {};

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready(): void;
                platform?: string;
                user: {
                    id: number;
                    first_name: string;
                    last_name?: string;
                    username?: string;
                    photo_url?: string;
                };
            };
        };
    }
}
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
