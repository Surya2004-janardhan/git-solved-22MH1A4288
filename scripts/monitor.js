/**
 * System Monitoring Script 
 * Supports both production, development, and experimental modes
 * */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {  
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false,
    aiEnabled: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true,
    aiEnabled: false
  },
  experimental: {
    interval: 30000,
    alertThreshold: 75,
    debugMode: true,
    verboseLogging: true,
    aiEnabled: true // AI features active in experimental mode
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log(`AI Analysis: ${config.aiEnabled ? 'ACTIVE' : 'INACTIVE'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Checking system health...`);
  
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');
  
  if (config.aiEnabled) {
    console.log('🤖 AI Prediction: No anomalies detected for next 5 mins');
  }
  
  console.log('System Status: HEALTHY');
}
console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
