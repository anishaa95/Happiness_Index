# Dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
import json

#################################################
# Database Setup
#################################################

engine = create_engine(
    "postgres://AnishaaDeSilva:@localhost:5432/HappinessData")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# print(Base.classes)
Happyness = Base.classes.happyness

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


# Home page rendering html template
@app.route("/")
def index():
    data = engine.execute("SELECT * FROM happyness")
    return render_template("index.html", data=data)


# Jsonify data route
@app.route("/api/v1.0/happyness_index")
def happyness_index():
    # Get all data from DB
    data = engine.execute("SELECT * FROM happyness")
    # jsonify data to render template
    return jsonify({'data': data})

if __name__ == "__main__":
    app.run(debug=True)
