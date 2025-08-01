import React, { useEffect, useState } from 'react';
import styles from './UserPNL.module.scss';
import {Button, Flex} from 'antd'; // Импортируем необходимые компоненты из Ant Design

/**
 * Компонент Pnl — отображает прибыль и количество сделок за выбранный период времени
 */

type Period = 'day' | 'week' | 'month' | 'year';

interface PnlData {
    profit: number;
    trades: number;
}

const UserPnl: React.FC = () => {
    // Состояние для хранения данных о прибыли и количестве сделок
    const [pnlData, setPnlData] = useState<PnlData>({ profit: 0, trades: 0 });
    // Состояние для хранения текущего выбранного периода
    const [period, setPeriod] = useState<Period>('day');

    // Функция для получения данных с бэкенда на основе выбранного периода
    const fetchPnlData = async (selectedPeriod: Period) => {
        try {
            // Здесь должен быть запрос к бэкенду, например через fetch или axios
            // Для примера я использую заглушку с тестовыми данными
            const response: Record<Period, PnlData> = {
                day: { profit: 22.97, trades: 55 },
                week: { profit: 150.45, trades: 320 },
                month: { profit: 620.3, trades: 1240 },
                year: { profit: 4500.75, trades: 9870 }
            };
            // Устанавливаем данные в состояние
            setPnlData(response[selectedPeriod]);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setPnlData({ profit: 0, trades: 0 }); // В случае ошибки сбрасываем данные
        }
    };

    // Загружаем данные при изменении периода
    useEffect(() => {
        fetchPnlData(period);
    }, [period]);

    // Обработчик для переключения периода
    const handlePeriodChange = (newPeriod: Period) => {
        setPeriod(newPeriod);
    };

    return (
        <div className={styles.pnlContainer}>
            {/* Контейнер для отображения прибыли и количества сделок */}
            <div className={styles.dataContainer}>
                {/* Блок с прибылью */}
                <div className={styles.profitSection}>
                    <span className={styles.label}>Прибыль, USDT:</span>
                    <span className={styles.value}>
                        {pnlData.profit > 0 ? `+${pnlData.profit}` : pnlData.profit} USDT
                    </span>
                </div>
                {/* Блок с количеством сделок */}
                <div className={styles.tradesSection}>
                    <span className={styles.label}>Количество сделок:</span>
                    <span className={styles.value}>{pnlData.trades}</span>
                </div>
            </div>

            {/* Кнопки для переключения периода времени с использованием Flex */}
            <Flex className={styles.buttonGroup} gap={2} justify="space-around">
                <Button
                    type={period === 'day' ? 'primary' : 'default'}
                    style={{
                        backgroundColor: '#313942',
                        opacity: period === 'day' ? 1 : 0.24,
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        maxWidth: '91px',
                        height: '32px',
                        transition: 'opacity 0.2s, max-width 0.2s',
                        boxShadow: 'none',
                        outline: 'none'
                    }}
                    onClick={() => handlePeriodChange('day')}
                >
                    День
                </Button>
                <Button
                    type={period === 'week' ? 'primary' : 'default'}
                    style={{
                        backgroundColor: '#313942',
                        opacity: period === 'week' ? 1 : 0.24,
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        maxWidth: '91px',
                        height: '32px',
                        transition: 'opacity 0.2s, max-width 0.2s',
                        boxShadow: 'none',
                        outline: 'none'
                    }}
                    onClick={() => handlePeriodChange('week')}
                >
                    Неделя
                </Button>
                <Button
                    type={period === 'month' ? 'primary' : 'default'}
                    style={{
                        backgroundColor: '#313942',
                        opacity: period === 'month' ? 1 : 0.24,
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        maxWidth: '91px',
                        height: '32px',
                        transition: 'opacity 0.2s, max-width 0.2s',
                        boxShadow: 'none',
                        outline: 'none'
                    }}
                    onClick={() => handlePeriodChange('month')}
                >
                    Месяц
                </Button>
                <Button
                    type={period === 'year' ? 'primary' : 'default'}
                    style={{
                        backgroundColor: '#313942',
                        opacity: period === 'year' ? 1 : 0.24,
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        maxWidth: '91px',
                        height: '32px',
                        transition: 'opacity 0.2s, max-width 0.2s',
                        boxShadow: 'none',
                        outline: 'none'
                    }}
                    onClick={() => handlePeriodChange('year')}
                >
                    Год
                </Button>
            </Flex>
        </div>
    );
};

export default UserPnl;