/**
 * TelegramOnlyProvider — компонент, который:
 * - Проверяет, открыто ли приложение через Telegram WebApp
 * - Проверяет, что открыто именно на мобильном Telegram (android или ios)
 * - Если условия не выполнены — показывает сообщение
 */

import React, {useEffect, useState, type ReactNode} from 'react';

interface TelegramOnlyProviderProps {
    children: ReactNode;
}

export const TelegramOnlyProvider: React.FC<TelegramOnlyProviderProps> = ({ children }) => {
    const [isTelegram, setIsTelegram] = useState<boolean>(false);

    useEffect(() => {
        // Проверяем, если мы находимся внутри Telegram WebApp
        const isTg = window.Telegram?.WebApp?.platform === 'telegram';
        setIsTelegram(isTg);
    }, []);

    if (!isTelegram) {
        // Если не в Telegram, показываем это сообщение
        return <div>This application is only available within Telegram.</div>;
    }

    // Если в Telegram, отображаем детей
    return <>{children}</>;
};
