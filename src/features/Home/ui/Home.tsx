import React from 'react';
import styles from './Home.module.scss';
import UserContent from '../HomeDedails/UserContent/ui/UserContent';
import UserPNL from '../HomeDedails/UserPNL/UserPNL';

const Home: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <UserContent />
            <UserPNL />
        </div>
    );
};

export default Home;