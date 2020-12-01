const { response } = require("express");
const db = require("../connection");

const getAllDishes = () => {
  return db.query("select * from dishes").then((response) => response.rows);
};

const addNewDish = ({ cooker_id, name, description, price, category }) => {
  return db
    .query(
      "insert into dishes (cooker_id,name,description,price,category) values ($1,$2,$3,$4,$5) returning (name),(description),(price),(category)",
      [cooker_id, name, description, price, category]
    )
    .then((response) => response.rows[0]);
};

module.exports = {
  getAllDishes,
  addNewDish,
};
