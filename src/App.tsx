import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment-timezone';

declare global {
  interface Window {
    particlesJS: any;
  }
}

function App() {
  const [time, setTime] = useState(moment().tz('Asia/Shanghai'));

  useEffect(() => {
    // 设置中文语言
    moment.locale('zh-cn');
    
    // 初始化particles背景
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    });

    // 更新时间
    const timer = setInterval(() => {
      setTime(moment().tz('Asia/Shanghai'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <div className="time-container">
        <div className="time">{time.format('HH:mm:ss')}</div>
        <div className="date">{time.format('YYYY年MM月DD日 dddd')}</div>
      </div>
    </div>
  );
}

export default App;