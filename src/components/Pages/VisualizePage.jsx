import React from 'react';
import styles from './VisualizePage.module.css';
import BigButton from '../Buttons/bigButton';

const ChartsIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_37_50)">
      <path d="M24.03 11.91C23.76 11.41 23.23 11.09 22.68 11.09H16.75L18.54 1.76C18.59 1.32 18.52 0.93 18.33 0.63C18.17 0.37 17.93 0.18 17.63 0.08C17.46 0.03 17.29 0 17.12 0C16.66 0 16.21 0.19 15.93 0.52L5.28001 14.52C4.95001 14.96 4.91001 15.54 5.18001 16.07C5.45001 16.57 5.98001 16.89 6.53001 16.89L12.45 16.94L10.66 27.5C10.52 28.34 11.03 28.87 11.55 29.08C12.05 29.29 12.81 29.28 13.31 28.61L23.91 13.48C24.25 13.03 24.29 12.44 24.03 11.91ZM22.95 12.81L12.57 27.75C12.49 27.88 12.35 27.95 12.21 27.95C12.15 27.95 12.09 27.94 12.03 27.91C11.83 27.83 11.72 27.63 11.76 27.42L13.77 15.8L6.53001 15.76C6.38001 15.76 6.24001 15.67 6.17001 15.53C6.10001 15.4 6.12001 15.23 6.21001 15.11L16.59 1.29C16.72 1.12 16.94 1.06 17.13 1.15C17.33 1.23 17.43 1.43 17.39 1.64L15.39 12.13L22.62 12.18C22.78 12.18 22.91 12.26 22.98 12.39C23.05 12.53 23.04 12.69 22.95 12.81Z" fill="#394508"/>
    </g>
    <defs>
      <clipPath id="clip0_37_50">
        <rect width="19.2" height="29.2" fill="white" transform="translate(5)"/>
      </clipPath>
    </defs>
  </svg>
);

const NutritionIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_37_19)">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71 0 0 6.72 0 15C0 18.44 1.16 21.61 3.11 24.14C3.29 24.38 3.48 24.61 3.68 24.84C3.82 24.59 4.03 24.37 4.29 24.23C4.09 24.01 3.91 23.79 3.74 23.56C2.5 21.94 1.61 20.05 1.17 17.99C0.99 17.16 0.88 16.3 0.86 15.43C0.85 15.29 0.85 15.14 0.85 15C0.85 14.93 0.85 14.86 0.86 14.79C0.85 14.72 0.85 14.64 0.86 14.57C0.88 13.7 0.99 12.84 1.17 12.01C2.33 6.6 6.59 2.35 12 1.18C12.83 1 13.69 0.89 14.57 0.87C14.64 0.86 14.72 0.86 14.79 0.87C14.86 0.86 14.93 0.86 15 0.86C15.07 0.86 15.14 0.86 15.21 0.87C15.28 0.86 15.36 0.86 15.43 0.87C16.31 0.89 17.17 1 18 1.18C23.4 2.35 27.65 6.6 28.82 12C29 12.83 29.11 13.69 29.13 14.57C29.14 14.64 29.14 14.72 29.13 14.79C29.14 14.86 29.14 14.93 29.14 15C29.14 15.14 29.14 15.29 29.13 15.43C29.11 16.31 29 17.17 28.82 18C27.65 23.4 23.4 27.65 18 28.82C17.17 29 16.31 29.11 15.43 29.13C15.29 29.14 15.14 29.14 15 29.14C14.86 29.14 14.71 29.14 14.57 29.13C13.69 29.11 12.83 29 12 28.82C10.34 28.46 8.78 27.81 7.4 26.93C7.16 26.77 6.92 26.61 6.69 26.44C6.56 26.71 6.38 26.94 6.14 27.11C6.38 27.28 6.63 27.45 6.88 27.61C9.22 29.12 12 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0Z" fill="#394508"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5703 29.57V0.429993H15.4303V29.57H14.5703Z" fill="#394508"/>
    </g>
    <defs>
      <clipPath id="clip0_37_19">
        <rect width="30" height="30" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const InputIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_37_50_input)">
      <path d="M24.03 11.91C23.76 11.41 23.23 11.09 22.68 11.09H16.75L18.54 1.76C18.59 1.32 18.52 0.93 18.33 0.63C18.17 0.37 17.93 0.18 17.63 0.08C17.46 0.03 17.29 0 17.12 0C16.66 0 16.21 0.19 15.93 0.52L5.28001 14.52C4.95001 14.96 4.91001 15.54 5.18001 16.07C5.45001 16.57 5.98001 16.89 6.53001 16.89L12.45 16.94L10.66 27.5C10.52 28.34 11.03 28.87 11.55 29.08C12.05 29.29 12.81 29.28 13.31 28.61L23.91 13.48C24.25 13.03 24.29 12.44 24.03 11.91ZM22.95 12.81L12.57 27.75C12.49 27.88 12.35 27.95 12.21 27.95C12.15 27.95 12.09 27.94 12.03 27.91C11.83 27.83 11.72 27.63 11.76 27.42L13.77 15.8L6.53001 15.76C6.38001 15.76 6.24001 15.67 6.17001 15.53C6.10001 15.4 6.12001 15.23 6.21001 15.11L16.59 1.29C16.72 1.12 16.94 1.06 17.13 1.15C17.33 1.23 17.43 1.43 17.39 1.64L15.39 12.13L22.62 12.18C22.78 12.18 22.91 12.26 22.98 12.39C23.05 12.53 23.04 12.69 22.95 12.81Z" fill="#394508"/>
    </g>
    <defs>
      <clipPath id="clip0_37_50_input">
        <rect width="19.2" height="29.2" fill="white" transform="translate(5)"/>
      </clipPath>
    </defs>
  </svg>
);

