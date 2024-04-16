from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Enum
from sqlalchemy.orm import relationship

db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    rol = db.Column(db.Enum('Admin', 'Jefe de Compras', 'Cocinero', name="rol"), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User: {self.id} email: {self.email}>'

    def serialize(self):
        return {'id': self.id,
                'name': self.name,
                'email': self.email,
                'rol': self.rol,
                'is_active': self.is_active}


class Centers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(20), nullable=False)
    manager = db.Column(db.String(20), nullable=False)
    phone = db.Column(db.Integer)

    def __repr__(self):
        return f'<Center: {self.id} - {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'name': self.name,
                'address': self.address,
                'manager': self.manager,
                'phone': self.phone}


class Compositions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    cost = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Composition: {self.id} - {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'name': self.name,
                'cost': self.cost}


class Recipes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    meals = db.Column(db.Integer, nullable=False)
    cost_meals = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Recipe: {self.id} - {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'name': self.name,
                'is_active': self.is_active,
                'meals': self.meals,
                'cost_meals': self.cost_meals}


class Suppliers(db.Model):
    idWopr = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.String)
    reference = db.Column(db.String(50))
    categoryId = db.Column(db.String(50))
    subcategoryId = db.Column(db.String(50))
    name = db.Column(db.String, nullable=False)
    nameRegistered = db.Column(db.String(200))
    cif = db.Column(db.String(200))
    address = db.Column(db.String(500))
    addressAdditional = db.Column(db.String(500))
    addressNumber = db.Column(db.String(500))
    addressFloor = db.Column(db.String(500))
    addressLetter = db.Column(db.String(500))
    codePostal = db.Column(db.String(500))
    cityCode = db.Column(db.String(500))
    cityName = db.Column(db.String(500))
    provinceCode = db.Column(db.String(500))
    provinceName = db.Column(db.String(500))
    phone1 = db.Column(db.String(150))
    phone2 = db.Column(db.String(150))
    fax = db.Column(db.String(150))
    mobile = db.Column(db.String(150))
    email = db.Column(db.String(120),)
    languageCode = db.Column(db.String(500))
    active = db.Column(db.Boolean())
    creationDate = db.Column(db.DateTime)
    modificationDate = db.Column(db.DateTime)

    def __repr__(self):
        return f'<Supplier: {self.id} - {self.name}>'

    def serialize(self):
        return {'idWopr': self.idWopr,
                'id': self.id,
                'reference': self.reference,
                'categoryId': self.categoryId,
                'subcategoryId': self.subcategoryId,
                'name': self.name,
                'nameRegistered': self.nameRegistered,
                'CIF': self.cif,
                'address': self.address,
                'addressAdditional': self.addressAdditional,
                'addressNumber': self.addressNumber,
                'addressFloor': self.addressFloor,
                'addressLetter': self.addressLetter,
                'codePostal': self.codePostal,
                'cityCode': self.cityCode,
                'cityName': self.cityName,
                'provinceCode': self.provinceCode,
                'provinceName': self.provinceName,
                'phone1': self.phone1,
                'phone2': self.phone2,
                'fax': self.fax,
                'mobile': self.mobile,
                'email': self.email,
                'languageCode': self.languageCode,
                'active': self.active,
                'creationDate': self.creationDate,
                'modificationDate': self.modificationDate}


class References(db.Model):
    idWopr = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    reference = db.Column(db.Integer, unique=True)
    categoryId = db.Column(db.Integer)
    familyId = db.Column(db.Integer)
    typeId = db.Column(db.Integer)
    subtypeId = db.Column(db.Integer)
    measureUnitId = db.Column(db.Integer)
    measurePriceLastPurchase = db.Column(db.Integer)
    measurePriceAverage = db.Column(db.Integer)
    displayUnitId = db.Column(db.Integer)
    equivalenceBetweeenMeasureAndDisplay = db.Column(db.Integer)
    active = db.Column(db.Boolean())
    creationDate = db.Column(db.DateTime)
    modificationDate = db.Column(db.DateTime)

    def __repr__(self):
        return f'<Reference: {self.id} - {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'idWopr': self.idWopr,
                'name': self.name,
                'categoryId': self.categoryId,
                'familyId': self.familyId,
                'typeId': self.typeId,
                'subtypeId': self.subtypeId,
                'measureUnitId': self.measureUnitId,
                'measurePriceLastPurchase': self.measurePriceLastPurchase,
                'measurePriceAverage': self.measurePriceAverage,
                'displayUnitId': self.displayUnitId,
                'equivalenceBetweeenMeasureAndDisplay': self.equivalenceBetweeenMeasureAndDisplay,
                'active': self.active,
                'creationDate': self.creationDate,
                'modificationDate': self.modificationDate}


