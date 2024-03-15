const { HasMany } = require("sequelize");
const Empresa = require("./Empresa");
const Categoria = require("./Categoria");
const Producto = require("./Producto");
const Subcategoria = require("./Subcategoria");
const Descript = require("./Descript");

Empresa.hasMany(Categoria);
Categoria.belongsTo(Empresa);

Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);

Producto.hasMany(Subcategoria);
Subcategoria.belongsTo(Producto);

Subcategoria.hasMany(Descript);
Descript.belongsTo(Subcategoria);
