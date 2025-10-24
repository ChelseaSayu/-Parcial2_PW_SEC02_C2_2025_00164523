class userData {
  constructor(id, isActive, picture, balance, client, gender) {
    this.id = id;
    this.isActive = isActive;
    this.picture = picture;
    this.balance = balance;
    this.client = client;
    this.gender = gender;
  }
}

var user1 = new userData(
  1,
  true,
  "imagen1.jpg",
  1250.75,
  "Marta Martinez",
  "femenino"
);
var user2 = new userData(
  2,
  true,
  "imagen2.jpg",
  850.5,
  "Andres Portillo",
  "masculino"
);
var user3 = new userData(
  3,
  false,
  "imagen3.jpg",
  2100.25,
  "Amanda Mejia",
  "femenino"
);
var user4 = new userData(
  4,
  true,
  "imagen4.jpg",
  175,
  "Romeo Brizuela",
  "masculino"
);
var user5 = new userData(
  5,
  true,
  "imagen5.jpg",
  3200.8,
  "Dayalin Huezo",
  "femenino"
);
var user6 = new userData(
  6,
  true,
  "imagen6.jpg",
  95.3,
  "Eduardo Ramirez",
  "masculino"
);
var user7 = new userData(
  7,
  false,
  "imagen7.jpg",
  450.6,
  "Monica Castillo",
  "femenino"
);

const users = [user1, user2, user3, user4, user5, user6, user7];

const getAllCuentas = (req, res) => {
  try {
    const resultado = {
      count: users.length,
      data: users,
    };
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = (req, res) => {
  try {
    const id = req.params.id;
    const cuenta = users;
    for (let i = 0; i < cuenta.length; i++) {
      if (cuenta[i].id == id) {
        return res.json({
          finded: true,
          account: cuenta[i],
        });
      }
    }
    return res.json({
      finded: false,
      account: null,
    });
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

const getByQuery = (req, res) => {
  try {
    const query = req.query;
    const item = users;
    const group = [];
    for (let i = 0; i < item.length; i++) {
      let match = false;

      //Realiza una busqueda por id
      if (query.id && item[i].id == query.id) {
        match = true;
      }

      //Realiza una busqueda por el cliente
      if (
        query.client &&
        item[i].client.toLowerCase().includes(query.client.toLowerCase())
      ) {
        match = true;
      }

      //Realiza una busqueda por el genero
      if (
        query.gender &&
        item[i].gender.toLowerCase().includes(query.gender.toLowerCase())
      ) {
        match = true;
      }

      if (match) {
        group.push(item[i]);
      }
    }

    if (group.length === 0) {
      res.json({
        finded: false,
        account: null,
      });
    } else if (group.length === 1) {
      res.json({
        finded: true,
        account: group[0],
      });
    } else {
      res.json({
        finded: true,
        data: group,
      });
    }
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

const getByBalance = (req, res) => {
  try {
    let totalBalance = 0;
    let active = false; // busca a los que estan activos

    for (let i = 0; i < users.length; i++) {
            if (users[i].isActive) {
                totalBalance += users[i].balance;
                active = true;
            }
        }
        
        res.json({
            status: active,
            accountBalance: totalBalance
        });
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

module.exports = { getAllCuentas, getById, getByQuery, getByBalance };