const VisualizePage = ({ onNavigate, userData }) => {
  const calculateBMI = () => {
    if (!userData) return null;
    return (userData.weight / ((userData.height / 100) ** 2)).toFixed(1);
  };

  const bmi = calculateBMI();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1 className={styles.logo}>NTra</h1>
          <button className={styles.signupBtn}>Get started</button>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Nutrition<br/>Tracker</h2>
          <p className={styles.subtitle}>Dietary health made clear</p>
          
          <div className={styles.offerings}>
            <p className={styles.offeringsTitle}>Our offerings</p>
            <div className={styles.buttonGrid}>
              <BigButton onClick={() => onNavigate('visualize')}>
                <ChartsIcon />
                <p>Charts</p>
              </BigButton>
              
              <BigButton onClick={() => onNavigate('analyze')}>
                <NutritionIcon />
                <p>Analysis/Recommendation</p>
              </BigButton>
              
              <BigButton onClick={() => onNavigate('input')}>
                <InputIcon />
                <p>Input Data</p>
              </BigButton>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mainArea}>
        <div className={styles.visualizeSection}>
          <h2 className={styles.sectionTitle}>Visualize</h2>
          
          <div className={styles.chartsGrid}>
            {/* BMI Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartPlaceholder}>
                <p className={styles.chartLabel}>Loading data...</p>
              </div>
              <div className={styles.chartTabs}>
                <button className={styles.tab}>BMI</button>
                <button className={styles.tab}>MUAC</button>
                <button className={styles.tab}>CC</button>
              </div>
            </div>

            {/* Weight Change Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartPlaceholder}>
                <p className={styles.chartLabel}>Loading data...</p>
              </div>
              <div className={styles.chartTabs}>
                <button className={styles.tab}>Weight change</button>
              </div>
            </div>

            {/* MUAC Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartPlaceholder}>
                <p className={styles.chartLabel}>Loading data...</p>
              </div>
              <div className={styles.chartTabs}>
                <button className={styles.tab}>BMI</button>
                <button className={styles.tab}>Weight change</button>
                <button className={styles.tab}>MUAC</button>
                <button className={styles.tab}>CC</button>
              </div>
            </div>

            {/* CC Chart */}
            <div className={styles.chartCard}>
              <div className={styles.chartPlaceholder}>
                <p className={styles.chartLabel}>Loading data...</p>
              </div>
              <div className={styles.chartTabs}>
                <button className={styles.tab}>BMI</button>
                <button className={styles.tab}>Weight change</button>
                <button className={styles.tab}>MUAC</button>
                <button className={styles.tab}>CC</button>
              </div>
            </div>
          </div>

          {userData && (
            <div className={styles.dataDisplay}>
              <h3>Current Measurements</h3>
              <p>BMI: {bmi}</p>
              <p>Height: {userData.height} cm</p>
              <p>Weight: {userData.weight} kg</p>
              <p>MUAC: {userData.muac} cm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualizePage;