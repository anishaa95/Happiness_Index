#Dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


#################################################
# Database Setup
#################################################

engine = create_engine("postgres://AnishaaDeSilva:@localhost:5432/HappinessData")

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


# Home page with available routes
@app.route("/")
def home():
    return(f"Welcome to the Happyness Index API!</br>"
           f"Available Routes:<br/>"
           f"/api/v1.0/happyness_index<br/>"
           )


# 4. Define what to do when a user hits the /about route
@app.route("/api/v1.0/happyness_index")
def happyness_index():
    #Get all data from DB
    data = engine.execute("SELECT * FROM happyness")

    return jsonify({'data': [dict(row) for row in data]})



if __name__ == "__main__":
    app.run(debug=True)
