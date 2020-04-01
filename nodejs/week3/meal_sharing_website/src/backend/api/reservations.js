const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// This function will be invoked when endpoint is passed with params
const reservationsFunctionParams = function (request, response) {
  const idString = request.params.id;
  const id = parseInt(idString);
  if (isNaN(id)) {
    response.send('Id should be an integer');
  } else {
    pool.query('SELECT * FROM reservation where id = ?', idString, function (error, results) {
      if (error) {
        console.error(`error ${error}`);
      } else {
        processArrayLength(results, response);
      }
    })
  }
}

// This function will be invoked when the endpoint has no params or any query parameters
const reservationsFunctionQuery = function (request, response) {
  pool.query('SELECT * FROM reservation', function (error, results) {
    if (error) {
      console.error(`error ${error}`);
    } else {
      if (isEmpty(request.query)) {
        response.json(results);
      }
    }
  });
};

// This function is for POST operation
const reservationsFunctionPost = function (request, response) {
  //const guestcount = request.body.guestcount;
  //const mealid = request.body.mealid;
  const { guestcount, mealid } = request.body;
  const data = {
    number_of_guests: guestcount,
    meal_id: mealid
  }
  console.log(data);

  if (!guestcount || !mealid) {
    return response.send('Either no of guests or mealid is required');
  }
  pool.query('INSERT INTO reservation SET ?', data, function (error, results) {
    if (error) {
      console.error(`error ${error}`);
    }
    // response.json(results);
    return response.json({ id: results.insertId });
  });
};

// This function is for PUT operation
const reservationsFunctionPut = function (request, response) {
  const idString = request.params.id;
  const id = parseInt(idString);
  const { guestcount, mealid } = request.body;

  if (!guestcount || !mealid) {
    return response.send('Either no of guests or mealid is required');
  } else if (isNaN(id)) {
    response.send('Id should be an integer');
  } else {
    pool.query('UPDATE reservation SET number_of_guests = ?, meal_id = ? WHERE id = ?', [guestcount, mealid, id], function (error, results) {
      if (error) {
        console.error(`error ${error}`);
      } else if (results.length === 0) {
        response.send('No match found');
      }
      reservationsFunctionParams(request, response);
    });
  }
}

// This function is for DELETE operation
const reservationsFunctionDelete = function (request, response) {
  const idString = request.params.id;
  const id = parseInt(idString);
  if (!id) {
    response.send('Id is required to proceed with delete operation');
  }
  else if (isNaN(id)) {
    response.send('Id should be an integer');
  } else {
    pool.query('DELETE FROM reservation  WHERE id = ?', id, function (error, results) {
      if (error) {
        console.error(`error ${error}`);
      } else if (results.affectedRows === 0) {
        response.send('No match found');
      }
      response.send({ Deleted: results.affectedRows > 0 });
    });
  }
}



// Function to check if the array has a match to the parameters in the endpoint
function processArrayLength(array, res) {
  if (array.length === 0) {
    res.send('No match found');
  } else {
    res.json(array);
  }
}

// This function is to check if request.params or request.query object is empty
function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}

router.get('/', reservationsFunctionQuery);
router.get("/:id", reservationsFunctionParams);
router.post('/', reservationsFunctionPost);
router.put("/:id", reservationsFunctionPut);
router.delete("/:id", reservationsFunctionDelete);

module.exports = router;
