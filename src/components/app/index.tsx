/*
 * @Description:
 * @Autor: jiayinchu
 * @Date: 2024-05-01 09:30:24
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-05-01 14:55:17
 */
import React, { useState } from "react";
import { ConfigProvider, ConfigProviderProps } from "antd";
import { IntlProvider } from 'react-intl';
import AntdEnUS from 'antd/lib/locale/en_US';
import AntdZhCN from 'antd/lib/locale/zh_CN';
import enUS from '../locales/en-us';
import zhCN from '../locales/zh-cn';
import Layout from "../layout";

const App: React.FC = () => {
    const [locale, setLocale] = useState("en");
    const messages = locale === 'en' ? enUS : zhCN;
    const antdLocale = locale === 'en' ? AntdEnUS : AntdZhCN;

    return (<IntlProvider locale={locale} messages={messages}>
        <ConfigProvider locale={antdLocale}>
            <Layout />
        </ConfigProvider>
    </IntlProvider>);
}

export default App;
