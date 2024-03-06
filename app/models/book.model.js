'use strict'

/* -------------------------------------------------------------------------- */
/*                                 BOOK MODEL                                 */
/* -------------------------------------------------------------------------- */

const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize('sqlite: ./db.sqlite3')

const Book = sequelize.define('books',{
 title: {
    type:DataTypes.STRING,
    allowNull: false
 },
 author:{
    type:DataTypes.STRING,
    allowNull:false,
    allowNull:false

 },
 ISBN:{
    type:DataTypes.INTEGER,
    allowNull:false
    
 },
 genre:{
    type:DataTypes.STRING,
    allowNull:false

 },
 publicationYear:{
    type:DataTypes.INTEGER,
    allowNull:false
 },
 image: {
    type: DataTypes.TEXT,
    allowNull:false
 }




})
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

module.exports = Book