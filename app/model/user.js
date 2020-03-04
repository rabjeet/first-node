const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'user_tbl',
    {
      id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      first_name:{
        type: Sequelize.STRING
      },
      last_name:{
        type: Sequelize.STRING
      },
      email_id:{
        type: Sequelize.STRING
      },
      phone_no:{
        type: Sequelize.INTEGER
      },
      auth_token:{
        type: Sequelize.INTEGER
      },
      password_text:{
        type: Sequelize.INTEGER
      }, 
      create_date:{
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      }      
    },
    {   
      freezeTableName:true,
      timestamps:false
    }
)