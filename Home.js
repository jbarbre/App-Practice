import React from "react";
import { View, Text } from "react-native";
import { useTranslation } from 'react-i18next';
import styles from "./styles";
export default function Home() {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text>{t('Home Content')}</Text>
        </View>
    );
}