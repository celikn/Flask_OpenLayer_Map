from flask import Flask
from flask import render_template

app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"

app.jinja_env.globals['config'] = 'config.js'

@app.route('/')
def home():
   return render_template('index.html')



if __name__ == '__main__':
    app.run(debug='true')