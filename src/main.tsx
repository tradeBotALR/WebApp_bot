import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.scss'
// import {TelegramOnlyProvider} from "./app/providers/TelegramOnlyProvider";
import {TelegramProvider} from "./app/providers/TelegramProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
        {/*<TelegramOnlyProvider>*/}
            <TelegramProvider>
                <App/>
            </TelegramProvider>
        {/*</TelegramOnlyProvider>*/}
    </React.StrictMode>
)