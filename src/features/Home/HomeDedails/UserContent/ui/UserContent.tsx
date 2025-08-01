import React, {useEffect, useState} from 'react';
import styles from './UserContent.module.scss';

/**
 * Возвращает инициалы пользователя для аватарки
 */

interface TelegramUser {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
}

const getInitials = (user?: TelegramUser | null): string => {
    const {first_name, last_name, username} = user || {};

    if (!user) return '?';

    if (username) {
        return username.charAt(0).toUpperCase();
    }

    if (first_name || last_name) {
        return `${first_name?.charAt(0) || ''}${last_name?.charAt(0) || ''}`.toUpperCase();
    }

    return '?';
};

/**
 * Компонент UserContent — главная страница с данными пользователя из Telegram
 */

const UserContent: React.FC = () => {
    const [user, setUser] = useState<TelegramUser | null>(null);

    // Данные пользователя из Telegram
    // useEffect(() => {
    //     if (window.Telegram?.WebApp) {
    //         const telegramUser = window.Telegram.WebApp.initDataUnsafe?.user;
    //
    //         if (telegramUser) {
    //             setUser(telegramUser);
    //         }
    //     }
    // }, []);

    // Используем тестовые данные вместо Telegram
    useEffect(() => {
        const testUser = {
            username: 'Aquaryqq',
            id: 4758376
        };
        setUser(testUser);
    }, []);

    if (!user) {
        return (
            <div style={{padding: '20px', fontFamily: 'Arial'}}>
                <h2>Ошибка</h2>
                <p>Данные пользователя недоступны.</p>
                <p>Открой это приложение через Telegram.</p>
            </div>
        );
    }

    const {id, username, first_name, last_name} = user;

    const displayName = username ? `${username}` : `${first_name ?? ''} ${last_name ?? ''}`;
    const initials = getInitials(user) || 'A';

    return (
            <div className={styles.userContainer}>
                {/* Аватарка с градиентом */}
                <div className={styles.avatar}>
                    {initials}
                </div>
                {/* Имя и ID */}
                <div className={styles.textContainer}>
                    <span className={styles.userName}>
                        {displayName}
                        {id}
                    </span>
                </div>
                <div className={styles.star}>
                    ★
                </div>
            </div>
    );
};


export default UserContent;