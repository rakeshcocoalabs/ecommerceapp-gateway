module.exports = {
    apps : [
    {
      name: 'Ecommerce-app API Gateway',
      script: 'app.js', 
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', 
    }  
    
    ]
};