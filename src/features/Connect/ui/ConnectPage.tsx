import React, { useState } from 'react';
import { Input, Button, Checkbox, Form, message } from 'antd';
import styles from './ConnectPage.module.scss';
import { sendKeysToBackend } from '../model/ConnectPageAPI';
import type { ConnectKeysRequestDTO } from '../model/ConnectPageDTO';

// Типизация формы
interface ConnectFormValues {
    accessKey: string;
    secretKey: string;
    agree: boolean;
}

// Мок: получаем данные пользователя из Telegram WebApp
const getTelegramUser = () => ({
    id: 1234567,
    username: 'Aquaryqq',
    first_name: '',
    last_name: '',
    photo_url: 'https://robohash.org/telegramUser'
});

const ConnectPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm<ConnectFormValues>();
    const [error, setError] = useState<string | null>(null);

    // Обработчик отправки формы
    const onFinish = async (values: ConnectFormValues) => {
        setLoading(true);
        setError(null);

        const user = getTelegramUser();

        // Преобразуем поля к типу DTO
        const dto: ConnectKeysRequestDTO = {
            telegramId: user.id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            photo_url: user.photo_url,
            accessKey: values.accessKey,
            secretKey: values.secretKey
        };

        const res = await sendKeysToBackend(dto);
        setLoading(false);

        if (res.success) {
            message.success('Бот успешно подключён!');
            // Перейти к следующей странице/фиче
        } else {
            setError(res.message || 'Ошибка подключения');
            // Очищаем только ключи
            form.setFieldsValue({ accessKey: '', secretKey: '' });
        }
    };

    // Валидация
    const apiKeyRules = [
        { required: true, message: 'Введите API KEY' },
        { pattern: /^mx\w{10,}$/, message: 'Некорректный API KEY' }
    ];
    const secretKeyRules = [
        { required: true, message: 'Введите SECRET KEY' },
        { min: 16, message: 'Слишком короткий SECRET KEY' }
    ];

    return (
        <div className={styles.formWrapper}>
            <Form
                className={styles.form}
                layout="vertical"
                form={form}
                onFinish={onFinish}
                autoComplete="off"
            >
                <h2 className={styles.title}>Введите данные для подключения</h2>
                <Form.Item label="Введите API KEY" name="accessKey" rules={apiKeyRules}>
                    <Input placeholder="mx..." autoComplete="off" />
                </Form.Item>
                <Form.Item label="Введите SECRET KEY" name="secretKey" rules={secretKeyRules}>
                    <Input.Password placeholder="••••••••••••••••" autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="agree"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Нужно принять риски')),
                        },
                    ]}
                >
                    <Checkbox>
                        Я понимаю риски торговли криптой и беру их на себя.
                        <br />
                        Я могу стать долгосрочным инвестором монет или понести убытки из-за некорректных настроек бота либо собственных действий.
                        <br />
                        Бот не гарантирует прибыль, мы не отвечаем за возможные потери.
                    </Checkbox>
                </Form.Item>
                {error && <div className={styles.error}>{error}</div>}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                        className={styles.submitBtn}
                    >
                        ПОДКЛЮЧИТЬ БОТА
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ConnectPage;
