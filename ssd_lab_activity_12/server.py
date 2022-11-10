from flask import (Flask, render_template, request, redirect, session)
from flask_sqlalchemy import SQLAlchemy
from flask_login import (login_manager, LoginManager, login_user, 
                            logout_user, login_required, UserMixin)
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY'] = 'secretkey'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
_SEATS = ["A1","A2","A3","B1","B2","B3","C1","C2","C3","D1","D2","D3","E1","E2","E3","F1","F2","F3","G1","G2","G3"]
_BOOKED = {}

class User(UserMixin, db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    username = db.Column(db.String(100), unique=True, nullable=False)  
    name = db.Column(db.String(200))
    password = db.Column(db.String(100), nullable=False)

def main():
    with app.app_context():
        db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/', methods=["GET"])
def hello_world():
    return render_template('signup_page.html')
def err(msg,typ=True):
    if typ:
        return {"errorMessage": msg}
    else:
        return {"result":msg}

@app.route('/user/signup', methods=['GET', 'POST'])
def signup():
    if request.method=='GET':
        return render_template('signup_page.html')
    else:
        email = request.form.get('username')
        name = request.form.get('name')
        password = request.form.get('password')
        user = User.query.filter_by(username=email).first()
        if user:
            return err('Email address already exists')
        new_user = User(username=email, name=name, \
                        password=password)
        db.session.add(new_user)
        db.session.commit()
        return err("Registered successfully",False)

@app.route("/user/signin", methods = ["POST", "GET"])
def do_login():
    if (request.method=="POST"):
        req = request.form
        print(req)
        username = req["username"]
        password = req["password"]
        check_user = User.query.filter_by(username = username).first()
        if check_user is not None:
            if (check_user.password == password):
                login_user(check_user)
                return redirect('/seats/available')
            else:
                return err("Password is incorrect")
        else:
            return err("Username does not exist")
    else:
        return render_template("login_page.html")
            
@app.route('/user/signout')
def logout():
    session.pop('user')
    return redirect('/user/login')
    
@app.route("/seats/available", methods=["POST","GET"])
def avl_seats():
    return err(_SEATS,False)

@app.route("/seats/book", methods=["POST","GET"])
def book_seats():
    req = request.get_json()
    for seat in req["seats"]:
        usr = User.query.filter_by(username = req["customer"]["email"]).first()
        if _SEATS.find(seat) and usr is not None:
            _BOOKED[usr.id] = seat
            _SEATS.remove(seat)
            return err("Booked Successfully")

@app.route("/seats/booked", methods=["POST","GET"])
def booked_seats():
    pass


@app.route("/seats/booking/<bid>", methods=["POST","GET"])
def check_seats():
    pass

@app.route("/seats/cancel", methods=["POST","GET"])
def cancel_seats():
    pass

if __name__ == '__main__':
    main()
    app.run(host="127.0.0.1",port="5050",debug=True)