class ProductsFormats(db.Model):
    __tablename__ = "products_formats"
    idWopr = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.String, nullable=False)
    productPurchaseId = db.Column(db.String)
    reference = db.Column(db.Integer, db.ForeignKey('references.reference'))
    name = db.Column(db.String)
    storageUnit = db.Column(db.String)
    orderUnit = db.Column(db.String)
    equivalenceBetweenMeasureAndStorage = db.Column(db.Integer)
    equivalenceBetweenStorageAndOrder = db.Column(db.Integer)
    storageBarcode = db.Column(db.String)
    orderBarcode = db.Column(db.String)
    storageWeight = db.Column(db.Integer)
    orderWeight = db.Column(db.Integer)
    conservationState = db.Column(db.Integer)
    measurePriceLastPurchase = db.Column(db.Integer)
    measurePriceAverage = db.Column(db.Integer)
    storagePrice = db.Column(db.Integer)
    storagePriceAverage = db.Column(db.Integer)
    orderPrice = db.Column(db.Integer)
    orderPriceAverage = db.Column(db.Integer)
    creationDate = db.Column(db.DateTime)
    modificationDate = db.Column(db.DateTime)

    def __repr__(self):
        return f'<Formato: {self.id} - {self.name}>'

    def serialize(self):
        return {'id': self.id,
                'idWopr': self.idWopr,
                'productPurchaseId': self.productPurchaseId,
                'reference': self.reference,
                'name': self.name,
                'storageUnit': self.storageUnit,
                'orderUnit': self.orderUnit,
                'equivalenceBetweenMeasureAndStorage': self.equivalenceBetweenMeasureAndStorage,
                'equivalenceBetweenStorageAndOrder': self.equivalenceBetweenStorageAndOrder,
                'storageBarcode': self.storageBarcode,
                'orderBarcode': self.orderBarcode,
                'storageWeight':self.storageWeight,
                'orderWeight': self.orderWeight,
                'conservationState': self.conservationState,
                'measurePriceLastPurchase': self.measurePriceLastPurchase,
                'measurePriceAverage': self.measurePriceAverage,
                'storagePrice': self.storagePrice,
                'storagePriceAverage': self.storagePriceAverage,
                'orderPrice': self.orderPrice,
                'orderPriceAverage': self.orderPriceAverage,
                'creationDate': self.creationDate,
                'modificationDate': self.modificationDate}


