'use strict'

/* -------------------------------------------------------------------------- */
/*                                 BOOK MODEL                                 */
/* -------------------------------------------------------------------------- */

const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize('sqlite:./db.sqlite3')


// Syncronization:
// Model bilgilerini db'ye uygula:
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

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
    type:DataTypes.STRING,
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