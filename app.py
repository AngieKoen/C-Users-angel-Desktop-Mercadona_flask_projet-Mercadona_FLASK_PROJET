
import os
from flask import Flask, render_template # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore

app = Flask(__name__)

if os.getenv('DATABASE_URL'):
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Angyes_db.sqlite.3'

db = SQLAlchemy(app)

class Product(db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)
    image_url = db.Column(db.String(200), nullable=True)

    def __repr__(self):
        return f"Product('{self.name}', '{self.price}')"

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