class Previsions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    center_id = db.Column(db.Integer, db.ForeignKey('centers.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    center_to = db.relationship('Centers', foreign_keys=[center_id])
    user_to = db.relationship('Users', foreign_keys=[user_id])

    def __repr__(self):
        return f'<Prevision: {self.id} - Center: {self.center_id}>'

    def serialize(self):
        return {'id': self.id,
                'center_id': self.center_id,
                'date': self.date,
                'user_id': self.user_id}


class PrevisionLines(db.Model):
    __tablename__ = "prevision_lines"
    id = db.Column(db.Integer, primary_key=True)
    prevision_id = db.Column(db.Integer, db.ForeignKey('previsions.id')) 
    service = db.Column(db.Enum('Desayuno', 'Almuerzo', 'Cena', name="service"), nullable=False)
    pax_service = db.Column(db.Integer, nullable=False)
    composition_id = db.Column(db.Integer, db.ForeignKey('compositions.id'))
    composition_to = db.relationship('Compositions', foreign_keys=[composition_id]) 
    prevision_to = db.relationship('Previsions', foreign_keys=[prevision_id])

    def __repr__(self):
        return f'<Prevision Line: {self.id} - Prevision: {self.prevision_id} - Service: {self.service}>'

    def serialize(self):
        return {'id': self.id,
                'prevision_id': self.prevision_id,
                'service': self.service,
                'pax_service': self.pax_service,
                'composition_id': self.composition_id}


class DeliveryNotes(db.Model):
    __tablename__ = "delivery_notes"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    sum_costs = db.Column(db.Integer, nullable=False)
    sum_totals = db.Column(db.Integer, nullable=False)
    sum_vat = db.Column(db.Integer, nullable=False)
    status = db.Column(db.Enum('Hoja de Envio', 'Albaran', name="status"), nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    center_id = db.Column(db.Integer, db.ForeignKey('centers.id'))
    center = db.relationship('Centers', foreign_keys=[center_id])
    user = db.relationship('Users', foreign_keys=[user_id])

    def __repr__(self):
        return f'<Delivery Notes: {self.id} - Center: {self.center_id}>'

    def serialize(self):
        return {'id': self.id,
                'date': self.date,
                'center_id': self.center_id,
                'sum_costs': self.sum_costs,
                'sum_totals': self.sum_totals,
                'sum_vat': self.sum_vat,
                'status': self.status,
                'user_id': self.user_id}


class DeliveryNoteLines(db.Model):
    __tablename__ = "delivery_note_lines"
    id = db.Column(db.Integer, primary_key=True)
    qty = db.Column(db.Integer, nullable=False)
    unit_cost = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    vat = db.Column(db.Enum('4', '10', '21', name="vat"), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    delivery_note_id = db.Column(db.Integer, db.ForeignKey('delivery_notes.id'))
    recipe_to = db.relationship('Recipes', foreign_keys=[recipe_id])
    delivery_to = db.relationship('DeliveryNotes', foreign_keys=[delivery_note_id])

    def __repr__(self):
        return f'<Delivery Note Line: {self.id} - Recipe ID: {self.recipe_id} - Deliveri Note ID: {self.delivery_note_id}>'

    def serialize(self):
        return {'id': self.id,
                'recipe_id': self.recipe_id,
                'delivery_note_id': self.delivery_note_id,
                'qty': self.qty,
                'cost': self.cost,
                'total': self.total,
                'vat': self.vat}


class CompositionLines(db.Model):
    __tablename__ = "composition_lines"
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    units_recipe = db.Column(db.Integer, nullable=False)
    cost_unit_line = db.Column(db.Integer, nullable=False)
    composition_id = db.Column(db.Integer, db.ForeignKey('compositions.id'))
    recipe_to = db.relationship('Recipes', foreign_keys=[recipe_id])
    composition_to = db.relationship('Compositions', foreign_keys=[composition_id])

    def __repr__(self):
        return f'<CompositionLine: {self.id} - Recipe ID: {self.recipe_id}>'

    def serialize(self):
        return {'id': self.id,
                'recipe_id': self.recipe_id,
                'units_recipe': self.units_recipe,
                'cost_unit_line': self.cost_unit_line,
                'composition_id': self.composition_id}


class LineRecipes(db.Model):
    __tablename__ = "line_recipes"
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    references_idWopr = db.Column(db.Integer, db.ForeignKey('references.idWopr'))
    qty = db.Column(db.Integer, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Integer, nullable=False)
    units = db.Column(db.Integer, nullable=False)
    cost_unit = db.Column(db.Integer, nullable=False)
    reference_to = db.relationship('References', foreign_keys=[references_idWopr])
    recipe_to = db.relationship('Recipes', foreign_keys=[recipe_id])

    def __repr__(self):
        return f'<Line Recipe: {self.id} - Recipe ID: {self.recipe_id} - Reference ID: {self.references_idWopr}>'

    def serialize(self):
        return {'id': self.id,
                'recipe_id': self.recipe_id,
                'references_idWopr': self.references_idWopr,
                'qty': self.qty,
                'cost': self.cost,
                'total': self.total,
                'units': self.units,
                'cost_unit': self.cost_unit}


class ManufacturingOrders(db.Model):
    __tablename__ = "manufacturing_orders"
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    delivery_date = db.Column(db.DateTime, nullable=False)
    qty = db.Column(db.Integer, nullable=False)
    status = db.Column(db.Enum('Pendiente', 'En Proceso', 'Fabricado', 'Almacenado', 'Enviado', name="status"), nullable=False)
    recipe_to = db.relationship('Recipes', foreign_keys=[recipe_id])

    def __repr__(self):
        return f'<Composition Line: {self.id} - Recipe: {self.recipe_id}>'

    def serialize(self):
        return {'id': self.id,
                'recipe_id': self.recipe_id,
                'delivery_date': self.delivery_date,
                'qty': self.qty,
                'status': self.status}